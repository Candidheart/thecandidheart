import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Lightbulb, Compass, PenTool, Cpu, Moon, Sparkles, BookOpen, Heart, ArrowRight, CheckCircle } from 'lucide-react';

const Building = () => {
  const services = [
    {
      id: 'clarity',
      icon: Compass,
      title: 'The Clarity Session',
      subtitle: 'A one-time deep dive to get unstuck and aligned.',
      tiers: [
        {
          name: 'Starter',
          price: '$150',
          features: [
            '60-minute strategy call',
            'Audit of current site or messaging',
            'Recorded call + action recap'
          ]
        },
        {
          name: 'Signature',
          price: '$275',
          features: [
            'Everything in Starter',
            'Full brand tone/voice worksheet',
            'Custom content prompts or automation map'
          ],
          popular: true
        }
      ],
      slidingScale: 'Available for survivors, single parents, and those in transition.'
    },
    {
      id: 'copy',
      icon: PenTool,
      title: 'Done-for-You Copy Kit',
      subtitle: 'Words that feel like you—written for conversions and connection.',
      tiers: [
        {
          name: 'Starter',
          price: '$600',
          features: [
            '2 core pages (Home + About OR Sales + Thank You)',
            'Includes tone discovery questionnaire'
          ]
        },
        {
          name: 'Signature',
          price: '$1,100',
          features: [
            'Full 4-page site (Home, About, Work With Me, Contact)',
            'Custom SEO-friendly copy',
            '1 revision round'
          ],
          popular: true
        },
        {
          name: 'Premium',
          price: '$1,800',
          features: [
            'All Signature features',
            'Email Welcome Series (3 emails)',
            'Optional AI-powered versioning and reuse library'
          ]
        }
      ],
      slidingScale: 'Available for community-based or survivor-led projects.'
    },
    {
      id: 'automation',
      icon: Cpu,
      title: 'Automation Alchemy',
      subtitle: 'Let your systems carry the weight. AI + texting workflows that support without selling out.',
      tiers: [
        {
          name: 'Starter',
          price: '$350',
          features: [
            'Custom AI chatbot setup (e.g. Manus/Suno)',
            '1 SMS automation (e.g. birthday or reminder text)'
          ]
        },
        {
          name: 'Signature',
          price: '$750',
          features: [
            'Strategic automation plan',
            '3 fully built SMS/email flows (e.g. onboarding, nurture, sales)',
            'Tech stack guidance + connection help'
          ],
          popular: true
        },
        {
          name: 'Premium',
          price: '$1,200',
          features: [
            'Includes AI chatbot, full automation suite',
            'Team training video'
          ]
        }
      ],
      slidingScale: 'Available for small offices and trauma-informed providers.'
    },
    {
      id: 'monthly',
      icon: Moon,
      title: 'Monthly Magic',
      subtitle: 'Ongoing support that adapts to your seasons.',
      tiers: [
        {
          name: 'Starter',
          price: '$400/month',
          features: [
            '2 check-in calls',
            'Light content or tech updates',
            'Voxer support'
          ]
        },
        {
          name: 'Signature',
          price: '$650/month',
          features: [
            'Strategy, copy, and system support',
            'Content bank creation',
            'Monthly planning rituals'
          ],
          popular: true
        },
        {
          name: 'Premium',
          price: '$1,000/month',
          features: [
            'All Signature features',
            'Unlimited edits / priority turnaround',
            'Quarterly brand vision map'
          ]
        }
      ],
      slidingScale: 'Available for long-term rebuilders.'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 "></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <Lightbulb className="h-16 w-16 text-accent mx-auto mb-6" />
            <h1 className="font-serif text-4xl md:text-6xl font-semibold text-foreground mb-6 leading-tight">
              Words That Feel True—And Work
            </h1>
            <p className="font-sans text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
              I don’t just write copy. I translate the soul of your business into words.
              Because when your message resonates, your audience doesn’t just listen—they *trust*. 
              That’s what makes them click, buy, and stay.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Building;
