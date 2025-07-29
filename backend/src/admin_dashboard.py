"""
Simple admin dashboard for managing Beta Coaching applications
Run this script to view and manage applications from the command line
"""

import os
import sys
sys.path.insert(0, os.path.dirname(os.path.dirname(__file__)))

from src.models.beta_application import db, BetaApplication
from flask import Flask
import sqlite3

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(os.path.dirname(__file__), 'database', 'app.db')}"
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
    return app

def display_applications():
    """Display all applications in a formatted table"""
    app = create_app()
    with app.app_context():
        applications = BetaApplication.query.order_by(BetaApplication.created_at.desc()).all()
        
        if not applications:
            print("No applications found.")
            return
        
        print("\n" + "="*120)
        print("BETA COACHING APPLICATIONS")
        print("="*120)
        
        for app in applications:
            print(f"\n#{app.application_number} - {app.first_name} {app.last_name}")
            print(f"Email: {app.email}")
            print(f"Phone: {app.phone}")
            print(f"Timezone: {app.timezone}")
            print(f"Payment Tier: {app.payment_tier.upper()}")
            if app.donation_amount > 0:
                print(f"Donation Amount: ${app.donation_amount}/week")
            print(f"Status: {app.status.upper()}")
            print(f"Applied: {app.created_at.strftime('%Y-%m-%d %H:%M:%S') if app.created_at else 'Unknown'}")
            print(f"Zoom Comfort: {app.zoom_comfort}")
            print(f"Text Comfort: {app.text_comfort}")
            
            if app.current_situation:
                print(f"Current Situation: {app.current_situation[:100]}...")
            
            if app.healing_goals:
                print(f"Healing Goals: {app.healing_goals[:100]}...")
            
            if app.emergency_contact:
                print(f"Emergency Contact: {app.emergency_contact}")
            
            print("-" * 80)

def display_stats():
    """Display program statistics"""
    app = create_app()
    with app.app_context():
        total = BetaApplication.query.count()
        free_spots = BetaApplication.query.filter_by(payment_tier='free').count()
        donation_spots = BetaApplication.query.filter_by(payment_tier='donation').count()
        waitlist = BetaApplication.query.filter_by(payment_tier='waitlist').count()
        
        pending = BetaApplication.query.filter_by(status='pending').count()
        accepted = BetaApplication.query.filter_by(status='accepted').count()
        declined = BetaApplication.query.filter_by(status='declined').count()
        
        print("\n" + "="*60)
        print("BETA PROGRAM STATISTICS")
        print("="*60)
        print(f"Total Applications: {total}")
        print(f"Free Spots (1-20): {free_spots}")
        print(f"Donation Spots (21-50): {donation_spots}")
        print(f"Waitlist: {waitlist}")
        print()
        print(f"Pending Review: {pending}")
        print(f"Accepted: {accepted}")
        print(f"Declined: {declined}")
        print()
        print(f"Free Spots Remaining: {max(0, 20 - free_spots)}")
        print(f"Donation Spots Remaining: {max(0, 30 - donation_spots)}")
        print(f"Total Spots Remaining: {max(0, 50 - total)}")

def update_application_status():
    """Interactive function to update application status"""
    app = create_app()
    with app.app_context():
        applications = BetaApplication.query.filter_by(status='pending').order_by(BetaApplication.created_at.desc()).all()
        
        if not applications:
            print("No pending applications to review.")
            return
        
        print("\nPENDING APPLICATIONS:")
        for i, app in enumerate(applications, 1):
            print(f"{i}. #{app.application_number} - {app.first_name} {app.last_name} ({app.email})")
        
        try:
            choice = int(input("\nSelect application number to update (0 to cancel): "))
            if choice == 0:
                return
            
            if 1 <= choice <= len(applications):
                selected_app = applications[choice - 1]
                
                print(f"\nSelected: {selected_app.first_name} {selected_app.last_name}")
                print(f"Current Status: {selected_app.status}")
                print("\nStatus Options:")
                print("1. Accept")
                print("2. Decline") 
                print("3. Move to Waitlist")
                print("4. Cancel")
                
                status_choice = int(input("Choose new status: "))
                
                status_map = {
                    1: 'accepted',
                    2: 'declined',
                    3: 'waitlist'
                }
                
                if status_choice in status_map:
                    selected_app.status = status_map[status_choice]
                    db.session.commit()
                    print(f"✅ Updated {selected_app.first_name} {selected_app.last_name} to {status_map[status_choice]}")
                else:
                    print("Cancelled.")
            else:
                print("Invalid selection.")
                
        except (ValueError, IndexError):
            print("Invalid input.")

def export_to_csv():
    """Export applications to CSV file"""
    app = create_app()
    with app.app_context():
        applications = BetaApplication.query.order_by(BetaApplication.created_at.desc()).all()
        
        if not applications:
            print("No applications to export.")
            return
        
        import csv
        filename = f"beta_applications_{applications[0].created_at.strftime('%Y%m%d')}.csv"
        
        with open(filename, 'w', newline='', encoding='utf-8') as csvfile:
            writer = csv.writer(csvfile)
            
            # Header
            writer.writerow([
                'Application #', 'Name', 'Email', 'Phone', 'Timezone',
                'Payment Tier', 'Donation Amount', 'Status', 'Zoom Comfort',
                'Text Comfort', 'Previous Therapy', 'Current Situation',
                'Healing Goals', 'Support Needs', 'Emergency Contact',
                'Additional Info', 'Applied Date'
            ])
            
            # Data
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
                    app.current_situation,
                    app.healing_goals,
                    app.support_needs,
                    app.emergency_contact,
                    app.additional_info,
                    app.created_at.strftime('%Y-%m-%d %H:%M:%S') if app.created_at else ''
                ])
        
        print(f"✅ Exported {len(applications)} applications to {filename}")

def main():
    """Main admin dashboard menu"""
    while True:
        print("\n" + "="*60)
        print("BETA COACHING ADMIN DASHBOARD")
        print("="*60)
        print("1. View All Applications")
        print("2. View Program Statistics")
        print("3. Update Application Status")
        print("4. Export to CSV")
        print("5. Exit")
        
        try:
            choice = int(input("\nSelect option: "))
            
            if choice == 1:
                display_applications()
            elif choice == 2:
                display_stats()
            elif choice == 3:
                update_application_status()
            elif choice == 4:
                export_to_csv()
            elif choice == 5:
                print("Goodbye!")
                break
            else:
                print("Invalid option. Please try again.")
                
        except ValueError:
            print("Please enter a valid number.")
        except KeyboardInterrupt:
            print("\nGoodbye!")
            break

if __name__ == "__main__":
    main()

