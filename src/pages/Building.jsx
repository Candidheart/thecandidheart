import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Lightbulb, Compass, PenTool, Bot, Moon, Sparkles, BookOpen, Heart, ArrowRight, CheckCircle } from 'lucide-react';

const Building = () => {
  const services = [
    {
      id: 'clarity',
      icon: Compass,
      title: 'The Clarity Session',
      subtitle: 'A one-time deep dive to get unstuck and aligned.',
      tiers: [
        {
          name: 'Starter',
          price: '$150',
          features: [
            '60-minute strategy call',
            'Audit of current site or messaging',
            'Recorded call + action recap'
          ]
        },
        {
          name: 'Signature',
          price: '$275',
          features: [
            'Everything in Starter',
            'Full brand tone/voice worksheet',
            'Custom content prompts or automation map'
          ],
          popular: true
        }
      ],
      slidingScale: 'Available for survivors, single parents, and those in transition.'
    },
    {
      id: 'copy',
      icon: PenTool,
      title: 'Done-for-You Copy Kit',
      subtitle: 'Words that feel like you—written for conversions and connection.',
      tiers: [
        {
          name: 'Starter',
          price: '$600',
          features: [
            '2 core pages (Home + About OR Sales + Thank You)',
            'Includes tone discovery questionnaire'
          ]
        },
        {
          name: 'Signature',
          price: '$1,100',
          features: [
            'Full 4-page site (Home, About, Work With Me, Contact)',
            'Custom SEO-friendly copy',
            '1 revision round'
          ],
          popular: true
        },
        {
          name: 'Premium',
          price: '$1,800',
          features: [
            'All Signature features',
            'Email Welcome Series (3 emails)',
            'Optional AI-powered versioning and reuse library'
          ]
        }
      ],
      slidingScale: 'Available for community-based or survivor-led projects.'
    },
    {
      id: 'automation',
      icon: Bot,
      title: 'Automation Alchemy',
      subtitle: 'Let your systems carry the weight. AI + texting workflows that support without selling out.',
      tiers: [
        {
          name: 'Starter',
          price: '$350',
          features: [
            'Custom AI chatbot setup (e.g. Manus/Suno)',
            '1 SMS automation (e.g. birthday or reminder text)'
          ]
        },
        {
          name: 'Signature',
          price: '$750',
          features: [
            'Strategic automation plan',
            '3 fully built SMS/email flows (e.g. onboarding, nurture, sales)',
            'Tech stack guidance + connection help'
          ],
          popular: true
        },
        {
          name: 'Premium',
          price: '$1,200',
          features: [
            'Includes AI chatbot, full automation suite',
            'Team training video'
          ]
        }
      ],
      slidingScale: 'Available for small offices and trauma-informed providers.'
    },
    {
      id: 'monthly',
      icon: Moon,
      title: 'Monthly Magic',
      subtitle: 'Ongoing support that adapts to your seasons.',
      tiers: [
        {
          name: 'Starter',
          price: '$400/month',
          features: [
            '2 check-in calls',
            'Light content or tech updates',
            'Voxer support'
          ]
        },
        {
          name: 'Signature',
          price: '$650/month',
          features: [
            'Strategy, copy, and system support',
            'Content bank creation',
            'Monthly planning rituals'
          ],
          popular: true
        },
        {
          name: 'Premium',
          price: '$1,000/month',
          features: [
            'All Signature features',
            'Unlimited edits / priority turnaround',
            'Quarterly brand vision map'
          ]
        }
      ],
      slidingScale: 'Available for long-term rebuilders.'
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
              Offerings at The Candid Heart
            </h1>
            <p className="font-sans text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Every service is designed to meet you where you are—whether you're just beginning, 
              rebuilding from scratch, or ready to scale with soul.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="max-w-6xl mx-auto">
                  {/* Service Header */}
                  <div className="text-center mb-12">
                    <Icon className="h-12 w-12 text-accent mx-auto mb-6" />
                    <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Service Tiers */}
                  <div className={`grid gap-6 mb-8 ${
                    service.tiers.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 
                    service.tiers.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-1'
                  }`}>
                    {service.tiers.map((tier, tierIndex) => (
                      <Card 
                        key={tierIndex} 
                        className={`relative border-2 transition-all hover:shadow-lg ${
                          tier.popular 
                            ? 'border-accent shadow-md' 
                            : 'border-border hover:border-accent/50'
                        }`}
                      >
                        {tier.popular && (
                          <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                            Most Popular
                          </Badge>
                        )}
                        <CardContent className="p-8">
                          <div className="text-center mb-6">
                            <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                              {tier.name}
                            </h3>
                            <div className="font-serif text-3xl font-bold text-accent mb-4">
                              {tier.price}
                            </div>
                          </div>
                          
                          <ul className="space-y-3 mb-8">
                            {tier.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                                <span className="font-sans text-sm text-foreground">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                          
                          <Button 
                            asChild 
                            className={`w-full ${
                              tier.popular 
                                ? 'bg-accent hover:bg-accent/90 text-accent-foreground' 
                                : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                            }`}
                          >
                            <Link to="/start-here">
                              Apply Here
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Sliding Scale Note */}
                  {service.slidingScale && (
                    <div className="text-center">
                      <p className="font-sans text-sm text-muted-foreground italic">
                        <Heart className="h-4 w-4 text-accent inline mr-2" />
                        Sliding Scale {service.slidingScale}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pay It Forward Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="h-12 w-12 text-accent mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Pay It Forward
          </h2>
          <p className="font-sans text-lg text-muted-foreground mb-8 leading-relaxed">
            Every month, one spot is offered at no cost to someone rebuilding their life 
            or business after hardship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-sans"
            >
              <Link to="/contact">Donate to the Pay-It-Forward Fund</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-sans"
            >
              <Link to="/contact">Apply for Sponsored Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Book + Course Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <BookOpen className="h-12 w-12 text-accent mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Soulful Strategy: The Book + Mini Course
              </h2>
              <p className="font-sans text-lg text-muted-foreground mb-6 leading-relaxed">
                Not all strategy has to feel like selling your soul. <em>Soulful Strategy: A Guide to 
                Conscious Growth in the Age of AI</em> is part manifesto, part map—a blend of systems 
                and soul for creatives, coaches, and founders who want to scale with integrity.
              </p>
              
              <div className="mb-8">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  What's Inside:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-sans text-foreground">Poetic truths + practical tools</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-sans text-foreground">A 4-part method: Clarity → Connection → Container → Conscious Scaling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-sans text-foreground">Journal prompts, ethical AI prompts, content templates, and system maps</span>
                  </li>
                </ul>
              </div>
            </div>

            <Card className="border-2 border-accent/20">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                    The Mini Course
                  </h3>
                  <p className="font-sans text-lg text-accent italic mb-4">
                    "Soulful Strategy in Action"
                  </p>
                  <p className="font-sans text-muted-foreground">
                    A companion 4-module course for walking it out in real time.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-serif text-lg font-semibold text-foreground mb-3">
                    Module Themes:
                  </h4>
                  <ol className="space-y-2 text-sm">
                    <li className="font-sans text-foreground">
                      <strong>1. Clarity</strong> – Find your truth + voice
                    </li>
                    <li className="font-sans text-foreground">
                      <strong>2. Connection</strong> – Align your message + market
                    </li>
                    <li className="font-sans text-foreground">
                      <strong>3. Container</strong> – Build systems that hold you
                    </li>
                    <li className="font-sans text-foreground">
                      <strong>4. Conscious Scaling</strong> – Grow without the grasp
                    </li>
                  </ol>
                </div>

                <div className="mb-6">
                  <h4 className="font-serif text-lg font-semibold text-foreground mb-3">
                    Includes:
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="font-sans text-sm text-foreground">Printable workbook</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="font-sans text-sm text-foreground">Canva templates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="font-sans text-sm text-foreground">Notion dashboards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="font-sans text-sm text-foreground">Bonus: "Pricing With Purpose" matrix</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center mb-6">
                  <div className="font-serif text-2xl font-bold text-accent mb-2">
                    <span className="line-through text-muted-foreground text-lg mr-2">$97</span>
                    $67
                  </div>
                  <p className="font-sans text-sm text-muted-foreground">
                    Launch special for early subscribers
                  </p>
                </div>

                <Button 
                  asChild 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <Link to="/start-here">
                    Get Early Access
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Ready to Build Something Beautiful?
          </h2>
          <p className="font-sans text-lg text-muted-foreground mb-8 leading-relaxed">
            Every offering is designed to meet you exactly where you are. Let's find what fits.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-lg px-12 py-3"
          >
            <Link to="/start-here">
              Start Your Journey
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Building;

