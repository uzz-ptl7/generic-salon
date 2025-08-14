import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Scissors, Palette, Sparkles, Crown, Heart, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: 'Haircuts & Styling',
      description: 'Precision cuts and contemporary styling tailored to enhance your natural beauty and lifestyle.',
      price: 'From 15,000 RWF'
    },
    {
      icon: Palette,
      title: 'Hair Coloring',
      description: 'Expert color services including highlights, balayage, and full color transformations.',
      price: 'From 25,000 RWF'
    },
    {
      icon: Sparkles,
      title: 'Hair Treatments',
      description: 'Nourishing treatments to restore shine, strength, and vitality to your hair.',
      price: 'From 20,000 RWF'
    },
    {
      icon: Crown,
      title: 'Bridal Hair',
      description: 'Elegant bridal styling and trial sessions for your special day perfection.',
      price: 'From 40,000 RWF'
    },
    {
      icon: Heart,
      title: 'Extensions',
      description: 'High-quality hair extensions for length, volume, and dramatic transformations.',
      price: 'From 30,000 RWF'
    },
    {
      icon: Zap,
      title: 'Quick Touch-Ups',
      description: 'Express services for busy schedules including blowouts and root touch-ups.',
      price: 'From 10,000 RWF'
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-elegant font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of hair services designed to bring out your best look
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0 animate-scale-in">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-elegant font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-lg font-semibold text-primary">{service.price}</span>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-primary hover:shadow-elegant transition-all duration-300">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;