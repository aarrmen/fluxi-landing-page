import { Users, Building, Target } from "lucide-react";

const useCases = [
  {
    icon: Users,
    title: "Un coach que necesita captar clientes",
    description: "Encuentra gimnasios, centros wellness y empresas en tu zona para ofrecer tus servicios de coaching personal o empresarial."
  },
  {
    icon: Building,
    title: "Una agencia que quiere prospectar rápido", 
    description: "Obtén contactos de restaurantes, tiendas online o cualquier sector para expandir tu cartera de clientes de marketing digital."
  },
  {
    icon: Target,
    title: "Un emprendedor local que busca nuevos comercios aliados",
    description: "Conecta con comercios locales para crear partnerships, distribución o colaboraciones comerciales en tu área."
  }
];

const UseCasesSection = () => {
  return (
    <section className="py-24 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Ideal para <span className="text-primary">autónomos</span>, <span className="text-success">emprendedores</span> y <span className="text-primary">pequeños negocios</span>
          </h2>
          <p className="text-xl text-muted-foregreen max-w-3xl mx-auto">
            Casos reales de uso que demuestran cómo Fluxi acelera tu prospección comercial
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 mb-6 bg-success/10 rounded-xl flex items-center justify-center group-hover:bg-success/20 transition-colors duration-300">
                <useCase.icon className="w-7 h-7 text-success" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {useCase.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            ¿Tu caso es diferente? Fluxi se adapta a cualquier sector comercial
          </p>
          <div className="inline-flex gap-2 text-sm text-primary font-medium">
            <span>Consultores</span> • <span>Freelancers</span> • <span>Agencias</span> • 
            <span>Comerciales</span> • <span>Startups</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;