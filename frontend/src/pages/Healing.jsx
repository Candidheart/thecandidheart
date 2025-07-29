import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, BookOpen, PenTool, Shield, MapPin } from 'lucide-react';

const Healing = () => {
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
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-6 leading-tight">
              Healing & Clarity
            </h1>
            <p className="font-sans text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Betrayal trauma coaching, devotionals, and story-based content for the woman 
              who's ready to rebuild her identity and reclaim her voice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-lg px-8 py-3"
              >
                <Link to="/contact">
                  Start Your Healing Journey
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-sans text-lg px-8 py-3"
              >
                <Link to="/about">My Story</Link>
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
              Healing is a System
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Recovery isn't magic — it's methodology. I help you build frameworks 
              that support your healing even when motivation fails. Every wound can become wisdom, 
              and every story matters in the sacred work of becoming whole.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Compassionate Framework
              </h3>
              <p className="font-sans text-muted-foreground">
                Healing happens in the space between structure and softness, 
                where your humanity is honored alongside your growth.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Story-Based Approach
              </h3>
              <p className="font-sans text-muted-foreground">
                Your story is not your shame — it's your strength. 
                We work with narrative as a tool for healing and integration.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <PenTool className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Poetry as Medicine
              </h3>
              <p className="font-sans text-muted-foreground">
                Words have power to heal, to clarify, to transform. 
                Poetry becomes a framework for feeling seen and understood.
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
              Healing Offerings
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              Resources, frameworks, and support for women ready to rebuild their identity 
              and reclaim their voice after betrayal trauma.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {healingOfferings.map((offering, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all-smooth border-2 hover:border-primary/30 bg-[#C8A25C]">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <offering.icon className="h-8 w-8 text-primary mr-3" />
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
                    {offering.available ? (
                      <Button 
                        asChild 
                        variant={offering.isCollaboration ? "outline" : "default"}
                        className={offering.isCollaboration ? 
                          "border-accent text-accent hover:bg-accent hover:text-accent-foreground" :
                          offering.isSchoolProgram ?
                          "bg-accent hover:bg-accent/90 text-accent-foreground" :
                          "bg-primary hover:bg-primary/90 text-primary-foreground"
                        }
                      >
                        <Link to={offering.isSchoolProgram ? "/say-it-brave" : "/contact"}>
                          {offering.isCollaboration ? "Collaborate" : 
                           offering.isSchoolProgram ? "Learn More" : "Get Started"}
                        </Link>
                      </Button>
                    ) : (
                      <Button disabled variant="outline">
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="font-serif text-2xl md:text-3xl text-foreground italic mb-8 leading-relaxed">
            "I am not the same woman who entered this wilderness, and I am grateful. 
            She was beautiful, but she was not free."
          </blockquote>
          <p className="font-sans text-lg text-muted-foreground">
            — From "Systems of Grace"
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="font-sans text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're in the wilderness of betrayal trauma or ready to rebuild your identity, 
            I'm here to walk alongside you. Your story isn't over — it's just beginning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans"
            >
              <Link to="/contact">Start Here</Link>
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

export default Healing;

