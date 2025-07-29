import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';
import { Calendar, Clock, Heart, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

const BookCall = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    currentChallenge: '',
    timezone: 'EST'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    {
      id: 'clarity-starter',
      name: 'Clarity Session - Starter',
      duration: '60 minutes',
      price: '$150',
      description: '60-minute strategy call + audit of current site or messaging + recorded call & action recap'
    },
    {
      id: 'clarity-signature',
      name: 'Clarity Session - Signature',
      duration: '90 minutes',
      price: '$275',
      description: 'Everything in Starter + full brand tone/voice worksheet + custom content prompts or automation map'
    },
    {
      id: 'consultation',
      name: 'General Consultation',
      duration: '30 minutes',
      price: 'Free',
      description: 'Explore how we might work together and see if we\'re aligned'
    }
  ];

  // Generate available dates (next 30 days, excluding weekends)
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          value: date.toISOString().split('T')[0],
          label: date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'long', 
            day: 'numeric' 
          })
        });
      }
    }
    
    return dates.slice(0, 14); // Show next 14 business days
  };

  const availableTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create Google Calendar event URL
    const service = services.find(s => s.id === selectedService);
    const eventDate = new Date(`${selectedDate} ${selectedTime}`);
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(service.name + ' with ' + formData.name)}&dates=${eventDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${new Date(eventDate.getTime() + (service.duration === '90 minutes' ? 90 : service.duration === '60 minutes' ? 60 : 30) * 60000).toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=${encodeURIComponent(`${service.description}\n\nClient: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nBusiness: ${formData.businessName}\n\nCurrent Challenge:\n${formData.currentChallenge}`)}&location=${encodeURIComponent('Zoom (link to be sent)')}&sf=true&output=xml`;
    
    // Open Google Calendar in new tab
    window.open(googleCalendarUrl, '_blank');
    
    // You would also send this data to your backend here
    console.log('Booking submitted:', {
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      ...formData
    });
    
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Card className="border-2 border-primary/20 bg-[#C8A25C]">
            <CardContent className="p-12 text-center">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-6" />
              <h1 className="font-serif text-3xl font-semibold text-foreground mb-6">
                Your call is being scheduled!
              </h1>
              <p className="font-sans text-lg text-muted-foreground mb-6 leading-relaxed">
                I've opened Google Calendar for you to add this event. Please save it to your calendar, 
                and I'll send you a confirmation email with the Zoom link within 24 hours.
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  What happens next:
                </h3>
                <ul className="text-left space-y-2 text-sm text-muted-foreground">
                  <li>• You'll receive a confirmation email within 24 hours</li>
                  <li>• Zoom link and prep materials will be included</li>
                  <li>• Calendar reminder will be sent 24 hours before</li>
                  <li>• Feel free to email me with any questions</li>
                </ul>
              </div>
              <p className="font-serif text-foreground italic">
                "Thank you for trusting me with your time and your vision."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Calendar className="h-6 w-6 text-primary" />
            <Sparkles className="h-5 w-5 text-accent" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Book Your Call
          </h1>
          <p className="font-sans text-xl text-muted-foreground mb-4 leading-relaxed max-w-2xl mx-auto">
            Let's explore how we can work together. Choose your session type and 
            find a time that works for both of us.
          </p>
          <p className="font-serif text-lg text-foreground italic">
            "Every conversation begins with curiosity."
          </p>
        </div>

        {/* Booking Form */}
        <Card className="border-2 border-primary/20 bg-[#C8A25C]">
          <CardContent className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Service Selection */}
              <div className="space-y-6">
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Choose Your Session
                </h2>
                
                <RadioGroup value={selectedService} onValueChange={setSelectedService}>
                  <div className="space-y-4">
                    {services.map((service) => (
                      <div key={service.id} className="relative">
                        <div className="flex items-center space-x-3">
                          <RadioGroupItem 
                            value={service.id} 
                            id={service.id}
                            className="border-primary text-primary"
                          />
                          <Label 
                            htmlFor={service.id} 
                            className="flex-1 cursor-pointer"
                          >
                            <Card className={`border transition-all bg-[#C8A25C] ${
                              selectedService === service.id 
                                ? 'border-primary bg-primary/5' 
                                : 'border-border hover:border-primary/50'
                            }`}>
                              <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                  <h3 className="font-serif text-lg font-semibold text-foreground">
                                    {service.name}
                                  </h3>
                                  <div className="text-right">
                                    <div className="font-serif text-xl font-bold text-primary">
                                      {service.price}
                                    </div>
                                    <div className="font-sans text-sm text-muted-foreground">
                                      {service.duration}
                                    </div>
                                  </div>
                                </div>
                                <p className="font-sans text-sm text-muted-foreground">
                                  {service.description}
                                </p>
                              </CardContent>
                            </Card>
                          </Label>
                        </div>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              {/* Date & Time Selection */}
              {selectedService && (
                <div className="space-y-6">
                  <h2 className="font-serif text-2xl font-semibold text-foreground">
                    Pick Your Date & Time
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Date Selection */}
                    <div>
                      <label className="block font-sans text-sm font-medium text-foreground mb-3">
                        Available Dates
                      </label>
                      <RadioGroup value={selectedDate} onValueChange={setSelectedDate}>
                        <div className="space-y-2 max-h-64 overflow-y-auto">
                          {generateAvailableDates().map((date) => (
                            <div key={date.value} className="flex items-center space-x-3">
                              <RadioGroupItem 
                                value={date.value} 
                                id={date.value}
                                className="border-primary text-primary"
                              />
                              <Label 
                                htmlFor={date.value}
                                className="font-sans text-sm text-foreground cursor-pointer"
                              >
                                {date.label}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Time Selection */}
                    <div>
                      <label className="block font-sans text-sm font-medium text-foreground mb-3">
                        Available Times (EST)
                      </label>
                      <RadioGroup value={selectedTime} onValueChange={setSelectedTime}>
                        <div className="space-y-2">
                          {availableTimes.map((time) => (
                            <div key={time} className="flex items-center space-x-3">
                              <RadioGroupItem 
                                value={time} 
                                id={time}
                                className="border-primary text-primary"
                              />
                              <Label 
                                htmlFor={time}
                                className="font-sans text-sm text-foreground cursor-pointer flex items-center"
                              >
                                <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                                {time}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Information */}
              {selectedDate && selectedTime && (
                <div className="space-y-6">
                  <h2 className="font-serif text-2xl font-semibold text-foreground">
                    Your Information
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-sans text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="How you'd like to be addressed"
                        className="border-primary/30 focus:border-primary"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block font-sans text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="your@email.com"
                        className="border-primary/30 focus:border-primary"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block font-sans text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="(555) 123-4567"
                        className="border-primary/30 focus:border-primary"
                      />
                    </div>
                    
                    <div>
                      <label className="block font-sans text-sm font-medium text-foreground mb-2">
                        Business/Brand Name
                      </label>
                      <Input
                        value={formData.businessName}
                        onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                        placeholder="If applicable"
                        className="border-primary/30 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-sm font-medium text-foreground mb-2">
                      What's your current challenge or goal?
                    </label>
                    <p className="font-sans text-xs text-muted-foreground mb-3">
                      Help me prepare for our conversation
                    </p>
                    <Textarea
                      value={formData.currentChallenge}
                      onChange={(e) => setFormData(prev => ({ ...prev, currentChallenge: e.target.value }))}
                      placeholder="Share what's on your mind..."
                      rows={4}
                      className="border-primary/30 focus:border-primary resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Submit */}
              {formData.name && formData.email && (
                <div className="pt-6 text-center">
                  <Button 
                    type="submit"
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-lg px-12 py-3"
                  >
                    Schedule My Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <p className="font-sans text-sm text-muted-foreground mt-4">
                    This will open Google Calendar to save the event. You'll receive confirmation within 24 hours.
                  </p>
                </div>
              )}
            </form>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <Card className="border border-primary/20 bg-[#C8A25C]">
            <CardContent className="p-8">
              <Heart className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                What to Expect
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <h4 className="font-sans font-semibold text-foreground mb-2">Before Our Call</h4>
                  <p className="text-muted-foreground">You'll receive prep materials and the Zoom link 24 hours in advance.</p>
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground mb-2">During Our Call</h4>
                  <p className="text-muted-foreground">We'll dive deep into your challenges and explore aligned solutions together.</p>
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-foreground mb-2">After Our Call</h4>
                  <p className="text-muted-foreground">You'll receive a recording and action recap within 48 hours.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BookCall;

