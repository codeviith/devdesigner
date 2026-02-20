import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ReCAPTCHA from "react-google-recaptcha";
import { Mail, Phone, MapPin, Linkedin, ExternalLink, ShieldCheck } from "lucide-react";

export function ContactSection() {
  const [isVerified, setIsVerified] = useState(false);

  const handleRecaptchaChange = (value: string | null) => {
    if (value) {
      setIsVerified(true);
    }
  };
  const contactMethods = [
    {
      type: "Email",
      value: "kclin128@gmail.com",
      icon: Mail,
      primary: true,
      description: "Best way to reach me directly",
      action: "mailto:kclin128@gmail.com",
    },
    {
      type: "LinkedIn",
      value: "View LinkedIn",
      icon: Linkedin,
      primary: false,
      description: "Professional profile and experience",
      action: "https://www.linkedin.com/in/kevinlin128",
    },
    {
      type: "Location",
      value: "New York (willing to relocate)",
      icon: MapPin,
      primary: false,
      description: "Based in NYC — open to relocation and remote roles",
      action: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4" style={{
            background: 'linear-gradient(135deg, hsl(var(--muted-foreground)), hsl(var(--foreground)))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Open to roles in CAD, product design and development, prototyping, and R&D
          </p>
          {/* <p className="text-base text-muted-foreground mt-2">
            Email is the best way to reach me.
          </p> */}
          <div className="w-24 h-1 bg-gradient-secondary mx-auto mt-8 rounded-full" />
        </div>

        {!isVerified ? (
          <Card className="glass p-12 border-card-border/50 max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex p-6 rounded-full bg-gradient-primary mb-4">
                <ShieldCheck className="w-12 h-12 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-gradient-secondary mb-3">
                Verify to View Contact Information
              </h3>
            </div>

            <div className="flex justify-center">
              <ReCAPTCHA sitekey="6LdvjBUsAAAAAJoqO1lGtQwQcd4olSE0ffTiTJb-" onChange={handleRecaptchaChange} />
            </div>
          </Card>
        ) : (
          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="glass p-8 border-card-border/50">
                <h3 className="text-2xl font-display font-semibold text-gradient mb-6">Get In Touch</h3>

                <div className="flex flex-wrap justify-center gap-6">
                  {contactMethods.map((method, index) => {
                    const isNonClickable = method.type === "Location";
                    const Component = isNonClickable ? "div" : "a";

                    return (
                      <div key={method.type} className="group" style={{ animationDelay: `${index * 100}ms` }}>
                        <Component
                          {...(!isNonClickable && {
                            href: method.action,
                            ...(method.type === "LinkedIn" && {
                              target: "_blank",
                              rel: "noopener noreferrer"
                            })
                          })}
                          className={`block p-4 rounded-xl border border-border/50 bg-surface transition-all duration-300 
                            ${!isNonClickable ? "card-hover group hover:scale-105 cursor-pointer" : "cursor-default"}
                            w-full sm:w-[320px] md:w-[360px]`}
                        >
                          <div className="flex items-start gap-4">

                            {/* Icon */}
                            <div
                              className={`p-3 rounded-lg bg-gradient-primary ${!isNonClickable && "group-hover:scale-110"} transition-transform duration-300`}
                            >
                              <method.icon className="w-5 h-5 text-primary-foreground" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-2">
                              <div className="flex items-center gap-2">
                                <h4 className="font-semibold text-foreground">{method.type}</h4>
                                {method.primary && (
                                  <Badge className="bg-gradient-primary text-primary-foreground text-xs border-0">
                                    Primary
                                  </Badge>
                                )}
                              </div>

                              {/* Value */}
                              <p
                                className={`text-sm text-primary font-mono ${!isNonClickable ? "link-underline-on-card-hover" : ""}`}
                              >
                                {method.value}
                              </p>

                              {/* Description */}
                              {["Email", "LinkedIn"].includes(method.type) && (
                                <p className="text-sm text-muted-foreground italic">
                                  {method.description}
                                </p>
                              )}

                            </div>
                            {!isNonClickable && (
                              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-secondary transition-all duration-300" />
                            )}
                          </div>
                        </Component>
                      </div>
                    );
                  })}
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
