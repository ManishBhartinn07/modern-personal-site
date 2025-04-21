
import { Code, Star } from "lucide-react";

interface Competition {
  title: string;
  platform: string;
  achievement: string;
  date: string;
}

const CompetitiveSection = () => {
  const competitions: Competition[] = [
    {
      title: "CodeJam 2023",
      platform: "Google",
      achievement: "Global Rank: 5000+",
      date: "April 2023"
    },
    {
      title: "Hackathon",
      platform: "Microsoft",
      achievement: "2nd Runner Up",
      date: "July 2023"
    },
    {
      title: "Competitive Programming Contest",
      platform: "CodeChef",
      achievement: "4★ Coder (Rating: 1829)",
      date: "2022-Present"
    },
    {
      title: "Leetcode Weekly Contests",
      platform: "Leetcode",
      achievement: "Solved 300+ problems",
      date: "2021-Present"
    }
  ];

  return (
    <section id="competitive" className="py-20">
      <div className="container-custom">
        <h2 className="section-title text-center mx-auto">Competitive Programming & Hackathons</h2>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {competitions.map((comp, index) => (
            <div key={index} className="bg-secondary rounded-lg p-6 flex gap-4">
              <div className="mt-1">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  {index % 2 === 0 ? (
                    <Code size={20} className="text-accent" />
                  ) : (
                    <Star size={20} className="text-accent" />
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">{comp.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <span>{comp.platform}</span>
                  <span>•</span>
                  <span>{comp.date}</span>
                </div>
                <p className="text-muted-foreground font-medium">
                  {comp.achievement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveSection;
