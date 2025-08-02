import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Heart, Mail, Calendar, MessageCircle, Send, ArrowRight, Clock, Shield } from 'lucide-react';
import Hero from '@/components/ui/hero';
import Section from '@/components/ui/section';
import ContentCard from '@/components/ui/content-card';
import { DESIGN_SYSTEM } from '@/lib/design-system';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      inquiryType: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You would integrate with your backend or email service here
  };

  const heroDecorativeElements = [
    { icon: <Heart className="h-12 w-12" />, position: 'top-20 right-20', color: 'text-primary/30', delay: 1 },
    { icon: <Mail className="h-12 w-12" />, position: 'bottom-20 left-20', color: 'text-accent/30', delay: 2 }
  ];

  const servicesDecorativeElements = [
    { icon: <MessageCircle className="h-16 w-16" />, position: 'top-20 right-32', color: 'text-primary/20', delay: 1.5 }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Let's Connect"
        subtitle="This is your digital front porch — a safe space where healing meets strategy and every conversation begins with understanding your unique story."
        decorativeElements={heroDecorativeElements}
        size="medium"
        badge={{ icon: Heart, text: "Ready to Begin" }}
      />

      {/* Quick Connect Options */}
      <Section 
        size="medium" 
        background={true}
        decorativeElements={servicesDecorativeElements}
      >
        <div className={DESIGN_SYSTEM.layouts.grid.threeCol}>
          {/* Book a Call */}
          <ContentCard
            icon={Calendar}
            title="Book a Discovery Call"
            description="Ready to explore working together? Let's have a conversation about your goals, challenges, and how I might support your journey."
            variant="primary"
          >
            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mb-3">
              <Link to="/book-call">Schedule Now</Link>
            </Button>
            <p className="font-sans text-xs text-foreground text-center">
              <Clock className="h-3 w-3 inline mr-1" />
              Free 30-minute consultation available
            </p>
          </ContentCard>

          {/* Send Message */}
          <ContentCard
            icon={MessageCircle}
            title="Send a Message"
            description="Have questions, want to share your story, or explore collaboration? I read every message personally and respond thoughtfully."
            variant="accent"
          >
            <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mb-3">
              <Link to="#contact-form">Send Message</Link>
            </Button>
            <p className="font-sans text-xs text-foreground text-center">
              <Shield className="h-3 w-3 inline mr-1" />
              Your privacy is protected
            </p>
          </ContentCard>

          {/* Email Direct */}
          <ContentCard
            icon={Mail}
            title="Email Directly"
            description="Prefer to email? I'm available at samantha@thecandidheart.com for direct communication about your needs and projects."
            variant="primary"
          >
            <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground mb-3">
              <a href="mailto:samantha@thecandidheart.com">Send Email</a>
            </Button>
            <p className="font-sans text-xs text-foreground text-center">
              <Clock className="h-3 w-3 inline mr-1" />
              Response within 24 hours
            </p>
          </ContentCard>
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section 
        size="large" 
        background={false}
        className="bg-card/50"
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`font-serif ${DESIGN_SYSTEM.typography.h2} font-semibold text-foreground mb-6`}>
              Send Me a Message
            </h2>
            <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-foreground`}>
              Whether you have questions, want to share your story, or are ready to explore working together, 
              I'd love to hear from you. Every message is read personally and responded to thoughtfully.
            </p>
          </div>

          <Card className="bg-card border border-border/50 shadow-lg">
            <CardHeader>
              <CardTitle className="font-serif text-2xl font-semibold text-foreground text-center">
                Let's Start a Conversation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="font-sans text-sm font-medium text-foreground mb-2 block">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="font-sans text-sm font-medium text-foreground mb-2 block">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="font-sans text-sm font-medium text-foreground mb-2 block">
                    What brings you here? *
                  </label>
                  <Select value={formData.inquiryType} onValueChange={handleSelectChange} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="healing">Healing & Trauma Recovery</SelectItem>
                      <SelectItem value="strategy">Business Strategy & Copywriting</SelectItem>
                      <SelectItem value="collaboration">Collaboration & Partnership</SelectItem>
                      <SelectItem value="general">General Question</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="font-sans text-sm font-medium text-foreground mb-2 block">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full"
                    placeholder="Tell me about your story, your needs, or what you're hoping to explore..."
                  />
                </div>

                <div className="text-center">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans px-8"
                  >
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="text-center">
                  <p className="font-sans text-xs text-foreground">
                    <Shield className="h-3 w-3 inline mr-1" />
                    Your information is secure and will never be shared without your permission.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Additional Info Section */}
      <Section 
        size="medium" 
        background={false}
        className="bg-gradient-to-br from-secondary/20 to-accent/20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className={`font-serif ${DESIGN_SYSTEM.typography.h3} font-semibold text-foreground mb-6`}>
            What to Expect
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-foreground mb-2">Quick Response</h4>
              <p className="font-sans text-sm text-foreground">
                I typically respond within 24 hours, often much sooner.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-foreground mb-2">Personal Touch</h4>
              <p className="font-sans text-sm text-foreground">
                Every message is read personally, not by an assistant or bot.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-foreground mb-2">Safe Space</h4>
              <p className="font-sans text-sm text-foreground">
                Your story is sacred. I hold everything you share with care and confidentiality.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;

