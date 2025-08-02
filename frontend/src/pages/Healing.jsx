import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, BookOpen, PenTool, Shield, MapPin, Star, Sparkles } from 'lucide-react';
import Hero from '@/components/ui/hero';
import Section from '@/components/ui/section';
import ContentCard from '@/components/ui/content-card';
import { DESIGN_SYSTEM } from '@/lib/design-system';

const Healing = () => {
  const heroDecorativeElements = [
    { icon: <Heart className="h-12 w-12" />, position: 'top-20 left-16', color: 'text-primary/30', delay: 1 },
    { icon: <Star className="h-12 w-12" />, position: 'top-40 right-20', color: 'text-accent/30', delay: 2 },
    { icon: <Sparkles className="h-12 w-12" />, position: 'bottom-40 left-1/4', color: 'text-primary/20', delay: 1.5 }
  ];

  const offeringsDecorativeElements = [
    { icon: <BookOpen className="h-16 w-16" />, position: 'top-20 right-32', color: 'text-primary/20', delay: 1.5 }
  ];

  const healingOfferings = [
    {
      icon: BookOpen,
      title: "Shattered Into One",
      subtitle: "Poetry + Journal",
      description: "A collection of poetry and guided journaling for women navigating betrayal trauma and identity rebuilding.",
      features: [
        "Poetry for each stage of healing",
        "Guided journal prompts",
        "Framework for integration",
        "Community support"
      ],
      price: "Coming Soon",
      available: false
    },
    {
      icon: PenTool,
      title: "Morning Pages for the Healing Heart",
      subtitle: "Daily Practice Guide",
      description: "A structured approach to morning pages specifically designed for trauma survivors and those in recovery.",
      features: [
        "30-day guided practice",
        "Trauma-informed prompts",
        "Progress tracking tools",
        "Audio meditations"
      ],
      price: "Coming Soon",
      available: false
    },
    {
      icon: Shield,
      title: "Say It Brave",
      subtitle: "Children's Book + Boundaries Class",
      description: "A children's book about boundaries paired with a class for parents on teaching healthy boundaries to kids. Also available as school assemblies.",
      features: [
        "Illustrated children's book",
        "Parent workshop series",
        "School assembly program",
        "Family activity guides",
        "Age-appropriate scripts"
      ],
      price: "Available Now",
      available: true,
      isSchoolProgram: true
    },
    {
      icon: MapPin,
      title: "Retreat/Compound Vision",
      subtitle: "Collaborative Healing Space",
      description: "A vision for a healing retreat space where women can come to rebuild, create, and integrate their stories.",
      features: [
        "Healing-centered design",
        "Creative workshops",
        "Community building",
        "Collaboration opportunities"
      ],
      price: "Partnership Opportunities",
      available: true,
      isCollaboration: true
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Healing & Clarity"
        subtitle="Betrayal trauma coaching, devotionals, and story-based content for the woman who's ready to rebuild her identity and reclaim her voice."
        decorativeElements={heroDecorativeElements}
        size="large"
        badge={{ icon: Heart, text: "Your Healing Matters" }}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans"
          >
            <Link to="/contact">
              Start Your Healing Journey
            </Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-sans"
          >
            <Link to="/about">My Story</Link>
          </Button>
        </div>
      </Hero>

      {/* Offerings Section */}
      <Section 
        size="large" 
        background={true}
        decorativeElements={offeringsDecorativeElements}
      >
        <div className="text-center mb-16">
          <h2 className={`font-serif ${DESIGN_SYSTEM.typography.h2} font-semibold text-foreground mb-6`}>
            Healing Resources & Offerings
          </h2>
          <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-gray-800 max-w-3xl mx-auto`}>
            From poetry to practical tools, these offerings are designed to support your healing journey 
            and help you reclaim your voice and power.
          </p>
        </div>

        <div className={DESIGN_SYSTEM.layouts.grid.cards}>
          {healingOfferings.map((offering, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30 bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <offering.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className={`font-serif ${DESIGN_SYSTEM.typography.h3} font-semibold text-foreground mb-2`}>
                    {offering.title}
                  </h3>
                  <p className={`font-sans ${DESIGN_SYSTEM.typography.small} text-primary font-medium mb-4`}>
                    {offering.subtitle}
                  </p>
                  <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-gray-800 mb-6`}>
                    {offering.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  {offering.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Star className="h-4 w-4 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span className={`font-sans ${DESIGN_SYSTEM.typography.small} text-gray-800`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <p className={`font-sans ${DESIGN_SYSTEM.typography.body} font-semibold text-primary mb-4`}>
                    {offering.price}
                  </p>
                  
                  {offering.available ? (
                    <div className="space-y-3">
                      {offering.isSchoolProgram && (
                        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-sans">
                          <Link to="/say-it-brave">Learn More</Link>
                        </Button>
                      )}
                      {offering.isCollaboration && (
                        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans">
                          <Link to="/contact">Explore Partnership</Link>
                        </Button>
                      )}
                      {!offering.isSchoolProgram && !offering.isCollaboration && (
                        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans">
                          <Link to="/contact">Get Started</Link>
                        </Button>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <Button disabled className="w-full bg-muted text-foreground font-sans cursor-not-allowed">
                        Coming Soon
                      </Button>
                      <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-sans">
                        <Link to="/contact">Join Waitlist</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Philosophy Section */}
      <Section 
        size="large" 
        background={false}
        className="bg-gradient-to-br from-gray-100 to-gray-200"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`font-serif ${DESIGN_SYSTEM.typography.h2} font-semibold text-foreground mb-6`}>
            My Approach to Healing
          </h2>
          <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-gray-800 mb-12 max-w-3xl mx-auto`}>
            Healing isn't linear, and it doesn't happen in isolation. My approach honors the complexity 
            of your journey while providing practical tools for transformation.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className={`font-serif ${DESIGN_SYSTEM.typography.h3} font-semibold text-foreground mb-4`}>
                Trauma-Informed
              </h3>
              <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-gray-800`}>
                Every resource and approach honors your nervous system and respects your healing timeline.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <PenTool className="h-8 w-8 text-accent" />
              </div>
              <h3 className={`font-serif ${DESIGN_SYSTEM.typography.h3} font-semibold text-foreground mb-4`}>
                Creative Expression
              </h3>
              <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-gray-800`}>
                Poetry, writing, and creative practices as pathways to healing and self-discovery.
              </p>
            </div>

            <div>
              <div className="h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className={`font-serif ${DESIGN_SYSTEM.typography.h3} font-semibold text-foreground mb-4`}>
                Community-Centered
              </h3>
              <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-gray-800`}>
                Healing happens in connection. Safe spaces for sharing, learning, and growing together.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section 
        size="large" 
        background={false}
        className="bg-gradient-to-br from-gray-50 to-gray-100"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`font-serif ${DESIGN_SYSTEM.typography.h2} font-semibold text-foreground mb-6`}>
            Ready to Begin Your Healing Journey?
          </h2>
          <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-gray-800 mb-8 max-w-2xl mx-auto`}>
            Whether you're just beginning to explore healing or ready to dive deep, 
            I'm here to support you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans">
              <Link to="/contact">Start Your Journey</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-foreground text-foreground hover:bg-foreground hover:text-background font-sans">
              <Link to="/poetry">Read My Poetry</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Healing;

