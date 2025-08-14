import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, Phone, MapPin } from 'lucide-react';

const Booking = () => {
  return (
    <section id="booking" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-elegant font-bold text-foreground mb-6">
            Ready to <span className="text-primary">Transform</span> Your Look?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Book your appointment today and discover the beauty that's waiting to be unveiled
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Booking Info */}
          <div className="animate-slide-up">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Easy Online Booking</h3>
                  <p className="text-muted-foreground">Schedule your appointment 24/7 through our booking system</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Flexible Hours</h3>
                  <p className="text-muted-foreground">Open Tuesday-Sunday, 9AM-7PM to fit your schedule</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Call or Text</h3>
                  <p className="text-muted-foreground">Prefer to talk? Call us at +250 788 123 456</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Prime Location</h3>
                  <p className="text-muted-foreground">Located in the heart of Kigali with easy parking</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <Card className="bg-gradient-card border-0 shadow-elegant animate-scale-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-elegant font-bold text-foreground mb-6 text-center">
                Book Your Appointment
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-soft">
                  <div className="text-3xl font-bold text-primary mb-2">Free</div>
                  <div className="text-muted-foreground">Consultation</div>
                  <div className="text-sm text-muted-foreground mt-1">New clients only</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-white rounded-xl shadow-soft">
                    <div className="text-xl font-bold text-primary mb-1">30min</div>
                    <div className="text-sm text-muted-foreground">Average Wait</div>
                  </div>
                  <div className="p-4 bg-white rounded-xl shadow-soft">
                    <div className="text-xl font-bold text-primary mb-1">98%</div>
                    <div className="text-sm text-muted-foreground">Satisfaction</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-primary hover:shadow-elegant transition-all duration-300 text-lg py-6"
                >
                  Book Online Now
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 text-lg py-6"
                >
                  Call +250 788 123 456
                </Button>
              </div>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Free cancellation up to 24 hours before your appointment
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Booking;