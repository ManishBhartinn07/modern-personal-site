
import { Button } from "@/components/ui/button";
import { User, ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="bg-secondary py-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          {/* Image */}
          <div className="md:w-1/2">
            <div className="relative">
              <div className="aspect-[4/5] bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Manish Bharti Working" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 p-4 bg-white rounded-lg shadow-lg w-48">
                <div className="flex justify-center items-center mb-2">
                  <User size={20} className="text-accent" />
                </div>
                <p className="text-center text-sm font-medium">Software Developer with MERN Stack Expertise</p>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="md:w-1/2">
            <h2 className="section-title">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm Manish Bharti, a final year B.Tech student at Chandigarh University specializing in Computer Science & Engineering. I'm passionate about software development, with a focus on creating efficient, user-friendly applications using the MERN stack.
              </p>
              <p>
                Throughout my academic journey, I've developed a strong foundation in data structures, algorithms, and software engineering principles. I've applied these skills in various projects and internships, where I've contributed to real-world applications and learned to work effectively in team environments.
              </p>
              <p>
                My goal is to leverage my technical skills and creativity to build innovative solutions that make a positive impact. I'm constantly learning and exploring new technologies to stay at the forefront of this rapidly evolving field.
              </p>
            </div>
            <div className="mt-6">
              <Button asChild>
                <a href="#skills" className="flex items-center gap-2">
                  My Skills <ArrowRight size={16} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
