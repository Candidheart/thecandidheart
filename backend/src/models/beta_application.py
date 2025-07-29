from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import json

db = SQLAlchemy()

class BetaApplication(db.Model):
    __tablename__ = 'beta_applications'
    
    id = db.Column(db.Integer, primary_key=True)
    
    # Basic Information
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(200), nullable=False, unique=True)
    phone = db.Column(db.String(20), nullable=False)
    timezone = db.Column(db.String(10), nullable=False)
    
    # Healing Journey
    current_situation = db.Column(db.Text, nullable=False)
    healing_goals = db.Column(db.Text, nullable=False)
    previous_therapy = db.Column(db.String(50))
    support_needs = db.Column(db.Text)
    
    # Program Logistics
    zoom_comfort = db.Column(db.String(50), nullable=False)
    text_comfort = db.Column(db.String(50), nullable=False)
    
    # Payment Information
    payment_tier = db.Column(db.String(20), nullable=False)  # 'free', 'donation', 'waitlist'
    donation_amount = db.Column(db.Float, default=0.0)
    
    # Safety & Support
    emergency_contact = db.Column(db.String(200))
    additional_info = db.Column(db.Text)
    
    # Application Status
    status = db.Column(db.String(20), default='pending')  # 'pending', 'accepted', 'waitlist', 'declined'
    application_number = db.Column(db.Integer)  # Sequential number for tracking spots
    
    # Timestamps
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    def __repr__(self):
        return f'<BetaApplication {self.first_name} {self.last_name} - #{self.application_number}>'
    
    def to_dict(self):
        return {
            'id': self.id,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'email': self.email,
            'phone': self.phone,
            'timezone': self.timezone,
            'current_situation': self.current_situation,
            'healing_goals': self.healing_goals,
            'previous_therapy': self.previous_therapy,
            'support_needs': self.support_needs,
            'zoom_comfort': self.zoom_comfort,
            'text_comfort': self.text_comfort,
            'payment_tier': self.payment_tier,
            'donation_amount': self.donation_amount,
            'emergency_contact': self.emergency_contact,
            'additional_info': self.additional_info,
            'status': self.status,
            'application_number': self.application_number,
            'created_at': self.created_at.isoformat() if self.created_at else None,
            'updated_at': self.updated_at.isoformat() if self.updated_at else None
        }
    
    @staticmethod
    def get_current_application_count():
        """Get the current number of applications"""
        return BetaApplication.query.count()
    
    @staticmethod
    def get_free_spots_remaining():
        """Get number of free spots remaining (first 20)"""
        free_applications = BetaApplication.query.filter_by(payment_tier='free').count()
        return max(0, 20 - free_applications)
    
    @staticmethod
    def get_donation_spots_remaining():
        """Get number of donation spots remaining (next 30)"""
        donation_applications = BetaApplication.query.filter_by(payment_tier='donation').count()
        return max(0, 30 - donation_applications)
    
    @staticmethod
    def determine_payment_tier():
        """Determine what payment tier a new applicant would be in"""
        total_count = BetaApplication.get_current_application_count()
        
        if total_count < 20:
            return 'free'
        elif total_count < 50:
            return 'donation'
        else:
            return 'waitlist'

