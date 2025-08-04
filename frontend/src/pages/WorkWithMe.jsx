import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Lightbulb, Calendar, CheckCircle, ArrowRight, Star, Sparkles } from 'lucide-react';
import StripeCheckout from '@/components/StripeCheckout';
import Hero from '@/components/ui/hero';
import Section from '@/components/ui/section';
import ContentCard from '@/components/ui/content-card';
import { DESIGN_SYSTEM } from '@/lib/design-system';

const WorkWithMe = () => {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  const handlePurchase = (service) => {
    setSelectedService(service);
    setCheckoutOpen(true);
  };

  const handleCheckoutSuccess = (result) => {
    setPurchaseSuccess(true);
    console.log('Purchase successful:', result);
    // Here you would typically send the result to your backend
  };

