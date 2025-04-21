
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">Manish Bharti</h2>
            <p className="text-white/70 mt-2">Software Developer</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="https://github.com/ManishBhartinn07" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/manish-bharti07/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:manishbharti07@gmail.com" className="text-white/70 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/70 text-sm">
          <p>© {currentYear} Manish Bharti. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
