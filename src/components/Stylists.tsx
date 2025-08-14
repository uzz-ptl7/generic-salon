import { Card, CardContent } from '@/components/ui/card';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import stylistImage from '@/assets/stylist-1.jpg';

const Stylists = () => {
  const stylists = [
    {
      name: 'Sarah Uwimana',
      specialty: 'Color Specialist & Creative Director',
      bio: 'With over 8 years of experience, Sarah specializes in balayage and color transformations.',
      image: stylistImage,
      social: {
        instagram: '#',
        facebook: '#',
        twitter: '#'
      }
    },
    {
      name: 'Grace Mukamana',
      specialty: 'Cut & Style Expert',
      bio: 'Grace is known for her precision cuts and ability to create styles that suit every face shape.',
      image: stylistImage,
      social: {
        instagram: '#',
        facebook: '#',
        twitter: '#'
      }
    },
    {
      name: 'Divine Uwase',
      specialty: 'Bridal & Event Styling',
      bio: 'Divine creates stunning bridal looks and specializes in elegant updos for special occasions.',
      image: stylistImage,
      social: {
        instagram: '#',
        facebook: '#',
        twitter: '#'
      }
    },
    {
      name: 'Ange Mutesi',
      specialty: 'Treatment & Care Specialist',
      bio: 'Ange focuses on hair health and offers expert advice on treatments and maintenance.',
      image: stylistImage,
      social: {
        instagram: '#',
        facebook: '#',
        twitter: '#'
      }
    }
  ];

  return (
    <section id="stylists" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-elegant font-bold text-foreground mb-6">
            Meet Our <span className="text-primary">Stylists</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our talented team of certified professionals is dedicated to bringing your hair dreams to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stylists.map((stylist, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 bg-background border-0 animate-scale-in">
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <img
                    src={stylist.image}
                    alt={stylist.name}
                    className="w-32 h-32 object-cover rounded-full mx-auto shadow-card group-hover:shadow-elegant transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                
                <h3 className="text-xl font-elegant font-semibold text-foreground mb-2">
                  {stylist.name}
                </h3>
                
                <p className="text-primary font-medium mb-4">
                  {stylist.specialty}
                </p>
                
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {stylist.bio}
                </p>

                <div className="flex justify-center space-x-4">
                  <a
                    href={stylist.social.instagram}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                    aria-label={`${stylist.name} Instagram`}
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href={stylist.social.facebook}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                    aria-label={`${stylist.name} Facebook`}
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href={stylist.social.twitter}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors duration-300"
                    aria-label={`${stylist.name} Twitter`}
                  >
                    <Twitter size={18} />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stylists;