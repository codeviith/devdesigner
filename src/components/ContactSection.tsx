import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ReCAPTCHA from 'react-google-recaptcha';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

export function ContactSection() {
  const [isVerified, setIsVerified] = useState(false);

  const handleRecaptchaChange = (value: string | null) => {
    if (value) {
      setIsVerified(true);
    }
  };
  const contactMethods = [
    {
      type: 'Email',
      value: 'xxxxxx@gmail.com',
      icon: Mail,
      primary: true,
      description: 'Best for project inquiries and detailed discussions',
      action: 'mailto:xxxxxx@gmail.com'
    },
    {
      type: 'Phone',
      value: '(xxx)xxx-xxxx',
      icon: Phone,
      primary: false,
      description: 'Available for consultations',
      action: 'tel:xxxxxxxxxx'
    },
    {
      type: 'Location',
      value: 'New York (willing to relocate)',
      icon: MapPin,
      primary: false,
      description: 'Open to local meetings and remote collaboration',
      action: '#'
    },
    {
      type: 'LinkedIn',
      value: 'View LinkedIn',
      icon: Linkedin,
      primary: false,
      description: 'Professional network and portfolio',
      action: '#'
    }
  ];


  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your next innovative product to life? Let's discuss how we can collaborate 
            to create exceptional design solutions.
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-8 rounded-full" />
        </div>
        
        {!isVerified ? (
          <Card className="glass p-12 border-card-border/50 max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex p-6 rounded-full bg-gradient-primary mb-4">
                <ShieldCheck className="w-12 h-12 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-gradient mb-3">
                Verify to View Contact Information
              </h3>
              <p className="text-muted-foreground">
                Please complete the verification below to access my contact details and prevent spam.
              </p>
            </div>
            
            <div className="flex justify-center">
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={handleRecaptchaChange}
              />
            </div>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="glass p-8 border-card-border/50">
                <h3 className="text-2xl font-display font-semibold text-gradient mb-6">
                  Get In Touch
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {contactMethods.map((method, index) => {
                    const isLocation = method.type === 'Location';
                    const Component = isLocation ? 'div' : 'a';
                    
                    return (
                      <div 
                        key={method.type}
                        className="group"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <Component 
                          {...(!isLocation && { href: method.action })}
                          className={`block p-4 rounded-xl border border-border/50 bg-surface transition-all duration-300 ${
                            !isLocation ? 'hover:border-primary/50 hover:bg-gradient-surface hover:shadow-glow cursor-pointer' : 'cursor-default'
                          }`}
                        >
                          <div className="flex items-start gap-4">
                            <div className={`p-3 rounded-lg ${method.primary ? 'bg-gradient-primary' : 'bg-gradient-secondary'} ${!isLocation && 'group-hover:scale-110'} transition-transform duration-300`}>
                              <method.icon className="w-5 h-5 text-primary-foreground" />
                            </div>
                            <div className="flex-1 space-y-2">
                              <div className="flex items-center gap-2">
                                <h4 className="font-semibold text-foreground">{method.type}</h4>
                                {method.primary && (
                                  <Badge className="bg-gradient-primary text-primary-foreground text-xs border-0">
                                    Primary
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-primary font-mono">{method.value}</p>
                            </div>
                            {!isLocation && (
                              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                            )}
                          </div>
                        </Component>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
            
            {/* Additional Info Sidebar */}
            <div className="space-y-6">
              <Card className="glass p-6 border-card-border/50">
                <h4 className="font-display font-semibold text-lg text-gradient mb-4">
                  Quick Links
                </h4>
                <div className="space-y-3">
                  <a 
                    href="#"
                    className="flex items-center justify-between p-3 rounded-lg border border-border/30 hover:border-primary/50 bg-surface/50 hover:bg-gradient-surface transition-all duration-300 hover:shadow-soft group"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                      <span className="text-sm font-medium text-foreground">LinkedIn Profile</span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </a>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
