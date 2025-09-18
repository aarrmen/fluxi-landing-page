import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Laura García",
    role: "Consultora de Marketing",
    content: "Con Fluxi en 1 hora conseguí lo que antes me llevaba 3 días. Ahora puedo enfocarme en lo que realmente importa: vender.",
    rating: 5
  },
  {
    name: "Carlos Mendoza", 
    role: "Coach Empresarial",
    content: "La calidad de los contactos es excelente. He aumentado mis clientes un 40% desde que uso Fluxi para prospectar.",
    rating: 5
  },
  {
    name: "Ana Ruiz",
    role: "Fundadora Startup",
    content: "Simple y efectivo. En minutos tengo decenas de contactos verificados. Vale cada euro que cuesta.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Lo que dicen nuestros <span className="text-success">usuarios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Resultados reales de emprendedores que ya usan Fluxi
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 border border-border/50"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-foreground/90 leading-relaxed mb-6 text-lg">
                "{testimonial.content}"
              </blockquote>
              
              {/* Author */}
              <div className="border-t border-border/50 pt-6">
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Social proof numbers */}
        <div className="mt-16 bg-muted/30 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Usuarios activos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-success mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Contactos generados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-sm text-muted-foreground">Valoración media</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-success mb-2">2min</div>
              <div className="text-sm text-muted-foreground">Tiempo de setup</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;