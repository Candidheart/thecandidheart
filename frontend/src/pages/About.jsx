import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Lightbulb, Feather, ArrowRight, Quote, Star, Sparkles, BookOpen, Users, Target } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Every story matters. Every wound can become wisdom. I hold space for the full spectrum of human experience."
    },
    {
      icon: Lightbulb,
      title: "Clarity",
      description: "Through the fog of trauma and confusion, I help you find the thread that leads to your truth and your power."
    },
    {
      icon: Feather,
      title: "Integrity",
      description: "Authentic voice over perfect image. Real progress over quick fixes. Systems that honor your soul."
    }
  ];

  const timeline = [
    {
      year: "2015–2023",
      title: "The Quiet Becoming",
      description: "Years spent tending to tiny hands and quiet dreams. I poured myself into motherhood, side hustles, and into a relationship I believed could be whole. I held it all—until I couldn't anymore.",
      icon: BookOpen
    },
    {
      year: "2023",
      title: "The Gentle Awakening",
      description: "In 2023 I started picking up the frequent patterns of silence and uneasiness. For years I knew something was off but now I knew something was wrong. I started to see past the illusion and stopped giving the excuses.",
      icon: Lightbulb
    },
    {
      year: "2023–2024",
      title: "The Wilderness Season",
      description: "The illusion fully dissipated. Grief echoed. Silence taught. I wrote my way through the ache. Poetry became my prayer, my protest, my proof of life.",
      icon: Feather
    },
    {
      year: "2024",
      title: "The Rebuild",
      description: "Brick by breath. I began to see healing as a structure, not just a feeling. I built systems to hold myself—then shared them to help others hold themselves, too. Sharing my story through devotionals became healing and empowering. I was no longer standing alone. In fact, the opposite—I realized I never was.",
      icon: Target
    },
    {
      year: "Early 2025",
      title: "The Unmasking",
      description: "I named my neurodivergence—AuADHD—and with it, the years I spent overcompensating to hide what made me different. I joined my church's leadership program, even as the voice in my head whispered, 'Don't do it. They'll see you.' And they did. They saw the softness. The sacred fire. The mind that moves like music. I had spent a lifetime armoring my tenderness. But what I know now is this: the people who poked at my softness were never my people. This was the year I became brave.",
      icon: Sparkles
    },
    {
      year: "2025",
      title: "The Integration",
      description: "No more choosing between softness and strategy. I merged the sacred with the systems. And Soulful Strategy was born—not as a brand, but as a blueprint for becoming whole.",
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10"></div>
        <div className="absolute inset-0 bg-hexagons gentle-pulse"></div>
        
        {/* Floating decorative elements */}
        <Heart className="decorative-element floaty top-20 left-16 text-primary/15" style={{ animationDelay: '1s' }} />
        <Star className="decorative-element floaty top-40 right-20 text-accent/15" style={{ animationDelay: '2s' }} />
        <Sparkles className="decorative-element floaty bottom-40 left-1/4 text-primary/10" style={{ animationDelay: '1.5s' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Your Story Matters
                </span>
              </div>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-8 leading-tight">
                I'm Samantha Josette —{' '}
                <span className="text-primary">poet, strategist</span>, and mirror holder for those navigating the wild terrain of healing and becoming.
              </h1>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I didn't set out to do this work. I walked through fire, asked hard questions, and followed the breadcrumbs of grace until the pieces began to form a map. A map for rebuilding — not just businesses, but identities. Not just systems, but stories.
                </p>
                <p>
                  This isn't about perfection. It's about wholeness. About choosing clarity over hustle. Soul over strategy. And building something sustainable — from the inside out.
                </p>
                <p>
                  If you're ready to stop performing and start remembering who you are, I'll be right here. With frameworks that feel like freedom, and language that holds a mirror to your strength.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link to="/work-with-me">
                    Work With Me <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-sans"
                >
                  <Link to="/poetry">
                    Read My Poetry
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-12 h-[500px] flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl"></div>
                <div className="relative text-center z-10">
                  <div className="mb-8">
                    <Quote className="h-16 w-16 text-primary mx-auto mb-6" />
                    <div className="w-24 h-1 bg-primary/30 mx-auto mb-6"></div>
                  </div>
                  <blockquote className="font-serif text-2xl text-foreground italic leading-relaxed mb-6">
                    "I am not the same soul who entered this wilderness, and I am grateful. They were beautiful, but they were not free."
                  </blockquote>
                  <div className="flex justify-center space-x-2">
                    <Star className="h-4 w-4 text-primary fill-current" />
                    <Star className="h-4 w-4 text-primary fill-current" />
                    <Star className="h-4 w-4 text-primary fill-current" />
                    <Star className="h-4 w-4 text-primary fill-current" />
                    <Star className="h-4 w-4 text-primary fill-current" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-background"></div>
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20">
                <BookOpen className="h-4 w-4 mr-2" />
                My Journey
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
              My Story
            </h2>
            <p className="font-sans text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From stay-at-home mom to survivor to strategist — this is the journey that shaped everything I do today.
            </p>
          </div>

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className={`flex flex-col lg:flex-row gap-8 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-48 flex-shrink-0">
                    <div className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-3 rounded-2xl text-center font-sans font-semibold shadow-lg">
                      {item.year}
                    </div>
                  </div>
                  
                  <div className="flex-1 relative">
                    <div className="absolute left-0 top-6 w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center -translate-x-6">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    
                    <Card className="ml-6 hover:shadow-xl transition-all duration-300 bg-[#FDFBF7] border-2 hover:border-primary/30">
                      <CardContent className="p-8">
                        <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                          {item.title}
                        </h3>
                        <p className="font-sans text-muted-foreground leading-relaxed text-lg">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 lg:py-28 bg-card/30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-secondary/20 text-secondary-foreground border border-secondary/30">
                <Heart className="h-4 w-4 mr-2" />
                My Values
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
              What I Believe
            </h2>
            <p className="font-sans text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These values guide everything I do — from the way I hold space for healing to the systems I build for growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="group text-center hover:shadow-xl transition-all duration-300 bg-[#FDFBF7] border-2 hover:border-primary/30 transform hover:-translate-y-2">
                  <CardContent className="p-10">
                    <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                      {value.title}
                    </h3>
                    <p className="font-sans text-muted-foreground leading-relaxed text-lg">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                  <Target className="h-4 w-4 mr-2" />
                  My Approach
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-8">
                How I Work
              </h2>
              <div className="space-y-8">
                <div className="group">
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    Healing is a System
                  </h3>
                  <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                    Recovery isn't magic — it's methodology. I help you build frameworks that support your healing even when motivation fails.
                  </p>
                </div>
                <div className="group">
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    Strategy Meets Soul
                  </h3>
                  <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                    You don't have to choose between structure and softness. The most powerful systems honor both your humanity and your goals.
                  </p>
                </div>
                <div className="group">
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    Poetry as Framework
                  </h3>
                  <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                    Words have power to heal, to clarify, to transform. I use language as a tool for both personal healing and business growth.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-secondary/30 to-accent/20 rounded-3xl p-10 shadow-xl">
                <div className="mb-6">
                  <Quote className="h-12 w-12 text-primary mb-4" />
                  <div className="w-16 h-1 bg-primary/40 mb-6"></div>
                </div>
                <blockquote className="font-serif text-2xl text-foreground italic mb-8 leading-relaxed">
                  "I am both the CEO and the product being developed. The strategist and the strategy. The system and the soul it was designed to serve."
                </blockquote>
                <p className="font-sans text-muted-foreground text-lg">
                  — From "Systems of Grace"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="relative py-20 lg:py-28 bg-secondary/20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-accent/10 text-accent border border-accent/20">
                <Users className="h-4 w-4 mr-2" />
                Beyond the Work
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Beyond the Work
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-[#FDFBF7] border-2 border-primary/20 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 flex items-center">
                  <Heart className="h-6 w-6 text-primary mr-3" />
                  What Fills My Cup
                </h3>
                <ul className="font-sans text-muted-foreground space-y-4 text-lg">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Morning tea and journal pages</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Long walks with my thoughts</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Books that change how I see the world</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Conversations that go deeper than small talk</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Building systems that actually work</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Watching women discover their own power</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-[#FDFBF7] border-2 border-accent/20 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 flex items-center">
                  <Lightbulb className="h-6 w-6 text-accent mr-3" />
                  What I'm Learning
                </h3>
                <ul className="font-sans text-muted-foreground space-y-4 text-lg">
                  <li className="flex items-start">
                    <Sparkles className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>That healing and building can happen simultaneously</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>How to automate without losing the human touch</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>The difference between being busy and being productive</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>That vulnerability is a superpower, not a weakness</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>How to hold space for both grief and joy</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                    <span>That my story is my strength, not my shame</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
              <ArrowRight className="h-4 w-4 mr-2" />
              Let's Connect
            </span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-8">
            Ready to Write Your Next Chapter?
          </h2>
          <p className="font-sans text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether you're in the wilderness of healing or ready to build something beautiful, 
            I'm here to walk alongside you. Your story isn't over — it's just beginning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg"
            >
              <Link to="/work-with-me">
                Explore Working Together <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-sans px-8 py-4 text-lg"
            >
              <Link to="/poetry">
                Read My Poetry
              </Link>
            </Button>
          </div>
          
          <div className="pt-12 border-t border-border/50">
            <p className="font-sans text-muted-foreground mb-6 text-lg">
              To explore the woman behind the work, visit my personal storytelling sanctuary:
            </p>
            <Button 
              asChild 
              variant="ghost"
              size="lg"
              className="text-accent hover:text-primary font-sans text-lg hover:bg-accent/10"
            >
              <a href="https://samanthajosette.me" target="_blank" rel="noopener noreferrer">
                SamanthaJosette.me <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

