import { Briefcase } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  image?: string;
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      title: "Python Developer Intern",
      company: "Placify Technology",
      location: "Remote",
      duration: "August 2024 - October 2024",
      image: "public/lovable-uploads/image.png",
      description: [
        "Developed Python-based solutions for data processing, automation, and web development",
        "Worked with frameworks like Flask and Django, and integrated APIs",
        "Focused on optimizing code performance, building scalable applications, and utilizing data structures"
      ]
    }
  ];

  return (
    <section id="experience" className="bg-secondary py-20">
      <div className="container-custom">
        <h2 className="section-title text-center mx-auto">Experience</h2>
        
        <div className="mt-10 space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex items-center gap-2 mb-2 md:mb-0">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Briefcase size={20} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                </div>
                <div className="text-sm text-muted-foreground">
                  {exp.duration}
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4 text-muted-foreground">
                <span className="font-medium">{exp.company}</span>
                <span className="hidden md:inline">•</span>
                <span>{exp.location}</span>
              </div>
              
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
