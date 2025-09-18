import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Prueba Gratuita",
    price: "0€",
    period: "7 días",
    description: "Perfecto para probar Fluxi",
    features: [
      "50 contactos incluidos",
      "1 ubicación",
      "Soporte por email",
      "Exportación CSV"
    ],
    cta: "Empezar Gratis",
    variant: "outline" as const,
    popular: false
  },
  {
    name: "Plan Pro",
    price: "49€",
    period: "mes",
    description: "Para emprendedores serios",
    features: [
      "Contactos ilimitados",
      "Ubicaciones ilimitadas",
      "Soporte prioritario",
      "Integración CRM",
      "Datos verificados",
      "Actualizaciones automáticas"
    ],
    cta: "Probar 7 días gratis",
    variant: "cta" as const,
    popular: true
  }
];

const PricingSection = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Planes simples, <span className="text-success">resultados potentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sin permanencia. Cancela cuando quieras. Empieza gratis y escala según crezcas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 border-2 ${
                plan.popular ? 'border-success/20 shadow-medium' : 'border-border/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-cta text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground">
                  {plan.description}
                </p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.variant} 
                size="lg" 
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            💡 <strong>¿Necesitas algo específico?</strong> Contacta con nosotros para planes personalizados
          </p>
          <p className="text-sm text-muted-foreground">
            Precios sin IVA. Facturación automática. Cancela en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;