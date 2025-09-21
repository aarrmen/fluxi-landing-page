import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-dashboard.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 sm:py-20 bg-background overflow-hidden">
      <div className="container mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Automatiza la{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  prospección
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                Gana clientes en minutos, no en horas
              </p>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-base sm:text-lg lg:text-xl text-foreground/80 max-w-lg mx-auto lg:mx-0">
                Fluxi te consigue los contactos de los comercios que necesitas, 
                directamente en tu móvil o CRM
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  variant="cta" 
                  size="lg"
                  className="w-full sm:w-auto sm:min-w-[200px] text-base sm:text-lg font-semibold"
                  onClick={() => document.getElementById('survey')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Prueba Fluxi Gratis
                </Button>
              </div>
            </div>
            
            {/* Trust indicators */}
            <div className="pt-6 sm:pt-8 space-y-3 text-center lg:text-left">
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                ✓ Sin compromiso • ✓ Configuración en 2 minutos • ✓ Soporte en español
              </p>
            </div>
          </div>
          
          {/* Right Column - Hero Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img 
                src={heroImage} 
                alt="Dashboard de Fluxi mostrando contactos comerciales automatizados"
                className="w-full h-auto rounded-xl sm:rounded-2xl shadow-strong"
              />
            </div>
            {/* Decorative elements - contained within viewport */}
            <div className="absolute top-0 right-0 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-hero rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-40 sm:h-40 bg-gradient-cta rounded-full opacity-15 blur-2xl"></div>
          </div>
        </div>
      </div>
      
      {/* Background decoration - contained */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-80 sm:h-80 bg-success/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;