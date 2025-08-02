import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Checkbox } from '../components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { Label } from '../components/ui/label';
import { Heart, Sparkles, Mic, Settings, Globe, Star } from 'lucide-react';

const DeepDive = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Section 1: Who You Are
    name: '',
    brandName: '',
    calling: '',
    audience: '',
    motivation: [],
    motivationOther: '',
    season: '',
    seasonOther: '',
    
    // Section 2: Brand Voice & Message
    brandVoice: [],
    brandVoiceOther: '',
    phrases: '',
    avoidTone: '',
    inspiration: '',
    
    // Section 3: Automations & Systems
    currentTools: [],
    currentToolsOther: '',
    automationNeeds: [],
    automationNeedsOther: '',
    personalTasks: '',
    
    // Section 4: Website & Tech
    currentWebsite: '',
    websiteLikes: '',
    websiteIssues: '',
    supportNeeds: [],
    supportNeedsOther: '',
    
    // Section 5: Final Reflection
    workingStyle: '',
    finalThoughts: ''
  });

  const sections = [
    { title: 'Who You Are', icon: Heart },
    { title: 'Brand Voice & Message', icon: Mic },
    { title: 'Automations & Systems', icon: Settings },
    { title: 'Website & Tech Needs', icon: Globe },
    { title: 'Vibe + Vision', icon: Star }
  ];

  const motivationOptions = [
    'I\'m ready to clarify my next chapter',
    'I want to express my voice more clearly and confidently',
    'I\'m craving systems that support me instead of draining me',
    'I\'m feeling misaligned with my website or copy',
    'I need tech help that doesn\'t overwhelm me',
    'Other'
  ];

  const seasonOptions = [
    'Building something new',
    'Refining what I\'ve already created',
    'Healing and integrating',
    'Scaling intentionally',
    'Something else'
  ];

  const voiceOptions = [
    'Warm', 'Sacred', 'Bold', 'Playful', 'Tender', 'Technical',
    'Honest', 'Curious', 'Grounded', 'Disruptive', 'Fluid', 'Fierce'
  ];

  const toolOptions = [
    'Email (ConvertKit, Flodesk, etc.)',
    'Text/SMS (Klaviyo, Twilio, etc.)',
    'Scheduling (Calendly, Acuity)',
    'Client Portals or CRMs',
    'Digital Products or Memberships',
    'Forms or surveys',
    'Payments (Stripe, PayPal)',
    'Notion, Trello, Airtable',
    'None yet',
    'Other'
  ];

  const automationOptions = [
    'Welcoming new clients or subscribers',
    'Onboarding workflows',
    'Gentle nurture emails',
    'Automated reminders or updates',
    'Abandoned cart or follow-up',
    'Launch support',
    'Internal automations (behind the scenes)',
    'I\'m not sure yet',
    'Other'
  ];

  const supportOptions = [
    'A website that reflects my evolution',
    'A new landing page or simplified site',
    'Help with tone and messaging',
    'A space that feels like me',
    'Backend structure (client portals, email flow, etc.)',
    'Copy and content that\'s aligned and easy to update',
    'I need help figuring this out',
    'Other'
  ];

  const workingStyleOptions = [
    'One-time project or setup',
    'Ongoing support or retainer',
    'Let\'s start with a call and co-create from there'
  ];

  const handleArrayChange = (field, value, checked) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Deep dive form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-12 text-center">
              <Sparkles className="h-12 w-12 text-primary mx-auto mb-6" />
              <h1 className="font-serif text-3xl font-semibold text-foreground mb-6">
                Thank you for trusting me with your clarity.
              </h1>
              <p className="font-sans text-lg text-foreground mb-8 leading-relaxed">
                Your reflection has been received with care. I'll review every detail and 
                craft a proposal that holds space for your heart and honors the work you're here to do.
              </p>
              <p className="font-serif text-lg text-foreground italic mb-8">
                "This is the merging of vision and voice, structure and soul."
              </p>
              <p className="font-sans text-foreground">
                I'll be in touch within 3-5 business days with your personalized proposal.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const renderSection = () => {
    switch (currentSection) {
      case 0: // Who You Are
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <Heart className="h-8 w-8 text-primary mx-auto mb-4" />
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                Who You Are
              </h2>
              <p className="font-sans text-foreground">
                Let's start with your essence — the truth that drives everything you create.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-sans text-sm font-medium text-foreground mb-2">
                  Your name
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="border-primary/30 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block font-sans text-sm font-medium text-foreground mb-2">
                  Brand name (if you have one)
                </label>
                <Input
                  value={formData.brandName}
                  onChange={(e) => setFormData(prev => ({ ...prev, brandName: e.target.value }))}
                  className="border-primary/30 focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="block font-sans text-sm font-medium text-foreground mb-2">
                In your own words, what do you feel called to offer the world?
              </label>
              <p className="font-sans text-xs text-foreground mb-3 italic">
                Say it how you'd say it to a friend.
              </p>
              <Textarea
                value={formData.calling}
                onChange={(e) => setFormData(prev => ({ ...prev, calling: e.target.value }))}
                rows={4}
                className="border-primary/30 focus:border-primary resize-none"
              />
            </div>

            <div>
              <label className="block font-sans text-sm font-medium text-foreground mb-2">
                Who do you serve or feel most connected to in your work?
              </label>
              <Textarea
                value={formData.audience}
                onChange={(e) => setFormData(prev => ({ ...prev, audience: e.target.value }))}
                rows={3}
                className="border-primary/30 focus:border-primary resize-none"
              />
            </div>

            <div>
              <label className="block font-sans text-sm font-medium text-foreground mb-3">
                What drew you to reach out now?
              </label>
              <div className="space-y-3">
                {motivationOptions.map((option) => (
                  <div key={option} className="flex items-start space-x-3">
                    <Checkbox
                      id={option}
                      checked={formData.motivation.includes(option)}
                      onCheckedChange={(checked) => handleArrayChange('motivation', option, checked)}
                      className="border-primary/50 data-[state=checked]:bg-primary mt-1"
                    />
                    <label htmlFor={option} className="font-sans text-sm text-foreground cursor-pointer leading-relaxed">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
              {formData.motivation.includes('Other') && (
                <Input
                  value={formData.motivationOther}
                  onChange={(e) => setFormData(prev => ({ ...prev, motivationOther: e.target.value }))}
                  placeholder="Please explain..."
                  className="mt-3 border-primary/30 focus:border-primary"
                />
              )}
            </div>

            <div>
              <label className="block font-sans text-sm font-medium text-foreground mb-3">
                What season are you in?
              </label>
              <RadioGroup 
                value={formData.season} 
                onValueChange={(value) => setFormData(prev => ({ ...prev, season: value }))}
                className="space-y-3"
              >
                {seasonOptions.map((option) => (
                  <div key={option} className="flex items-center space-x-3">
                    <RadioGroupItem value={option} id={option} className="border-primary text-primary" />
                    <Label htmlFor={option} className="font-sans text-sm text-foreground cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              {formData.season === 'Something else' && (
                <Input
                  value={formData.seasonOther}
                  onChange={(e) => setFormData(prev => ({ ...prev, seasonOther: e.target.value }))}
                  placeholder="Tell me more..."
                  className="mt-3 border-primary/30 focus:border-primary"
                />
              )}
            </div>
          </div>
        );

      case 1: // Brand Voice & Message
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <Mic className="h-8 w-8 text-primary mx-auto mb-4" />
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                Brand Voice & Message
              </h2>
              <p className="font-sans text-foreground">
                Your voice already exists. Let's clarify and express it with confidence.
              </p>
            </div>

            <div>
              <label className="block font-sans text-sm font-medium text-foreground mb-3">
                If your brand were a person, how would they speak?
              </label>
              <p className="font-sans text-xs text-foreground mb-4">
                Select 3–5 that feel most true
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {voiceOptions.map((option) => (
                  <div key={option} className="flex items-center space-x-3">
                    <Checkbox
                      id={option}
                      checked={formData.brandVoice.includes(option)}
                      onCheckedChange={(checked) => handleArrayChange('brandVoice', option, checked)}
                      className="border-primary/50 data-[state=checked]:bg-primary"
                    />
                    <label htmlFor={option} className="font-sans text-sm text-foreground cursor-pointer">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
              <Input
                value={formData.brandVoiceOther}
                onChange={(e) => setFormData(prev => ({ ...prev, brandVoiceOther: e.target.value }))}
                placeholder="Other words that capture your voice..."
                className="mt-4 border-primary/30 focus:border-primary"
              />
            </div>

            <div>
              <label className="block font-sans text-sm font-medium text-foreground mb-2">
                What words, metaphors, or phrases do you return to often?
              </label>
              <Textarea
                value={formData.phrases}
                onChange={(e) => setFormData(prev => ({ ...prev, phrases: e.target.value }))}
                rows={4}
                className="border-primary/30 focus:border-primary resize-none"
              />
            </div>

            <div>
              <label className="block font-sans text-sm font-medium text-foreground mb-2">
                What do you not want your brand to sound like?
              </label>
              <p className="font-sans text-xs text-foreground mb-3">
                (E.g., too salesy, overly polished, cold, etc.)
              </p>
              <Textarea
                value={formData.avoidTone}
                onChange={(e) => setFormData(prev => ({ ...prev, avoidTone: e.target.value }))}
                rows={3}
                className="border-primary/30 focus:border-primary resize-none"
              />
            </div>

            <div>
              <label className="block font-sans text-sm font-medium text-foreground mb-2">
                Are there brands, creators, or websites you love the feel of? What speaks to you about them?
              </label>
              <Textarea
                value={formData.inspiration}
                onChange={(e) => setFormData(prev => ({ ...prev, inspiration: e.target.value }))}
                rows={4}
                className="border-primary/30 focus:border-primary resize-none"
              />
            </div>
          </div>
        );

      case 2: // Automations & Systems
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <Settings className="h-8 w-8 text-primary mx-auto mb-4" />
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                Automations & Systems
              </h2>
              <p className="font-sans text-foreground">
                Let's create systems that support you, not drain you.
              </p>
            </div>

            <div>
              <label className="block font-sans text-sm font-medium text-foreground mb-3">
                What tools or systems are you already using?
              </label>
              <div className="space-y-3">
                {toolOptions.map((option) => (
                  <div key={option} className="flex items-center space-x-3">
                    <Checkbox
                      id={option}
                      checked={formData.currentTools.includes(option)}
                      onCheckedChange={(checked) => handleArrayChange('currentTools', option, checked)}
                      className="border-primary/50 data-[state=checked]:bg-primary"
                    />
                    <label htmlFor={option} className="font-sans text-sm text-foreground cursor-pointer">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
              {formData.currentTools.includes('Other') && (
                <Input
                  value={formData.currentToolsOther}
                  onChange={(e) => setFormData(prev => ({ ...prev, currentToolsOther: e.target.value }))}
                  placeholder="What other tools are you using?"
                  className="mt-3 border-primary/30 focus:border-primary"
                />
              )}
            </div>

            <div>
              <label className="block font-sans text-sm font-medium text-foreground mb-3">
                What types of automation would feel like support right now?
              </label>
              <div className="space-y-3">
                {automationOptions.map((option) => (
                  <div key={option} className="flex items-center space-x-3">
                    <Checkbox
                      id={option}
                      checked={formData.automationNeeds.includes(option)}
                      onCheckedChange={(checked) => handleArrayChange('automationNeeds', option, checked)}
                      className="border-primary/50 data-[state=checked]:bg-primary"
                    />
                    <label htmlFor={option} className="font-sans text-sm text-foreground cursor-pointer">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
              {formData.automationNeeds.includes('Other') && (
                <Input
                  value={formData.automationNeedsOther}
                  onChange={(e) => setFormData(prev => ({ ...prev, automationNeedsOther: e.target.value }))}
                  placeholder="What other automation would help?"
                  className="mt-3 border-primary/30 focus:border-primary"
                />
              )}
            </div>

            <div>
              <label className="block font-sans text-sm font-medium text-foreground mb-2">
                Are there tasks or communications you wish could run without you — but still feel personal?
              </label>
              <Textarea
                value={formData.personalTasks}
                onChange={(e) => setFormData(prev => ({ ...prev, personalTasks: e.target.value }))}
                rows={4}
                className="border-primary/30 focus:border-primary resize-none"
              />
            </div>
          </div>
        );

      case 3: // Website & Tech Needs
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <Globe className="h-8 w-8 text-primary mx-auto mb-4" />
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                Website & Tech Needs
              </h2>
              <p className="font-sans text-foreground">
                Your digital space should feel like home — authentic, welcoming, and true to you.
              </p>
            </div>

            <div>
              <label className="block font-sans text-sm font-medium text-foreground mb-2">
                Do you currently have a website?
              </label>
              <p className="font-sans text-xs text-foreground mb-3">
                Share the link or write "no site yet"
              </p>
              <Input
                value={formData.currentWebsite}
                onChange={(e) => setFormData(prev => ({ ...prev, currentWebsite: e.target.value }))}
                placeholder="yourwebsite.com or 'no site yet'"
                className="border-primary/30 focus:border-primary"
              />
            </div>

            <div>
              <label className="block font-sans text-sm font-medium text-foreground mb-2">
                What do you like about your current setup (if anything)?
              </label>
              <Textarea
                value={formData.websiteLikes}
                onChange={(e) => setFormData(prev => ({ ...prev, websiteLikes: e.target.value }))}
                rows={3}
                className="border-primary/30 focus:border-primary resize-none"
              />
            </div>

            <div>
              <label className="block font-sans text-sm font-medium text-foreground mb-2">
                What's not working, missing, or feeling out of sync?
              </label>
              <Textarea
                value={formData.websiteIssues}
                onChange={(e) => setFormData(prev => ({ ...prev, websiteIssues: e.target.value }))}
                rows={4}
                className="border-primary/30 focus:border-primary resize-none"
              />
            </div>

            <div>
              <label className="block font-sans text-sm font-medium text-foreground mb-3">
                What kind of support are you looking for?
              </label>
              <div className="space-y-3">
                {supportOptions.map((option) => (
                  <div key={option} className="flex items-center space-x-3">
                    <Checkbox
                      id={option}
                      checked={formData.supportNeeds.includes(option)}
                      onCheckedChange={(checked) => handleArrayChange('supportNeeds', option, checked)}
                      className="border-primary/50 data-[state=checked]:bg-primary"
                    />
                    <label htmlFor={option} className="font-sans text-sm text-foreground cursor-pointer">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
              {formData.supportNeeds.includes('Other') && (
                <Input
                  value={formData.supportNeedsOther}
                  onChange={(e) => setFormData(prev => ({ ...prev, supportNeedsOther: e.target.value }))}
                  placeholder="What other support do you need?"
                  className="mt-3 border-primary/30 focus:border-primary"
                />
              )}
            </div>
          </div>
        );

      case 4: // Final Reflection
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <Star className="h-8 w-8 text-primary mx-auto mb-4" />
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-4">
                Vibe + Vision
              </h2>
              <p className="font-sans text-foreground">
                Let's align on how we work together and what feels most supportive.
              </p>
            </div>

            <div>
              <label className="block font-sans text-sm font-medium text-foreground mb-3">
                What kind of working relationship feels most supportive right now?
              </label>
              <RadioGroup 
                value={formData.workingStyle} 
                onValueChange={(value) => setFormData(prev => ({ ...prev, workingStyle: value }))}
                className="space-y-3"
              >
                {workingStyleOptions.map((option) => (
                  <div key={option} className="flex items-center space-x-3">
                    <RadioGroupItem value={option} id={option} className="border-primary text-primary" />
                    <Label htmlFor={option} className="font-sans text-sm text-foreground cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <label className="block font-sans text-sm font-medium text-foreground mb-2">
                Anything else you'd like me to know about your vision, voice, or values?
              </label>
              <Textarea
                value={formData.finalThoughts}
                onChange={(e) => setFormData(prev => ({ ...prev, finalThoughts: e.target.value }))}
                rows={5}
                placeholder="Share whatever feels important..."
                className="border-primary/30 focus:border-primary resize-none"
              />
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
              <p className="font-serif text-lg text-foreground mb-4">
                Thank you for sharing your story, your truth, and your clarity-in-progress.
              </p>
              <p className="font-sans text-foreground">
                I'll review your answers and be in touch soon — with a proposal that holds space 
                for your heart and honors the work you're here to do.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Heart className="h-6 w-6 text-primary" />
            <Sparkles className="h-5 w-5 text-accent" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
            The Candid Heart Discovery Form
          </h1>
          <p className="font-sans text-xl text-foreground mb-4 leading-relaxed max-w-3xl mx-auto">
            A gentle guide to help me understand your voice, your systems, and your next brave step.
          </p>
          <div className="border-t border-primary/20 w-24 mx-auto my-6"></div>
          <p className="font-serif text-lg text-foreground italic">
            "Before we build anything — we listen."
          </p>
          <p className="font-sans text-foreground mt-4 max-w-2xl mx-auto">
            This form isn't about starting from scratch. It's about uncovering what's already alive in you — 
            your message, your momentum, your desire to feel more held by the systems around you.
          </p>
          <p className="font-sans text-sm text-foreground mt-4 italic">
            Take your time. Pause when you need. Leave what doesn't fit. The goal is not perfection — it's presence.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex justify-center space-x-4 mb-4">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                    index === currentSection 
                      ? 'bg-primary border-primary text-primary-foreground' 
                      : index < currentSection 
                        ? 'bg-primary/20 border-primary text-primary'
                        : 'bg-background border-muted text-foreground'
                  }`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-sans text-foreground mt-2 text-center max-w-20">
                    {section.title}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="w-full bg-secondary/30 rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form */}
        <Card className="border-2 border-primary/20">
          <CardContent className="p-8 md:p-12">
            <form onSubmit={handleSubmit}>
              {renderSection()}
              
              {/* Navigation */}
              <div className="flex justify-between items-center pt-12 mt-12 border-t border-primary/20">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentSection(prev => Math.max(0, prev - 1))}
                  disabled={currentSection === 0}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Previous
                </Button>
                
                <span className="font-sans text-sm text-foreground">
                  {currentSection + 1} of {sections.length}
                </span>
                
                {currentSection < sections.length - 1 ? (
                  <Button
                    type="button"
                    onClick={() => setCurrentSection(prev => prev + 1)}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Continue
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8"
                  >
                    I'm Ready
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DeepDive;

