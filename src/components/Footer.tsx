import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30 border-t border-border">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
            LET'S <span className="text-accent">CREATE</span>
            <br />
            SOMETHING <span className="text-accent">AMAZING</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Ready to elevate your digital presence? Get in touch and let's discuss your project.
          </p>
          <a
            href="mailto:hello@nexusagency.com"
            className="inline-flex items-center gap-2 text-lg font-medium text-accent hover:text-accent/80 transition-colors"
          >
            <Mail className="w-5 h-5" />
            hello@nexusagency.com
          </a>
        </div>

        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center">
            <div className="font-display text-2xl font-bold tracking-tighter mb-2">
              <span className="text-foreground">NEX</span>
              <span className="text-accent">US</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} NEXUS Agency. Crafting digital excellence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
