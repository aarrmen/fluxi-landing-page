import { Clock, TrendingUp, Zap } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Ahorra tiempo",
    description: "Olvida la búsqueda manual de clientes. Fluxi lo hace por ti automáticamente."
  },
  {
    icon: TrendingUp,
    title: "Más ventas",
    description: "Accede rápido a los contactos ideales y aumenta tu ratio de conversión."
  },
  {
    icon: Zap,
    title: "Automatización simple",
    description: "Sin conocimientos técnicos. Configura tu prospección en minutos."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            ¿Por qué elegir <span className="text-primary">Fluxi</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Diseñado específicamente para emprendedores que necesitan resultados rápidos
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group text-center p-8 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-hero rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;