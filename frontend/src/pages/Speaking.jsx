import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Mic, Users, Lightbulb, Heart, ArrowRight, Calendar, MapPin, Cpu } from 'lucide-react';
import FullPageBackground from '@/components/ui/full-page-background';

const Speaking = () => {
  const speakingServices = [
    {
      icon: Mic,
      title: "Keynotes + Strategy Sessions",
      subtitle: "For Conscious Companies",
      description: "Inspiring keynotes and strategic sessions designed for organizations ready to align their business practices with their values while driving meaningful results.",
      formats: [
        "60-90 minute keynotes",
        "Half-day strategy sessions",
        "Multi-day leadership retreats",
        "Virtual or in-person delivery"
      ],
      audiences: [
        "Leadership teams",
        "Company-wide meetings",
        "Industry conferences",
        "Board retreats"
      ],
      price: "Starting at $7,500"
    },
    {
      icon: Users,
      title: "Creative Team Intensives",
      subtitle: "Narrative Leadership Events",
      description: "Immersive workshops that help creative teams and leaders develop authentic voice, ethical practices, and human-centered approaches to innovation.",
      formats: [
        "2-3 day intensive workshops",
        "Monthly team development series",
        "Quarterly leadership circles",
        "Custom program design"
      ],
      audiences: [
        "Creative teams",
        "Marketing departments",
        "Product development teams",
        "Innovation leaders"
      ],
      price: "Starting at $12,500"
    }
  ];

  const speakingTopics = [
    {
      icon: Cpu,
      title: "Ethical AI",
      description: "Navigating AI implementation while maintaining human connection, ethical standards, and authentic communication.",
      keyPoints: [
        "AI ethics frameworks for organizations",
        "Maintaining humanity in automated systems",
        "Responsible AI adoption strategies",
        "Building trust in the age of automation"
      ]
    },
    {
      icon: Mic,
      title: "Brand Voice",
      description: "Developing authentic brand voice that resonates deeply while staying true to organizational values and human experience.",
      keyPoints: [
        "Finding your authentic organizational voice",
        "Voice-led content strategy",
        "Building emotional connection through communication",
        "Inclusive language and accessibility"
      ]
    },
    {
      icon: Heart,
      title: "Trauma-Informed Systems",
      description: "Creating organizational systems, policies, and cultures that acknowledge and support human healing and resilience.",
      keyPoints: [
        "Trauma-informed organizational design",
        "Creating psychologically safe workplaces",
        "Supporting employee wellbeing and resilience",
        "Leadership through a healing lens"
      ]
    },
    {
      icon: Lightbulb,
      title: "Legacy Work",
      description: "Building businesses and careers that create lasting positive impact while honoring both profit and purpose.",
      keyPoints: [
        "Defining your organizational legacy",
        "Sustainable business practices",
        "Balancing profit with purpose",
        "Creating systems for long-term impact"
      ]
    }
  ];



  return (
    <>
      <Helmet>
        <title>Speaking & Workshops | Samantha Josette - Keynotes & Strategy Sessions</title>
        <meta name="description" content="Book Samantha Josette for inspiring keynotes, strategy sessions, and workshops. Transform your organization with trauma-informed leadership and authentic business strategy." />
        <meta name="keywords" content="Samantha Josette speaking, keynote speaker, business strategy speaker, trauma-informed leadership, workshop facilitator, corporate speaking, conference speaker" />
        <link rel="canonical" href="https://thecandidheart.com/speaking" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Speaking & Workshops | Samantha Josette - Keynotes & Strategy Sessions" />
        <meta property="og:description" content="Book Samantha Josette for inspiring keynotes, strategy sessions, and workshops." />
        <meta property="og:url" content="https://thecandidheart.com/speaking" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Speaking & Workshops | Samantha Josette - Keynotes & Strategy Sessions" />
        <meta name="twitter:description" content="Book Samantha Josette for inspiring keynotes, strategy sessions, and workshops." />
      </Helmet>
      <FullPageBackground>
      {/* Hero Section */}
      <section className="relative py-12 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 "></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Mic className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="font-serif text-4xl md:text-6xl font-semibold text-sage-800 mb-6 leading-tight">
              Speaking & Workshops
            </h1>
            <p className="font-sans text-xl md:text-2xl text-sage-700 max-w-3xl mx-auto leading-relaxed">
              Keynotes and strategy sessions for conscious companies, plus creative team intensives 
              and narrative leadership events that inspire authentic, ethical innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Speaking Philosophy Section */}
      <section className="">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-800 mb-6">
              Speaking That Moves Beyond Information
            </h2>
            <p className="font-sans text-lg text-sage-700 max-w-3xl mx-auto leading-relaxed">
              I don't just share information — I create experiences that shift perspectives, 
              inspire action, and leave audiences with practical tools they can implement immediately. 
              Every talk is designed to honor both the strategic mind and the human heart.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-sage-800 mb-3">
                Story-Driven Content
              </h3>
              <p className="font-sans text-sage-700">
                Every presentation weaves together personal narrative, practical strategy, 
                and actionable insights that resonate on both intellectual and emotional levels.
              </p>
            </div>
            <div className="text-center">
              <div className="">
                <Lightbulb className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-sage-800 mb-3">
                Practical Implementation
              </h3>
              <p className="font-sans text-sage-700">
                Audiences leave with concrete frameworks, tools, and next steps they can 
                implement immediately to create meaningful change in their organizations.
              </p>
            </div>
            <div className="text-center">
              <div className="">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-sage-800 mb-3">
                Interactive Experience
              </h3>
              <p className="font-sans text-sage-700">
                Engaging, participatory sessions that create space for reflection, 
                discussion, and collaborative problem-solving among participants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-800 mb-6">
              Speaking Services
            </h2>
            <p className="font-sans text-lg text-sage-700 max-w-3xl mx-auto">
              From inspiring keynotes to intensive workshops, I offer a range of speaking services 
              designed to meet your organization's unique needs and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {speakingServices.map((service, index) => (
              <Card key={index} className="">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <service.icon className="h-8 w-8 text-primary mr-3" />
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-sage-800">
                        {service.title}
                      </h3>
                      <p className="font-sans text-sm text-accent">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="font-sans text-sage-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-serif text-lg font-semibold text-foreground mb-3">
                        Available Formats
                      </h4>
                      <ul className="font-sans text-sm text-foreground space-y-2">
                        {service.formats.map((format, idx) => (
                          <li key={idx}>• {format}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-semibold text-foreground mb-3">
                        Ideal Audiences
                      </h4>
                      <ul className="font-sans text-sm text-foreground space-y-2">
                        {service.audiences.map((audience, idx) => (
                          <li key={idx}>• {audience}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg font-semibold text-foreground">
                      {service.price}
                    </span>
                    <Button 
                      asChild 
                      className=""
                    >
                      <Link to="/contact">
                        Book Now
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-12 lg:py-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Speaking Topics
            </h2>
            <p className="font-sans text-lg text-foreground max-w-3xl mx-auto">
              Core topics that can be customized and combined to meet your event's specific needs 
              and your audience's unique challenges and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {speakingTopics.map((topic, index) => (
              <Card key={index} className="">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="">
                      <topic.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {topic.title}
                    </h3>
                  </div>

                  <p className="font-sans text-foreground mb-6 leading-relaxed">
                    {topic.description}
                  </p>

                  <div>
                    <h4 className="font-serif text-lg font-semibold text-foreground mb-3">
                      Key Discussion Points
                    </h4>
                    <ul className="font-sans text-sm text-foreground space-y-2">
                      {topic.keyPoints.map((point, idx) => (
                        <li key={idx}>• {point}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>



      {/* Booking Information Section */}
      <section className="">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Booking Information
            </h2>
            <p className="font-sans text-lg text-foreground">
              Ready to bring these conversations to your organization? Here's what you need to know.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Calendar className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                Advance Booking
              </h3>
              <p className="font-sans text-foreground text-sm">
                Book 6-8 weeks in advance for keynotes, 8-12 weeks for intensive workshops.
              </p>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 text-accent mx-auto mb-4" />
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                Location Flexibility
              </h3>
              <p className="font-sans text-foreground text-sm">
                Available for virtual, in-person, or hybrid events worldwide.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                Custom Content
              </h3>
              <p className="font-sans text-foreground text-sm">
                All content customized to your audience, industry, and organizational goals.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="font-sans text-foreground mb-8">
              Each speaking engagement includes pre-event consultation, customized content development, 
              and post-event resources for continued implementation.
            </p>
            <Button 
              asChild 
              size="lg" 
              className=""
            >
              <Link to="/contact">
                Discuss Your Event
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Ready to Inspire Your Team?
          </h2>
          <p className="font-sans text-lg text-foreground mb-8 max-w-2xl mx-auto">
            Let's create a speaking experience that moves your audience beyond information 
            to transformation, with practical tools they can implement immediately.
          </p>

        </div>
      </section>
    </FullPageBackground>
    </>
  );
};

export default Speaking;

