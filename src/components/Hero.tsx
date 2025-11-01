import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 2.5 });

      tl.from(titleRef.current?.children || [], {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
      })
        .from(
          subtitleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .from(
          ctaRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        );
    });

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="container mx-auto text-center">
        <h1
          ref={titleRef}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter mb-6 leading-none"
        >
          <span className="block overflow-hidden">
            <span className="block">DESIGN</span>
          </span>
          <span className="block overflow-hidden">
            <span className="block text-accent">DEVELOP</span>
          </span>
          <span className="block overflow-hidden">
            <span className="block">DEPLOY</span>
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 font-light"
        >
          We craft exceptional digital experiences that drive results. From concept to deployment, we're your partner
          in creating stunning web solutions.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8"
            onClick={() => scrollToSection("projects")}
          >
            View Our Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 font-medium px-8"
            onClick={() => scrollToSection("about")}
          >
            Learn More
          </Button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "100+", label: "Projects Completed" },
            { number: "50+", label: "Happy Clients" },
            { number: "5+", label: "Years Experience" },
            { number: "15+", label: "Team Members" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-mono text-3xl md:text-4xl font-bold text-accent mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
