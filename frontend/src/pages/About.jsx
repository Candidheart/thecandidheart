import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Lightbulb, Feather, ArrowRight, Quote, Star, Sparkles, BookOpen, Users, Target } from 'lucide-react';
import Hero from '@/components/ui/hero';
import Section from '@/components/ui/section';
import ContentCard from '@/components/ui/content-card';
import FullPageBackground from '@/components/ui/full-page-background';
import { DESIGN_SYSTEM } from '@/lib/design-system';

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
    <FullPageBackground>
      {/* Hero Section */}
      <Hero
        title={
          <>
            I'm Samantha Josette —{' '}
            <span className="text-primary">poet, strategist</span>, and mirror holder for those navigating the wild terrain of healing and becoming.
          </>
        }
        subtitle=""

        size="xlarge"
        background={false}
        badge={{ icon: Sparkles, text: "Your Story Matters" }}
      >
        <div className="space-y-6 text-lg text-sage-700 leading-relaxed max-w-4xl mx-auto mb-12">
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
      </Hero>

      {/* Values Section */}
      <Section 
        size="large" 
        background={true}

        className=""
      >
        <div className="text-center mb-16">
          <h2 className={`font-serif ${DESIGN_SYSTEM.typography.h2} font-semibold text-sage-800 mb-6`}>
            What I Believe
          </h2>
          <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-sage-700 max-w-3xl mx-auto`}>
            These aren't just words on a page. They're the principles that guide every conversation, 
            every strategy session, every piece of content I create.
          </p>
        </div>

        <div className={DESIGN_SYSTEM.layouts.grid.threeCol}>
          {values.map((value, index) => (
            <ContentCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              variant={index === 0 ? 'primary' : index === 1 ? 'accent' : 'primary'}
            />
          ))}
        </div>
      </Section>

      {/* Timeline Section */}
      <Section 
        size="large" 
        background={false}

        className=""
      >
        <div className="text-center mb-16">
          <h2 className={`font-serif ${DESIGN_SYSTEM.typography.h2} font-semibold text-sage-800 mb-6`}>
            My Journey
          </h2>
          <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-sage-700 max-w-3xl mx-auto`}>
            This is the story of how I became who I am — and how that becoming shapes the work I do today.
          </p>
        </div>

        <div className="space-y-12">
          {timeline.map((item, index) => (
            <div key={index} className="relative">
              {/* Timeline connector */}
              {index < timeline.length - 1 && (
                <div className=""></div>
              )}
              
              <div className="flex items-start space-x-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="mb-2">
                    <span className="">
                      {item.year}
                    </span>
                  </div>
                  <h3 className={`font-serif ${DESIGN_SYSTEM.typography.h3} font-semibold text-sage-800 mb-4`}>
                    {item.title}
                  </h3>
                  <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-sage-700 leading-relaxed`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
            Ready to Begin Your Story?
          </h2>
          <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-sage-700 mb-8 max-w-2xl mx-auto`}>
            Whether you're in the wilderness of healing or ready to build something beautiful, 
            I'm here to walk alongside you. Your story isn't over — it's just beginning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="">
              <Link to="/contact">Start Your Journey</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="">
              <Link to="/healing">Explore Healing</Link>
            </Button>
          </div>
        </div>
      </Section>
    </FullPageBackground>
  );
};

export default About;

