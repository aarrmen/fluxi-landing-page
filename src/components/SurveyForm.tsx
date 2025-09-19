import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const SurveyForm = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    business_type: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase
        .from('surveys')
        .insert([formData]);

      if (error) throw error;

      toast({
        title: "¡Gracias por tu interés!",
        description: "Hemos recibido tu información. Te contactaremos pronto.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        business_type: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el formulario. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="survey" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-2xl">
        <Card className="shadow-medium">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">
              Comienza con <span className="text-primary">Fluxi</span>
            </CardTitle>
            <CardDescription className="text-lg">
              Cuéntanos sobre tu negocio y te ayudaremos a automatizar tu prospección
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo *</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa/Negocio</Label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="business_type">Tipo de negocio</Label>
                <Select value={formData.business_type} onValueChange={(value) => handleChange("business_type", value)}>
                  <SelectTrigger className="transition-all duration-200 focus:ring-2 focus:ring-primary/20">
                    <SelectValue placeholder="Selecciona tu tipo de negocio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="freelancer">Freelancer/Autónomo</SelectItem>
                    <SelectItem value="startup">Startup</SelectItem>
                    <SelectItem value="pyme">PYME</SelectItem>
                    <SelectItem value="agencia">Agencia</SelectItem>
                    <SelectItem value="consultor">Consultor</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">¿Cómo planeas usar Fluxi?</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  placeholder="Cuéntanos sobre tu negocio y cómo Fluxi podría ayudarte..."
                  className="min-h-[100px] transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <Button 
                type="submit" 
                variant="cta" 
                size="lg" 
                className="w-full"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Comenzar con Fluxi"
                )}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Al enviar este formulario, aceptas que te contactemos para ofrecerte una demostración personalizada de Fluxi.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SurveyForm;