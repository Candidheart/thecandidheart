import FullPageBackground from '@/components/ui/full-page-background';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { PenTool, BookOpen, Heart, ArrowRight, CheckCircle, Sparkles, Star, Send, Users, Calendar, HelpCircle } from 'lucide-react';

const Building = () => {
  const copywritingTiers = [
    {
      name: 'Presence',
      subtitle: 'For the soul-led entrepreneur finding her rhythm.',
      description: 'You\'ve got a message — let\'s make it land.',
      price: 'Starting at $450',
      features: [
        '8 custom social media captions (Instagram, FB, or LinkedIn)',
        'Bio or About Me rewrite',
        'Voice Discovery Questionnaire'
      ],
      note: 'Perfect for refreshes, pivots, or soft launches.'
    },
    {
      name: 'Momentum',
      subtitle: 'For brands that are building traction and ready to expand.',
      description: 'Let\'s deepen connection and grow with intention.',
      price: 'Starting at $950',
      features: [
        '2 Email sequences (Welcome or Nurture, 4–5 emails each)',
        '10 social media captions',
        '3 Ad variations (Google, Meta, or Pinterest)',
        'Light brand voice calibration'
      ],
      popular: true
    },
    {
      name: 'Immersion',
      subtitle: 'For the visionary who\'s ready to be fully seen.',
      description: 'You\'ve outgrown your old copy. Let\'s write the new story.',
      price: 'Starting at $2,200',
      features: [
        'Full website copy (Home, About, Services, Contact + 1 bonus page)',
        'Email funnel (up to 7 emails)',
        '12 social captions',
        'Offer positioning and launch messaging map'
      ]
    }
  ];

  const soulfulStrategyFeatures = [
    '📖 Soulful Strategy: A Guide to Conscious Growth in the Age of AI',
    '🎥 4-Part Video Course (Clarity, Connection, Container, Conscious Scaling)',
    '📓 Printable Toolkits:',
    '• Pricing with Purpose Matrix',
    '• Nervous System Check-In Guide', 
    '• Aligned Launch Checklist',
    '✍️ Ethical AI Prompt Library + Messaging Templates'
  ];

  return (
    <FullPageBackground>
      <div className="min-h-screen py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="font-serif text-4xl md:text-6xl font-semibold text-sage-800 mb-8 leading-tight">
              Build What Aligns.<br />
              Say What Matters.
            </h1>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="font-serif text-xl text-sage-700 italic">
                "You didn't come this far to blend in."
              </p>
              
              <p className="font-sans text-lg text-sage-700 leading-relaxed">
                You came to build something real.<br />
                A business that feels like home.<br />
                A message that lands like truth.<br />
                A brand that honors the wholeness of you — not just the polished parts.
              </p>
              
              <p className="font-sans text-lg text-sage-700 leading-relaxed">
                But if you're being honest?
              </p>
              
              <p className="font-sans text-lg text-sage-700 leading-relaxed">
                You're tired of trying to write the perfect post while juggling client calls, DMs, and never-ending launch tweaks.<br />
                You're done with marketing advice that sounds more like manipulation than integrity.<br />
                And most of all — you're ready for clarity that doesn't cost your soul.
              </p>
              
              <p className="font-serif text-xl text-sage-700 italic">
                "This is where strategy softens."
              </p>
              
              <p className="font-sans text-lg text-sage-700 leading-relaxed">
                Where conversion meets compassion.<br />
                And where your business begins to sound like you.
              </p>
            </div>
          </div>

          <Separator className="my-16" />

          {/* Copywriting Services */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <PenTool className="h-8 w-8 text-primary" />
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-800 mb-4">
                Copywriting Services
              </h2>
              <p className="font-sans text-lg text-sage-700 max-w-2xl mx-auto">
                Done-for-you messaging for brands with a heartbeat.
              </p>
              <p className="font-serif text-lg text-sage-700 italic mt-4">
                "This is for the founder who knows her voice matters —<br />
                she just needs someone to hold the pen while she holds the vision."
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {copywritingTiers.map((tier, index) => (
                <Card key={index} className={`border-2 transition-all hover:shadow-lg ${
                  tier.popular ? 'border-primary bg-primary/5' : 'border-sage-200'
                }`}>
                  <CardHeader className="text-center">
                    {tier.popular && (
                      <Badge className="w-fit mx-auto mb-2 bg-primary text-white">
                        Most Popular
                      </Badge>
                    )}
                    <CardTitle className="font-serif text-2xl text-sage-800">
                      ✨ Tier {index + 1}: {tier.name}
                    </CardTitle>
                    <p className="font-sans text-sm text-sage-600">
                      {tier.subtitle}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="font-serif text-sage-700 italic">
                      {tier.description}
                    </p>
                    
                    <div>
                      <h4 className="font-sans font-semibold text-sage-800 mb-3">Includes:</h4>
                      <ul className="space-y-2">
                        {tier.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="font-sans text-sm text-sage-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {tier.note && (
                      <p className="font-sans text-xs text-sage-600 italic">
                        → {tier.note}
                      </p>
                    )}
                    
                    <div className="text-center">
                      <p className="font-serif text-xl font-bold text-primary">
                        {tier.price}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="font-sans text-sm text-sage-600 mb-4">
                All packages include a 1:1 kickoff session and optional Loom walkthrough.<br />
                Sliding scale and equity pricing available. Pay-it-forward credits welcome.
              </p>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link to="/contact">
                  💬 Need something custom? Let's build a bundle that fits your flow.
                </Link>
              </Button>
            </div>
          </div>

          <Separator className="my-16" />

          {/* Soulful Strategy */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <BookOpen className="h-8 w-8 text-primary" />
                <Heart className="h-6 w-6 text-accent" />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-800 mb-4">
                📖 Soulful Strategy
              </h2>
              <p className="font-sans text-lg text-sage-700 max-w-2xl mx-auto">
                Learn the method behind the magic.
              </p>
              <p className="font-serif text-lg text-sage-700 italic mt-4">
                "If you're not ready to outsource but you are ready to do it differently —<br />
                this is for you."
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-primary/20">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center mb-8">
                    <p className="font-serif text-xl text-sage-700 mb-4">
                      Soulful Strategy isn't just a framework.<br />
                      It's a reclamation.
                    </p>
                    <p className="font-sans text-lg text-sage-700">
                      Of your voice. Your energy. Your right to grow without selling out.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="font-serif text-xl font-semibold text-sage-800 mb-4">
                      The Book + Mini-Course Bundle Includes:
                    </h3>
                    <ul className="space-y-2">
                      {soulfulStrategyFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="font-sans text-sm text-sage-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center space-y-4">
                    <div className="space-y-2">
                      <p className="font-sans text-sm text-sage-600">
                        → Learn at your pace. Build in your voice.
                      </p>
                      <p className="font-sans text-sm text-sage-600">
                        → Available as a self-paced course or upgrade with live feedback.
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button asChild className="bg-primary hover:bg-primary/90">
                        <Link to="/soulful-strategy-book">
                          [Preorder Now]
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                        <Link to="/contact">
                          [Join the Waitlist]
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Separator className="my-16" />

          {/* CTA Section */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Heart className="h-8 w-8 text-primary" />
              <HelpCircle className="h-6 w-6 text-accent" />
            </div>
            <h2 className="font-serif text-2xl font-semibold text-sage-800 mb-4">
              ❤️ Not sure where to start?
            </h2>
            <p className="font-serif text-lg text-sage-700 italic mb-6">
              "Soulful Strategy Session: Find Alignment Before You Scale"
            </p>
            <p className="font-serif text-lg text-sage-700 mb-8">
              Because strategy should feel like coming home —<br />
              not like becoming someone else.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/book-call">
                [Start With Clarity]
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </FullPageBackground>
  );
};

export default Building;
