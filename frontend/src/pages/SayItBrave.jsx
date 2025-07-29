import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Heart, Shield, Users, BookOpen, Download, Calendar, CheckCircle, ArrowRight, Star, School, Mic, Clock } from 'lucide-react';

const SayItBrave = () => {
  const takeaways = [
    "Tools for identifying and expressing big feelings",
    "Strategies for navigating friendship conflicts with courage",
    "Understanding the difference between healthy and unhealthy relationships",
    "Building confidence to speak up when something doesn't feel right",
    "Creating personal boundaries that feel empowering, not isolating",
    "Finding their voice in difficult conversations"
  ];

  const assemblyDetails = [
    {
      icon: Users,
      title: "Audience",
      description: "Middle & High School Students (grades 6-12)"
    },
    {
      icon: Clock,
      title: "Duration", 
      description: "45-60 minutes (flexible scheduling)"
    },
    {
      icon: Heart,
      title: "Approach",
      description: "Trauma-informed, story-based, interactive"
    },
    {
      icon: School,
      title: "Format",
      description: "Assembly, classroom visits, or workshop series"
    }
  ];

  const localDistricts = [
    "Bowling Green City Schools",
    "Wood County Schools", 
    "Perrysburg Schools",
    "Maumee City Schools",
    "Rossford Schools",
    "Northwood Schools"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 text-sm font-sans">
              School Assembly Program
            </Badge>
            <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-8 leading-tight">
              Say It Brave
            </h1>
            <p className="font-serif text-xl md:text-2xl text-accent mb-8 italic">
              A Storytelling Assembly for Students Navigating Big Feelings, Friendship, and Finding Their Voice
            </p>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="font-sans text-lg text-muted-foreground mb-6 leading-relaxed">
                In every school, there are students silently struggling with friendship drama, 
                family changes, and the overwhelming pressure to fit in. This isn't a lecture. 
                It's a mirror—reflecting back the truth that their feelings matter and their voice has power.
              </p>
              <div className="bg-primary/5 rounded-lg p-6 mb-8">
                <p className="font-serif text-xl text-foreground italic leading-relaxed">
                  "Made for them and the ones who love them."
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
                  Request Assembly <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-sans text-lg px-8 py-3"
              >
                <Link to="#details">
                  <Download className="mr-2 h-5 w-5" />
                  Download Speaker Info
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Students Will Learn */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              What Students Will Take Away
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              Practical tools and emotional validation that students can use immediately
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {takeaways.map((takeaway, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-primary/5 rounded-lg">
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p className="font-sans text-muted-foreground leading-relaxed">
                  {takeaway}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assembly Details */}
      <section id="details" className="py-16 lg:py-24 bg-secondary/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Assembly Details
            </h2>
            <p className="font-sans text-lg text-muted-foreground">
              Flexible programming designed to fit your school's needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {assemblyDetails.map((detail, index) => (
              <Card key={index} className="border border-primary/20 text-center">
                <CardContent className="p-6">
                  <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-primary/10">
                    <detail.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    {detail.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    {detail.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Mic className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  The Experience
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-sans text-lg font-semibold text-foreground mb-4">
                    What Makes This Different:
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Heart className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="font-sans text-muted-foreground">Real stories, not lectures</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="font-sans text-muted-foreground">Trauma-informed approach</span>
                    </li>
                    <li className="flex items-start">
                      <Users className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="font-sans text-muted-foreground">Interactive, not passive</span>
                    </li>
                    <li className="flex items-start">
                      <BookOpen className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="font-sans text-muted-foreground">Age-appropriate content</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-sans text-lg font-semibold text-foreground mb-4">
                    Topics Covered:
                  </h4>
                  <ul className="space-y-2 font-sans text-muted-foreground">
                    <li>• Recognizing and naming emotions</li>
                    <li>• Healthy vs. unhealthy relationships</li>
                    <li>• Setting boundaries with friends</li>
                    <li>• Speaking up when something feels wrong</li>
                    <li>• Finding support during difficult times</li>
                    <li>• Building confidence in their own voice</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About the Speaker */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              About the Speaker
            </h2>
          </div>
          
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Samantha Josette
                </h3>
                <p className="font-serif text-lg text-accent italic">
                  Writer, Strategist, Survivor of Betrayal Trauma
                </p>
              </div>
              
              <div className="prose prose-lg mx-auto">
                <p className="font-sans text-muted-foreground leading-relaxed mb-6">
                  Samantha knows what it feels like to have your world turned upside down. After 
                  experiencing betrayal trauma in her marriage, she had to rebuild not just her life, 
                  but her understanding of relationships, trust, and her own voice.
                </p>
                <p className="font-sans text-muted-foreground leading-relaxed mb-6">
                  Through her own healing journey, she discovered that the skills needed to navigate 
                  betrayal—setting boundaries, trusting your instincts, speaking up when something 
                  feels wrong—are the same skills that help young people navigate the complex social 
                  world of school.
                </p>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  As the founder of The Candid Heart Project, Samantha brings both personal experience 
                  and professional expertise to help students find their voice during some of life's 
                  most challenging moments.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Local Districts */}
      <section className="py-16 lg:py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Serving Northwest Ohio
          </h2>
          <p className="font-sans text-lg text-muted-foreground mb-12">
            Available for assemblies throughout the Bowling Green area and surrounding districts
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {localDistricts.map((district, index) => (
              <Badge key={index} className="bg-primary/10 text-primary border-primary/20 text-sm font-sans py-2 px-4">
                {district}
              </Badge>
            ))}
          </div>
          
          <p className="font-sans text-sm text-muted-foreground mt-8 italic">
            Other districts welcome • Virtual presentations available
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              What Educators Are Saying
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="font-serif text-lg text-foreground italic mb-4 leading-relaxed">
                  "Our students were completely engaged. Samantha's approach made difficult topics 
                  accessible and gave our kids practical tools they could use immediately."
                </blockquote>
                <p className="font-sans text-sm text-muted-foreground">
                  — Sarah M., Middle School Counselor
                </p>
              </CardContent>
            </Card>

            <Card className="border border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="font-serif text-lg text-foreground italic mb-4 leading-relaxed">
                  "The feedback from both students and parents was overwhelmingly positive. 
                  This is exactly the kind of programming our students need."
                </blockquote>
                <p className="font-sans text-sm text-muted-foreground">
                  — Michael T., High School Principal
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <School className="h-12 w-12 text-primary mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Ready to Bring Say It Brave to Your School?
          </h2>
          <p className="font-sans text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Give your students the tools and validation they need to navigate big feelings 
            and find their voice. Let's create a space where their truth can breathe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-lg px-12 py-3"
            >
              <Link to="/book-call">
                Request Assembly
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

          <p className="font-sans text-sm text-muted-foreground italic">
            "Every student deserves to know their voice matters and their feelings are valid."
          </p>
        </div>
      </section>
    </div>
  );
};

export default SayItBrave;

