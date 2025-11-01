import { Code2, Palette, Rocket, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Palette,
      title: "Design Excellence",
      description: "Creating beautiful, user-centric designs that captivate and convert.",
    },
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time.",
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Rapid development cycles without compromising on quality.",
    },
    {
      icon: Users,
      title: "Client Focus",
      description: "Your success is our success. We're partners in your growth.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            WHO WE <span className="text-accent">ARE</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a team of designers, developers, and digital strategists passionate about creating exceptional web
            experiences. Our mission is to help businesses thrive in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
