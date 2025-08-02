import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Heart, Mail, MessageCircle, Video, Calendar, Users, ArrowRight, CheckCircle, Clock, Gift } from 'lucide-react';

const BetaCoaching = () => {
  const weeklyJourney = [
    {
      week: 1,
      theme: 'Stabilize',
      title: '"You\'re not broken. You\'re in survival."',
      outcome: 'Nervous system support, boundary basics, sacred pause',
      color: 'border-primary/30 bg-primary/5'
    },
    {
      week: 2,
      theme: 'Clarify',
      title: '"Your inner voice is not gone—it\'s buried."',
      outcome: 'Self-trust repair, intuition exercises, shame release',
      color: 'border-accent/30 bg-accent/5'
    },
    {
      week: 3,
      theme: 'Strengthen',
      title: '"Boundaries are not punishments. They\'re altars."',
      outcome: 'Learn to say no, name needs, spot manipulation',
      color: 'border-secondary/50 bg-secondary/10'
    },
    {
      week: 4,
      theme: 'Heal',
      title: '"Grief is the proof that you loved."',
      outcome: 'Honor the loss, process anger, begin forgiveness (on your terms)',
      color: 'border-primary/30 bg-primary/5'
    },
    {
      week: 5,
      theme: 'Empower',
      title: '"You\'re not too much. You\'re finally full."',
      outcome: 'Reconnect with joy, passion, decision-making confidence',
      color: 'border-accent/30 bg-accent/5'
    },
    {
      week: 6,
      theme: 'Rewrite',
      title: '"This story doesn\'t end with betrayal. It begins with you."',
      outcome: 'Guided story-building, legacy vision, optional share',
      color: 'border-secondary/50 bg-secondary/10'
    }
  ];

  const programElements = [
    {
      icon: Mail,
      title: 'Weekly Theme Email',
      description: 'Sent every Sunday',
      purpose: 'Grounds the week with a core focus + reflection',
      color: 'text-primary'
    },
    {
      icon: MessageCircle,
      title: 'Daily Text Prompt',
      description: 'Monday–Friday',
      purpose: 'Brings presence to the process without overwhelm',
      color: 'text-accent'
    },
    {
      icon: Video,
      title: 'Zoom Wrap-Up Circle',
      description: 'Thursdays at 7PM EST',
      purpose: 'A safe, co-regulated space to reflect, process, and receive support',
      color: 'text-secondary-foreground'
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
              Beta Program • Limited Spots Available
            </Badge>
            <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-8 leading-tight">
              Reclaim & Rebuild
            </h1>
            <p className="font-serif text-xl md:text-2xl text-accent mb-8 italic">
              The Elevated Model
            </p>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="font-sans text-lg text-foreground mb-6 leading-relaxed">
                A sacred coaching rhythm for women healing betrayal and reclaiming their voice
              </p>
              <div className="space-y-4 text-center">
                <p className="font-serif text-xl text-foreground">
                  You don't need to rush your healing.
                </p>
                <p className="font-serif text-xl text-foreground">
                  You need a rhythm that honors it.
                </p>
              </div>
              <p className="font-sans text-lg text-foreground mt-8 italic">
                This is not a course. It's not a social group.<br />
                It's a steady, sacred rhythm of remembering yourself—one brave breath at a time.
              </p>
            </div>
            
            {/* Pricing Alert */}
            <div className="max-w-2xl mx-auto mb-8">
              <Card className="border-2 border-primary/30 bg-primary/5">
                <CardContent className="p-6 text-center">
                  <Gift className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    Beta Launch Pricing
                  </h3>
                  <p className="font-sans text-foreground mb-4">
                    <strong>First 20 participants:</strong> Completely free<br />
                    <strong>Next 30 participants:</strong> Pay what you can (donation-based)
                  </p>
                  <Badge className="bg-accent/10 text-accent border-accent/20">
                    Limited Time • Beta Testing Phase
                  </Badge>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-lg px-8 py-3"
              >
                <Link to="/beta-coaching-signup">
                  Join the Beta Program <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-sans text-lg px-8 py-3"
              >
                <Link to="/contact">Ask Questions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Weekly Rhythm */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Your Sacred Weekly Rhythm
            </h2>
            <p className="font-sans text-lg text-foreground max-w-3xl mx-auto">
              Each week aligns with a phase of your Reclaim & Rebuild journey—gently moving 
              you from disorientation to embodiment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programElements.map((element, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 bg-primary/10">
                    <element.icon className={`h-8 w-8 ${element.color}`} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {element.title}
                  </h3>
                  <p className="font-sans text-sm text-accent mb-4 font-medium">
                    {element.description}
                  </p>
                  <p className="font-sans text-foreground leading-relaxed">
                    {element.purpose}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Week Journey */}
      <section className="py-16 lg:py-24 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              The 6-Week Journey Overview
            </h2>
            <p className="font-sans text-lg text-foreground max-w-3xl mx-auto">
              A carefully crafted progression that honors your healing timeline and builds 
              sustainable strength from within.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weeklyJourney.map((week, index) => (
              <Card key={index} className={`border-2 ${week.color} transition-all hover:shadow-lg`}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Badge className="bg-primary/10 text-primary border-primary/20 mr-3">
                      Week {week.week}
                    </Badge>
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      {week.theme}
                    </h3>
                  </div>
                  <blockquote className="font-serif text-base text-foreground italic mb-4 leading-relaxed">
                    {week.title}
                  </blockquote>
                  <p className="font-sans text-sm text-foreground leading-relaxed">
                    {week.outcome}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Weekly Flow */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Sample Weekly Flow
            </h2>
            <p className="font-sans text-lg text-foreground">
              Week 2: Clarify - "Your Voice Knows the Way"
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Mail className="h-6 w-6 text-primary mr-3" />
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    Sunday Email
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-sans text-sm font-medium text-foreground mb-2">Theme:</h4>
                    <p className="font-serif text-base text-accent italic">"Your Voice Knows the Way"</p>
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-medium text-foreground mb-2">Includes:</h4>
                    <ul className="font-sans text-sm text-foreground space-y-1">
                      <li>• Reflection on self-trust and internalized gaslighting</li>
                      <li>• Journaling prompt: "When did I first feel something was off?"</li>
                      <li>• Preview of the week's Zoom circle + one small practice</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MessageCircle className="h-6 w-6 text-accent mr-3" />
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    Daily Text Prompts
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex">
                    <Badge className="bg-accent/10 text-accent border-accent/20 mr-3 text-xs">Mon</Badge>
                    <p className="font-sans text-sm text-foreground">"What's one gut feeling you've ignored that proved true?"</p>
                  </div>
                  <div className="flex">
                    <Badge className="bg-accent/10 text-accent border-accent/20 mr-3 text-xs">Tue</Badge>
                    <p className="font-sans text-sm text-foreground">"When did you first silence yourself to avoid conflict?"</p>
                  </div>
                  <div className="flex">
                    <Badge className="bg-accent/10 text-accent border-accent/20 mr-3 text-xs">Wed</Badge>
                    <p className="font-sans text-sm text-foreground">"Your needs are not too much. What do you need today?"</p>
                  </div>
                  <div className="flex">
                    <Badge className="bg-accent/10 text-accent border-accent/20 mr-3 text-xs">Thu</Badge>
                    <p className="font-sans text-sm text-foreground">"Tonight we gather. Bring your breath and your truth."</p>
                  </div>
                  <div className="flex">
                    <Badge className="bg-accent/10 text-accent border-accent/20 mr-3 text-xs">Fri</Badge>
                    <p className="font-sans text-sm text-foreground">"What part of you are you learning to trust again?"</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Zoom Circle Details */}
      <section className="py-16 lg:py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Video className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Weekly Zoom: Brave Circle
          </h2>
          <p className="font-sans text-lg text-accent mb-8">
            Thursdays at 7PM EST • 60–75 minutes
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <Card className="border border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                  What We'll Do Together
                </h3>
                <ul className="font-sans text-foreground space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Grounding breathwork
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Teaching on the weekly theme (10–15 mins)
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Group sharing (optional)
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Closure: a guided "Brave Blessing" for the weekend
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                  Safe Space Promise
                </h3>
                <ul className="font-sans text-foreground space-y-2">
                  <li className="flex items-start">
                    <Heart className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Same Zoom link weekly for consistency
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Replay sent only upon request
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    No pressure to share or speak
                  </li>
                  <li className="flex items-start">
                    <Heart className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    Trauma-informed facilitation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Summary */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-12">
            What You Get
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border border-primary/20">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  Weekly Themed Email
                </h3>
                <p className="font-sans text-sm text-foreground">
                  Anchors the heart and mind in the healing phase
                </p>
              </CardContent>
            </Card>

            <Card className="border border-accent/20">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-8 w-8 text-accent mx-auto mb-4" />
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  Daily SMS Check-ins
                </h3>
                <p className="font-sans text-sm text-foreground">
                  Builds safety, pattern recognition, and consistency
                </p>
              </CardContent>
            </Card>

            <Card className="border border-secondary/40">
              <CardContent className="p-6 text-center">
                <Video className="h-8 w-8 text-secondary-foreground mx-auto mb-4" />
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  Weekly Live Zoom
                </h3>
                <p className="font-sans text-sm text-foreground">
                  Offers voice, validation, and group resonance
                </p>
              </CardContent>
            </Card>
          </div>

          <blockquote className="font-serif text-xl md:text-2xl text-foreground italic mb-8 leading-relaxed">
            "You don't have to tell your whole story to be seen.<br />
            You just need a place where your truth can breathe."
          </blockquote>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Ready to Reclaim & Rebuild?
          </h2>
          <p className="font-sans text-lg text-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            This beta program is limited to 50 women total. Join us for this sacred journey 
            of remembering yourself—one brave breath at a time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-lg px-12 py-3"
            >
              <Link to="/beta-coaching-signup">
                Join the Beta Program
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

          <p className="font-sans text-sm text-foreground italic">
            You're leading yourself out of the silence. And you're doing it with rhythm, grace, and truth.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BetaCoaching;

