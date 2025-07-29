import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Checkbox } from '../components/ui/checkbox';
import { Heart, Sparkles } from 'lucide-react';

const StartHere = () => {
  const [formData, setFormData] = useState({
    name: '',
    brandName: '',
    supportType: [],
    brandPersonality: [],
    currentChallenge: '',
    email: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const supportOptions = [
    'Website design & development',
    'Brand messaging & voice',
    'Email & automation systems',
    'I\'m not sure yet — help me figure it out'
  ];

  const personalityOptions = [
    'Warm', 'Sacred', 'Bold', 'Playful', 'Tender', 'Technical',
    'Honest', 'Curious', 'Grounded', 'Disruptive', 'Fluid', 'Fierce'
  ];

  const handleSupportChange = (option, checked) => {
    setFormData(prev => ({
      ...prev,
      supportType: checked 
        ? [...prev.supportType, option]
        : prev.supportType.filter(item => item !== option)
    }));
  };

  const handlePersonalityChange = (option, checked) => {
    if (formData.brandPersonality.length >= 3 && checked) return;
    
    setFormData(prev => ({
      ...prev,
      brandPersonality: checked 
        ? [...prev.brandPersonality, option]
        : prev.brandPersonality.filter(item => item !== option)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-12 text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
              <h1 className="font-serif text-3xl font-semibold text-foreground mb-6">
                Thank you for beginning.
              </h1>
              <p className="font-sans text-lg text-muted-foreground mb-6 leading-relaxed">
                I'll review your reflection and be in touch within 2-3 business days with either:
              </p>
              <div className="space-y-3 text-left max-w-md mx-auto mb-8">
                <p className="font-sans text-muted-foreground flex items-start">
                  <span className="text-primary mr-2">•</span>
                  An invitation to complete the full brand reflection form
                </p>
                <p className="font-sans text-muted-foreground flex items-start">
                  <span className="text-primary mr-2">•</span>
                  A call to explore working together
                </p>
                <p className="font-sans text-muted-foreground flex items-start">
                  <span className="text-primary mr-2">•</span>
                  A gentle note if we're not aligned right now
                </p>
              </div>
              <p className="font-serif text-foreground italic">
                "You don't have to have it all figured out. Just begin."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Heart className="h-6 w-6 text-primary" />
            <Sparkles className="h-5 w-5 text-accent" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Begin Your Reflection
          </h1>
          <p className="font-sans text-xl text-muted-foreground mb-4 leading-relaxed max-w-2xl mx-auto">
            This is a first step toward a potential collaboration — a gentle way for us to see 
            if we're aligned before diving deeper.
          </p>
          <p className="font-serif text-lg text-foreground italic">
            "You don't have to have it all figured out. Just begin."
          </p>
        </div>

        {/* Form */}
        <Card className="border-2 border-primary/20">
          <CardContent className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Name & Brand */}
              <div className="space-y-6">
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Let's start with the basics
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-sans text-sm font-medium text-foreground mb-2">
                      Your name
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="How you'd like to be addressed"
                      className="border-primary/30 focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-sans text-sm font-medium text-foreground mb-2">
                      Brand or business name
                    </label>
                    <Input
                      value={formData.brandName}
                      onChange={(e) => setFormData(prev => ({ ...prev, brandName: e.target.value }))}
                      placeholder="If you have one"
                      className="border-primary/30 focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Support Type */}
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  What kind of support are you seeking?
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  Select all that resonate
                </p>
                
                <div className="grid md:grid-cols-2 gap-3">
                  {supportOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-3">
                      <Checkbox
                        id={option}
                        checked={formData.supportType.includes(option)}
                        onCheckedChange={(checked) => handleSupportChange(option, checked)}
                        className="border-primary/50 data-[state=checked]:bg-primary"
                      />
                      <label 
                        htmlFor={option}
                        className="font-sans text-sm text-foreground cursor-pointer"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brand Personality */}
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  How would you describe your brand's personality?
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  Choose up to 3 that feel most true
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {personalityOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-3">
                      <Checkbox
                        id={option}
                        checked={formData.brandPersonality.includes(option)}
                        onCheckedChange={(checked) => handlePersonalityChange(option, checked)}
                        disabled={formData.brandPersonality.length >= 3 && !formData.brandPersonality.includes(option)}
                        className="border-primary/50 data-[state=checked]:bg-primary"
                      />
                      <label 
                        htmlFor={option}
                        className="font-sans text-sm text-foreground cursor-pointer"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
                {formData.brandPersonality.length >= 3 && (
                  <p className="font-sans text-xs text-accent">
                    You've selected 3 — perfect! Feel free to adjust if needed.
                  </p>
                )}
              </div>

              {/* Current Challenge */}
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  What's feeling unclear or overwhelming right now?
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  Share what brought you here today
                </p>
                
                <Textarea
                  value={formData.currentChallenge}
                  onChange={(e) => setFormData(prev => ({ ...prev, currentChallenge: e.target.value }))}
                  placeholder="Take your time. There's no wrong answer."
                  rows={4}
                  className="border-primary/30 focus:border-primary resize-none"
                />
              </div>

              {/* Email */}
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  How can I reach you?
                </h3>
                
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="your@email.com"
                  className="border-primary/30 focus:border-primary"
                  required
                />
              </div>

              {/* Submit */}
              <div className="pt-6 text-center">
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-lg px-12 py-3"
                >
                  Begin My Reflection
                </Button>
                
                <p className="font-sans text-sm text-muted-foreground mt-4">
                  This takes courage. Thank you for trusting the process.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StartHere;

