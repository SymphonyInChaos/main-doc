import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { Button } from "./ui/button";

const Pricing = () => {
  const [currency, setCurrency] = useState("USD");
  const [isDetecting, setIsDetecting] = useState(true);

  useEffect(() => {
    const detectLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        const countryCode = data.country_code;
        
        const currencyMap: Record<string, string> = {
          US: "USD",
          GB: "GBP",
          IN: "INR",
          AU: "AUD",
          AT: "EUR", BE: "EUR", CY: "EUR", EE: "EUR", FI: "EUR",
          FR: "EUR", DE: "EUR", GR: "EUR", IE: "EUR", IT: "EUR",
          LV: "EUR", LT: "EUR", LU: "EUR", MT: "EUR", NL: "EUR",
          PT: "EUR", SK: "EUR", SI: "EUR", ES: "EUR",
        };
        
        setCurrency(currencyMap[countryCode] || "USD");
      } catch (error) {
        console.error("Failed to detect location:", error);
        setCurrency("USD");
      } finally {
        setIsDetecting(false);
      }
    };
    
    detectLocation();
  }, []);

  const conversionRates: Record<string, { rate: number; symbol: string }> = {
    USD: { rate: 1, symbol: "$" },
    EUR: { rate: 0.92, symbol: "€" },
    GBP: { rate: 0.79, symbol: "£" },
    INR: { rate: 83.12, symbol: "₹" },
    AUD: { rate: 1.52, symbol: "A$" },
  };

  const convertPrice = (priceUSD: number) => {
    const { rate, symbol } = conversionRates[currency];
    const converted = Math.round(priceUSD * rate);
    return `${symbol}${converted.toLocaleString()}`;
  };

  const plans = [
    {
      name: "Starter",
      priceUSD: 2999,
      description: "Perfect for small projects and startups",
      features: [
        "Responsive Website Design",
        "Up to 5 Pages",
        "Basic SEO Optimization",
        "Contact Form Integration",
        "1 Month Support",
      ],
    },
    {
      name: "Professional",
      priceUSD: 5999,
      description: "Ideal for growing businesses",
      features: [
        "Custom Web Application",
        "Up to 15 Pages",
        "Advanced SEO & Analytics",
        "CMS Integration",
        "E-Commerce Features",
        "3 Months Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      priceUSD: 12999,
      description: "For large-scale projects",
      features: [
        "Full Stack Development",
        "Unlimited Pages",
        "Complete SEO Strategy",
        "Custom CMS Development",
        "Advanced Integrations",
        "API Development",
        "12 Months Support",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            PRICING <span className="text-accent">PLANS</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparent pricing for every budget. Choose the plan that fits your needs.
          </p>
          {isDetecting && (
            <p className="text-sm text-muted-foreground mt-4">Detecting your location...</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 bg-card rounded-3xl border transition-all duration-500 hover:-translate-y-2 ${
                plan.popular
                  ? "border-accent shadow-2xl shadow-accent/30 scale-105"
                  : "border-border hover:border-accent/50 hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-mono text-4xl font-bold">{convertPrice(plan.priceUSD)}</span>
                  <span className="text-muted-foreground">/project</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${plan.popular ? "bg-accent hover:bg-accent/90" : ""}`}
                variant={plan.popular ? "default" : "outline"}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
