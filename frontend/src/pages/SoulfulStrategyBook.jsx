import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Book, Star, Download, Play, CheckCircle, Users, Clock, ArrowRight, Heart, Lightbulb, Target } from 'lucide-react';

const SoulfulStrategyBook = () => {
  const modules = [
    {
      number: 1,
      title: "Foundation: Your Strategic Self",
      description: "Discover your unique strategic style and core values",
      duration: "45 min",
      lessons: 4
    },
    {
      number: 2,
      title: "Clarity: Vision & Voice",
      description: "Define your mission and authentic brand voice",
      duration: "60 min",
      lessons: 5
    },
    {
      number: 3,
      title: "Connection: Building Your Audience",
      description: "Create meaningful relationships with your ideal clients",
      duration: "50 min",
      lessons: 4
    },
    {
      number: 4,
      title: "Systems: Sustainable Growth",
      description: "Build systems that support your values and vision",
      duration: "55 min",
      lessons: 5
    },
    {
      number: 5,
      title: "Integration: Living Your Strategy",
      description: "Implement and maintain your soulful approach",
      duration: "40 min",
      lessons: 3
    }
  ];

  const bonuses = [
    {
      icon: Target,
      title: "Strategic Planning Templates",
      description: "Ready-to-use worksheets and planning tools"
    },
    {
      icon: Heart,
      title: "Values Alignment Audit",
      description: "Ensure every decision honors your core values"
    },
    {
      icon: Users,
      title: "Community Access",
      description: "Join our private community of soulful strategists"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 "></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Badge className="">
              Book + Mini-Course
            </Badge>
            <h1 className="font-serif text-4xl md:text-6xl font-semibold text-sage-800 mb-8 leading-tight">
              Soulful Strategy
            </h1>
            <p className="font-serif text-xl md:text-2xl text-accent mb-8 italic">
              Where Business Meets Your Deepest Values
            </p>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="font-sans text-lg text-sage-700 mb-6 leading-relaxed">
                A comprehensive guide and mini-course for entrepreneurs who refuse to choose 
                between profit and purpose. Learn to build a business that honors your soul 
                while creating sustainable success.
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm text-sage-600">
                <div className="flex items-center">
                  <Book className="h-4 w-4 mr-2 text-primary" />
                  200+ Page Guide
                </div>
                <div className="flex items-center">
                  <Play className="h-4 w-4 mr-2 text-primary" />
                  5 Video Modules
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-primary" />
                  4+ Hours Content
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                asChild 
                size="lg" 
                className=""
              >
                <Link to="/book-call">
                  Get Instant Access - $67 <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className=""
              >
                <Link to="#preview">Preview Chapters</Link>
              </Button>
            </div>

            <p className="font-sans text-sm text-sage-600">
              ✨ Launch Special: Regular price $97 • Limited time offer
            </p>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-800 mb-6">
              What You'll Learn
            </h2>
            <p className="font-sans text-lg text-sage-700 max-w-3xl mx-auto">
              Five comprehensive modules that transform how you think about business strategy
            </p>
          </div>

          <div className="space-y-6">
            {modules.map((module, index) => (
              <Card key={index} className="">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="">
                        <span className="font-serif text-lg font-semibold text-primary">
                          {module.number}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-semibold text-sage-800 mb-2">
                        {module.title}
                      </h3>
                      <p className="font-sans text-sage-700 mb-4 leading-relaxed">
                        {module.description}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-sage-600">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-primary" />
                          {module.duration}
                        </div>
                        <div className="flex items-center">
                          <Play className="h-4 w-4 mr-1 text-primary" />
                          {module.lessons} lessons
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus Materials */}
      <section className="">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-800 mb-6">
              Bonus Materials
            </h2>
            <p className="font-sans text-lg text-sage-700">
              Additional resources to support your soulful strategy journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="">
                <CardContent className="p-8">
                  <div className="">
                    <bonus.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-sage-800 mb-4">
                    {bonus.title}
                  </h3>
                  <p className="font-sans text-sage-700 leading-relaxed">
                    {bonus.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-800 mb-12">
            What Readers Are Saying
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="font-serif text-lg text-sage-700 italic mb-4 leading-relaxed">
                  "Finally, a business book that doesn't ask me to compromise my values. 
                  Samantha's approach helped me build a strategy that feels authentic and sustainable."
                </blockquote>
                <p className="font-sans text-sm text-sage-600">
                  — Sarah M., Creative Entrepreneur
                </p>
              </CardContent>
            </Card>

            <Card className="">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="font-serif text-lg text-sage-700 italic mb-4 leading-relaxed">
                  "The mini-course videos brought the concepts to life. I implemented the 
                  strategies immediately and saw results within weeks."
                </blockquote>
                <p className="font-sans text-sm text-sage-600">
                  — Marcus T., Coach & Consultant
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About the Author */}
      <section className="">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-800 mb-6">
              About the Author
            </h2>
          </div>
          
          <Card className="">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl font-semibold text-sage-800 mb-4">
                  Samantha Josette
                </h3>
                <p className="font-serif text-lg text-accent italic">
                  Writer, Strategist, Survivor of Betrayal Trauma
                </p>
              </div>
              
              <div className="prose prose-lg mx-auto text-center">
                <p className="font-sans text-sage-700 leading-relaxed mb-6">
                  After rebuilding her life and business from the ground up following betrayal trauma, 
                  Samantha discovered that the most sustainable strategies are the ones that honor your 
                  deepest values. She's helped hundreds of entrepreneurs create businesses that feel 
                  as good as they look on paper.
                </p>
                <p className="font-sans text-foreground leading-relaxed">
                  This book distills years of experience helping values-driven entrepreneurs build 
                  strategies that support both their mission and their well-being.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Book className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Ready to Build Your Soulful Strategy?
          </h2>
          <p className="font-sans text-lg text-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of entrepreneurs who've discovered that you don't have to choose 
            between success and staying true to yourself.
          </p>
          
          <div className="">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-primary mr-2" />
              <span className="font-sans text-lg font-semibold text-foreground">
                Complete Package Includes:
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                <span className="font-sans text-foreground">200+ page comprehensive guide</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                <span className="font-sans text-foreground">5 video modules (4+ hours)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                <span className="font-sans text-foreground">Strategic planning templates</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                <span className="font-sans text-foreground">Values alignment audit</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                <span className="font-sans text-foreground">Private community access</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                <span className="font-sans text-foreground">Lifetime updates</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              asChild 
              size="lg" 
              className=""
            >
              <Link to="/book-call">
                Get Instant Access - $67
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className=""
            >
              <Link to="/contact">
                Have Questions?
              </Link>
            </Button>
          </div>

          <p className="font-sans text-sm text-foreground italic">
            30-day money-back guarantee • Instant digital delivery
          </p>
        </div>
      </section>
    </div>
  );
};

export default SoulfulStrategyBook;

