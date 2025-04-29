
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
                <p className="text-center text-sm font-medium">Development enthusiast</p>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="md:w-1/2">
            <h2 className="section-title">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm Manish Bharti, a prefinal year B.Tech student at LPU University specializing in Computer Science & Engineering. I'm passionate about <strong>Python development</strong>, with expertise in <strong>data processing</strong> and building <strong>scalable web applications</strong>.
              </p>
              <p>
                Throughout my academic journey, I've developed strong skills in <strong>Python programming</strong>, <strong>data structures</strong>, and web development frameworks like <strong>Flask</strong>. I've applied these skills in various projects and during my internship at Placify Technology, where I contributed to real-world applications.
              </p>
              <p>
                My goal is to leverage my <strong>Python development</strong> skills and <strong>competitive programming</strong> experience to create efficient, innovative solutions that make a positive impact. I'm constantly learning and expanding my expertise in tools like <strong>Power BI</strong>, <strong>MySQL</strong>, and other technologies.
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
