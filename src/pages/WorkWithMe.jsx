import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Lightbulb, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import StripeCheckout from '@/components/StripeCheckout';

const WorkWithMe = () => {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  const handlePurchase = (service) => {
    setSelectedService(service);
    setCheckoutOpen(true);
  };

  const handleCheckoutSuccess = (result) => {
    setPurchaseSuccess(true);
    console.log('Purchase successful:', result);
    // Here you would typically send the result to your backend
  };
  const healingServices = [
    {
      title: "Shattered Into One Framework",
      description: "Comprehensive healing program for women rebuilding after betrayal trauma, integrating identity work with practical systems.",
      duration: "12-week program",
      price: "Investment: $2,997",
      features: [
        "Weekly 60-minute sessions",
        "Personalized healing framework",
        "Morning Pages for the Healing Heart",
        "Email support between sessions",
        "Say It Brave community access"
      ]
    },
    {
      title: "Empathy Audits",
      description: "Deep-dive assessment for organizations ready to build trauma-informed, neurodivergent-friendly systems and culture.",
      duration: "3-week intensive",
      price: "Investment: $4,997",
      features: [
        "Comprehensive system analysis",
        "Team empathy mapping",
        "Trauma-informed recommendations",
        "Implementation roadmap",
        "Follow-up optimization sessions"
      ]
    },
    {
      title: "Candid Copy & Automation Studio",
      description: "Brand voice development and ethical AI automation that honors your authentic voice while scaling your impact.",
      duration: "4-6 weeks",
      price: "Starting at $3,500",
      features: [
        "Brand voice development",
        "Website copy (5-7 pages)",
        "Ethical AI automation setup",
        "Email sequences that convert",
        "2 rounds of revisions"
      ]
    }
  ];

  const creatingServices = [
    {
      title: "CustodyAnchor & Family Apps",
      description: "Family-centered digital tools and apps designed to support co-parenting, custody transitions, and child wellbeing.",
      duration: "Custom timeline",
      price: "Contact for pricing",
      features: [
        "Custom app development",
        "Family-centered design",
        "Trauma-informed features",
        "Ongoing support & updates",
        "Training for family use"
      ]
    },
    {
      title: "Speaking & Workshops",
      description: "Keynotes and creative team intensives on ethical AI, brand voice, trauma-informed systems, and legacy work.",
      duration: "1-3 days",
      price: "Starting at $2,500",
      features: [
        "Customized keynote presentations",
        "Interactive workshop facilitation",
        "Team intensive sessions",
        "Follow-up resources",
        "Implementation support"
      ]
    },
    {
      title: "SNUG & Creative Tools",
      description: "Digital products and creative tools designed for neurodivergent creators, overwhelmed parents, and conscious entrepreneurs.",
      duration: "Ongoing access",
      price: "Starting at $97",
      features: [
        "Digital product suite",
        "Creative templates & tools",
        "Neurodivergent-friendly design",
        "Community access",
        "Regular updates & additions"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-secondary/20 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-6">
            Explore The Garden
          </h1>
          <p className="font-sans text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            From healing and building to creating and speaking—everything grows from the same soil. 
            Choose what calls to you right now.
          </p>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            You're not too much. You're just too whole for a template. 
            Not just strategy—it's stewardship.
          </p>
        </div>
      </section>

      {/* Healing Services */}
      <section id="healing" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center mb-6">
              <Heart className="h-12 w-12 text-primary mr-4" />
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
                Healing & Building
              </h2>
            </div>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              Books, courses, and coaching for rebuilding identity and business with integrity. 
              From trauma recovery to ethical AI automation—all rooted in lived experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {healingServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all-smooth border-2 hover:border-primary/30">
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-foreground mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="font-sans text-muted-foreground">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <p className="font-sans text-sm text-muted-foreground mb-1">
                      {service.duration}
                    </p>
                    <p className="font-sans text-lg font-semibold text-primary">
                      {service.price}
                    </p>
                  </div>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                        <span className="font-sans text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2">
                    <Button 
                      onClick={() => handlePurchase(service)}
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Purchase Now
                    </Button>
                    <Button 
                      asChild 
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <Link to="/contact">
                        Ask Questions
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Creating & Speaking Services */}
      <section id="creating" className="py-16 lg:py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center mb-6">
              <Lightbulb className="h-12 w-12 text-accent mr-4" />
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
                Creating & Speaking
              </h2>
            </div>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              Apps, tools, and keynotes for organizations ready to embrace ethical AI, 
              trauma-informed systems, and values-aligned growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {creatingServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all-smooth border-2 hover:border-accent/30">
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-foreground mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="font-sans text-muted-foreground">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <p className="font-sans text-sm text-muted-foreground mb-1">
                      {service.duration}
                    </p>
                    <p className="font-sans text-lg font-semibold text-accent">
                      {service.price}
                    </p>
                  </div>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-accent mr-2 mt-1 flex-shrink-0" />
                        <span className="font-sans text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2">
                    <Button 
                      onClick={() => handlePurchase(service)}
                      className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                    >
                      Purchase Now
                    </Button>
                    <Button 
                      asChild 
                      variant="outline"
                      className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    >
                      <Link to="/contact">
                        Get Quote
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              How We Work Together
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              Every journey begins with a conversation. Here's what you can expect 
              when you choose to work with me.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                1. Discovery Call
              </h3>
              <p className="font-sans text-muted-foreground">
                We'll explore your needs, goals, and vision to determine the best path forward. 
                This is where we ensure we're a perfect fit.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                2. Custom Strategy
              </h3>
              <p className="font-sans text-muted-foreground">
                I'll create a personalized approach that honors your unique story, 
                challenges, and aspirations. No cookie-cutter solutions here.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                3. Transformation
              </h3>
              <p className="font-sans text-muted-foreground">
                Through our work together, you'll gain clarity, build systems, 
                and create sustainable change that aligns with your values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="font-sans text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're seeking healing or building strategy, the first step is always 
            a conversation. Let's explore what's possible together.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-lg px-8 py-3"
          >
            <Link to="/contact">
              Schedule Your Discovery Call <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Stripe Checkout Modal */}
      <StripeCheckout
        service={selectedService}
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        onSuccess={handleCheckoutSuccess}
      />

      {/* Success Message */}
      {purchaseSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md">
            <CardContent className="p-8 text-center">
              <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Purchase Successful!
              </h3>
              <p className="font-sans text-muted-foreground mb-6">
                Thank you for your purchase. You'll receive a confirmation email shortly with next steps.
              </p>
              <Button 
                onClick={() => setPurchaseSuccess(false)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Continue
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default WorkWithMe;

