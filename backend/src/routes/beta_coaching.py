from flask import Blueprint, request, jsonify
from src.models.beta_application import db, BetaApplication
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

beta_bp = Blueprint('beta', __name__)

@beta_bp.route('/beta-coaching/status', methods=['GET'])
def get_beta_status():
    """Get current beta program status"""
    try:
        total_applications = BetaApplication.get_current_application_count()
        free_remaining = BetaApplication.get_free_spots_remaining()
        donation_remaining = BetaApplication.get_donation_spots_remaining()
        current_tier = BetaApplication.determine_payment_tier()
        
        return jsonify({
            'success': True,
            'data': {
                'total_applications': total_applications,
                'free_spots_remaining': free_remaining,
                'donation_spots_remaining': donation_remaining,
                'current_tier': current_tier,
                'spots_remaining': 50 - total_applications
            }
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@beta_bp.route('/beta-coaching/apply', methods=['POST'])
def submit_beta_application():
    """Submit a beta coaching application"""
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = [
            'firstName', 'lastName', 'email', 'phone', 'timezone',
            'currentSituation', 'healingGoals', 'zoomComfort', 'textComfort'
        ]
        
        for field in required_fields:
            if not data.get(field):
                return jsonify({
                    'success': False,
                    'error': f'Missing required field: {field}'
                }), 400
        
        # Check if email already exists
        existing_application = BetaApplication.query.filter_by(email=data['email']).first()
        if existing_application:
            return jsonify({
                'success': False,
                'error': 'An application with this email already exists'
            }), 400
        
        # Determine payment tier and application number
        current_count = BetaApplication.get_current_application_count()
        payment_tier = BetaApplication.determine_payment_tier()
        application_number = current_count + 1
        
        # Create new application
        application = BetaApplication(
            first_name=data['firstName'],
            last_name=data['lastName'],
            email=data['email'],
            phone=data['phone'],
            timezone=data['timezone'],
            current_situation=data['currentSituation'],
            healing_goals=data['healingGoals'],
            previous_therapy=data.get('previousTherapy', ''),
            support_needs=data.get('supportNeeds', ''),
            zoom_comfort=data['zoomComfort'],
            text_comfort=data['textComfort'],
            payment_tier=payment_tier,
            donation_amount=float(data.get('donationAmount', 0)),
            emergency_contact=data.get('emergencyContact', ''),
            additional_info=data.get('additionalInfo', ''),
            application_number=application_number,
            status='pending'
        )
        
        db.session.add(application)
        db.session.commit()
        
        # Send confirmation email (if email settings are configured)
        try:
            send_confirmation_email(application)
        except Exception as email_error:
            print(f"Failed to send confirmation email: {email_error}")
            # Don't fail the application if email fails
        
        return jsonify({
            'success': True,
            'data': {
                'application_id': application.id,
                'application_number': application.application_number,
                'payment_tier': application.payment_tier,
                'message': 'Application submitted successfully!'
            }
        })
        
    except Exception as e:
        db.session.rollback()
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@beta_bp.route('/beta-coaching/applications', methods=['GET'])
def get_applications():
    """Get all beta coaching applications (admin only)"""
    try:
        applications = BetaApplication.query.order_by(BetaApplication.created_at.desc()).all()
        return jsonify({
            'success': True,
            'data': [app.to_dict() for app in applications]
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@beta_bp.route('/beta-coaching/applications/<int:app_id>/status', methods=['PUT'])
def update_application_status(app_id):
    """Update application status (admin only)"""
    try:
        data = request.get_json()
        new_status = data.get('status')
        
        if new_status not in ['pending', 'accepted', 'waitlist', 'declined']:
            return jsonify({
                'success': False,
                'error': 'Invalid status'
            }), 400
        
        application = BetaApplication.query.get_or_404(app_id)
        application.status = new_status
        db.session.commit()
        
        return jsonify({
            'success': True,
            'data': application.to_dict()
        })
        
    except Exception as e:
        db.session.rollback()
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

def send_confirmation_email(application):
    """Send confirmation email to applicant"""
    # Email configuration - you'll need to set these environment variables
    smtp_server = os.getenv('SMTP_SERVER', 'smtp.gmail.com')
    smtp_port = int(os.getenv('SMTP_PORT', '587'))
    sender_email = os.getenv('SENDER_EMAIL')
    sender_password = os.getenv('SENDER_PASSWORD')
    
    if not sender_email or not sender_password:
        raise Exception("Email configuration not set")
    
    # Create message
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = application.email
    msg['Subject'] = "Welcome to Reclaim & Rebuild: The Elevated Model"
    
    # Email body
    if application.payment_tier == 'free':
        tier_message = f"Congratulations! You're participant #{application.application_number} and have secured a FREE spot in our beta program."
    elif application.payment_tier == 'donation':
        tier_message = f"You're participant #{application.application_number} in our pay-what-you-can tier. Your weekly donation of ${application.donation_amount} helps make this work sustainable."
    else:
        tier_message = f"You're on our waitlist as participant #{application.application_number}. I'll be in touch if a spot opens up."
    
    body = f"""
    Dear {application.first_name},

    Thank you for trusting me with your healing story. Your application for Reclaim & Rebuild: The Elevated Model has been received.

    {tier_message}

    What happens next:
    • I'll review your application within 24 hours
    • You'll receive a welcome packet with program details
    • Our first Sunday email goes out this weekend
    • Daily text prompts begin Monday
    • Our first Zoom circle is Thursday at 7PM EST

    Remember: You're not broken. You're in survival. And now, you're choosing to thrive.

    This is your sacred journey of remembering yourself—one brave breath at a time.

    With love and witness,
    Samantha Josette
    The Candid Heart

    ---
    If you have any questions, simply reply to this email or visit thecandidheart.com/contact
    """
    
    msg.attach(MIMEText(body, 'plain'))
    
    # Send email
    server = smtplib.SMTP(smtp_server, smtp_port)
    server.starttls()
    server.login(sender_email, sender_password)
    text = msg.as_string()
    server.sendmail(sender_email, application.email, text)
    server.quit()

@beta_bp.route('/beta-coaching/export', methods=['GET'])
def export_applications():
    """Export applications as CSV (admin only)"""
    try:
        import csv
        from io import StringIO
        
        applications = BetaApplication.query.order_by(BetaApplication.created_at.desc()).all()
        
        output = StringIO()
        writer = csv.writer(output)
        
        # Write header
        writer.writerow([
            'Application #', 'Name', 'Email', 'Phone', 'Timezone',
            'Payment Tier', 'Donation Amount', 'Status', 'Zoom Comfort',
            'Text Comfort', 'Previous Therapy', 'Emergency Contact',
            'Applied Date'
        ])
        
        # Write data
        for app in applications:
            writer.writerow([
                app.application_number,
                f"{app.first_name} {app.last_name}",
                app.email,
                app.phone,
                app.timezone,
                app.payment_tier,
                app.donation_amount,
                app.status,
                app.zoom_comfort,
                app.text_comfort,
                app.previous_therapy,
                app.emergency_contact,
                app.created_at.strftime('%Y-%m-%d %H:%M:%S') if app.created_at else ''
            ])
        
        output.seek(0)
        
        from flask import Response
        return Response(
            output.getvalue(),
            mimetype='text/csv',
            headers={"Content-disposition": "attachment; filename=beta_applications.csv"}
        )
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

