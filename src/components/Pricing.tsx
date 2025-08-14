import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const packages = [
    {
      name: 'Essential',
      price: '25,000',
      period: 'RWF',
      description: 'Perfect for regular maintenance and basic styling',
      features: [
        'Wash & Cut',
        'Basic Blow Dry',
        'Scalp Treatment',
        'Style Consultation',
        '30-day aftercare support'
      ],
      popular: false
    },
    {
      name: 'Premium',
      price: '45,000',
      period: 'RWF',
      description: 'Complete transformation with professional styling',
      features: [
        'Wash, Cut & Style',
        'Color or Highlights',
        'Deep Conditioning',
        'Professional Blow Dry',
        'Styling Products',
        '60-day aftercare support',
        'Free touch-up within 2 weeks'
      ],
      popular: true
    },
    {
      name: 'Luxury',
      price: '75,000',
      period: 'RWF',
      description: 'Ultimate salon experience with premium treatments',
      features: [
        'Full Consultation',
        'Cut, Color & Style',
        'Keratin or Protein Treatment',
        'Head Massage',
        'Premium Product Line',
        'Professional Photos',
        '90-day aftercare support',
        'Priority booking',
        'Complimentary refreshments'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-elegant font-bold text-foreground mb-6">
            Pricing <span className="text-primary">Packages</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose the perfect package for your hair care needs and budget
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-elegant transition-all duration-300 animate-scale-in ${
                pkg.popular 
                  ? 'bg-gradient-card border-2 border-primary scale-105' 
                  : 'bg-background border-0'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-white px-6 py-2 rounded-full flex items-center space-x-1">
                    <Star className="w-4 h-4" fill="currentColor" />
                    <span className="text-sm font-medium">Most Popular</span>
                  </div>
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-elegant font-bold text-foreground mb-2">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-lg text-muted-foreground ml-2">{pkg.period}</span>
                  </div>
                  <p className="text-muted-foreground">
                    {pkg.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    pkg.popular 
                      ? 'bg-gradient-primary hover:shadow-elegant' 
                      : 'bg-gradient-primary hover:shadow-elegant'
                  } transition-all duration-300`}
                >
                  Choose Package
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;