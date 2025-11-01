import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution with seamless checkout experience",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      stats: { duration: "3 Months", tech: "React + Node.js" },
    },
    {
      title: "SaaS Dashboard",
      category: "UI/UX Design",
      description: "Clean and intuitive dashboard for data visualization",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      stats: { duration: "2 Months", tech: "Vue.js + Python" },
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure and user-friendly banking application",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      stats: { duration: "4 Months", tech: "React Native" },
    },
    {
      title: "Portfolio Website",
      category: "Branding",
      description: "Stunning portfolio showcasing creative work",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      stats: { duration: "1 Month", tech: "Next.js" },
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            OUR <span className="text-accent">WORK</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A selection of projects that showcase our expertise and commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative aspect-square overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 z-20">
                  <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-mono font-bold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="relative p-5 bg-card">
                <h3 className="font-display text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-xs line-clamp-2">{project.description}</p>
                
                <Button variant="outline" size="sm" className="w-full group/btn border-accent/30 hover:bg-accent hover:text-accent-foreground text-xs">
                  View
                  <ExternalLink className="ml-2 h-3 w-3 transition-all group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
