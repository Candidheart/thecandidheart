import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, BookOpen, Zap, ArrowRight } from 'lucide-react';

const Building = () => {
  const buildingOfferings = [
    {
      icon: BookOpen,
      title: "Soulful Strategy",
      subtitle: "Book + Mini-Course",
      description: "The foundational framework for building a business that honors both your humanity and your goals. Strategy that doesn't sacrifice your soul.",
      features: [
        "Complete strategic framework",
        "Soul-led business principles",
        "Implementation worksheets",
        "Video course modules",
        "Community access"
      ],
      price: "$197",
      available: true,
      popular: true
    },
    {
      icon: Zap,
      title: "Candid Copy & Automation Studio",
      subtitle: "Done-With-You Service",
      description: "Strategic copywriting and AI automation systems for business owners who want to scale with integrity and authentic voice.",
      features: [
        "Brand voice development",
        "Strategic copy creation",
        "AI automation setup",
        "Email sequence design",
        "Performance optimization"
      ],
      price: "Starting at $3,500",
      available: true,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-secondary/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Lightbulb className="h-16 w-16 text-accent mx-auto mb-6" />
            <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-6 leading-tight">
              The Candid Heart Strategy
            </h1>
            <p className="font-sans text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Copywriting, AI automation, and clarity mapping for the business owner 
              who wants to scale with integrity and authentic voice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-sans text-lg px-8 py-3"
              >
                <Link to="/contact">
                  Build With Integrity <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-sans text-lg px-8 py-3"
              >
                <Link to="/about">My Approach</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 lg:py-24 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Strategy Meets Soul
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              You don't have to choose between structure and softness. The most powerful systems 
              honor both your humanity and your goals. Build a business that feels like home, 
              moves like breath, and converts without coercing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Clarity-First Strategy
              </h3>
              <p className="font-sans text-muted-foreground">
                Before tactics come clarity. We start with who you are and what you stand for, 
                then build systems that amplify your authentic voice.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Ethical Automation
              </h3>
              <p className="font-sans text-muted-foreground">
                AI and automation should enhance your humanity, not replace it. 
                We create systems that scale your impact while preserving your heart.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Voice-Led Copy
              </h3>
              <p className="font-sans text-muted-foreground">
                Your voice is your competitive advantage. We develop copy that sounds like you 
                on your best day, speaking to your people's deepest needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Building Offerings
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              Strategic frameworks and done-with-you services for business owners ready to scale 
              with integrity and build systems that honor their soul.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {buildingOfferings.map((offering, index) => (
              <Card key={index} className={`group hover:shadow-lg transition-all-smooth border-2 hover:border-accent/30 relative ${offering.popular ? 'ring-2 ring-accent/20' : ''}`}>
                {offering.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-sans font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <offering.icon className="h-8 w-8 text-accent mr-3" />
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-foreground">
                        {offering.title}
                      </h3>
                      <p className="font-sans text-sm text-accent">
                        {offering.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="font-sans text-muted-foreground mb-6 leading-relaxed">
                    {offering.description}
                  </p>
                  <ul className="font-sans text-sm text-muted-foreground space-y-2 mb-8">
                    {offering.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg font-semibold text-foreground">
                      {offering.price}
                    </span>
                    <Button 
                      asChild 
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                    >
                      <Link to="/contact">
                        Get Started
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
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              How We Work Together
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              A proven process that honors both your vision and your values, 
              creating systems that feel authentic and drive results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-accent text-accent-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-serif text-xl font-semibold">
                1
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Clarity & Foundation
              </h3>
              <p className="font-sans text-muted-foreground">
                We start with deep clarity work — understanding your values, voice, 
                and vision before building any systems or strategies.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent text-accent-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-serif text-xl font-semibold">
                2
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Strategy & Systems
              </h3>
              <p className="font-sans text-muted-foreground">
                Together we build the frameworks, copy, and automation systems 
                that will scale your impact while preserving your authentic voice.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent text-accent-foreground rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-serif text-xl font-semibold">
                3
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Launch & Optimize
              </h3>
              <p className="font-sans text-muted-foreground">
                We implement, test, and refine your systems, ensuring they perform 
                beautifully while feeling aligned with who you are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="font-serif text-2xl md:text-3xl text-foreground italic mb-8 leading-relaxed">
            "You can automate without abandoning your voice. 
            You can scale without sacrificing your soul."
          </blockquote>
          <p className="font-sans text-lg text-muted-foreground">
            — Core Philosophy of The Candid Heart Strategy
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Ready to Build Something Beautiful?
          </h2>
          <p className="font-sans text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're ready for the full strategy framework or need done-with-you support, 
            I'm here to help you build a business that feels like home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-sans"
            >
              <Link to="/contact">Start Building</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background font-sans"
            >
              <Link to="/about">Learn My Approach</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Building;

