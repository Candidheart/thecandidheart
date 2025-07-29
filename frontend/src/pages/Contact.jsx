import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Heart, Mail, Calendar, MessageCircle, Send, ArrowRight, Clock, Shield } from 'lucide-react';

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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-secondary/20 via-background to-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
          <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-6">
            Let's Connect
          </h1>
          <p className="font-sans text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            This is your digital front porch — a safe space where healing meets strategy 
            and every conversation begins with understanding your unique story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-lg px-8 py-3"
            >
              <Link to="/book-call">
                Book a Call <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-sans text-lg px-8 py-3"
            >
              <a href="#message-form">Send a Message</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Connect Options */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Book a Call */}
            <Card className="group hover:shadow-lg transition-all border-2 border-primary/20 hover:border-primary/40 bg-[#C8A25C]">
              <CardContent className="p-8 text-center">
                <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 bg-primary/10">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Book a Discovery Call
                </h3>
                <p className="font-sans text-muted-foreground mb-6 leading-relaxed">
                  Ready to explore working together? Let's have a conversation about your goals, 
                  challenges, and how I might support your journey.
                </p>
                <Button 
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Link to="/book-call">
                    Schedule Now
                  </Link>
                </Button>
                <p className="font-sans text-xs text-muted-foreground mt-3">
                  <Clock className="h-3 w-3 inline mr-1" />
                  Free 30-minute consultation available
                </p>
              </CardContent>
            </Card>

            {/* Send Message */}
            <Card className="group hover:shadow-lg transition-all border-2 border-accent/20 hover:border-accent/40 bg-[#C8A25C]">
              <CardContent className="p-8 text-center">
                <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 bg-accent/10">
                  <MessageCircle className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Send a Message
                </h3>
                <p className="font-sans text-muted-foreground mb-6 leading-relaxed">
                  Have questions, want to share your story, or explore collaboration? 
                  I read every message personally and respond thoughtfully.
                </p>
                <Button 
                  asChild
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <a href="#message-form">
                    Write to Me
                  </a>
                </Button>
                <p className="font-sans text-xs text-muted-foreground mt-3">
                  <Shield className="h-3 w-3 inline mr-1" />
                  Response within 24-48 hours
                </p>
              </CardContent>
            </Card>

            {/* Email Direct */}
            <Card className="group hover:shadow-lg transition-all border-2 border-secondary/40 hover:border-secondary/60 bg-[#C8A25C]">
              <CardContent className="p-8 text-center">
                <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 bg-secondary/20">
                  <Mail className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Email Me Directly
                </h3>
                <p className="font-sans text-muted-foreground mb-6 leading-relaxed">
                  Prefer email? Send me a note directly. Perfect for detailed inquiries, 
                  collaboration ideas, or when you need a more private conversation.
                </p>
                <Button 
                  asChild
                  className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                >
                  <a href="mailto:hello@samanthajosette.com">
                    hello@samanthajosette.com
                  </a>
                </Button>
                <p className="font-sans text-xs text-muted-foreground mt-3">
                  <Heart className="h-3 w-3 inline mr-1" />
                  For urgent or sensitive matters
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Message Form */}
      <section id="message-form" className="py-16 lg:py-24 bg-card/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Share What's on Your Heart
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Whether you're seeking healing, building strategy, or simply need someone 
              who understands the journey — your story matters to me.
            </p>
          </div>

          <Card className="max-w-2xl mx-auto border-2 border-primary/20 bg-[#C8A25C]">
            <CardHeader className="text-center">
              <CardTitle className="font-serif text-2xl text-foreground">
                Let's Start the Conversation
              </CardTitle>
              <p className="font-sans text-muted-foreground">
                Take your time. Share what feels important. I'm here to listen.
              </p>
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
                      className="border-primary/30 focus:border-primary"
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
                      className="border-primary/30 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block font-sans text-sm font-medium text-foreground mb-2">
                    What brings you here? *
                  </label>
                  <Select onValueChange={handleSelectChange} required>
                    <SelectTrigger className="border-primary/30 focus:border-primary">
                      <SelectValue placeholder="Choose what resonates most..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="healing">Healing & Trauma Recovery</SelectItem>
                      <SelectItem value="clarity">Clarity Session</SelectItem>
                      <SelectItem value="copywriting">Copy & Messaging</SelectItem>
                      <SelectItem value="automation">Automation & Systems</SelectItem>
                      <SelectItem value="strategy">Business Strategy</SelectItem>
                      <SelectItem value="monthly">Ongoing Support</SelectItem>
                      <SelectItem value="collaboration">Collaboration</SelectItem>
                      <SelectItem value="other">Something Else</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-sans text-sm font-medium text-foreground mb-2">
                    Your Message *
                  </label>
                  <p className="font-sans text-xs text-muted-foreground mb-3 italic">
                    Share your story, your challenges, your dreams. Where are you in your journey? 
                    What support are you seeking? There's no wrong way to begin.
                  </p>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="I'm here to listen..."
                    rows={6}
                    className="border-primary/30 focus:border-primary resize-none"
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

                <div className="text-center space-y-2">
                  <p className="font-sans text-xs text-muted-foreground">
                    I typically respond within 24-48 hours. Your information is kept private and secure.
                  </p>
                  <p className="font-sans text-xs text-muted-foreground italic">
                    "Every conversation begins with curiosity and care."
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-16 lg:py-24 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="font-serif text-2xl md:text-3xl text-foreground italic mb-8 leading-relaxed">
            "This is your digital front porch — a sacred creative studio where trauma survivors 
            feel safe enough to explore healing and business owners feel grounded enough 
            to trust me with their strategy."
          </blockquote>
          <p className="font-sans text-lg text-muted-foreground mb-6">
            Thank you for being here. Your journey matters, and I'm honored to witness it.
          </p>
          <div className="flex justify-center">
            <Button 
              asChild 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href="https://samanthajosette.me" target="_blank" rel="noopener noreferrer">
                Visit My Personal Portal
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

