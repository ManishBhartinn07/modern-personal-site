
import { Award } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  link: string;
}

const CertificationsSection = () => {
  const certifications: Certification[] = [
    {
      title: "Programming, Data Structures and Algorithms using Python",
      issuer: "NPTEL",
      date: "2024",
      description: "Comprehensive certification in Python programming fundamentals, data structures implementation, and algorithm design.",
      link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS94S45690081804128271"
    },
    {
      title: "HTML, CSS, and Javascript for Web Developers",
      issuer: "Coursera",
      date: "2024",
      description: "In-depth course covering front-end web development fundamentals and responsive design principles.",
      link: "https://www.coursera.org/account/accomplishments/verify/BJQ8MKDZF93V"
    },
    {
      title: "Python Programming Essentials",
      issuer: "Coursera",
      date: "2023",
      description: "Comprehensive course on Python programming fundamentals, best practices, and practical applications.",
      link: "https://www.coursera.org/account/accomplishments/verify/BJQ8MKDZF93V"
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container-custom">
        <h2 className="section-title text-center mx-auto">Certifications & Courses</h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <a 
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index} 
              className="bg-secondary rounded-lg p-6 flex gap-4 transition-transform hover:scale-[1.02]"
            >
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
