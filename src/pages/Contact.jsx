import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Heart, Lightbulb, Mail, Calendar, MessageCircle, Send } from 'lucide-react';

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

  const contactMethods = [
    {
      icon: Heart,
      title: "Healing & Clarity Coaching",
      description: "Ready to begin your healing journey? Let's explore how I can support you in rebuilding and reclaiming your voice.",
      action: "Book Discovery Call",
      color: "primary"
    },
    {
      icon: Lightbulb,
      title: "Soulful Strategy Services",
      description: "Need copywriting, automation, or strategic clarity for your business? Let's discuss how to scale with integrity.",
      action: "Schedule Consultation",
      color: "accent"
    },
    {
      icon: MessageCircle,
      title: "General Inquiry",
      description: "Have questions about my work, want to collaborate, or just need to connect? I'd love to hear from you.",
      action: "Send Message",
      color: "secondary"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-secondary/20 via-background to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-6">
            Let's Connect
          </h1>
          <p className="font-sans text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            This is your digital front porch — a safe space to explore what's possible 
            when healing meets strategy and soul meets system.
          </p>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're seeking healing, building strategy, or simply need someone 
            who understands the journey, I'm here to listen and support.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              How Can I Support You?
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the path that feels right for where you are in your journey. 
              Every conversation begins with understanding your unique story and needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              const colorClasses = {
                primary: "border-primary/30 hover:border-primary/50 bg-primary/5",
                accent: "border-accent/30 hover:border-accent/50 bg-accent/5",
                secondary: "border-secondary hover:border-secondary/80 bg-secondary/20"
              };
              
              return (
                <Card key={index} className={`group hover:shadow-lg transition-all-smooth border-2 ${colorClasses[method.color]}`}>
                  <CardContent className="p-8 text-center">
                    <div className={`rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 ${
                      method.color === 'primary' ? 'bg-primary/10' :
                      method.color === 'accent' ? 'bg-accent/10' : 'bg-secondary'
                    }`}>
                      <IconComponent className={`h-8 w-8 ${
                        method.color === 'primary' ? 'text-primary' :
                        method.color === 'accent' ? 'text-accent' : 'text-secondary-foreground'
                      }`} />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                      {method.title}
                    </h3>
                    <p className="font-sans text-muted-foreground mb-6 leading-relaxed">
                      {method.description}
                    </p>
                    <Button 
                      className={`w-full ${
                        method.color === 'primary' ? 'bg-primary hover:bg-primary/90 text-primary-foreground' :
                        method.color === 'accent' ? 'bg-accent hover:bg-accent/90 text-accent-foreground' :
                        'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
                      }`}
                    >
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Send Me a Message
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Share what's on your heart. I read every message personally and respond 
              within 24-48 hours. Your story matters to me.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="font-serif text-2xl text-foreground text-center">
                Let's Start the Conversation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-sans text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="What should I call you?"
                      className="bg-input border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-sans text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="bg-input border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block font-sans text-sm font-medium text-foreground mb-2">
                    What brings you here? *
                  </label>
                  <Select onValueChange={handleSelectChange} required>
                    <SelectTrigger className="bg-input border-border focus:border-primary">
                      <SelectValue placeholder="Choose what resonates most..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="healing">Healing & Trauma Recovery</SelectItem>
                      <SelectItem value="coaching">Personal Coaching</SelectItem>
                      <SelectItem value="copywriting">Copywriting Services</SelectItem>
                      <SelectItem value="automation">AI Automation</SelectItem>
                      <SelectItem value="strategy">Business Strategy</SelectItem>
                      <SelectItem value="collaboration">Collaboration Opportunity</SelectItem>
                      <SelectItem value="other">Something Else</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-sans text-sm font-medium text-foreground mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Share what's on your heart. Where are you in your journey? What support are you seeking? I'm here to listen."
                    rows={6}
                    className="bg-input border-border focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>

                <p className="font-sans text-xs text-muted-foreground text-center">
                  I typically respond within 24-48 hours. Your information is kept private and secure.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Direct Contact Info */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Other Ways to Connect
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-all-smooth">
              <CardContent className="p-8 text-center">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Email Me Directly
                </h3>
                <p className="font-sans text-muted-foreground mb-4">
                  For urgent matters or if you prefer email
                </p>
                <a 
                  href="mailto:hello@samanthajosette.com" 
                  className="font-sans text-primary hover:text-primary/80 transition-colors"
                >
                  hello@samanthajosette.com
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all-smooth">
              <CardContent className="p-8 text-center">
                <Calendar className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Book a Call
                </h3>
                <p className="font-sans text-muted-foreground mb-4">
                  Ready to dive deeper? Schedule a discovery call
                </p>
                <Button 
                  asChild 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    View Calendar
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="font-serif text-2xl md:text-3xl text-foreground italic mb-8 leading-relaxed">
            "This is your digital front porch — a sacred creative studio where trauma survivors 
            feel safe enough to explore healing and small business owners feel grounded enough 
            to hire me for strategy."
          </blockquote>
          <p className="font-sans text-lg text-muted-foreground">
            Thank you for being here. Your journey matters, and I'm honored to witness it.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;

