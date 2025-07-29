import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Feather, Heart, Download, ExternalLink, Filter } from 'lucide-react';

const Poetry = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const poems = [
    {
      title: "The Woman I'm Becoming",
      category: "rebuilding",
      excerpt: "She rises not from ashes, but from choice...\nEach morning, she decides again\nto trust the voice that whispers\n'you are worth the work of becoming.'",
      fullText: `She rises not from ashes, but from choice.
Each morning, she decides again
to trust the voice that whispers
'you are worth the work of becoming.'

The mirror shows her scars,
but she sees stories.
The silence holds her pain,
but she hears poetry.

This woman I'm becoming
doesn't need permission
to take up space,
to speak her truth,
to build a life that fits
the shape of her healing.

She is not who she was,
and that is not a loss—
it is a liberation.`
    },
    {
      title: "Sacred Rebuilding",
      category: "faith",
      excerpt: "In the rubble of what was,\nI found the blueprint for what could be...\nGod doesn't waste our breaking;\nHe uses it as foundation.",
      fullText: `In the rubble of what was,
I found the blueprint for what could be.
Every shattered piece
a cornerstone for something stronger.

God doesn't waste our breaking;
He uses it as foundation.
The cracks become the places
where His light gets in,
where grace takes root,
where new growth begins.

I am not the same woman
who entered this wilderness,
and I am grateful.
She was beautiful,
but she was not free.

This rebuilding is sacred work—
holy hands shaping holy clay,
divine love writing new stories
on the pages of my becoming.`
    },
    {
      title: "The Space Between",
      category: "pain",
      excerpt: "There is a space between\nwho I was and who I'm becoming...\nIn this liminal place,\nI am learning to breathe.",
      fullText: `There is a space between
who I was and who I'm becoming,
a threshold where grief and hope
dance their ancient dance.

In this liminal place,
I am learning to breathe.
To sit with the discomfort
of not knowing,
of being unfinished,
of carrying both sorrow and joy
in the same tender heart.

The space between is not empty—
it is full of possibility,
pregnant with potential,
alive with the quiet work
of transformation.

Here, I am neither
the woman who was broken
nor the woman who is whole.
I am the woman who is becoming,
and that is enough.`
    },
    {
      title: "Systems of Grace",
      category: "rebuilding",
      excerpt: "I built my healing like a business plan...\nStep by step, choice by choice,\nI automated my recovery.",
      fullText: `I built my healing like a business plan:
clear objectives, measurable outcomes,
systems that could run
even when I couldn't.

Step by step, choice by choice,
I automated my recovery.
Morning routines that held me
when I couldn't hold myself.
Evening rituals that reminded me
I was worth the investment.

Healing, I learned, is not magic—
it is methodology.
Not a lightning strike of wholeness,
but a thousand small decisions
to choose growth over comfort,
truth over familiar lies.

I am both the CEO
and the product being developed.
The strategist and the strategy.
The system and the soul
it was designed to serve.`
    }
  ];

  const devotionals = [
    {
      title: "Morning Pages for the Healing Heart",
      description: "A 30-day devotional combining faith, journaling, and gentle self-discovery for women in recovery.",
      type: "Digital Download",
      price: "Free"
    },
    {
      title: "Prayers for the In-Between",
      description: "Honest conversations with God for the seasons when you're not who you were but not yet who you're becoming.",
      type: "eBook",
      price: "$12"
    },
    {
      title: "Sacred Systems Workbook",
      description: "A practical guide to building healing routines that honor both your humanity and your divinity.",
      type: "Workbook + Audio",
      price: "$27"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Poems', count: poems.length },
    { id: 'pain', label: 'Poems for Pain', count: poems.filter(p => p.category === 'pain').length },
    { id: 'rebuilding', label: 'Rebuilding', count: poems.filter(p => p.category === 'rebuilding').length },
    { id: 'faith', label: 'Faith', count: poems.filter(p => p.category === 'faith').length }
  ];

  const filteredPoems = selectedFilter === 'all' 
    ? poems 
    : poems.filter(poem => poem.category === selectedFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-accent/10 via-background to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Feather className="h-16 w-16 text-accent" />
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-6">
            Poetry & Devotionals
          </h1>
          <p className="font-sans text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Words for the woman who is healing, rebuilding, and becoming. 
            Poetry is not a luxury — it's a framework for feeling seen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-sans"
            >
              <a href="https://substack.com" target="_blank" rel="noopener noreferrer">
                Read on Substack <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground font-sans"
            >
              <Link to="#devotionals">Browse Devotionals</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-card/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-muted-foreground mr-2" />
              <span className="font-sans text-sm text-muted-foreground">Filter by:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedFilter === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(category.id)}
                className={`font-sans ${
                  selectedFilter === category.id 
                    ? 'bg-accent text-accent-foreground' 
                    : 'border-accent text-accent hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {category.label} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Poetry Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredPoems.map((poem, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all-smooth">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-serif text-2xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {poem.title}
                    </h3>
                    <Badge variant="secondary" className="ml-4 capitalize">
                      {poem.category}
                    </Badge>
                  </div>
                  <div className="font-serif text-muted-foreground leading-relaxed mb-6 whitespace-pre-line italic">
                    {poem.excerpt}
                  </div>
                  <details className="group/details">
                    <summary className="font-sans text-accent cursor-pointer hover:text-accent/80 transition-colors list-none">
                      Read full poem →
                    </summary>
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="font-serif text-foreground leading-relaxed whitespace-pre-line">
                        {poem.fullText}
                      </div>
                    </div>
                  </details>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Devotionals Section */}
      <section id="devotionals" className="py-16 lg:py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center mb-6">
              <Heart className="h-12 w-12 text-primary mr-4" />
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
                Devotionals & Resources
              </h2>
            </div>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              Gentle guides for the journey of healing, combining faith, practical wisdom, 
              and the sacred work of becoming who you're meant to be.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {devotionals.map((devotional, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all-smooth">
                <CardContent className="p-8">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {devotional.title}
                  </h3>
                  <p className="font-sans text-muted-foreground mb-6 leading-relaxed">
                    {devotional.description}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <Badge variant="outline" className="border-accent text-accent">
                      {devotional.type}
                    </Badge>
                    <span className="font-sans text-lg font-semibold text-primary">
                      {devotional.price}
                    </span>
                  </div>
                  <Button 
                    asChild 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Link to="/contact">
                      <Download className="mr-2 h-4 w-4" />
                      {devotional.price === 'Free' ? 'Download Free' : 'Purchase'}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Words for Your Journey
          </h2>
          <p className="font-sans text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Receive weekly poetry, devotionals, and gentle reminders that you are worth 
            the work of becoming. No spam, just soul-nourishing words.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 border border-border rounded-lg bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-sans px-6"
            >
              Subscribe
            </Button>
          </div>
          <p className="font-sans text-xs text-muted-foreground mt-4">
            Unsubscribe anytime. Your email is safe with me.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Ready for Deeper Healing?
          </h2>
          <p className="font-sans text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            If these words resonate with your heart, perhaps you're ready to explore 
            what healing and rebuilding could look like with personalized support.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-lg px-8 py-3"
          >
            <Link to="/work-with-me">
              Explore Healing Services
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Poetry;

