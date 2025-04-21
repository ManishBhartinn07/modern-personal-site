
import { Award } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
}

const CertificationsSection = () => {
  const certifications: Certification[] = [
    {
      title: "React.js Development",
      issuer: "Udemy",
      date: "2023",
      description: "Comprehensive certification covering advanced React concepts, state management, and modern frontend development practices."
    },
    {
      title: "Web Development Bootcamp",
      issuer: "Coursera",
      date: "2022",
      description: "Full-stack web development course covering HTML, CSS, JavaScript, Node.js, and database integration."
    },
    {
      title: "Data Structures and Algorithms",
      issuer: "GeeksforGeeks",
      date: "2022",
      description: "In-depth course on implementing and optimizing data structures and algorithms for efficient problem-solving."
    },
    {
      title: "Machine Learning Fundamentals",
      issuer: "Stanford University (Coursera)",
      date: "2023",
      description: "Introduction to machine learning concepts, algorithms, and practical applications in data analysis."
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container-custom">
        <h2 className="section-title text-center mx-auto">Certifications & Courses</h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-secondary rounded-lg p-6 flex gap-4">
              <div className="mt-1">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Award size={20} className="text-accent" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <span>{cert.issuer}</span>
                  <span>•</span>
                  <span>{cert.date}</span>
                </div>
                <p className="text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
