import { MapPin, Database, Phone } from "lucide-react";
import workflowImage from "@/assets/workflow-illustration.jpg";

const steps = [
  {
    icon: MapPin,
    title: "Selecciona ubicación y tipo de negocio",
    description: "Define tu zona objetivo y el sector comercial que te interesa"
  },
  {
    icon: Database,
    title: "Fluxi recopila los datos de contacto",
    description: "Nuestro sistema automatizado busca y verifica la información"
  },
  {
    icon: Phone,
    title: "Empieza a contactar y vender",
    description: "Recibe los contactos listos para usar en tu CRM o móvil"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Cómo funciona <span className="text-primary">Fluxi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un proceso simple y automatizado que te ahorra horas de trabajo
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-11">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Illustration */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={workflowImage} 
                alt="Ilustración del proceso automatizado de Fluxi"
                className="w-full h-auto rounded-2xl shadow-medium"
              />
            </div>
            {/* Decorative background */}
            <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-hero rounded-2xl opacity-10 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;