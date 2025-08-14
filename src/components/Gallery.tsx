import hairstyle from '@/assets/hairstyle-1.jpg';

const Gallery = () => {
  const galleryImages = [
    { src: hairstyle, alt: 'Elegant blonde waves' },
    { src: hairstyle, alt: 'Professional hair coloring' },
    { src: hairstyle, alt: 'Bridal hair styling' },
    { src: hairstyle, alt: 'Modern hair cut' }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-elegant font-bold text-foreground mb-6">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Browse through our portfolio of stunning transformations and beautiful hairstyles
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                  <span className="text-foreground font-medium">View Details</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-primary text-white px-8 py-4 rounded-lg hover:shadow-elegant transition-all duration-300">
            View More Styles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;