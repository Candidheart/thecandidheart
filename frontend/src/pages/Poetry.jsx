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
        size="large"
        background={false}
        badge={{ icon: PenTool, text: "Creative Expression" }}
      />

      {/* Featured Poems */}
      <Section 
        size="large" 
        background={true}
      >
        <div className="text-center mb-16">
          <h2 className={`font-serif ${DESIGN_SYSTEM.typography.h2} font-semibold text-sage-800 mb-6`}>
            Featured Poems
          </h2>
          <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-sage-700 max-w-3xl mx-auto`}>
            A selection of poems that have resonated deeply with readers on their own healing journeys.
          </p>
        </div>

        <div className={DESIGN_SYSTEM.layouts.grid.threeCol}>
          {featuredPoems.map((poem, index) => (
            <Card key={index} className="">
              <CardContent className="p-8">
                <div className="mb-4">
                  <Badge className="">
                    {poem.theme}
                  </Badge>
                  <h3 className={`font-serif ${DESIGN_SYSTEM.typography.h3} font-semibold text-sage-800 mb-4`}>
                    {poem.title}
                  </h3>
                </div>
                
                <blockquote className={`font-serif ${DESIGN_SYSTEM.typography.body} text-sage-700 italic mb-6 leading-relaxed`}>
                  "{poem.excerpt}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <span className={`font-sans ${DESIGN_SYSTEM.typography.small} text-sage-600`}>
                    {poem.readTime}
                  </span>
                  <Button asChild variant="outline" size="sm" className="">
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
        className=""
      >
        <div className="text-center mb-16">
          <h2 className={`font-serif ${DESIGN_SYSTEM.typography.h2} font-semibold text-sage-800 mb-6`}>
            Poetry Collections
          </h2>
          <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-sage-700 max-w-3xl mx-auto`}>
            Curated collections designed to support your healing journey through the power of words and creative expression.
          </p>
        </div>

        <div className="space-y-8">
          {poetryCollections.map((collection, index) => (
            <Card key={index} className="">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="mb-4">
                      <h3 className={`font-serif ${DESIGN_SYSTEM.typography.h3} font-semibold text-sage-800 mb-2`}>
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
                    
                                          <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-sage-700 mb-6`}>
                        {collection.description}
                      </p>

                    <div className="mb-6">
                      <h4 className={`font-sans ${DESIGN_SYSTEM.typography.small} font-semibold text-sage-700 mb-3`}>
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
                    <div className="">
                      {collection.available ? (
                        <div className="space-y-3">
                          <Button asChild className="">
                            <Link to="/poetry/collections">Read Collection</Link>
                          </Button>
                          <Button asChild variant="outline" className="">
                            <Link to="/contact">Get Notified</Link>
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <Button disabled className="">
                            Coming Soon
                          </Button>
                          <Button asChild variant="outline" className="">
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
        className=""
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`font-serif ${DESIGN_SYSTEM.typography.h2} font-semibold text-sage-800 mb-6`}>
            Why Poetry?
          </h2>
          <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-sage-700 mb-12 max-w-3xl mx-auto`}>
            Poetry has been my companion through every season of healing and becoming. 
            It's how I process, how I remember, how I find my way back to myself.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className={`font-serif ${DESIGN_SYSTEM.typography.h3} font-semibold text-sage-800 mb-4`}>
                Healing Tool
              </h3>
              <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-sage-700`}>
                Poetry provides a safe space to explore complex emotions and experiences that might be difficult to express otherwise.
              </p>
            </div>

            <div>
              <div className="">
                <PenTool className="h-8 w-8 text-accent" />
              </div>
              <h3 className={`font-serif ${DESIGN_SYSTEM.typography.h3} font-semibold text-sage-800 mb-4`}>
                Creative Expression
              </h3>
              <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-sage-700`}>
                Writing poetry helps you find your voice and reclaim your story in a way that feels authentic and empowering.
              </p>
            </div>

            <div>
              <div className="">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className={`font-serif ${DESIGN_SYSTEM.typography.h3} font-semibold text-sage-800 mb-4`}>
                Connection
              </h3>
              <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-sage-700`}>
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
        className=""
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`font-serif ${DESIGN_SYSTEM.typography.h2} font-semibold text-sage-800 mb-6`}>
            Ready to Explore Poetry Together?
          </h2>
          <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-sage-700 mb-8 max-w-2xl mx-auto`}>
            Whether you're looking for healing through words or want to explore your own creative expression, 
            poetry can be a powerful companion on your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="">
              <Link to="/poetry/read">Read More Poems</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="">
              <Link to="/contact">Share Your Poetry</Link>
            </Button>
          </div>
        </div>
      </Section>
    </FullPageBackground>
  );
};

export default Poetry;

