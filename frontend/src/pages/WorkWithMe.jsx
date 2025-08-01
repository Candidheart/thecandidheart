import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Lightbulb, Calendar, CheckCircle, ArrowRight, Star, Sparkles } from 'lucide-react';
import StripeCheckout from '@/components/StripeCheckout';
import Hero from '@/components/ui/hero';
import Section from '@/components/ui/section';
import ContentCard from '@/components/ui/content-card';
import { DESIGN_SYSTEM } from '@/lib/design-system';

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

  const heroDecorativeElements = [
    { icon: <Heart className="h-12 w-12" />, position: 'top-20 left-16', color: 'text-primary/30', delay: 1 },
    { icon: <Lightbulb className="h-12 w-12" />, position: 'top-40 right-20', color: 'text-accent/30', delay: 2 },
    { icon: <Star className="h-12 w-12" />, position: 'bottom-40 left-1/4', color: 'text-primary/20', delay: 1.5 }
  ];

  const healingDecorativeElements = [
    { icon: <Heart className="h-16 w-16" />, position: 'top-20 right-32', color: 'text-primary/20', delay: 1.5 }
  ];

  const strategyDecorativeElements = [
    { icon: <Lightbulb className="h-16 w-16" />, position: 'bottom-20 left-20', color: 'text-accent/20', delay: 1 }
  ];

  const healingServices = [
    {
      title: "Betrayal Trauma Recovery",
      description: "1:1 coaching for women navigating the aftermath of betrayal, rebuilding trust in themselves and their intuition.",
      duration: "12-week program",
      price: "Investment: $2,997",
      features: [
        "Weekly 60-minute sessions",
        "Personalized healing framework",
        "Journaling prompts and exercises",
        "Email support between sessions",
        "Resource library access"
      ]
    },
    {
      title: "Identity Rebuilding Intensive",
      description: "A deep-dive session for women ready to reclaim their voice and redefine who they are becoming.",
      duration: "3-hour intensive",
      price: "Investment: $497",
      features: [
        "Comprehensive identity mapping",
        "Values clarification exercise",
        "Personal mission statement",
        "90-day action plan",
        "Follow-up check-in session"
      ]
    },
    {
      title: "Poetry for Healing Workshop",
      description: "Group workshop using poetry and creative expression as tools for processing trauma and finding voice.",
      duration: "4-week series",
      price: "Investment: $297",
      features: [
        "Weekly 90-minute group sessions",
        "Poetry writing exercises",
        "Safe sharing space",
        "Take-home workbook",
        "Private community access"
      ]
    }
  ];

  const strategyServices = [
    {
      title: "Soulful Copy Strategy",
      description: "Website copy, email sequences, and sales pages that convert without compromising your authentic voice.",
      duration: "4-6 weeks",
      price: "Starting at $3,500",
      features: [
        "Brand voice development",
        "Website copy (5-7 pages)",
        "Email welcome sequence",
        "Sales page copy",
        "2 rounds of revisions"
      ]
    },
    {
      title: "AI Automation Setup",
      description: "Custom AI workflows and systems that save time while maintaining your personal touch.",
      duration: "2-3 weeks",
      price: "Starting at $1,997",
      features: [
        "Workflow analysis and mapping",
        "Custom AI tool setup",
        "Training and documentation",
        "30-day optimization period",
        "Ongoing support package"
      ]
    },
    {
      title: "Clarity Mapping Session",
      description: "Strategic planning session to align your business goals with your values and vision.",
      duration: "2-hour session",
      price: "Investment: $397",
      features: [
        "Business vision clarification",
        "Goal setting and prioritization",
        "Strategic roadmap creation",
        "Resource recommendations",
        "Follow-up action plan"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Choose Your Path"
        subtitle="Whether you're seeking healing and clarity or building systems for growth, I meet you where you are and guide you where you're going."
        decorativeElements={heroDecorativeElements}
        size="large"
        badge={{ icon: Sparkles, text: "Your Journey Matters" }}
      >
        <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-muted-foreground max-w-2xl mx-auto`}>
          You don't have to choose between structure and softness. 
          Healing is a strategy. So is clarity.
        </p>
      </Hero>

      {/* Healing Services */}
      <Section 
        size="large" 
        background={true}
        decorativeElements={healingDecorativeElements}
      >
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <Heart className="h-12 w-12 text-primary mr-4" />
            <h2 className={`font-serif ${DESIGN_SYSTEM.typography.h2} font-semibold text-foreground`}>
              Healing & Clarity Coaching
            </h2>
          </div>
          <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-muted-foreground max-w-3xl mx-auto`}>
            For the woman who's ready to rebuild her identity, reclaim her voice, 
            and create systems that honor her healing journey.
          </p>
        </div>

        <div className={DESIGN_SYSTEM.layouts.grid.threeCol}>
          {healingServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30 bg-card">
              <CardHeader>
                <CardTitle className={`font-serif ${DESIGN_SYSTEM.typography.h3} text-foreground mb-2`}>
                  {service.title}
                </CardTitle>
                <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-muted-foreground`}>
                  {service.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className={`font-sans ${DESIGN_SYSTEM.typography.small} text-muted-foreground mb-1`}>
                    {service.duration}
                  </p>
                  <p className={`font-sans ${DESIGN_SYSTEM.typography.body} font-semibold text-primary`}>
                    {service.price}
                  </p>
                </div>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                      <span className={`font-sans ${DESIGN_SYSTEM.typography.small} text-muted-foreground`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <Button 
                    onClick={() => handlePurchase(service)}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-sans"
                  >
                    Purchase Now
                  </Button>
                  <Button 
                    asChild 
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-sans"
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
      </Section>

      {/* Strategy Services */}
      <Section 
        size="large" 
        background={false}
        decorativeElements={strategyDecorativeElements}
        className="bg-card/50"
      >
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-6">
            <Lightbulb className="h-12 w-12 text-accent mr-4" />
            <h2 className={`font-serif ${DESIGN_SYSTEM.typography.h2} font-semibold text-foreground`}>
              Business Strategy & Systems
            </h2>
          </div>
          <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-muted-foreground max-w-3xl mx-auto`}>
            For the entrepreneur who wants to build something sustainable — 
            systems that honor both your humanity and your goals.
          </p>
        </div>

        <div className={DESIGN_SYSTEM.layouts.grid.threeCol}>
          {strategyServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-accent/30 bg-card">
              <CardHeader>
                <CardTitle className={`font-serif ${DESIGN_SYSTEM.typography.h3} text-foreground mb-2`}>
                  {service.title}
                </CardTitle>
                <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-muted-foreground`}>
                  {service.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <p className={`font-sans ${DESIGN_SYSTEM.typography.small} text-muted-foreground mb-1`}>
                    {service.duration}
                  </p>
                  <p className={`font-sans ${DESIGN_SYSTEM.typography.body} font-semibold text-accent`}>
                    {service.price}
                  </p>
                </div>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent mr-2 mt-1 flex-shrink-0" />
                      <span className={`font-sans ${DESIGN_SYSTEM.typography.small} text-muted-foreground`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2">
                  <Button 
                    onClick={() => handlePurchase(service)}
                    className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-sans"
                  >
                    Purchase Now
                  </Button>
                  <Button 
                    asChild 
                    variant="outline"
                    className="flex-1 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-sans"
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
      </Section>

      {/* CTA Section */}
      <Section 
        size="large" 
        background={false}
        className="bg-gradient-to-br from-primary/10 to-secondary/20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`font-serif ${DESIGN_SYSTEM.typography.h2} font-semibold text-foreground mb-6`}>
            Not Sure Where to Start?
          </h2>
          <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-muted-foreground mb-8 max-w-2xl mx-auto`}>
            Let's have a conversation about your unique needs and find the perfect path forward together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans">
              <Link to="/book-call">Book a Discovery Call</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-foreground text-foreground hover:bg-foreground hover:text-background font-sans">
              <Link to="/contact">Send Me a Message</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Stripe Checkout Modal */}
      {checkoutOpen && (
        <StripeCheckout
          isOpen={checkoutOpen}
          onClose={() => setCheckoutOpen(false)}
          onSuccess={handleCheckoutSuccess}
          service={selectedService}
        />
      )}
    </div>
  );
};

export default WorkWithMe;

