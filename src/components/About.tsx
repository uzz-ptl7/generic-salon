import salonInterior from '@/assets/salon-interior.jpg';
import hairstyle from '@/assets/hairstyle-1.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl lg:text-5xl font-elegant font-bold text-foreground mb-6">
              About <span className="text-primary">Your Salon</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For over a decade, we've been Rwanda's premier destination for luxury hair care and styling. 
              Our experienced team of stylists combines international techniques with personalized service 
              to bring out your natural beauty.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Located in the heart of Kigali, our modern salon offers a tranquil escape where you can 
              relax, rejuvenate, and discover your perfect look. We use only the finest products and 
              cutting-edge techniques to ensure exceptional results every time.
            </p>
            <div className="grid grid-cols-2 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4 animate-scale-in">
            <div className="space-y-4">
              <img
                src={salonInterior}
                alt="Elegant salon interior"
                className="w-full h-48 object-cover rounded-2xl shadow-card"
              />
              <div className="bg-gradient-card p-6 rounded-2xl shadow-card text-center">
                <h3 className="font-elegant text-xl text-primary mb-2">Luxury Experience</h3>
                <p className="text-sm text-muted-foreground">Premium services in elegant surroundings</p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-gradient-card p-6 rounded-2xl shadow-card text-center">
                <h3 className="font-elegant text-xl text-primary mb-2">Expert Stylists</h3>
                <p className="text-sm text-muted-foreground">Certified professionals with years of experience</p>
              </div>
              <img
                src={hairstyle}
                alt="Beautiful hairstyle"
                className="w-full h-48 object-cover rounded-2xl shadow-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;