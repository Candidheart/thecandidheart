import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Heart, Mail, Calendar, MessageCircle, Send, ArrowRight, Clock, Shield } from 'lucide-react';
import Hero from '@/components/ui/hero';
import Section from '@/components/ui/section';
import ContentCard from '@/components/ui/content-card';
import FullPageBackground from '@/components/ui/full-page-background';
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



  return (
    <>
      <Helmet>
        <title>Contact Samantha Josette | The Candid Heart</title>
        <meta name="description" content="Get in touch with Samantha Josette for coaching, speaking, or collaboration. Whether you have questions or are ready to work together, I'd love to hear from you." />
        <meta name="keywords" content="contact Samantha Josette, coaching inquiry, speaking request, collaboration, get in touch, trauma-informed coaching" />
        <link rel="canonical" href="https://thecandidheart.com/contact" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact Samantha Josette | The Candid Heart" />
        <meta property="og:description" content="Get in touch with Samantha Josette for coaching, speaking, or collaboration." />
        <meta property="og:url" content="https://thecandidheart.com/contact" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Samantha Josette | The Candid Heart" />
        <meta name="twitter:description" content="Get in touch with Samantha Josette for coaching, speaking, or collaboration." />
      </Helmet>
      <FullPageBackground>
      {/* Hero Section */}
      <Hero
        title="Let's Connect"
        subtitle="This is your digital front porch — a safe space where healing meets strategy and every conversation begins with understanding your unique story."

        size="medium"
        background={false}
        badge={{ icon: Heart, text: "Ready to Begin" }}
      />

      {/* Quick Connect Options */}
      <Section 
        size="medium" 
        background={true}

      >
        <div className={DESIGN_SYSTEM.layouts.grid.threeCol}>
          {/* Book a Call */}
          <ContentCard
            icon={Calendar}
            title="Book a Discovery Call"
            description="Ready to explore working together? Let's have a conversation about your goals, challenges, and how I might support your journey."
            variant="primary"
          >
            <Button asChild className="">
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
            <Button asChild className="">
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
            <Button asChild variant="outline" className="">
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
        className=""
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`font-serif ${DESIGN_SYSTEM.typography.h2} font-semibold text-sage-800 mb-6`}>
              Send Me a Message
            </h2>
            <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-sage-700`}>
              Whether you have questions, want to share your story, or are ready to explore working together, 
              I'd love to hear from you. Every message is read personally and responded to thoughtfully.
            </p>
          </div>

          <Card className="">
            <CardHeader>
              <CardTitle className="font-serif text-2xl font-semibold text-sage-800 text-center">
                Let's Start a Conversation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="font-sans text-sm font-medium text-sage-700 mb-2 block">
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
                    <label htmlFor="email" className="font-sans text-sm font-medium text-sage-700 mb-2 block">
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
                  <label htmlFor="inquiryType" className="font-sans text-sm font-medium text-sage-700 mb-2 block">
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
                  <label htmlFor="message" className="font-sans text-sm font-medium text-sage-700 mb-2 block">
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
                    className=""
                  >
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="text-center">
                  <p className="font-sans text-xs text-sage-600">
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
        className=""
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className={`font-serif ${DESIGN_SYSTEM.typography.h3} font-semibold text-sage-800 mb-6`}>
            What to Expect
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-sage-800 mb-2">Quick Response</h4>
              <p className="font-sans text-sm text-sage-700">
                I typically respond within 24 hours, often much sooner.
              </p>
            </div>
            <div>
              <div className="">
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-sage-800 mb-2">Personal Touch</h4>
              <p className="font-sans text-sm text-sage-700">
                Every message is read personally, not by an assistant or bot.
              </p>
            </div>
            <div>
              <div className="">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-serif text-lg font-semibold text-sage-800 mb-2">Safe Space</h4>
              <p className="font-sans text-sm text-sage-700">
                Your story is sacred. I hold everything you share with care and confidentiality.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </FullPageBackground>
    </>
  );
};

export default Contact;

