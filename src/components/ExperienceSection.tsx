
import { Briefcase } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
}

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      title: "Software Developer Intern",
      company: "ABC Tech Solutions",
      location: "Remote",
      duration: "May 2023 - July 2023",
      description: [
        "Developed and maintained front-end components using React.js for an e-commerce platform",
        "Collaborated with a team of 5 developers to implement new features and resolve bugs",
        "Integrated RESTful APIs for seamless data exchange between front-end and back-end",
        "Participated in daily stand-ups and sprint planning to ensure timely delivery of features"
      ]
    },
    {
      title: "Web Development Intern",
      company: "XYZ Digital Services",
      location: "Chandigarh",
      duration: "December 2022 - February 2023",
      description: [
        "Created responsive web interfaces using HTML, CSS, and JavaScript",
        "Implemented mobile-first design principles for better user experience across devices",
        "Assisted senior developers in database design and API integration",
        "Received recognition for contributing to project delivery ahead of schedule"
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
