from flask import Blueprint, request, jsonify
from src.models.forms import db, ContactForm, CandidHeartInterest, StartHereForm, DeepDiveForm, BookCallForm
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from datetime import datetime

forms_bp = Blueprint('forms', __name__)

def send_email_notification(subject, message, recipient_email=None):
    """Send email notification for form submissions"""
    try:
        # You can configure these in environment variables
        smtp_server = os.getenv('SMTP_SERVER', 'smtp.gmail.com')
        smtp_port = int(os.getenv('SMTP_PORT', '587'))
        smtp_username = os.getenv('SMTP_USERNAME', 'samantha@thecandidheart.com')
        smtp_password = os.getenv('SMTP_PASSWORD', '')
        
        if not smtp_password:
            print("SMTP password not configured - skipping email notification")
            return False
            
        msg = MIMEMultipart()
        msg['From'] = smtp_username
        msg['To'] = recipient_email or smtp_username
        msg['Subject'] = subject
        
        msg.attach(MIMEText(message, 'plain'))
        
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(smtp_username, smtp_password)
        server.send_message(msg)
        server.quit()
        
        return True
    except Exception as e:
        print(f"Failed to send email notification: {e}")
        return False

@forms_bp.route('/contact', methods=['POST'])
def submit_contact():
    """Submit contact form"""
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'email', 'message']
        for field in required_fields:
            if not data.get(field):
                return jsonify({
                    'success': False,
                    'error': f'Missing required field: {field}'
                }), 400
        
        # Create contact form submission
        contact = ContactForm(
            name=data['name'],
            email=data['email'],
            message=data['message'],
            inquiry_type=data.get('inquiryType', 'general'),
            submitted_at=datetime.utcnow()
        )
        
        db.session.add(contact)
        db.session.commit()
        
        # Send email notification
        subject = f"New Contact Form Submission from {data['name']}"
        message = f"""
New contact form submission received:

Name: {data['name']}
Email: {data['email']}
Inquiry Type: {data.get('inquiryType', 'general')}
Message: {data['message']}

Submitted at: {datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')}
        """
        
        send_email_notification(subject, message)
        
        return jsonify({
            'success': True,
            'message': 'Thank you for your message. I\'ll get back to you within 24 hours.'
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@forms_bp.route('/candid-heart-interest', methods=['POST'])
def submit_candid_heart_interest():
    """Submit Candid Heart Project interest form"""
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'organization', 'town', 'contact', 'careTypes', 'frequency', 'updates']
        for field in required_fields:
            if not data.get(field):
                return jsonify({
                    'success': False,
                    'error': f'Missing required field: {field}'
                }), 400
        
        # Create interest submission
        interest = CandidHeartInterest(
            name=data['name'],
            organization=data['organization'],
            town=data['town'],
            contact=data['contact'],
            care_types=', '.join(data['careTypes']),
            custom_care=data.get('customCare', ''),
            frequency=data['frequency'],
            updates=data['updates'],
            submitted_at=datetime.utcnow()
        )
        
        db.session.add(interest)
        db.session.commit()
        
        # Send email notification
        subject = f"New Candid Heart Project Interest from {data['name']}"
        message = f"""
New Candid Heart Project interest submission:

Name: {data['name']}
Organization: {data['organization']}
Town: {data['town']}
Contact: {data['contact']}
Care Types: {', '.join(data['careTypes'])}
Custom Care: {data.get('customCare', 'N/A')}
Frequency: {data['frequency']}
Updates: {data['updates']}

Submitted at: {datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')}
        """
        
        send_email_notification(subject, message)
        
        return jsonify({
            'success': True,
            'message': 'Thank you for your interest in The Candid Heart Project!'
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@forms_bp.route('/start-here', methods=['POST'])
def submit_start_here():
    """Submit Start Here form"""
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'email', 'currentSituation', 'goals', 'timeline']
        for field in required_fields:
            if not data.get(field):
                return jsonify({
                    'success': False,
                    'error': f'Missing required field: {field}'
                }), 400
        
        # Create start here submission
        start_here = StartHereForm(
            name=data['name'],
            email=data['email'],
            current_situation=data['currentSituation'],
            goals=data['goals'],
            timeline=data['timeline'],
            budget=data.get('budget', ''),
            additional_info=data.get('additionalInfo', ''),
            submitted_at=datetime.utcnow()
        )
        
        db.session.add(start_here)
        db.session.commit()
        
        # Send email notification
        subject = f"New Start Here Form from {data['name']}"
        message = f"""
New Start Here form submission:

Name: {data['name']}
Email: {data['email']}
Current Situation: {data['currentSituation']}
Goals: {data['goals']}
Timeline: {data['timeline']}
Budget: {data.get('budget', 'Not specified')}
Additional Info: {data.get('additionalInfo', 'None')}

Submitted at: {datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')}
        """
        
        send_email_notification(subject, message)
        
        return jsonify({
            'success': True,
            'message': 'Thank you for sharing your story. I\'ll review your reflection and be in touch within 2-3 business days.'
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@forms_bp.route('/deep-dive', methods=['POST'])
def submit_deep_dive():
    """Submit Deep Dive form"""
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'email', 'businessName', 'currentChallenges', 'goals', 'timeline']
        for field in required_fields:
            if not data.get(field):
                return jsonify({
                    'success': False,
                    'error': f'Missing required field: {field}'
                }), 400
        
        # Create deep dive submission
        deep_dive = DeepDiveForm(
            name=data['name'],
            email=data['email'],
            business_name=data['businessName'],
            current_challenges=data['currentChallenges'],
            goals=data['goals'],
            timeline=data['timeline'],
            budget=data.get('budget', ''),
            additional_info=data.get('additionalInfo', ''),
            submitted_at=datetime.utcnow()
        )
        
        db.session.add(deep_dive)
        db.session.commit()
        
        # Send email notification
        subject = f"New Deep Dive Form from {data['name']}"
        message = f"""
New Deep Dive form submission:

Name: {data['name']}
Email: {data['email']}
Business Name: {data['businessName']}
Current Challenges: {data['currentChallenges']}
Goals: {data['goals']}
Timeline: {data['timeline']}
Budget: {data.get('budget', 'Not specified')}
Additional Info: {data.get('additionalInfo', 'None')}

Submitted at: {datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')}
        """
        
        send_email_notification(subject, message)
        
        return jsonify({
            'success': True,
            'message': 'Thank you for your detailed response. I\'ll review your answers and be in touch soon with a proposal that holds space for your unique needs.'
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@forms_bp.route('/book-call', methods=['POST'])
def submit_book_call():
    """Submit Book Call form"""
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['selectedService', 'selectedDate', 'selectedTime', 'name', 'email']
        for field in required_fields:
            if not data.get(field):
                return jsonify({
                    'success': False,
                    'error': f'Missing required field: {field}'
                }), 400
        
        # Create book call submission
        book_call = BookCallForm(
            selected_service=data['selectedService'],
            selected_date=data['selectedDate'],
            selected_time=data['selectedTime'],
            name=data['name'],
            email=data['email'],
            phone=data.get('phone', ''),
            business_name=data.get('businessName', ''),
            current_challenge=data.get('currentChallenge', ''),
            timezone=data.get('timezone', 'EST'),
            submitted_at=datetime.utcnow()
        )
        
        db.session.add(book_call)
        db.session.commit()
        
        # Send email notification
        subject = f"New Call Booking from {data['name']}"
        message = f"""
New call booking submission:

Name: {data['name']}
Email: {data['email']}
Phone: {data.get('phone', 'Not provided')}
Service: {data['selectedService']}
Date: {data['selectedDate']}
Time: {data['selectedTime']}
Business Name: {data.get('businessName', 'Not provided')}
Current Challenge: {data.get('currentChallenge', 'Not provided')}
Timezone: {data.get('timezone', 'EST')}

Submitted at: {datetime.utcnow().strftime('%Y-%m-%d %H:%M:%S')}
        """
        
        send_email_notification(subject, message)
        
        return jsonify({
            'success': True,
            'message': 'Your call has been scheduled! I\'ve opened Google Calendar for you to add this event. You\'ll receive a confirmation email with the Zoom link within 24 hours.'
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500 