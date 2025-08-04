import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Building2, Search, Cpu, Users, ArrowRight, CheckCircle } from 'lucide-react';

const Organizations = () => {
  const organizationServices = [
    {
      icon: Search,
      title: "Beta Empathy Audit",
      subtitle: "Brand Experience Consulting",
      description: "What does your brand feel like to the people experiencing it? A comprehensive audit that examines your brand through the lens of human experience and emotional impact.",
      keyQuestion: "What does your brand feel like to the people experiencing it?",
      features: [
        "Comprehensive brand experience analysis",
        "Customer journey emotional mapping",
        "Accessibility and inclusion assessment",
        "Trauma-informed design recommendations",
        "Actionable improvement roadmap"
      ],
      deliverables: [
        "Detailed audit report",
        "Emotional journey maps",
        "Implementation recommendations",
        "Follow-up consultation session"
      ],
      price: "Starting at $4,997",
      duration: "2-3 weeks",
      available: true
    },
    {
      icon: Cpu,
      title: "Ethical AI Onboarding & Integrity Workshops",
      subtitle: "Responsible Technology Implementation",
      description: "Navigate the integration of AI tools while maintaining your organization's values, human connection, and ethical standards.",
      features: [
        "AI ethics framework development",
        "Team training and onboarding",
        "Policy and guideline creation",
        "Implementation best practices",
        "Ongoing integrity monitoring"
      ],
      deliverables: [
        "Custom AI ethics framework",
        "Team workshop series",
        "Implementation guidelines",
        "Monitoring tools and processes"
      ],
      price: "Custom pricing",
      duration: "4-6 weeks",
      available: true
    },
    {
      icon: Users,
      title: "Brand Voice, Story-Led Consulting & DEIB Support",
      subtitle: "Authentic Communication & Inclusion",
      description: "Develop authentic brand voice, compelling storytelling, and inclusive communication practices that honor diversity and build genuine connection.",
      features: [
        "Brand voice development",
        "Story-led content strategy",
        "DEIB communication audit",
        "Inclusive language guidelines",
        "Team training and workshops"
      ],
      deliverables: [
        "Brand voice guide",
        "Story framework and templates",
        "DEIB communication toolkit",
        "Team training sessions"
      ],
      price: "Custom pricing",
      duration: "3-5 weeks",
      available: true
    }
  ];

  const idealClients = [
    "Conscious companies prioritizing human impact",
    "Organizations implementing AI responsibly",
    "Teams seeking trauma-informed practices",
    "Brands wanting authentic voice development",
    "Companies prioritizing DEIB initiatives",
    "Leadership teams focused on ethical growth"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 "></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Building2 className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-6 leading-tight">
              For Organizations
            </h1>
            <p className="font-sans text-xl md:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed">
              Consulting services for conscious companies ready to prioritize human experience, 
              ethical AI implementation, and authentic brand communication.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Human-Centered Business Consulting
            </h2>
            <p className="font-sans text-lg text-foreground max-w-3xl mx-auto leading-relaxed">
              I work with organizations that understand business success and human flourishing aren't 
              mutually exclusive. Together, we create systems, strategies, and cultures that honor 
              both profit and people.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Empathy-Driven Analysis
              </h3>
              <p className="font-sans text-foreground">
                We examine your organization through the lens of human experience, 
                understanding how your brand and systems feel to real people.
              </p>
            </div>
            <div className="text-center">
              <div className="">
                <Cpu className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Ethical Technology
              </h3>
              <p className="font-sans text-foreground">
                Navigate AI and automation implementation while maintaining human connection, 
                ethical standards, and authentic communication.
              </p>
            </div>
            <div className="text-center">
              <div className="">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                Inclusive Communication
              </h3>
              <p className="font-sans text-foreground">
                Develop authentic brand voice and inclusive practices that honor diversity 
                and build genuine connection with all stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Consulting Services
            </h2>
            <p className="font-sans text-lg text-foreground max-w-3xl mx-auto">
              Comprehensive consulting services designed to help conscious organizations 
              align their operations with their values while driving meaningful results.
            </p>
          </div>

          <div className="space-y-8">
            {organizationServices.map((service, index) => (
              <Card key={index} className="">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center mb-6">
                        <service.icon className="h-8 w-8 text-primary mr-3" />
                        <div>
                          <h3 className="font-serif text-2xl font-semibold text-foreground">
                            {service.title}
                          </h3>
                          <p className="font-sans text-sm text-accent">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>

                      {service.keyQuestion && (
                        <div className="">
                          <p className="font-serif text-lg text-foreground italic">
                            "{service.keyQuestion}"
                          </p>
                        </div>
                      )}

                      <p className="font-sans text-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-serif text-lg font-semibold text-foreground mb-3">
                            What's Included
                          </h4>
                          <ul className="font-sans text-sm text-foreground space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-serif text-lg font-semibold text-foreground mb-3">
                            Deliverables
                          </h4>
                          <ul className="font-sans text-sm text-foreground space-y-2">
                            {service.deliverables.map((deliverable, idx) => (
                              <li key={idx} className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-1">
                      <div className="">
                        <div>
                          <div className="mb-4">
                            <span className="font-sans text-sm text-foreground">Investment</span>
                            <p className="font-serif text-xl font-semibold text-foreground">
                              {service.price}
                            </p>
                          </div>
                          <div className="mb-6">
                            <span className="font-sans text-sm text-foreground">Timeline</span>
                            <p className="font-sans text-foreground">
                              {service.duration}
                            </p>
                          </div>
                        </div>
                        <Button 
                          asChild 
                          className=""
                        >
                          <Link to="/contact">
                            Get Started
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Clients Section */}
      <section className="">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Who I Work With
            </h2>
            <p className="font-sans text-lg text-foreground max-w-3xl mx-auto">
              I partner with organizations that are ready to prioritize human experience 
              alongside business results. Here's who tends to be the best fit:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {idealClients.map((client, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-sans text-foreground">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              How We Work Together
            </h2>
            <p className="font-sans text-lg text-foreground max-w-3xl mx-auto">
              A collaborative process that honors your organization's unique culture 
              while implementing meaningful, sustainable change.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="">
                1
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                Discovery & Assessment
              </h3>
              <p className="font-sans text-foreground text-sm">
                Deep dive into your current state, challenges, and aspirations through stakeholder interviews and analysis.
              </p>
            </div>
            <div className="text-center">
              <div className="">
                2
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                Strategy Development
              </h3>
              <p className="font-sans text-foreground text-sm">
                Collaborative development of frameworks, guidelines, and strategies tailored to your organization.
              </p>
            </div>
            <div className="text-center">
              <div className="">
                3
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                Implementation Support
              </h3>
              <p className="font-sans text-foreground text-sm">
                Hands-on support for rolling out new practices, training teams, and embedding changes.
              </p>
            </div>
            <div className="text-center">
              <div className="">
                4
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                Ongoing Optimization
              </h3>
              <p className="font-sans text-foreground text-sm">
                Monitoring, refinement, and continuous improvement to ensure lasting positive impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Ready to Align Your Organization?
          </h2>
          <p className="font-sans text-lg text-foreground mb-8 max-w-2xl mx-auto">
            Let's explore how we can help your organization thrive while staying true to your values 
            and prioritizing human experience.
          </p>

        </div>
      </section>
    </div>
  );
};

export default Organizations;

