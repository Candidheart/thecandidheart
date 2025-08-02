import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, PenTool, BookOpen, Star, Sparkles, Quote } from 'lucide-react';
import Hero from '@/components/ui/hero';
import Section from '@/components/ui/section';
import ContentCard from '@/components/ui/content-card';
import FullPageBackground from '@/components/ui/full-page-background';
import { DESIGN_SYSTEM } from '@/lib/design-system';

const Poetry = () => {
  const heroDecorativeElements = [
    { icon: <Heart className="h-12 w-12" />, position: 'top-20 left-16', color: 'text-primary/30', delay: 1 },
    { icon: <PenTool className="h-12 w-12" />, position: 'top-40 right-20', color: 'text-accent/30', delay: 2 },
    { icon: <Star className="h-12 w-12" />, position: 'bottom-40 left-1/4', color: 'text-primary/20', delay: 1.5 }
  ];

  const collectionsDecorativeElements = [
    { icon: <BookOpen className="h-16 w-16" />, position: 'top-20 right-32', color: 'text-primary/20', delay: 1.5 }
  ];

  const featuredDecorativeElements = [
    { icon: <Quote className="h-16 w-16" />, position: 'bottom-20 left-20', color: 'text-accent/20', delay: 1 }
  ];

  const poetryCollections = [
    {
      title: "Shattered Into One",
      subtitle: "A collection of poems about betrayal trauma and identity rebuilding",
      description: "Raw, honest poetry that explores the journey from brokenness to wholeness, from betrayal to self-trust.",
      status: "Coming Soon",
      available: false,
      themes: ["Betrayal Trauma", "Identity Rebuilding", "Self-Discovery", "Healing"]
    },
    {
      title: "Morning Pages for the Healing Heart",
      subtitle: "Daily poetry prompts for trauma survivors",
      description: "Gentle, trauma-informed prompts designed to help you process your experiences through creative expression.",
      status: "Coming Soon",
      available: false,
      themes: ["Daily Practice", "Trauma-Informed", "Creative Expression", "Self-Care"]
    },
    {
      title: "Systems of Grace",
      subtitle: "Poetry about building a life that honors your soul",
      description: "Poems that explore the intersection of healing, business, and creating systems that support your authentic self.",
      status: "Available Now",
      available: true,
      themes: ["Business & Soul", "Systems Design", "Authenticity", "Purpose"]
    }
  ];

  const featuredPoems = [
    {
      title: "The Woman I'm Becoming",
      excerpt: "I am not the same soul who entered this wilderness, and I am grateful. They were beautiful, but they were not free.",
      theme: "Identity",
      readTime: "2 min read"
    },
    {
      title: "Systems of Grace",
      excerpt: "I am both the CEO and the product being developed. The strategist and the strategy. The system and the soul it was designed to serve.",
      theme: "Business & Soul",
      readTime: "3 min read"
    },
    {
      title: "Boundaries as Love",
      excerpt: "My no is not rejection. It is protection. My boundaries are not walls. They are the architecture of my becoming.",
      theme: "Boundaries",
      readTime: "2 min read"
    }
  ];

  return (
    <FullPageBackground>
      {/* Hero Section */}
      <Hero
        title="Poetry as Medicine"
        subtitle="Words have power to heal, to clarify, to transform. These poems are my prayers, my protests, my proof of life."
        decorativeElements={heroDecorativeElements}
        size="large"
        badge={{ icon: PenTool, text: "Creative Expression" }}
      />

      {/* Featured Poems */}
      <Section 
        size="large" 
        background={true}
        decorativeElements={featuredDecorativeElements}
      >
        <div className="text-center mb-16">
          <h2 className={`font-serif ${DESIGN_SYSTEM.typography.h2} font-semibold text-foreground mb-6`}>
            Featured Poems
          </h2>
          <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-foreground max-w-3xl mx-auto`}>
            A selection of poems that have resonated deeply with readers on their own healing journeys.
          </p>
        </div>

        <div className={DESIGN_SYSTEM.layouts.grid.threeCol}>
          {featuredPoems.map((poem, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30 bg-card">
              <CardContent className="p-8">
                <div className="mb-4">
                  <Badge className="bg-primary/10 text-primary border-primary/20 mb-3">
                    {poem.theme}
                  </Badge>
                  <h3 className={`font-serif ${DESIGN_SYSTEM.typography.h3} font-semibold text-foreground mb-4`}>
                    {poem.title}
                  </h3>
                </div>
                
                <blockquote className={`font-serif ${DESIGN_SYSTEM.typography.body} text-foreground italic mb-6 leading-relaxed`}>
                  "{poem.excerpt}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <span className={`font-sans ${DESIGN_SYSTEM.typography.small} text-foreground`}>
                    {poem.readTime}
                  </span>
                  <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-sans">
                    <Link to="/poetry/read">Read Full Poem</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Poetry Collections */}
      <Section 
        size="large" 
        background={false}
        decorativeElements={collectionsDecorativeElements}
        className="bg-gradient-to-br from-secondary/20 to-accent/20"
      >
        <div className="text-center mb-16">
          <h2 className={`font-serif ${DESIGN_SYSTEM.typography.h2} font-semibold text-foreground mb-6`}>
            Poetry Collections
          </h2>
          <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-foreground max-w-3xl mx-auto`}>
            Curated collections designed to support your healing journey through the power of words and creative expression.
          </p>
        </div>

        <div className="space-y-8">
          {poetryCollections.map((collection, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30 bg-card">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className={`font-serif ${DESIGN_SYSTEM.typography.h3} font-semibold text-foreground mb-2`}>
                        {collection.title}
                      </h3>
                      <p className={`font-sans ${DESIGN_SYSTEM.typography.small} text-primary font-medium mb-4`}>
                        {collection.subtitle}
                      </p>
                      <Badge className={collection.available ? 
                        'bg-accent/10 text-accent border-accent/20' : 
                        'bg-muted text-foreground border-muted-foreground/20'
                      }>
                        {collection.status}
                      </Badge>
                    </div>
                    
                    <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-foreground mb-6`}>
                      {collection.description}
                    </p>

                    <div className="mb-6">
                      <h4 className={`font-sans ${DESIGN_SYSTEM.typography.small} font-semibold text-foreground mb-3`}>
                        Themes Explored:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {collection.themes.map((theme, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {theme}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-64 flex-shrink-0">
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6 text-center">
                      {collection.available ? (
                        <div className="space-y-3">
                          <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-sans">
                            <Link to="/poetry/collections">Read Collection</Link>
                          </Button>
                          <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-sans">
                            <Link to="/contact">Get Notified</Link>
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <Button disabled className="w-full bg-muted text-foreground font-sans cursor-not-allowed">
                            Coming Soon
                          </Button>
                          <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-sans">
                            <Link to="/contact">Join Waitlist</Link>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* About My Poetry */}
      <Section 
        size="large" 
        background={true}
        className="bg-card/50"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`font-serif ${DESIGN_SYSTEM.typography.h2} font-semibold text-foreground mb-6`}>
            Why Poetry?
          </h2>
          <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-foreground mb-12 max-w-3xl mx-auto`}>
            Poetry has been my companion through every season of healing and becoming. 
            It's how I process, how I remember, how I find my way back to myself.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className={`font-serif ${DESIGN_SYSTEM.typography.h3} font-semibold text-foreground mb-4`}>
                Healing Tool
              </h3>
              <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-foreground`}>
                Poetry provides a safe space to explore complex emotions and experiences that might be difficult to express otherwise.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <PenTool className="h-8 w-8 text-accent" />
              </div>
              <h3 className={`font-serif ${DESIGN_SYSTEM.typography.h3} font-semibold text-foreground mb-4`}>
                Creative Expression
              </h3>
              <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-foreground`}>
                Writing poetry helps you find your voice and reclaim your story in a way that feels authentic and empowering.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className={`font-serif ${DESIGN_SYSTEM.typography.h3} font-semibold text-foreground mb-4`}>
                Connection
              </h3>
              <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-foreground`}>
                Poetry creates bridges between experiences, helping you feel less alone in your journey of healing and growth.
              </p>
            </div>
          </div>
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
            Ready to Explore Poetry Together?
          </h2>
          <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-foreground mb-8 max-w-2xl mx-auto`}>
            Whether you're looking for healing through words or want to explore your own creative expression, 
            poetry can be a powerful companion on your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans">
              <Link to="/poetry/read">Read More Poems</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-foreground text-foreground hover:bg-foreground hover:text-background font-sans">
              <Link to="/contact">Share Your Poetry</Link>
            </Button>
          </div>
        </div>
      </Section>
    </FullPageBackground>
  );
};

export default Poetry;

