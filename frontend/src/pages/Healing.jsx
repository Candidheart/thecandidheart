import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, BookOpen, PenTool, Shield, MapPin, Star, Sparkles, Users, Home } from 'lucide-react';
import Hero from '@/components/ui/hero';
import Section from '@/components/ui/section';
import FullPageBackground from '@/components/ui/full-page-background';
import { DESIGN_SYSTEM } from '@/lib/design-system';

const Healing = () => {


  const healingOfferings = [
    {
      icon: BookOpen,
      title: "Shattered Into One",
      subtitle: "Poetry + Journal",
      description: "A collection of poetry and guided journaling for women navigating betrayal trauma and identity rebuilding.",
      features: [
        "Poetry for each stage of healing",
        "Guided journal prompts",
        "Framework for integration",
        "Optional community support"
      ],
      status: "Coming Soon",
      buttonText: "Join Waitlist",
      buttonLink: "/contact",
      available: false
    },
    {
      icon: PenTool,
      title: "Morning Pages for the Healing Heart",
      subtitle: "Daily Practice Guide",
      description: "A structured approach to morning pages specifically designed for trauma survivors and those in recovery.",
      features: [
        "30-day guided practice",
        "Trauma-informed prompts",
        "Progress tracking tools",
        "Audio meditations"
      ],
      status: "Coming Soon",
      buttonText: "Join Waitlist",
      buttonLink: "/contact",
      available: false
    },
    {
      icon: Shield,
      title: "Say It Brave",
      subtitle: "Children's Book + Boundaries Class",
      description: "A children's book about boundaries paired with a class for parents on teaching healthy boundaries to kids.",
      features: [
        "Illustrated book for ages 9–13",
        "Parent–child workshop series",
        "School assembly program",
        "Family activity guides + scripts"
      ],
      status: "Available Now",
      buttonText: "Learn More",
      buttonLink: "/say-it-brave",
      available: true
    },
    {
      icon: Home,
      title: "Retreat & Compound Vision",
      subtitle: "Collaborative Healing Space",
      description: "A vision for a healing retreat space where women can come to rebuild, create, and integrate their stories.",
      features: [
        "Healing-centered design",
        "Creative + therapeutic workshops",
        "Community circles + storytelling",
        "Partnership + hosting opportunities"
      ],
      status: "Dream in Motion",
      buttonText: "Explore Partnership",
      buttonLink: "/contact",
      available: true
    }
  ];

  return (
    <>
      <Helmet>
        <title>Healing from Betrayal Trauma | The Candid Heart with Samantha Josette</title>
        <meta name="description" content="Heal from betrayal trauma with trauma-informed coaching, poetry therapy, and community support. Samantha Josette helps women rebuild their identity and reclaim their voice." />
        <meta name="keywords" content="betrayal trauma healing, trauma recovery, women's healing, poetry therapy, trauma-informed coaching, identity rebuilding, healing from infidelity" />
        <link rel="canonical" href="https://thecandidheart.com/healing" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Healing from Betrayal Trauma | The Candid Heart with Samantha Josette" />
        <meta property="og:description" content="Heal from betrayal trauma with trauma-informed coaching, poetry therapy, and community support." />
        <meta property="og:url" content="https://thecandidheart.com/healing" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Healing from Betrayal Trauma | The Candid Heart with Samantha Josette" />
        <meta name="twitter:description" content="Heal from betrayal trauma with trauma-informed coaching, poetry therapy, and community support." />
      </Helmet>
      <FullPageBackground>
        {/* Hero Section */}
        <Hero
          title="Healing & Wholeness"
          subtitle="From poetry to practical tools, these offerings are designed to support your healing journey and help you reclaim your voice and power."

          size="large"
          badge={{ icon: Heart, text: "Your Healing Matters" }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-sage-600 hover:bg-sage-700 text-sage-900 font-sans shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/contact">
                Start Your Healing Journey
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-sage-500 text-sage-600 hover:bg-sage-50 hover:text-sage-700 font-sans transition-all duration-300"
            >
              <Link to="/about">My Story</Link>
            </Button>
          </div>
        </Hero>

        {/* Offerings Section */}
        <Section 
          size="large" 
          background={false}
          className="py-20 lg:py-24"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className={`font-serif ${DESIGN_SYSTEM.typography.h2} font-semibold text-sage-800 mb-6`}>
                Healing & Wholeness
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-sage-400 to-pink-300 mx-auto mb-8"></div>
              <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-sage-700 max-w-3xl mx-auto leading-relaxed`}>
                From poetry to practical tools, these offerings are designed to support your healing journey 
                and help you reclaim your voice and power.
              </p>
            </div>

            {/* Offerings Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
              {healingOfferings.map((offering, index) => (
                <Card 
                  key={index} 
                  className="group bg-white/90 backdrop-blur-sm border border-sage-200/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  <CardContent className="p-8">
                    {/* Icon and Header */}
                    <div className="text-center mb-8">
                      <div className="bg-gradient-to-br from-sage-100 to-pink-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <offering.icon className="h-10 w-10 text-sage-600" />
                      </div>
                      <h3 className={`font-serif ${DESIGN_SYSTEM.typography.h3} font-semibold text-sage-800 mb-2`}>
                        {offering.title}
                      </h3>
                      <p className={`font-sans ${DESIGN_SYSTEM.typography.small} text-sage-600 font-medium mb-4`}>
                        {offering.subtitle}
                      </p>
                      <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-sage-700 mb-6 leading-relaxed`}>
                        {offering.description}
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {offering.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-sage-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className={`font-sans ${DESIGN_SYSTEM.typography.small} text-sage-700 leading-relaxed`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="text-center pt-6 border-t border-sage-200/50">
                      <p className={`font-sans ${DESIGN_SYSTEM.typography.body} font-semibold text-sage-600 mb-4`}>
                        {offering.status}
                      </p>
                      
                      {offering.available ? (
                        <Button 
                          asChild 
                          className="bg-sage-600 hover:bg-sage-700 text-sage-900 font-sans shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          <Link to={offering.buttonLink}>{offering.buttonText}</Link>
                        </Button>
                      ) : (
                        <div className="space-y-3">
                          <Button 
                            disabled 
                            className="bg-sage-200 text-sage-500 font-sans cursor-not-allowed"
                          >
                            Coming Soon
                          </Button>
                          <Button 
                            asChild 
                            variant="outline" 
                            className="border-sage-500 text-sage-600 hover:bg-sage-50 hover:text-sage-700 font-sans transition-all duration-300"
                          >
                            <Link to={offering.buttonLink}>{offering.buttonText}</Link>
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Philosophy Section */}
        <Section 
          size="large" 
          background={false}
          className="py-20 lg:py-24"
        >
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className={`font-serif ${DESIGN_SYSTEM.typography.h2} font-semibold text-sage-800 mb-6`}>
              My Approach to Healing
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sage-400 to-pink-300 mx-auto mb-8"></div>
            <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-sage-700 mb-12 max-w-3xl mx-auto leading-relaxed`}>
              Healing isn't linear, and it doesn't happen in isolation. My approach honors the complexity 
              of your journey while providing practical tools for transformation.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-sage-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className={`font-serif ${DESIGN_SYSTEM.typography.h3} font-semibold text-sage-800 mb-4`}>
                  Trauma-Informed
                </h3>
                <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-sage-700 leading-relaxed`}>
                  Every resource and approach honors your nervous system and respects your healing timeline.
                </p>
              </div>

              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-sage-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <PenTool className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className={`font-serif ${DESIGN_SYSTEM.typography.h3} font-semibold text-sage-800 mb-4`}>
                  Creative Expression
                </h3>
                <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-sage-700 leading-relaxed`}>
                  Poetry, writing, and creative practices as pathways to healing and self-discovery.
                </p>
              </div>

              <div className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-sage-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-sage-600" />
                </div>
                <h3 className={`font-serif ${DESIGN_SYSTEM.typography.h3} font-semibold text-sage-800 mb-4`}>
                  Community-Centered
                </h3>
                <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-sage-700 leading-relaxed`}>
                  Healing happens in connection. Safe spaces for sharing, learning, and growing together.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section 
          size="large" 
          background={false}
          className="py-20 lg:py-24"
        >
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className={`font-serif ${DESIGN_SYSTEM.typography.h2} font-semibold text-sage-800 mb-6`}>
              Ready to Begin Your Healing Journey?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sage-400 to-pink-300 mx-auto mb-8"></div>
            <p className={`font-sans ${DESIGN_SYSTEM.typography.body} text-sage-700 mb-8 max-w-2xl mx-auto leading-relaxed`}>
              Whether you're just beginning to explore healing or ready to dive deep, 
              I'm here to support you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-sage-600 hover:bg-sage-700 text-sage-900 font-sans shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Link to="/contact">Start Your Journey</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-sage-500 text-sage-600 hover:bg-sage-50 hover:text-sage-700 font-sans transition-all duration-300"
              >
                <Link to="/poetry">Read My Poetry</Link>
              </Button>
            </div>
          </div>
        </Section>
    </FullPageBackground>
    </>
  );
};

export default Healing;

