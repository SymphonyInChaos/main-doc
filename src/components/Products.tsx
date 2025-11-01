import { Smartphone, Laptop, Cloud, Database, ShoppingCart, Users, Shield, Zap } from "lucide-react";
import { Button } from "./ui/button";

const Products = () => {
  const products = [
    {
      icon: ShoppingCart,
      name: "E-Commerce Suite",
      tagline: "Sell More, Manage Less",
      description: "Complete e-commerce platform with inventory, payments, and analytics",
      color: "from-orange-500 to-red-500",
      features: ["Payment Gateway", "Inventory Management", "Analytics Dashboard"],
    },
    {
      icon: Users,
      name: "CRM Pro",
      tagline: "Relationships That Matter",
      description: "Customer relationship management system for growing businesses",
      color: "from-accent to-orange-600",
      features: ["Lead Management", "Email Automation", "Sales Pipeline"],
    },
    {
      icon: Laptop,
      name: "Project Manager",
      tagline: "Plan. Track. Deliver.",
      description: "Powerful project management tool for teams of all sizes",
      color: "from-yellow-500 to-orange-500",
      features: ["Task Tracking", "Team Collaboration", "Time Reports"],
    },
    {
      icon: Cloud,
      name: "Cloud Storage Pro",
      tagline: "Your Files, Everywhere",
      description: "Secure cloud storage with advanced sharing and collaboration",
      color: "from-orange-400 to-red-400",
      features: ["Unlimited Storage", "File Sharing", "Team Workspace"],
    },
    {
      icon: Shield,
      name: "Security Shield",
      tagline: "Protection First",
      description: "Enterprise-grade security solutions for your digital assets",
      color: "from-red-500 to-orange-600",
      features: ["SSL Certificates", "DDoS Protection", "Security Audits"],
    },
    {
      icon: Database,
      name: "Data Analytics",
      tagline: "Insights That Drive Growth",
      description: "Advanced analytics platform for data-driven decisions",
      color: "from-orange-600 to-yellow-500",
      features: ["Real-time Reports", "Custom Dashboards", "Data Export"],
    },
    {
      icon: Smartphone,
      name: "Mobile App Builder",
      tagline: "Apps Made Simple",
      description: "Build stunning mobile apps without coding knowledge",
      color: "from-accent to-red-500",
      features: ["Drag & Drop", "Cross Platform", "App Store Ready"],
    },
    {
      icon: Zap,
      name: "Automation Hub",
      tagline: "Work Smarter, Not Harder",
      description: "Automate repetitive tasks and boost productivity",
      color: "from-yellow-500 to-orange-600",
      features: ["Workflow Builder", "API Integration", "Scheduled Tasks"],
    },
  ];

  return (
    <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-accent/5 via-background to-orange-500/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            OUR <span className="text-accent">PRODUCTS</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful software solutions designed to transform your business operations and accelerate growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative p-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <product.icon className="w-7 h-7 text-white" />
                </div>
                
                <div className="mb-4">
                  <h3 className="font-display text-xl font-bold mb-1 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs font-mono text-accent/80 font-semibold">{product.tagline}</p>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="mb-5 space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      <span className="text-xs text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group/btn border-accent/30 hover:bg-accent hover:text-accent-foreground"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
