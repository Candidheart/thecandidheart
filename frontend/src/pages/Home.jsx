import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Lightbulb, Feather, ArrowRight, Quote, Sparkles, Star } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-accent/10"></div>
        
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-hexagons gentle-pulse"></div>
        
        {/* Floating decorative elements */}
        <Heart className="decorative-element floaty top-32 left-20 text-primary/10" style={{ animationDelay: '1s' }} />
        <Star className="decorative-element floaty bottom-32 right-20 text-accent/10" style={{ animationDelay: '2s' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 leading-tight">
              Where strategy meets{' '}
              <span className="text-primary">self-worth</span>
            </h1>
            <p className="font-sans text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Healing is a system. So is growth. Structure for your soul-led story.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative py-12 lg:py-16 bg-card/50">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-dots opacity-20"></div>
        
        {/* Decorative elements */}
        <Lightbulb className="decorative-element floaty top-20 right-32 text-primary/8" style={{ animationDelay: '1.5s' }} />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                I'm a writer, strategist, and survivor of betrayal trauma.
              </h2>
              <p className="font-sans text-lg text-muted-foreground mb-6 leading-relaxed">
                I spent nearly a decade as a stay-at-home mom, and when my world fell apart, 
                I didn't just rebuild — I wrote, I healed, and I built systems to support 
                the woman I was becoming.
              </p>
              <p className="font-sans text-lg text-muted-foreground mb-8 leading-relaxed">
                This is the merging of my two worlds: healing through poetry and personal coaching, 
                and empowerment through copywriting, AI automations, and clarity-first strategy.
              </p>
              <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                <Link to="/about">My Story</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex justify-center space-x-4 mb-6">
                    <Heart className="h-12 w-12 text-primary" />
                    <Lightbulb className="h-12 w-12 text-accent" />
                    <Feather className="h-12 w-12 text-primary" />
                  </div>
                  <p className="font-serif text-xl text-foreground italic">
                    "You don't have to choose between structure and softness."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Paths Section */}
      <section className="relative py-16 lg:py-24">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 gradient-sage-gold"></div>
        
        {/* Decorative elements */}
        <Star className="decorative-element floaty top-24 left-1/3 text-primary/8" style={{ animationDelay: '2s' }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Two Paths, One Journey
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              Whether you're seeking healing and clarity or building systems for growth, 
              I meet you where you are and guide you where you're going.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Healing Path */}
            <Card className="group hover:shadow-lg transition-all-smooth border-2 hover:border-primary/30 bg-[#FDFBF7]">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Heart className="h-8 w-8 text-primary mr-3" />
                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    Healing & Clarity
                  </h3>
                </div>
                <p className="font-sans text-muted-foreground mb-6 leading-relaxed">
                  Betrayal trauma coaching, devotionals, and story-based content for the woman 
                  who's ready to rebuild her identity and reclaim her voice.
                </p>
                <ul className="font-sans text-sm text-muted-foreground space-y-2 mb-8">
                  <li>• Betrayal trauma recovery</li>
                  <li>• Identity rebuilding</li>
                  <li>• Journaling frameworks</li>
                  <li>• Poetry for healing</li>
                </ul>
                <Button 
                  asChild 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:bg-primary/80"
                >
                  <Link to="/healing">Start Healing</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Strategy Path */}
            <Card className="group hover:shadow-lg transition-all-smooth border-2 hover:border-accent/30 bg-[#FDFBF7]">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Lightbulb className="h-8 w-8 text-accent mr-3" />
                  <h3 className="font-serif text-2xl font-semibold text-foreground">
                    Soulful Strategy
                  </h3>
                </div>
                <p className="font-sans text-muted-foreground mb-6 leading-relaxed">
                  Copywriting, AI automation, and clarity mapping for the business owner 
                  who wants to scale with integrity and authentic voice.
                </p>
                <ul className="font-sans text-sm text-muted-foreground space-y-2 mb-8">
                  <li>• Strategic copywriting</li>
                  <li>• AI automation systems</li>
                  <li>• Clarity mapping</li>
                  <li>• Voice-led strategy</li>
                </ul>
                <Button 
                  asChild 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground group-hover:bg-accent/80"
                >
                  <Link to="/building">Build Systems</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial/Quote Section */}
      <section className="relative py-16 lg:py-24 bg-secondary/30">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-grid opacity-15"></div>
        
        {/* Decorative elements */}
        <Quote className="decorative-element floaty top-16 left-1/4 text-primary/8" style={{ animationDelay: '1.5s' }} />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="h-12 w-12 text-primary mx-auto mb-8" />
          <blockquote className="font-serif text-2xl md:text-3xl text-foreground italic mb-8 leading-relaxed">
            "Poetry is not a luxury — it's a framework for feeling seen. 
            You can automate without abandoning your voice."
          </blockquote>
          <p className="font-sans text-lg text-muted-foreground">
            — Samantha Josette, Poet, Strategist, Mirror Holder
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 lg:py-24">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 gradient-blush-cream"></div>
        
        {/* Decorative elements */}
        <Sparkles className="decorative-element floaty bottom-20 right-1/4 text-accent/8" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Ready to Begin?
          </h2>
          <p className="font-sans text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            This is your digital front porch — a sacred creative studio where trauma survivors 
            feel safe to explore healing and business owners feel grounded enough to hire strategy.
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

export default Home;

