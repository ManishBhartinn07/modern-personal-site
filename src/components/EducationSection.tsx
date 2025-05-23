
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
      institution: "LPU University",
      location: "Punjab, India",
      duration: "2022 - Present",
      score: "CGPA: 7.4"
    },
    {
      degree: "Intermediate (XII)",
      institution: "M.S.C Sn. Sec. School Sujanpur Tira",
      location: "Sujanpur Tira, H.P",
      duration: "2021 - 2022",
      score: "Percentage: 92.4%"
    },
    {
      degree: "Matriculation (X)",
      institution: "M.S.C Sn. Sec. School Sujanpur Tira",
      location: "Sujanpur Tira, H.P",
      duration: "2019 - 2020",
      score: "Percentage: 88%"
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
