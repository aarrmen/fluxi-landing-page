import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dashboard.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-background overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Automatiza la{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  prospección
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Gana clientes en minutos, no en horas
              </p>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-lg lg:text-xl text-foreground/80 max-w-lg">
                Fluxi te consigue los contactos de los comercios que necesitas, 
                directamente en tu móvil o CRM
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="cta" size="xl" className="min-w-[200px]">
                  Prueba Fluxi Gratis
                </Button>
                <Button variant="outline" size="xl" className="min-w-[160px]">
                  Ver Demo
                </Button>
              </div>
            </div>
            
            {/* Trust indicators */}
            <div className="pt-8 space-y-3 text-center lg:text-left">
              <p className="text-sm text-muted-foreground">
                ✓ Sin compromiso • ✓ Configuración en 2 minutos • ✓ Soporte en español
              </p>
            </div>
          </div>
          
          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img 
                src={heroImage} 
                alt="Dashboard de Fluxi mostrando contactos comerciales automatizados"
                className="w-full h-auto rounded-2xl shadow-strong"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-hero rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-cta rounded-full opacity-15 blur-2xl"></div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-success/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;