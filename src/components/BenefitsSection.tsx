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
    <section className="py-16 sm:py-20 lg:py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            ¿Por qué elegir <span className="text-primary">Fluxi</span>?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Diseñado específicamente para emprendedores que necesitan resultados rápidos
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group text-center p-6 sm:p-8 bg-card rounded-xl sm:rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 bg-gradient-hero rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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