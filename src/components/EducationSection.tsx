
import { Book } from "lucide-react";

interface Education {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  score: string;
}

const EducationSection = () => {
  const education: Education[] = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Chandigarh University",
      location: "Punjab, India",
      duration: "2020 - 2024",
      score: "CGPA: 8.5/10"
    },
    {
      degree: "Higher Secondary Education (XII)",
      institution: "Delhi Public School",
      location: "Delhi, India",
      duration: "2019 - 2020",
      score: "Percentage: 92%"
    },
    {
      degree: "Secondary Education (X)",
      institution: "Delhi Public School",
      location: "Delhi, India",
      duration: "2017 - 2018",
      score: "Percentage: 94%"
    }
  ];

  return (
    <section id="education" className="bg-secondary py-20">
      <div className="container-custom">
        <h2 className="section-title text-center mx-auto">Education</h2>
        
        <div className="mt-10 space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Book size={20} className="text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                    <span className="font-medium">{edu.institution}</span>
                    <span className="hidden md:inline">•</span>
                    <span className="text-muted-foreground">{edu.location}</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm text-muted-foreground">
                    <span>{edu.duration}</span>
                    <span className="hidden md:inline">•</span>
                    <span className="font-medium">{edu.score}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
