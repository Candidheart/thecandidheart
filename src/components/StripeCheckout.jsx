import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Loader2, CreditCard, Lock } from 'lucide-react';

// Initialize Stripe (you would use your actual publishable key here)
const stripePromise = loadStripe('pk_test_51234567890abcdef'); // Demo key

const CheckoutForm = ({ service, onSuccess, onCancel }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // In a real implementation, you would:
    // 1. Create a payment intent on your backend
    // 2. Confirm the payment with Stripe
    // 3. Handle the response

    // For demo purposes, we'll simulate a successful payment
    setTimeout(() => {
      setLoading(false);
      onSuccess({
        service: service.title,
        amount: service.price,
        customer: customerInfo
      });
    }, 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Customer Information */}
      <div className="space-y-4">
        <h3 className="font-serif text-lg font-semibold text-foreground">
          Contact Information
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block font-sans text-sm font-medium text-foreground mb-2">
              Full Name *
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={customerInfo.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              className="bg-input border-border focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-sans text-sm font-medium text-foreground mb-2">
              Email Address *
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={customerInfo.email}
              onChange={handleInputChange}
              placeholder="your@email.com"
              className="bg-input border-border focus:border-primary"
            />
          </div>
        </div>
        <div>
          <label htmlFor="phone" className="block font-sans text-sm font-medium text-foreground mb-2">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={customerInfo.phone}
            onChange={handleInputChange}
            placeholder="(555) 123-4567"
            className="bg-input border-border focus:border-primary"
          />
        </div>
      </div>

      {/* Payment Information */}
      <div className="space-y-4">
        <h3 className="font-serif text-lg font-semibold text-foreground">
          Payment Information
        </h3>
        <div className="p-4 border border-border rounded-lg bg-input">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#2c2c2c',
                  '::placeholder': {
                    color: '#8b6f47',
                  },
                },
                invalid: {
                  color: '#e53e3e',
                },
              },
            }}
          />
        </div>
      </div>

      {error && (
        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
          <p className="font-sans text-sm text-destructive">{error}</p>
        </div>
      )}

      {/* Order Summary */}
      <div className="bg-secondary/30 p-6 rounded-lg">
        <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
          Order Summary
        </h3>
        <div className="flex justify-between items-center mb-2">
          <span className="font-sans text-foreground">{service.title}</span>
          <span className="font-sans font-semibold text-primary">{service.price}</span>
        </div>
        <div className="border-t border-border pt-2 mt-4">
          <div className="flex justify-between items-center">
            <span className="font-sans font-semibold text-foreground">Total</span>
            <span className="font-serif text-xl font-semibold text-primary">{service.price}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="flex-1 border-border text-foreground hover:bg-secondary"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={!stripe || loading}
          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <CreditCard className="mr-2 h-4 w-4" />
              Complete Payment
            </>
          )}
        </Button>
      </div>

      {/* Security Notice */}
      <div className="flex items-center justify-center text-center pt-4">
        <Lock className="h-4 w-4 text-muted-foreground mr-2" />
        <p className="font-sans text-xs text-muted-foreground">
          Your payment information is secure and encrypted
        </p>
      </div>
    </form>
  );
};

const StripeCheckout = ({ service, isOpen, onClose, onSuccess }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle className="font-serif text-2xl text-foreground">
            Complete Your Purchase
          </CardTitle>
          <p className="font-sans text-muted-foreground">
            You're about to purchase: {service?.title}
          </p>
        </CardHeader>
        <CardContent>
          <Elements stripe={stripePromise}>
            <CheckoutForm
              service={service}
              onSuccess={(result) => {
                onSuccess(result);
                onClose();
              }}
              onCancel={onClose}
            />
          </Elements>
        </CardContent>
      </Card>
    </div>
  );
};

export default StripeCheckout;

