import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, Smartphone, Gamepad2, Youtube, Heart, Lightbulb } from 'lucide-react';

const Creating = () => {
  const creativeProjects = [
    {
      icon: Smartphone,
      title: "CustodyAnchor",
      subtitle: "Documentation App",
      description: "A secure, user-friendly app designed to help parents document custody-related interactions and maintain organized records for legal proceedings.",
      features: [
        "Secure cloud storage",
        "Timestamp verification",
        "Photo and text documentation",
        "Export capabilities for legal use"
      ],
      status: "In Development",
      category: "Legal Tech"
    },
    {
      icon: Heart,
      title: "SNUG",
      subtitle: "Emotional Regulation App for Kids",
      description: "An interactive app that helps children identify, understand, and regulate their emotions through games, stories, and guided activities.",
      features: [
        "Age-appropriate emotion tools",
        "Interactive games and stories",
        "Parent dashboard and insights",
        "Trauma-informed design"
      ],
      status: "In Development",
      category: "Child Development"
    },
    {
      icon: Gamepad2,
      title: "My Monster Garage",
      subtitle: "Children's Collector Tracker",
      description: "A fun, engaging app that helps kids track their collections (cards, toys, etc.) while learning organization and responsibility skills.",
      features: [
        "Visual collection tracking",
        "Achievement system",
        "Trading marketplace",
        "Educational content"
      ],
      status: "Concept Phase",
      category: "Education & Fun"
    },
    {
      icon: Youtube,
      title: "Bizzy Bees",
      subtitle: "Emotional Healing YouTube Channel",
      description: "A YouTube channel focused on emotional healing content for families, featuring gentle guidance, activities, and resources for processing big feelings.",
      features: [
        "Family-friendly content",
        "Healing-focused activities",
        "Expert guest interviews",
        "Community building"
      ],
      status: "Planning",
      category: "Content & Community"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Palette className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-6 leading-tight">
              Creating & Innovating
            </h1>
            <p className="font-sans text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Passion projects I'm developing that blend technology, healing, and human connection. 
              These are the creative expressions of my heart and mind working together.
            </p>
            
            {/* Note about projects */}
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 max-w-2xl mx-auto mb-8">
              <div className="flex items-start space-x-3">
                <Lightbulb className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    Projects in Progress
                  </h3>
                  <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                    These are passion projects I'm actively developing and deeply passionate about. 
                    Each one represents a piece of my vision for how technology can serve healing, 
                    connection, and human flourishing.
                  </p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-8 lg:py-12 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Technology with Heart
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I believe technology should serve humanity, not the other way around. 
              Each project I create is designed to support healing, connection, and human flourishing. 
              These aren't just apps — they're tools for building a more compassionate world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Healing-Centered Design
              </h3>
              <p className="font-sans text-muted-foreground">
                Every interface, interaction, and feature is designed with trauma-informed principles 
                and emotional safety at the forefront.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Human-First Technology
              </h3>
              <p className="font-sans text-muted-foreground">
                Technology that enhances human connection rather than replacing it, 
                supporting real relationships and authentic growth.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Creative Problem-Solving
              </h3>
              <p className="font-sans text-muted-foreground">
                Each project addresses real problems I've experienced or witnessed, 
                creating solutions that are both innovative and deeply needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Current Projects
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              Each project represents a different aspect of my vision for technology that serves healing, 
              connection, and human flourishing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {creativeProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all-smooth border-2 hover:border-primary/30 bg-[#C8A25C]">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <project.icon className="h-8 w-8 text-primary mr-3" />
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="font-sans text-sm text-accent">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                    <span className="bg-secondary/50 text-muted-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {project.status}
                    </span>
                  </div>

                  <p className="font-sans text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <ul className="font-sans text-sm text-muted-foreground space-y-2 mb-8">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>

                  <Button 
                    asChild 
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Link to="/contact">
                      Learn More & Collaborate
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-8">
            The Bigger Vision
          </h2>
          <blockquote className="font-serif text-xl md:text-2xl text-foreground italic mb-8 leading-relaxed">
            "I'm not just building apps — I'm building bridges. Between technology and humanity. 
            Between healing and innovation. Between what is and what could be."
          </blockquote>
          <p className="font-sans text-lg text-muted-foreground mb-8">
            Each project is a piece of a larger puzzle: creating a world where technology serves 
            our deepest human needs for connection, healing, and growth. Where innovation doesn't 
            come at the cost of our humanity, but in service of it.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Want to Collaborate?
          </h2>
          <p className="font-sans text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            These projects are close to my heart, and I'm always open to collaboration with 
            like-minded individuals who share the vision of technology that serves humanity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans"
            >
              <Link to="/contact">Let's Create Together</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-foreground text-foreground hover:bg-foreground hover:text-background font-sans"
            >
              <Link to="/about">Learn My Story</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Creating;

