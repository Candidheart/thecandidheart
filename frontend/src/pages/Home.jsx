import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Heart, Lightbulb, Feather, ArrowRight, Quote, Sparkles, Star } from 'lucide-react';
import Hero from '@/components/ui/hero';
import Section from '@/components/ui/section';
import ContentCard from '@/components/ui/content-card';
import FullPageBackground from '@/components/ui/full-page-background';
import { DESIGN_SYSTEM } from '@/lib/design-system';

const Home = () => {


  return (
    <>
      <Helmet>
        <title>The Candid Heart | Healing, Poetry & Strategy with Samantha Josette</title>
        <meta name="description" content="Samantha Josette helps women heal from betrayal trauma through poetry, coaching, and soulful business strategy. Transform your pain into power with trauma-informed support." />
        <meta name="keywords" content="betrayal trauma healing, women's healing, poetry therapy, trauma-informed coaching, business strategy, soulful entrepreneurship" />
        <link rel="canonical" href="https://thecandidheart.com/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="The Candid Heart | Healing, Poetry & Strategy with Samantha Josette" />
        <meta property="og:description" content="Samantha Josette helps women heal from betrayal trauma through poetry, coaching, and soulful business strategy." />
        <meta property="og:url" content="https://thecandidheart.com/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Candid Heart | Healing, Poetry & Strategy with Samantha Josette" />
        <meta name="twitter:description" content="Samantha Josette helps women heal from betrayal trauma through poetry, coaching, and soulful business strategy." />
      </Helmet>
      <FullPageBackground>
      {/* Hero Section */}
      <Hero
        title="Your message isn't missing—it's buried beneath what you were told to be."
        subtitle="Let's unearth the voice that already knows what to say."
        size="large"
        background={false}
      />

      {/* Introduction Section */}
      <Section 
        size="large" 
        background={false}
        className="py-20 lg:py-24"
      >
        <div className={DESIGN_SYSTEM.layouts.hero.container}>
          <div className={DESIGN_SYSTEM.layouts.hero.content}>
            <div className={DESIGN_SYSTEM.layouts.grid.twoCol}>
              <div className="animate-slide-up">
                <h2 className={`font-serif ${DESIGN_SYSTEM.typography.h2} font-semibold text-sage-800 mb-6`}>
                  I'm a writer, strategist, and survivor of betrayal trauma.
                </h2>
                <div className="space-y-4">
                  <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-sage-700 leading-relaxed`}>
                    I spent nearly a decade as a stay-at-home mom, and when my world fell apart, 
                    I didn't just rebuild — I wrote, I healed, and I built systems to support 
                    the woman I was becoming.
                  </p>
                  <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-sage-700 leading-relaxed`}>
                    This is the merging of my two worlds: healing through poetry and personal coaching, 
                    and empowerment through copywriting, AI automations, and clarity-first strategy.
                  </p>
                </div>
                <div className="mt-8">
                  <Button asChild variant="outline" className="border-sage-500 text-sage-600 hover:bg-sage-50 hover:text-sage-700">
                    <Link to="/about">My Story</Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative z-30">
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 h-96 flex items-center justify-center border border-white/30 shadow-2xl">
                  <div className="text-center">
                    <div className="flex justify-center space-x-4 mb-6">
                      <Heart className="h-12 w-12 text-sage-500" />
                      <Lightbulb className="h-12 w-12 text-pink-300" />
                      <Feather className="h-12 w-12 text-sage-500" />
                    </div>
                    <p className="font-serif text-xl text-sage-700 font-bold italic drop-shadow-sm">
                      "You don't have to choose between structure and softness."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Two Paths Section */}
      <Section 
        size="large" 
        background={false}
        className=""
      >
        <div className="text-center mb-16">
          <h2 className={`font-serif ${DESIGN_SYSTEM.typography.h2} font-semibold text-sage-800 mb-6`}>
            Two Paths, One Journey
          </h2>
          <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-sage-700 max-w-3xl mx-auto`}>
            Whether you're seeking healing and clarity or building systems for growth, 
            I meet you where you are and guide you where you're going.
          </p>
        </div>

        <div className={DESIGN_SYSTEM.layouts.grid.twoCol}>
          {/* Healing Path */}
          <ContentCard
            icon={Heart}
            title="Healing & Clarity"
            description="Betrayal trauma coaching, devotionals, and story-based content for the woman who's ready to rebuild her identity and reclaim her voice."
            variant="primary"
          >
            <ul className="font-sans text-sm text-sage-700 space-y-2 mb-8">
              <li>• Betrayal trauma recovery</li>
              <li>• Identity rebuilding</li>
              <li>• Journaling frameworks</li>
              <li>• Poetry for healing</li>
            </ul>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/healing">Start Healing</Link>
            </Button>
          </ContentCard>

          {/* Strategy Path */}
          <ContentCard
            icon={Lightbulb}
            title="Soulful Strategy"
            description="Copywriting, AI automation, and clarity mapping for the business owner who wants to scale with integrity and authentic voice."
            variant="accent"
          >
            <ul className="font-sans text-sm text-sage-700 space-y-2 mb-8">
              <li>• Strategic copywriting</li>
              <li>• AI automation systems</li>
              <li>• Clarity mapping</li>
              <li>• Voice-led strategy</li>
            </ul>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/building">Build Systems</Link>
            </Button>
          </ContentCard>
        </div>
      </Section>

      {/* Testimonial/Quote Section */}
      <Section 
        size="large" 
        background={true}
        className=""
      >
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="h-12 w-12 text-primary mx-auto mb-8" />
          <blockquote className={`font-serif ${DESIGN_SYSTEM.typography.h3} text-sage-700 italic mb-8 leading-relaxed font-semibold`}>
            "Poetry is not a luxury — it's a framework for feeling seen. 
            You can automate without abandoning your voice."
          </blockquote>
          <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-sage-600 font-medium`}>
            — Samantha Josette, Poet, Strategist, Mirror Holder
          </p>
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
            Ready to Begin?
          </h2>
          <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-sage-700 mb-8 max-w-2xl mx-auto`}>
            This is your digital front porch — a sacred creative studio where trauma survivors 
            feel safe to explore healing and business owners feel grounded enough to hire strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans">
              <Link to="/contact">Start Here</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-sage-500 text-sage-600 hover:bg-sage-50 hover:text-sage-700 font-sans">
              <Link to="/about">Learn My Story</Link>
            </Button>
          </div>
        </div>
      </Section>
    </FullPageBackground>
    </>
  );
};

export default Home;