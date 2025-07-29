import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Heart, Users, Coffee, Utensils, Scissors, Car, Baby, MessageCircle, Palette, HandHeart, MapPin, ArrowRight } from 'lucide-react';

const CandidHeartProject = () => {
  const careExamples = [
    { icon: Scissors, text: 'A free monthly haircut or wash', color: 'text-primary' },
    { icon: Coffee, text: '$5 coffee donation', color: 'text-accent' },
    { icon: Car, text: 'Donated ride to court or therapy', color: 'text-secondary-foreground' },
    { icon: Utensils, text: 'One freezer meal a week', color: 'text-primary' },
    { icon: MessageCircle, text: 'Mental health support', color: 'text-accent' },
    { icon: Palette, text: 'Art kits for families', color: 'text-secondary-foreground' }
  ];

  const localCommunities = [
    'Bowling Green', 'Custar', 'Cygnet', 'Bradner', 'Wayne', 'Weston', 
    'Bloomdale', 'North Baltimore', 'Pemberville', 'Portage', 'Rudolph'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Heart className="h-8 w-8 text-primary" />
              <Users className="h-6 w-6 text-accent" />
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-8 leading-tight">
              The Candid Heart Project
            </h1>
            <p className="font-serif text-xl md:text-2xl text-accent mb-8 italic">
              Local Partners & Organizations
            </p>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="font-sans text-lg text-muted-foreground mb-6 leading-relaxed">
                A growing care network offering practical support to parents and families 
                facing divorce, burnout, illness, or other hard seasons — right here in our community.
              </p>
              <p className="font-sans text-lg text-foreground font-medium">
                Because healing happens when neighbors show up as neighbors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Is The Candid Heart Project */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                What We're Building Together
              </h2>
              <div className="space-y-6">
                <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                  The Candid Heart Project is more than a program — it's a quiet revolution 
                  of care happening in living rooms, coffee shops, and church basements 
                  across our small towns.
                </p>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                  We're creating a network where families in transition don't have to choose 
                  between pride and survival. Where a single mom can get her hair done without 
                  worrying about the cost. Where a dad going through divorce can grab coffee 
                  with someone who simply listens.
                </p>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                  This is about restoring what community used to mean — dignity, presence, 
                  and shared responsibility. One small act of care at a time.
                </p>
              </div>
            </div>

            <Card className="border-2 border-primary/20 bg-[#FDFBF7]">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 text-center">
                  Simple Ways to Care
                </h3>
                <div className="space-y-4">
                  {careExamples.map((example, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="rounded-full w-10 h-10 flex items-center justify-center bg-primary/10">
                        <example.icon className={`h-5 w-5 ${example.color}`} />
                      </div>
                      <span className="font-sans text-foreground">
                        {example.text}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-primary/20 text-center">
                  <p className="font-sans text-sm text-muted-foreground italic">
                    Every act of care, no matter how small, creates ripples of healing.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Communities */}
      <section className="py-16 lg:py-24 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Rooted in Our Communities
          </h2>
          <p className="font-sans text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            The Candid Heart Project is growing across Northwest Ohio, connecting hearts 
            and hands in the places we call home.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {localCommunities.map((community, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="border-primary/30 text-primary bg-background hover:bg-primary/10 text-sm px-4 py-2"
              >
                {community}
              </Badge>
            ))}
          </div>
          
          <p className="font-sans text-muted-foreground italic">
            Don't see your community? We're always growing. Let's connect.
          </p>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Why This Matters
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              Little acts of care create ripples that change lives — and communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border border-primary/20 hover:border-primary/40 transition-colors bg-[#FDFBF7]">
              <CardContent className="p-8">
                <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 bg-primary/10">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Dignity Over Charity
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  We offer care without conditions, judgment, or strings attached. 
                  Every person deserves to be seen and supported with dignity.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border border-accent/20 hover:border-accent/40 transition-colors bg-[#FDFBF7]">
              <CardContent className="p-8">
                <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 bg-accent/10">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Neighbors, Not Saviors
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  We show up as equals, offering what we can and receiving what we need. 
                  Community care flows in all directions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border border-secondary/40 hover:border-secondary/60 transition-colors bg-[#FDFBF7]">
              <CardContent className="p-8">
                <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 bg-secondary/20">
                  <HandHeart className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Ripples of Healing
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  When someone receives care in their hardest moment, they remember. 
                  And they pass that care forward when they can.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How Organizations Can Help */}
      <section className="py-16 lg:py-24 bg-primary/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              How Your Organization Can Help
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Whether you're a salon, restaurant, church, or local business — there's a way 
              for you to be part of this movement. It doesn't have to be big to be meaningful.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                  For Service Providers
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <Scissors className="h-4 w-4 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="font-sans">Offer one free service per month to a family in need</span>
                  </li>
                  <li className="flex items-start">
                    <MessageCircle className="h-4 w-4 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="font-sans">Provide sliding scale counseling or therapy sessions</span>
                  </li>
                  <li className="flex items-start">
                    <Baby className="h-4 w-4 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="font-sans">Donate childcare hours for court dates or appointments</span>
                  </li>
                  <li className="flex items-start">
                    <Car className="h-4 w-4 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span className="font-sans">Offer transportation to essential appointments</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                  For Businesses & Organizations
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <Coffee className="h-4 w-4 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span className="font-sans">Sponsor coffee cards or meal vouchers</span>
                  </li>
                  <li className="flex items-start">
                    <Utensils className="h-4 w-4 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span className="font-sans">Organize meal trains for families in transition</span>
                  </li>
                  <li className="flex items-start">
                    <Palette className="h-4 w-4 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span className="font-sans">Create care packages or activity kits for children</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-4 w-4 text-accent mr-3 mt-1 flex-shrink-0" />
                    <span className="font-sans">Host community events that bring people together</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Ready to Join the Movement?
          </h2>
          <p className="font-sans text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Every act of care matters. Every organization that says "yes" creates space 
            for healing. Let's build this together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-lg px-12 py-3"
            >
              <Link to="/candid-heart-interest">
                Join the Movement <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-sans text-lg px-8 py-3"
            >
              <Link to="/contact">
                Ask Questions
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
          </div>
          <blockquote className="font-serif text-2xl md:text-3xl text-foreground mb-8 leading-relaxed">
            "We believe healing happens in circles, not systems."
          </blockquote>
          <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed">
            And when we move as neighbors — not saviors — we become part of someone's survival story.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CandidHeartProject;

