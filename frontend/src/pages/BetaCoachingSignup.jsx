import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Checkbox } from '../components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { Heart, Users, Send, CheckCircle, Gift, Clock, DollarSign } from 'lucide-react';

const BetaCoachingSignup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    timezone: '',
    currentSituation: '',
    healingGoals: '',
    previousTherapy: '',
    supportNeeds: '',
    zoomComfort: '',
    textComfort: '',
    commitment: false,
    paymentTier: '',
    donationAmount: '',
    emergencyContact: '',
    additionalInfo: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentSpot, setCurrentSpot] = useState(12); // Will be fetched from API

  // Fetch current beta status on component mount
  useEffect(() => {
    fetchBetaStatus();
  }, []);

  const fetchBetaStatus = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/beta-coaching/status');
      const data = await response.json();
      if (data.success) {
        setCurrentSpot(data.data.total_applications + 1);
      }
    } catch (error) {
      console.error('Failed to fetch beta status:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (checked) => {
    setFormData(prev => ({
      ...prev,
      commitment: checked
    }));
  };

  const handleRadioChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('http://localhost:5001/api/beta-coaching/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setError('Network error. Please check your connection and try again.');
      console.error('Submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  const getPricingTier = () => {
    if (currentSpot <= 20) {
      return {
        tier: 'free',
        title: 'Free Beta Spot',
        description: `You're participant #${currentSpot} - completely free!`,
        icon: Gift,
        color: 'text-primary'
      };
    } else if (currentSpot <= 50) {
      return {
        tier: 'donation',
        title: 'Pay What You Can',
        description: `You're participant #${currentSpot} - donation-based pricing`,
        icon: DollarSign,
        color: 'text-accent'
      };
    } else {
      return {
        tier: 'full',
        title: 'Waitlist Only',
        description: 'Beta program is full - join our waitlist',
        icon: Clock,
        color: 'text-foreground'
      };
    }
  };

  const pricingTier = getPricingTier();

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center ">
        <Card className="max-w-2xl mx-4 border-2 border-primary/20">
          <CardContent className="p-12 text-center">
            <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="font-serif text-3xl font-semibold text-foreground mb-6">
              Welcome to the Journey
            </h1>
            <p className="font-sans text-lg text-foreground mb-6 leading-relaxed">
              Thank you for trusting me with your healing story. You'll receive a welcome email 
              within 24 hours with all the details for our first week together.
            </p>
            <p className="font-serif text-xl text-foreground italic leading-relaxed mb-8">
              You're not broken. You're in survival.<br />
              And now, you're choosing to thrive.
            </p>
            <div className="space-y-4">
              <Button 
                asChild 
                className=""
              >
                <a href="/beta-coaching">
                  Back to Program Details
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Heart className="h-8 w-8 text-primary" />
            <Users className="h-6 w-6 text-accent" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Join Reclaim & Rebuild
          </h1>
          <p className="font-sans text-lg text-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            A sacred 6-week coaching rhythm for women healing betrayal and reclaiming their voice.
          </p>

          {/* Pricing Tier Display */}
          <Card className={`max-w-md mx-auto border-2 ${
            pricingTier.tier === 'free' ? 'border-primary/30 bg-primary/5' :
            pricingTier.tier === 'donation' ? 'border-accent/30 bg-accent/5' :
            'border-muted bg-muted/20'
          }`}>
            <CardContent className="p-6 text-center">
              <pricingTier.icon className={`h-8 w-8 ${pricingTier.color} mx-auto mb-4`} />
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {pricingTier.title}
              </h3>
              <p className="font-sans text-foreground">
                {pricingTier.description}
              </p>
              <Badge className={`mt-3 ${
                pricingTier.tier === 'free' ? 'bg-primary/10 text-primary border-primary/20' :
                pricingTier.tier === 'donation' ? 'bg-accent/10 text-accent border-accent/20' :
                'bg-muted text-foreground border-muted'
              }`}>
                {50 - currentSpot} spots remaining
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Form */}
        <Card className="max-w-3xl mx-auto border-2 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="font-serif text-2xl text-foreground">
              Your Sacred Application
            </CardTitle>
            <p className="font-sans text-foreground">
              This application helps me understand your needs and create the safest possible space for healing.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Error Display */}
              {error && (
                <div className="">
                  <p className="text-red-800 text-sm">{error}</p>
                </div>
              )}
              
              {/* Basic Information */}
              <div className="space-y-6">
                <h3 className="font-serif text-lg font-semibold text-foreground border-b border-primary/20 pb-2">
                  Basic Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="font-sans text-sm font-medium text-foreground mb-2 block">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="What should we call you?"
                      className="border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="font-sans text-sm font-medium text-foreground mb-2 block">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Your last name"
                      className="border-primary/30 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="font-sans text-sm font-medium text-foreground mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="border-primary/30 focus:border-primary"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="font-sans text-sm font-medium text-foreground mb-2 block">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="For daily text prompts"
                      className="border-primary/30 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="timezone" className="font-sans text-sm font-medium text-foreground mb-2 block">
                    Time Zone *
                  </Label>
                  <Input
                    id="timezone"
                    name="timezone"
                    type="text"
                    required
                    value={formData.timezone}
                    onChange={handleInputChange}
                    placeholder="e.g., EST, PST, CST"
                    className="border-primary/30 focus:border-primary"
                  />
                  <p className="font-sans text-xs text-foreground mt-1">
                    Zoom circles are Thursdays at 7PM EST
                  </p>
                </div>
              </div>

              {/* Healing Journey */}
              <div className="space-y-6">
                <h3 className="font-serif text-lg font-semibold text-foreground border-b border-primary/20 pb-2">
                  Your Healing Journey
                </h3>

                <div>
                  <Label htmlFor="currentSituation" className="font-sans text-sm font-medium text-foreground mb-2 block">
                    Where are you in your healing journey right now? *
                  </Label>
                  <Textarea
                    id="currentSituation"
                    name="currentSituation"
                    required
                    value={formData.currentSituation}
                    onChange={handleInputChange}
                    placeholder="Share what feels important about where you are today..."
                    rows={4}
                    className="border-primary/30 focus:border-primary resize-none"
                  />
                </div>

                <div>
                  <Label htmlFor="healingGoals" className="font-sans text-sm font-medium text-foreground mb-2 block">
                    What are you hoping to reclaim or rebuild? *
                  </Label>
                  <Textarea
                    id="healingGoals"
                    name="healingGoals"
                    required
                    value={formData.healingGoals}
                    onChange={handleInputChange}
                    placeholder="Your voice, your boundaries, your sense of self..."
                    rows={3}
                    className="border-primary/30 focus:border-primary resize-none"
                  />
                </div>

                <div>
                  <Label htmlFor="previousTherapy" className="font-sans text-sm font-medium text-foreground mb-2 block">
                    Have you worked with a therapist or counselor for betrayal trauma?
                  </Label>
                  <RadioGroup 
                    value={formData.previousTherapy} 
                    onValueChange={(value) => handleRadioChange('previousTherapy', value)}
                    className="space-y-2"
                  >
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="yes-current" id="therapy-current" className="border-primary/30 text-primary" />
                      <Label htmlFor="therapy-current" className="font-sans text-sm text-foreground cursor-pointer">
                        Yes, I'm currently in therapy
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="yes-past" id="therapy-past" className="border-primary/30 text-primary" />
                      <Label htmlFor="therapy-past" className="font-sans text-sm text-foreground cursor-pointer">
                        Yes, I've worked with someone in the past
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="no" id="therapy-no" className="border-primary/30 text-primary" />
                      <Label htmlFor="therapy-no" className="font-sans text-sm text-foreground cursor-pointer">
                        No, this would be my first structured support
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="supportNeeds" className="font-sans text-sm font-medium text-foreground mb-2 block">
                    What kind of support feels most important to you right now?
                  </Label>
                  <Textarea
                    id="supportNeeds"
                    name="supportNeeds"
                    value={formData.supportNeeds}
                    onChange={handleInputChange}
                    placeholder="Community, validation, practical tools, emotional safety..."
                    rows={3}
                    className="border-primary/30 focus:border-primary resize-none"
                  />
                </div>
              </div>

              {/* Program Logistics */}
              <div className="space-y-6">
                <h3 className="font-serif text-lg font-semibold text-foreground border-b border-primary/20 pb-2">
                  Program Logistics
                </h3>

                <div>
                  <Label className="font-sans text-sm font-medium text-foreground mb-2 block">
                    How comfortable are you with Zoom video calls? *
                  </Label>
                  <RadioGroup 
                    value={formData.zoomComfort} 
                    onValueChange={(value) => handleRadioChange('zoomComfort', value)}
                    className="space-y-2"
                  >
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="very-comfortable" id="zoom-very" className="border-primary/30 text-primary" />
                      <Label htmlFor="zoom-very" className="font-sans text-sm text-foreground cursor-pointer">
                        Very comfortable - I love video calls
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="comfortable" id="zoom-comfortable" className="border-primary/30 text-primary" />
                      <Label htmlFor="zoom-comfortable" className="font-sans text-sm text-foreground cursor-pointer">
                        Comfortable - I can do video calls
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="nervous" id="zoom-nervous" className="border-primary/30 text-primary" />
                      <Label htmlFor="zoom-nervous" className="font-sans text-sm text-foreground cursor-pointer">
                        Nervous but willing to try
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="prefer-audio" id="zoom-audio" className="border-primary/30 text-primary" />
                      <Label htmlFor="zoom-audio" className="font-sans text-sm text-foreground cursor-pointer">
                        Would prefer audio-only participation
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="font-sans text-sm font-medium text-foreground mb-2 block">
                    How do you feel about receiving daily text prompts? *
                  </Label>
                  <RadioGroup 
                    value={formData.textComfort} 
                    onValueChange={(value) => handleRadioChange('textComfort', value)}
                    className="space-y-2"
                  >
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="excited" id="text-excited" className="border-primary/30 text-primary" />
                      <Label htmlFor="text-excited" className="font-sans text-sm text-foreground cursor-pointer">
                        Excited - I love daily check-ins
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="open" id="text-open" className="border-primary/30 text-primary" />
                      <Label htmlFor="text-open" className="font-sans text-sm text-foreground cursor-pointer">
                        Open to it - sounds helpful
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="unsure" id="text-unsure" className="border-primary/30 text-primary" />
                      <Label htmlFor="text-unsure" className="font-sans text-sm text-foreground cursor-pointer">
                        Unsure but willing to try
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Payment Section (if applicable) */}
              {pricingTier.tier === 'donation' && (
                <div className="space-y-6">
                  <h3 className="font-serif text-lg font-semibold text-foreground border-b border-primary/20 pb-2">
                    Pay What You Can
                  </h3>
                  <p className="font-sans text-sm text-foreground">
                    This program is offered on a donation basis. Pay what feels sustainable and honoring 
                    for you - whether that's $10 or $100 per week. Every contribution helps me continue 
                    offering this work.
                  </p>
                  
                  <div>
                    <Label htmlFor="donationAmount" className="font-sans text-sm font-medium text-foreground mb-2 block">
                      Weekly Donation Amount
                    </Label>
                    <Input
                      id="donationAmount"
                      name="donationAmount"
                      type="number"
                      min="0"
                      step="5"
                      value={formData.donationAmount}
                      onChange={handleInputChange}
                      placeholder="$0 - $100+"
                      className="border-primary/30 focus:border-primary"
                    />
                    <p className="font-sans text-xs text-foreground mt-1">
                      You can adjust this amount at any time during the program
                    </p>
                  </div>
                </div>
              )}

              {/* Emergency Contact */}
              <div className="space-y-6">
                <h3 className="font-serif text-lg font-semibold text-foreground border-b border-primary/20 pb-2">
                  Safety & Support
                </h3>

                <div>
                  <Label htmlFor="emergencyContact" className="font-sans text-sm font-medium text-foreground mb-2 block">
                    Emergency Contact Information
                  </Label>
                  <Input
                    id="emergencyContact"
                    name="emergencyContact"
                    type="text"
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    placeholder="Name and phone number of someone we can contact if needed"
                    className="border-primary/30 focus:border-primary"
                  />
                  <p className="font-sans text-xs text-foreground mt-1">
                    This is for your safety and will only be used in case of emergency
                  </p>
                </div>

                <div>
                  <Label htmlFor="additionalInfo" className="font-sans text-sm font-medium text-foreground mb-2 block">
                    Anything else you'd like me to know?
                  </Label>
                  <Textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    placeholder="Triggers, accommodations needed, hopes, fears..."
                    rows={3}
                    className="border-primary/30 focus:border-primary resize-none"
                  />
                </div>
              </div>

              {/* Commitment */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="commitment"
                    checked={formData.commitment}
                    onCheckedChange={handleCheckboxChange}
                    className=""
                  />
                  <Label htmlFor="commitment" className="font-sans text-sm text-foreground cursor-pointer leading-relaxed">
                    I understand this is a 6-week commitment and I'm ready to show up for my healing 
                    with gentleness and courage. I know I can reach out if I need support or have concerns.
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-primary/20">
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={!formData.commitment || pricingTier.tier === 'full' || loading}
                  className=""
                >
                  <Send className="mr-2 h-5 w-5" />
                  {loading ? 'Submitting...' : (pricingTier.tier === 'full' ? 'Join Waitlist' : 'Submit Application')}
                </Button>
                <p className="font-sans text-xs text-foreground text-center mt-4">
                  You'll receive a welcome email within 24 hours with program details and next steps.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Footer Message */}
        <div className="text-center mt-12">
          <p className="font-serif text-lg text-foreground italic">
            "You're not broken. You're in survival. And now, you're choosing to thrive."
          </p>
        </div>
      </div>
    </div>
  );
};

export default BetaCoachingSignup;

