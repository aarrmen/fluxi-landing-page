import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCtaSection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-dark relative overflow-hidden">
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Deja que <span className="text-primary-light">Fluxi</span> busque por ti.
            <br />
            Tú céntrate en <span className="text-success">vender</span>.
          </h2>
          
          <p className="text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Únete a cientos de emprendedores que ya ahorran tiempo y aumentan ventas con automatización inteligente
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              variant="cta" 
              size="xl" 
              className="min-w-[250px] group"
              onClick={() => document.getElementById('survey')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Probar Fluxi Gratis
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="text-white/60 text-sm">
              Sin tarjeta • 7 días gratis • Configuración en 2 minutos
            </div>
          </div>
          
          {/* Trust badges */}
          <div className="pt-12 border-t border-white/10">
            <p className="text-white/60 text-sm mb-4">Confían en nosotros:</p>
            <div className="flex flex-wrap justify-center gap-8 text-white/40 text-sm">
              <span>🚀 Startups</span>
              <span>💼 Consultores</span>
              <span>🎯 Agencias</span>
              <span>📈 Freelancers</span>
              <span>🏢 PYMEs</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-80 h-80 bg-success/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
};

export default FinalCtaSection;