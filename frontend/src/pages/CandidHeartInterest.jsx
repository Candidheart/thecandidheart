import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Checkbox } from '../components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';
import { Heart, Users, Send, CheckCircle } from 'lucide-react';

const CandidHeartInterest = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    town: '',
    contact: '',
    careTypes: [],
    customCare: '',
    frequency: '',
    updates: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const careOptions = [
    { id: 'coffee', label: 'Coffee / drink' },
    { id: 'meal', label: 'Meal' },
    { id: 'haircut', label: 'Haircut or self-care service' },
    { id: 'ride', label: 'Ride' },
    { id: 'childcare', label: 'Childcare support' },
    { id: 'emotional', label: 'Emotional support / Listening' },
    { id: 'art', label: 'Art / creative kits' },
    { id: 'other', label: 'Something else' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCareTypeChange = (careId, checked) => {
    setFormData(prev => ({
      ...prev,
      careTypes: checked 
        ? [...prev.careTypes, careId]
        : prev.careTypes.filter(id => id !== careId)
    }));
  };

  const handleFrequencyChange = (value) => {
    setFormData(prev => ({
      ...prev,
      frequency: value
    }));
  };

  const handleUpdatesChange = (value) => {
    setFormData(prev => ({
      ...prev,
      updates: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // You would integrate with your backend or email service here
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        <Card className="max-w-2xl mx-4 border-2 border-primary/20">
          <CardContent className="p-12 text-center">
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="font-serif text-3xl font-semibold text-foreground mb-6">
              Thank You
            </h1>
            <p className="font-sans text-lg text-muted-foreground mb-6 leading-relaxed">
              Thank you for being part of something tender, brave, and real.
            </p>
            <p className="font-serif text-xl text-foreground italic leading-relaxed">
              Your care is a thread in someone's healing story.
            </p>
            <div className="mt-8">
              <Button 
                asChild 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href="/candid-heart-project">
                  Back to Project Page
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Heart className="h-8 w-8 text-primary" />
            <Users className="h-6 w-6 text-accent" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Join The Candid Heart Project
          </h1>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every act of care, no matter how small, creates ripples of healing in our community. 
            Thank you for wanting to be part of this movement.
          </p>
        </div>

        {/* Form */}
        <Card className="max-w-3xl mx-auto border-2 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="font-serif text-2xl text-foreground">
              Tell Us How You'd Like to Help
            </CardTitle>
            <p className="font-sans text-muted-foreground">
              This form is personal, low-pressure, and affirming. Share what feels right for you.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Basic Information */}
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="font-sans text-sm font-medium text-foreground mb-2 block">
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="What should we call you?"
                      className="border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="organization" className="font-sans text-sm font-medium text-foreground mb-2 block">
                      Organization (if applicable)
                    </Label>
                    <Input
                      id="organization"
                      name="organization"
                      type="text"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="Business, church, group, etc."
                      className="border-primary/30 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="town" className="font-sans text-sm font-medium text-foreground mb-2 block">
                      Town or Village *
                    </Label>
                    <Input
                      id="town"
                      name="town"
                      type="text"
                      required
                      value={formData.town}
                      onChange={handleInputChange}
                      placeholder="Bowling Green, Custar, etc."
                      className="border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact" className="font-sans text-sm font-medium text-foreground mb-2 block">
                      Email or Phone *
                    </Label>
                    <Input
                      id="contact"
                      name="contact"
                      type="text"
                      required
                      value={formData.contact}
                      onChange={handleInputChange}
                      placeholder="Best way to reach you"
                      className="border-primary/30 focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Care Types */}
              <div className="space-y-4">
                <Label className="font-sans text-sm font-medium text-foreground block">
                  What type of care can you offer? *
                </Label>
                <p className="font-sans text-xs text-muted-foreground italic">
                  Check all that apply. Every offering matters, no matter how small.
                </p>
                
                <div className="grid md:grid-cols-2 gap-3">
                  {careOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-3">
                      <Checkbox
                        id={option.id}
                        checked={formData.careTypes.includes(option.id)}
                        onCheckedChange={(checked) => handleCareTypeChange(option.id, checked)}
                        className="border-primary/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                      />
                      <Label 
                        htmlFor={option.id} 
                        className="font-sans text-sm text-foreground cursor-pointer"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>

                {formData.careTypes.includes('other') && (
                  <div className="mt-4">
                    <Label htmlFor="customCare" className="font-sans text-sm font-medium text-foreground mb-2 block">
                      Tell us about your unique offering:
                    </Label>
                    <Textarea
                      id="customCare"
                      name="customCare"
                      value={formData.customCare}
                      onChange={handleInputChange}
                      placeholder="What special way would you like to care for families in our community?"
                      rows={3}
                      className="border-primary/30 focus:border-primary resize-none"
                    />
                  </div>
                )}
              </div>

              {/* Frequency */}
              <div className="space-y-4">
                <Label className="font-sans text-sm font-medium text-foreground block">
                  How often are you available to offer this? *
                </Label>
                <p className="font-sans text-xs text-muted-foreground italic">
                  Choose what feels sustainable for you. There's no wrong answer.
                </p>
                
                <RadioGroup 
                  value={formData.frequency} 
                  onValueChange={handleFrequencyChange}
                  className="space-y-3"
                >
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem 
                      value="once-month" 
                      id="once-month"
                      className="border-primary/30 text-primary"
                    />
                    <Label htmlFor="once-month" className="font-sans text-sm text-foreground cursor-pointer">
                      Once a month
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem 
                      value="twice-month" 
                      id="twice-month"
                      className="border-primary/30 text-primary"
                    />
                    <Label htmlFor="twice-month" className="font-sans text-sm text-foreground cursor-pointer">
                      Twice a month
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem 
                      value="weekly" 
                      id="weekly"
                      className="border-primary/30 text-primary"
                    />
                    <Label htmlFor="weekly" className="font-sans text-sm text-foreground cursor-pointer">
                      Weekly
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem 
                      value="one-time" 
                      id="one-time"
                      className="border-primary/30 text-primary"
                    />
                    <Label htmlFor="one-time" className="font-sans text-sm text-foreground cursor-pointer">
                      One-time only
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Updates */}
              <div className="space-y-4">
                <Label className="font-sans text-sm font-medium text-foreground block">
                  Would you like to receive occasional updates or volunteer requests? *
                </Label>
                <p className="font-sans text-xs text-muted-foreground italic">
                  We'll only reach out when there's a genuine need or to share impact stories.
                </p>
                
                <RadioGroup 
                  value={formData.updates} 
                  onValueChange={handleUpdatesChange}
                  className="flex space-x-6"
                >
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem 
                      value="yes" 
                      id="updates-yes"
                      className="border-primary/30 text-primary"
                    />
                    <Label htmlFor="updates-yes" className="font-sans text-sm text-foreground cursor-pointer">
                      Yes, keep me connected
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem 
                      value="no" 
                      id="updates-no"
                      className="border-primary/30 text-primary"
                    />
                    <Label htmlFor="updates-no" className="font-sans text-sm text-foreground cursor-pointer">
                      No, just this one offering
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-primary/20">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Join The Movement
                </Button>
                <p className="font-sans text-xs text-muted-foreground text-center mt-4">
                  Your information is kept private and will only be used to coordinate care within our community.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Footer Message */}
        <div className="text-center mt-12">
          <p className="font-serif text-lg text-muted-foreground italic">
            "We believe healing happens in circles, not systems."
          </p>
        </div>
      </div>
    </div>
  );
};

export default CandidHeartInterest;

