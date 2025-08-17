from src.models.user import db
from datetime import datetime

class ContactForm(db.Model):
    __tablename__ = 'contact_forms'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    message = db.Column(db.Text, nullable=False)
    inquiry_type = db.Column(db.String(50), default='general')
    submitted_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'message': self.message,
            'inquiry_type': self.inquiry_type,
            'submitted_at': self.submitted_at.isoformat() if self.submitted_at else None
        }

class CandidHeartInterest(db.Model):
    __tablename__ = 'candid_heart_interests'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    organization = db.Column(db.String(200))
    town = db.Column(db.String(100), nullable=False)
    contact = db.Column(db.String(120), nullable=False)
    care_types = db.Column(db.Text, nullable=False)
    custom_care = db.Column(db.Text)
    frequency = db.Column(db.String(50), nullable=False)
    updates = db.Column(db.String(10), nullable=False)
    submitted_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'organization': self.organization,
            'town': self.town,
            'contact': self.contact,
            'care_types': self.care_types,
            'custom_care': self.custom_care,
            'frequency': self.frequency,
            'updates': self.updates,
            'submitted_at': self.submitted_at.isoformat() if self.submitted_at else None
        }

class StartHereForm(db.Model):
    __tablename__ = 'start_here_forms'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    current_situation = db.Column(db.Text, nullable=False)
    goals = db.Column(db.Text, nullable=False)
    timeline = db.Column(db.String(100), nullable=False)
    budget = db.Column(db.String(100))
    additional_info = db.Column(db.Text)
    submitted_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'current_situation': self.current_situation,
            'goals': self.goals,
            'timeline': self.timeline,
            'budget': self.budget,
            'additional_info': self.additional_info,
            'submitted_at': self.submitted_at.isoformat() if self.submitted_at else None
        }

class DeepDiveForm(db.Model):
    __tablename__ = 'deep_dive_forms'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    business_name = db.Column(db.String(200), nullable=False)
    current_challenges = db.Column(db.Text, nullable=False)
    goals = db.Column(db.Text, nullable=False)
    timeline = db.Column(db.String(100), nullable=False)
    budget = db.Column(db.String(100))
    additional_info = db.Column(db.Text)
    submitted_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'business_name': self.business_name,
            'current_challenges': self.current_challenges,
            'goals': self.goals,
            'timeline': self.timeline,
            'budget': self.budget,
            'additional_info': self.additional_info,
            'submitted_at': self.submitted_at.isoformat() if self.submitted_at else None
        }

class BookCallForm(db.Model):
    __tablename__ = 'book_call_forms'
    
    id = db.Column(db.Integer, primary_key=True)
    selected_service = db.Column(db.String(100), nullable=False)
    selected_date = db.Column(db.String(20), nullable=False)
    selected_time = db.Column(db.String(20), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), nullable=False)
    phone = db.Column(db.String(20))
    business_name = db.Column(db.String(200))
    current_challenge = db.Column(db.Text)
    timezone = db.Column(db.String(10), default='EST')
    submitted_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    def to_dict(self):
        return {
            'id': self.id,
            'selected_service': self.selected_service,
            'selected_date': self.selected_date,
            'selected_time': self.selected_time,
            'name': self.name,
            'email': self.email,
            'phone': self.phone,
            'business_name': self.business_name,
            'current_challenge': self.current_challenge,
            'timezone': self.timezone,
            'submitted_at': self.submitted_at.isoformat() if self.submitted_at else None
        } 