import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  ArrowRight, 
  Sparkles, 
  Heart, 
  Brain, 
  Zap, 
  Shield,
  BookOpen,
  Users,
  Target,
  Compass,
  Feather,
  Star
} from 'lucide-react';

const MockDesign = () => {
  const [activeTab, setActiveTab] = useState('strategy');

  const strategyServices = [
    {
      icon: Brain,
      title: "Strategic Copywriting",
      description: "Words that convert, stories that connect, copy that feels like you.",
      features: ["Sales pages", "Email sequences", "Brand voice", "Conversion copy"]
    },
    {
      icon: Zap,
      title: "AI Automation",
      description: "Smart systems that scale your impact without losing your humanity.",
      features: ["Workflow automation", "AI integration", "System optimization", "Tech strategy"]
    },
    {
      icon: Target,
      title: "Clarity Mapping",
      description: "Strategic frameworks to clarify your message and amplify your mission.",
      features: ["Brand positioning", "Message clarity", "Strategic planning", "Growth mapping"]
    }
  ];

  const healingServices = [
    {
      icon: Heart,
      title: "Betrayal Trauma Coaching",
      description: "Gentle guidance for rebuilding identity and reclaiming your voice.",
      features: ["1:1 coaching", "Group programs", "Healing frameworks", "Identity work"]
    },
    {
      icon: Feather,
      title: "Poetry & Journaling",
      description: "Story-based healing through the power of written reflection.",
      features: ["Guided journaling", "Poetry therapy", "Creative expression", "Narrative healing"]
    },
    {
      icon: Shield,
      title: "Boundary Building",
      description: "Creating healthy boundaries that protect your energy and honor your worth.",
      features: ["Boundary frameworks", "Communication tools", "Self-advocacy", "Relationship skills"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-100/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <Badge className="mb-8 bg-white/80 backdrop-blur-sm text-slate-700 border-slate-200 px-4 py-2 text-sm font-medium">
              Strategy • Healing • Innovation
            </Badge>
            
            <h1 className="font-light text-5xl md:text-7xl lg:text-8xl text-slate-900 mb-8 tracking-tight">
              Where strategy meets
              <span className="block font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                self-worth
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
              Healing is a system. So is growth. Structure for your soul-led story.
            </p>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-slate-200/50 shadow-lg">
                <button
                  onClick={() => setActiveTab('strategy')}
                  className={`px-8 py-4 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === 'strategy'
                      ? 'bg-slate-900 text-white shadow-lg'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Strategy & Systems
                </button>
                <button
                  onClick={() => setActiveTab('healing')}
                  className={`px-8 py-4 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === 'healing'
                      ? 'bg-slate-900 text-white shadow-lg'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Healing & Coaching
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Strategy Services */}
          <div className={`transition-all duration-700 ${activeTab === 'strategy' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none absolute'}`}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
                Strategic Excellence
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
                Copywriting, automation, and clarity frameworks for businesses that want to scale with integrity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {strategyServices.map((service, index) => (
                <Card key={index} className="group bg-white/70 backdrop-blur-sm border-slate-200/50 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-500">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white border-0 rounded-xl py-3 font-medium transition-all duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Healing Services */}
          <div className={`transition-all duration-700 ${activeTab === 'healing' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none absolute'}`}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-2xl mb-6">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
                Healing & Growth
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
                Gentle guidance for rebuilding identity, reclaiming voice, and creating boundaries that honor your worth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {healingServices.map((service, index) => (
                <Card key={index} className="group bg-white/70 backdrop-blur-sm border-slate-200/50 hover:bg-white hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-500 hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-500">
                          <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white border-0 rounded-xl py-3 font-medium transition-all duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-8">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <blockquote className="text-3xl md:text-4xl font-light text-white mb-8 leading-relaxed">
            "Poetry is not a luxury — it's a framework for feeling seen. 
            You can automate without abandoning your voice."
          </blockquote>
          <p className="text-lg text-slate-300 font-light">
            — Samantha Josette, Poet, Strategist, Mirror Holder
          </p>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gradient-to-br from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-6 bg-slate-100 text-slate-700 border-slate-200">
                The Story Behind The Strategy
              </Badge>
              <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-8 leading-tight">
                I'm a writer, strategist, and survivor of betrayal trauma.
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed font-light">
                I spent nearly a decade as a stay-at-home mom, and when my world fell apart, 
                I didn't just rebuild — I wrote, I healed, and I built systems to support 
                the woman I was becoming.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light">
                This is the merging of my two worlds: healing through poetry and personal coaching, 
                and empowerment through copywriting, AI automations, and clarity-first strategy.
              </p>
              <Button className="bg-slate-900 hover:bg-slate-800 text-white border-0 rounded-xl px-8 py-3 font-medium">
                Read My Story
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex justify-center space-x-6 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-blue-600 rounded-2xl flex items-center justify-center">
                      <Feather className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <p className="text-2xl font-light text-slate-700 italic">
                    "You don't have to choose between structure and softness."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-2xl mb-8">
            <Compass className="w-8 h-8 text-slate-700" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-8">
            Ready to Begin?
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            This is your digital front porch — a sacred creative studio where trauma survivors 
            feel safe to explore healing and business owners feel grounded enough to hire strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-slate-900 hover:bg-slate-800 text-white border-0 rounded-xl px-8 py-4 text-lg font-medium">
              Start Here
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 rounded-xl px-8 py-4 text-lg font-medium">
              Learn My Story
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MockDesign;

