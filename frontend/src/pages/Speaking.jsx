import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mic, Users, Lightbulb, Heart, ArrowRight, Calendar, MapPin, Cpu } from 'lucide-react';

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

  const testimonials = [
    {
      quote: "Samantha's approach to ethical AI implementation transformed how our team thinks about technology. She helped us create frameworks that honor both innovation and humanity.",
      author: "Sarah Chen",
      title: "CTO, TechForward Inc.",
      company: "Fortune 500 Technology Company"
    },
    {
      quote: "The trauma-informed systems workshop was exactly what our organization needed. Samantha created a safe space for difficult conversations and gave us practical tools for change.",
      author: "Marcus Rodriguez",
      title: "Head of People Operations",
      company: "Growing Healthcare Startup"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Mic className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-6 leading-tight">
              Speaking & Workshops
            </h1>
            <p className="font-sans text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Keynotes and strategy sessions for conscious companies, plus creative team intensives 
              and narrative leadership events that inspire authentic, ethical innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans text-lg px-8 py-3"
              >
                <Link to="/contact">
                  Book Me to Speak <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-sans text-lg px-8 py-3"
              >
                <Link to="/about">My Speaking Style</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Speaking Philosophy Section */}
      <section className="py-16 lg:py-24 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Speaking That Moves Beyond Information
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I don't just share information — I create experiences that shift perspectives, 
              inspire action, and leave audiences with practical tools they can implement immediately. 
              Every talk is designed to honor both the strategic mind and the human heart.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Story-Driven Content
              </h3>
              <p className="font-sans text-muted-foreground">
                Every presentation weaves together personal narrative, practical strategy, 
                and actionable insights that resonate on both intellectual and emotional levels.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Practical Implementation
              </h3>
              <p className="font-sans text-muted-foreground">
                Audiences leave with concrete frameworks, tools, and next steps they can 
                implement immediately to create meaningful change in their organizations.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Interactive Experience
              </h3>
              <p className="font-sans text-muted-foreground">
                Engaging, participatory sessions that create space for reflection, 
                discussion, and collaborative problem-solving among participants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Speaking Services
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              From inspiring keynotes to intensive workshops, I offer a range of speaking services 
              designed to meet your organization's unique needs and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {speakingServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all-smooth border-2 hover:border-orange-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <service.icon className="h-8 w-8 text-orange-600 mr-3" />
                    <div>
                      <h3 className="font-serif text-2xl font-semibold text-foreground">
                        {service.title}
                      </h3>
                      <p className="font-sans text-sm text-orange-600">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="font-sans text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-serif text-lg font-semibold text-foreground mb-3">
                        Available Formats
                      </h4>
                      <ul className="font-sans text-sm text-muted-foreground space-y-2">
                        {service.formats.map((format, idx) => (
                          <li key={idx}>• {format}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-semibold text-foreground mb-3">
                        Ideal Audiences
                      </h4>
                      <ul className="font-sans text-sm text-muted-foreground space-y-2">
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
                      className="bg-orange-600 hover:bg-orange-700 text-white"
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
      <section className="py-16 lg:py-24 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Speaking Topics
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              Core topics that can be customized and combined to meet your event's specific needs 
              and your audience's unique challenges and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {speakingTopics.map((topic, index) => (
              <Card key={index} className="hover:shadow-lg transition-all-smooth">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <topic.icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {topic.title}
                    </h3>
                  </div>

                  <p className="font-sans text-muted-foreground mb-6 leading-relaxed">
                    {topic.description}
                  </p>

                  <div>
                    <h4 className="font-serif text-lg font-semibold text-foreground mb-3">
                      Key Discussion Points
                    </h4>
                    <ul className="font-sans text-sm text-muted-foreground space-y-2">
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

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              What Audiences Say
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
              Feedback from organizations and leaders who have experienced the impact 
              of these speaking engagements firsthand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-2 border-orange-100">
                <CardContent className="p-8">
                  <blockquote className="font-serif text-lg text-foreground italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <p className="font-sans font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="font-sans text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
                    <p className="font-sans text-sm text-orange-600">
                      {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Information Section */}
      <section className="py-16 lg:py-24 bg-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Booking Information
            </h2>
            <p className="font-sans text-lg text-muted-foreground">
              Ready to bring these conversations to your organization? Here's what you need to know.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Calendar className="h-8 w-8 text-orange-600 mx-auto mb-4" />
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                Advance Booking
              </h3>
              <p className="font-sans text-muted-foreground text-sm">
                Book 6-8 weeks in advance for keynotes, 8-12 weeks for intensive workshops.
              </p>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 text-orange-600 mx-auto mb-4" />
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                Location Flexibility
              </h3>
              <p className="font-sans text-muted-foreground text-sm">
                Available for virtual, in-person, or hybrid events worldwide.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-8 w-8 text-orange-600 mx-auto mb-4" />
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                Custom Content
              </h3>
              <p className="font-sans text-muted-foreground text-sm">
                All content customized to your audience, industry, and organizational goals.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="font-sans text-muted-foreground mb-8">
              Each speaking engagement includes pre-event consultation, customized content development, 
              and post-event resources for continued implementation.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white font-sans"
            >
              <Link to="/contact">
                Discuss Your Event
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Ready to Inspire Your Team?
          </h2>
          <p className="font-sans text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create a speaking experience that moves your audience beyond information 
            to transformation, with practical tools they can implement immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white font-sans"
            >
              <Link to="/contact">Book Speaking Engagement</Link>
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

export default Speaking;

