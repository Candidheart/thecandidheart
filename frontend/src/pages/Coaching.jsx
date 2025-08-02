import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Heart, Users, Calendar, MessageCircle, Video, Mail, CheckCircle, ArrowRight, Clock, Star, Sparkles } from 'lucide-react';
import Hero from '@/components/ui/hero';
import Section from '@/components/ui/section';
import ContentCard from '@/components/ui/content-card';
import { DESIGN_SYSTEM } from '@/lib/design-system';

const Coaching = () => {
  const heroDecorativeElements = [
    { icon: <Heart className="h-12 w-12" />, position: 'top-20 left-16', color: 'text-primary/30', delay: 1 },
    { icon: <Users className="h-12 w-12" />, position: 'top-40 right-20', color: 'text-accent/30', delay: 2 },
    { icon: <Star className="h-12 w-12" />, position: 'bottom-40 left-1/4', color: 'text-primary/20', delay: 1.5 }
  ];

  const optionsDecorativeElements = [
    { icon: <Calendar className="h-16 w-16" />, position: 'top-20 right-32', color: 'text-primary/20', delay: 1.5 }
  ];

  const approachDecorativeElements = [
    { icon: <Heart className="h-16 w-16" />, position: 'bottom-20 left-20', color: 'text-accent/20', delay: 1 }
  ];

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
      title: "Community-Centered",
      description: "Healing happens in connection with others who understand"
    },
    {
      icon: Calendar,
      title: "Structured Support",
      description: "Consistent touchpoints and accountability for sustainable change"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Sacred Coaching for Healing & Growth"
        subtitle="Whether you're healing from betrayal trauma or building a values-aligned business, I provide the structure, support, and sacred space you need to reclaim your voice and power."
        decorativeElements={heroDecorativeElements}
        size="large"
        badge={{ icon: Sparkles, text: "Your Journey Matters" }}
      />

      {/* Coaching Options */}
      <Section 
        size="large" 
        background={true}
        decorativeElements={optionsDecorativeElements}
      >
        <div className="text-center mb-16">
          <h2 className={`font-serif ${DESIGN_SYSTEM.typography.h2} font-semibold text-foreground mb-6`}>
            Choose Your Path
          </h2>
          <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-foreground max-w-3xl mx-auto`}>
            From group programs to intensive one-on-one sessions, find the support that fits your unique needs and timeline.
          </p>
        </div>

        <div className="space-y-8">
          {coachingOptions.map((option, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30 bg-card">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className={`font-serif ${DESIGN_SYSTEM.typography.h3} font-semibold text-foreground mb-2`}>
                          {option.title}
                        </h3>
                        <p className={`font-sans ${DESIGN_SYSTEM.typography.small} text-primary font-medium mb-2`}>
                          {option.subtitle}
                        </p>
                        <Badge className={`${option.color === 'primary' ? 'bg-primary/10 text-primary border-primary/20' : 
                                          option.color === 'accent' ? 'bg-accent/10 text-accent border-accent/20' : 
                                          'bg-secondary/10 text-secondary-foreground border-secondary/20'}`}>
                          {option.badge}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-foreground mb-6`}>
                      {option.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <p className={`font-sans ${DESIGN_SYSTEM.typography.small} text-foreground mb-1`}>
                          Duration
                        </p>
                        <p className={`font-sans ${DESIGN_SYSTEM.typography.body} font-semibold text-foreground`}>
                          {option.duration}
                        </p>
                      </div>
                      <div>
                        <p className={`font-sans ${DESIGN_SYSTEM.typography.small} text-foreground mb-1`}>
                          Format
                        </p>
                        <p className={`font-sans ${DESIGN_SYSTEM.typography.body} font-semibold text-foreground`}>
                          {option.format}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {option.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                          <span className={`font-sans ${DESIGN_SYSTEM.typography.small} text-foreground`}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:w-64 flex-shrink-0">
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6 text-center">
                      <p className={`font-sans ${DESIGN_SYSTEM.typography.body} font-semibold text-primary mb-4`}>
                        {option.pricing}
                      </p>
                      <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans mb-3">
                        <Link to={option.link}>
                          {option.cta}
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-sans">
                        <Link to="/contact">
                          Ask Questions
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* My Approach */}
      <Section 
        size="large" 
        background={false}
        decorativeElements={approachDecorativeElements}
        className="bg-gradient-to-br from-secondary/20 to-accent/20"
      >
        <div className="text-center mb-16">
          <h2 className={`font-serif ${DESIGN_SYSTEM.typography.h2} font-semibold text-foreground mb-6`}>
            My Approach
          </h2>
          <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-foreground max-w-3xl mx-auto`}>
            Every coaching relationship is built on these foundational principles that honor both your humanity and your goals.
          </p>
        </div>

        <div className={DESIGN_SYSTEM.layouts.grid.threeCol}>
          {approach.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className={`font-serif ${DESIGN_SYSTEM.typography.h3} font-semibold text-foreground mb-4`}>
                {item.title}
              </h3>
              <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-foreground`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section 
        size="large" 
        background={true}
        className="bg-card/50"
      >
        <div className="text-center mb-16">
          <h2 className={`font-serif ${DESIGN_SYSTEM.typography.h2} font-semibold text-foreground mb-6`}>
            What Women Are Saying
          </h2>
          <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-foreground max-w-3xl mx-auto`}>
            Real stories from women who have transformed their lives through our work together.
          </p>
        </div>

        <div className={DESIGN_SYSTEM.layouts.grid.threeCol}>
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border border-border/50 shadow-sm">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-primary fill-current" />
                  ))}
                </div>
                <blockquote className={`font-serif ${DESIGN_SYSTEM.typography.body} text-foreground italic mb-4`}>
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className={`font-sans ${DESIGN_SYSTEM.typography.small} font-semibold text-foreground`}>
                    {testimonial.author}
                  </p>
                  <p className={`font-sans ${DESIGN_SYSTEM.typography.small} text-foreground`}>
                    {testimonial.role}
                  </p>
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
            Ready to Begin Your Transformation?
          </h2>
          <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-foreground mb-8 max-w-2xl mx-auto`}>
            Whether you're ready to join a group program or prefer one-on-one support, 
            let's find the perfect path for your unique journey.
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
    </div>
  );
};

export default Coaching;

