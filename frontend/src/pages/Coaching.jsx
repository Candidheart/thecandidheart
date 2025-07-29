import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Heart, Users, Calendar, MessageCircle, Video, Mail, CheckCircle, ArrowRight, Clock, Star } from 'lucide-react';

const Coaching = () => {
  const coachingOptions = [
    {
      title: "Reclaim & Rebuild: The Elevated Model",
      subtitle: "6-Week Sacred Coaching Rhythm",
      description: "For women healing betrayal and reclaiming their voice through weekly themes, daily text prompts, and Zoom circles.",
      duration: "6 weeks",
      format: "Group coaching",
      includes: [
        "Weekly theme emails every Sunday",
        "Daily text prompts Monday-Friday", 
        "Weekly Zoom circles (Thursdays 7PM EST)",
        "Sacred healing progression from Stabilize to Rewrite",
        "Trauma-informed facilitation",
        "Private group community"
      ],
      pricing: "Beta launch: First 20 free, next 30 pay-what-you-can",
      cta: "Join Beta Program",
      link: "/beta-coaching",
      badge: "Beta Launch",
      color: "primary"
    },
    {
      title: "1:1 Healing & Strategy Sessions",
      subtitle: "Individual Deep Dive Support",
      description: "Personalized coaching for entrepreneurs healing from betrayal trauma while building values-aligned businesses.",
      duration: "60-90 minutes",
      format: "One-on-one",
      includes: [
        "Trauma-informed business strategy",
        "Values alignment assessment",
        "Boundary setting for entrepreneurs",
        "Healing-informed goal setting",
        "Custom action plans",
        "Follow-up support via email"
      ],
      pricing: "Starting at $275/session",
      cta: "Book Discovery Call",
      link: "/book-call",
      badge: "Most Popular",
      color: "accent"
    },
    {
      title: "Soulful Strategy Intensive",
      subtitle: "Half-Day Business Alignment",
      description: "Deep dive session to align your business strategy with your values and healing journey.",
      duration: "4 hours",
      format: "One-on-one intensive",
      includes: [
        "Complete business audit",
        "Values-based strategy development",
        "Brand voice clarification",
        "90-day implementation plan",
        "Resource library access",
        "30-day follow-up check-in"
      ],
      pricing: "$1,200 (payment plans available)",
      cta: "Schedule Intensive",
      link: "/book-call",
      badge: "Comprehensive",
      color: "secondary"
    }
  ];

  const testimonials = [
    {
      quote: "Samantha helped me see that my trauma wasn't a weakness in business—it was my superpower. Her approach is gentle but transformative.",
      author: "Rachel M.",
      role: "Creative Entrepreneur",
      rating: 5
    },
    {
      quote: "The Reclaim & Rebuild program gave me the structure I needed to heal while building my business. The daily texts kept me grounded.",
      author: "Jennifer L.",
      role: "Coach & Consultant",
      rating: 5
    },
    {
      quote: "Working with Samantha 1:1 was life-changing. She understands the intersection of healing and business like no one else.",
      author: "Maria S.",
      role: "Service Provider",
      rating: 5
    }
  ];

  const approach = [
    {
      icon: Heart,
      title: "Trauma-Informed",
      description: "Every session honors your nervous system and healing timeline"
    },
    {
      icon: Users,
      title: "Values-Aligned",
      description: "Business strategies that support your deepest values and mission"
    },
    {
      icon: Calendar,
      title: "Sustainable Pace",
      description: "Growth that doesn't compromise your well-being or recovery"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 text-sm font-sans">
              Coaching & Support
            </Badge>
            <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-8 leading-tight">
              Healing-Informed Coaching
            </h1>
            <p className="font-serif text-xl md:text-2xl text-accent mb-8 italic">
              Where Strategy Meets Self-Worth
            </p>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="font-sans text-lg text-muted-foreground mb-6 leading-relaxed">
                Coaching designed for entrepreneurs who are healing from betrayal trauma while 
                building businesses that honor their values. You don't have to choose between 
                success and staying true to yourself.
              </p>
              <div className="space-y-4 text-center">
                <p className="font-serif text-xl text-foreground">
                  You're not broken. You're in survival.
                </p>
                <p className="font-serif text-xl text-foreground">
                  And now, you're choosing to thrive.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-lg px-8 py-3"
              >
                <Link to="/book-call">
                  Book Discovery Call <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-sans text-lg px-8 py-3"
              >
                <Link to="#options">Explore Options</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              My Approach
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              Coaching that honors both your healing journey and your business goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {approach.map((item, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 bg-primary/10">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="font-sans text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Options */}
      <section id="options" className="py-16 lg:py-24 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Coaching Options
            </h2>
            <p className="font-sans text-lg text-muted-foreground">
              Choose the support that meets you where you are
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {coachingOptions.map((option, index) => (
              <Card key={index} className={`border-2 ${
                option.color === 'primary' ? 'border-primary/30 bg-primary/5' :
                option.color === 'accent' ? 'border-accent/30 bg-accent/5' :
                'border-secondary/50 bg-secondary/10'
              } hover:shadow-lg transition-all relative`}>
                {option.badge && (
                  <Badge className={`absolute -top-3 left-6 ${
                    option.color === 'primary' ? 'bg-primary text-primary-foreground' :
                    option.color === 'accent' ? 'bg-accent text-accent-foreground' :
                    'bg-secondary text-secondary-foreground'
                  }`}>
                    {option.badge}
                  </Badge>
                )}
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      {option.title}
                    </h3>
                    <p className="font-serif text-base text-accent italic mb-4">
                      {option.subtitle}
                    </p>
                    <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                      {option.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-primary" />
                        {option.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1 text-primary" />
                        {option.format}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-sans text-sm font-semibold text-foreground mb-3">
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {option.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="font-sans text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 p-4 bg-white/50 rounded-lg">
                    <p className="font-sans text-lg font-semibold text-foreground text-center">
                      {option.pricing}
                    </p>
                  </div>

                  <Button 
                    asChild 
                    className={`w-full ${
                      option.color === 'primary' ? 'bg-primary hover:bg-primary/90' :
                      option.color === 'accent' ? 'bg-accent hover:bg-accent/90' :
                      'bg-secondary hover:bg-secondary/90'
                    } text-white font-sans`}
                  >
                    <Link to={option.link}>
                      {option.cta}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Client Stories
            </h2>
            <p className="font-sans text-lg text-muted-foreground">
              Hear from entrepreneurs who've transformed their businesses and lives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="font-serif text-base text-foreground italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-sans text-sm font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="font-sans text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              How It Works
            </h2>
            <p className="font-sans text-lg text-muted-foreground">
              A simple process designed with your healing in mind
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="font-serif text-lg font-semibold text-primary">1</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Discovery Call
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  We'll talk about where you are in your healing journey and what kind of support 
                  would be most helpful. No pressure, just connection.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="font-serif text-lg font-semibold text-primary">2</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Choose Your Path
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  Based on our conversation, we'll determine whether group coaching, 1:1 sessions, 
                  or an intensive would be the best fit for your needs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="font-serif text-lg font-semibold text-primary">3</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Begin Your Journey
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  Start your coaching experience with the support, tools, and community you need 
                  to build a business that honors both your healing and your dreams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Ready to Begin?
          </h2>
          <p className="font-sans text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Your healing journey and your business dreams don't have to be separate paths. 
            Let's explore how they can support each other.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-lg px-12 py-3"
            >
              <Link to="/book-call">
                Book Your Discovery Call
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-sans text-lg px-8 py-3"
            >
              <Link to="/contact">
                Ask Questions First
              </Link>
            </Button>
          </div>

          <p className="font-sans text-sm text-muted-foreground italic">
            "This is your digital front porch — a sacred creative studio where strategy meets self-worth."
          </p>
        </div>
      </section>
    </div>
  );
};

export default Coaching;

