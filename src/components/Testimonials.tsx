import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Aline Uwamahoro',
      location: 'Kigali',
      rating: 5,
      text: 'Absolutely amazing service! Sarah transformed my hair completely and I couldn\'t be happier. The salon has such a relaxing atmosphere.',
      service: 'Hair Coloring'
    },
    {
      name: 'Marie Claire Umuhoza',
      location: 'Kimihurura',
      rating: 5,
      text: 'Grace gave me the perfect cut that suits my face shape. The team is professional and the results exceeded my expectations.',
      service: 'Cut & Style'
    },
    {
      name: 'Solange Mukansanga',
      location: 'Nyamirambo',
      rating: 5,
      text: 'Divine did my bridal hair and it was absolutely stunning! She understood exactly what I wanted and made my wedding day perfect.',
      service: 'Bridal Styling'
    },
    {
      name: 'Immaculée Uwimana',
      location: 'Remera',
      rating: 5,
      text: 'The hair treatment by Ange brought my damaged hair back to life. I love how healthy and shiny it looks now!',
      service: 'Hair Treatment'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-elegant font-bold text-foreground mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from our satisfied clients across Rwanda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 bg-gradient-card border-0 animate-scale-in"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-primary opacity-30" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 text-primary" 
                        fill="currentColor" 
                      />
                    ))}
                  </div>
                </div>
                
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    {testimonial.location}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {testimonial.service}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-card px-6 py-3 rounded-full shadow-soft">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-primary" fill="currentColor" />
              ))}
            </div>
            <span className="text-foreground font-medium">4.9/5 from 200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;