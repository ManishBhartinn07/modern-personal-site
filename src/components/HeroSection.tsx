
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:py-40">
      <div className="container-custom grid md:grid-cols-2 gap-10 items-center">
        {/* Content */}
        <div className="flex flex-col space-y-6 md:order-1 order-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in-slow">
            Hi, I'm <span className="text-accent">Manish Bharti</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground animate-fade-in-slow" style={{ animationDelay: "0.2s" }}>
            Python Developer
          </p>
          <p className="text-muted-foreground max-w-md animate-fade-in-slow" style={{ animationDelay: "0.4s" }}>
            Final year B.Tech CSE student at Chandigarh University with expertise in Python development,
            data processing, and building scalable web applications.
          </p>
          <div className="flex space-x-4 animate-fade-in-slow" style={{ animationDelay: "0.6s" }}>
            <a href="https://github.com/ManishBhartinn07" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/manish-bharti07/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:manishpathik07@gmail.com" className="text-primary hover:text-accent transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-slow" style={{ animationDelay: "0.8s" }}>
            <Button className="gap-2" asChild>
              <a href="#contact">
                Contact Me <ArrowRight size={16} />
              </a>
            </Button>
            <Button variant="outline" className="gap-2" asChild>
              <a href="https://drive.google.com/file/d/1kn6jgUSnWzlqi7mA997WaYFjg3aXYIT3/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Download CV <Download size={16} />
              </a>
            </Button>
          </div>
        </div>
        
        {/* Image */}
        <div className="relative md:order-2 order-1 animate-fade-in-slow">
          <div className="aspect-square bg-secondary rounded-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="Manish Bharti" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-accent text-white px-4 py-2 rounded">
            <p className="font-semibold">Let's Build Something Amazing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
