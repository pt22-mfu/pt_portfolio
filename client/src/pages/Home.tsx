import { Button } from "@/components/ui/button";
import { Mail, Github, ExternalLink, ChevronDown, Download, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * PT Portfolio - Cyberpunk Minimalism Design
 * Dark theme with cyan/teal glow accents
 * Asymmetric layouts with data-driven aesthetics
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  const [isProjectExpanded, setIsProjectExpanded] = useState(false);
  const [isChiangMaiExpanded, setIsChiangMaiExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect visible sections for animations
      const sections = document.querySelectorAll('[data-section]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75;
        const sectionId = section.id;
        setVisibleSections(prev => ({
          ...prev,
          [sectionId]: isVisible
        }));
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border-subtle" : ""
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold">
            <span className="text-primary">PT</span>
            <span className="text-text-light"></span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-text-muted hover:text-primary transition-colors">
              About
            </a>
            <a href="#projects" className="text-text-muted hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-text-muted hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#certifications" className="text-text-muted hover:text-primary transition-colors">
              Certifications
            </a>
            <a href="#activities" className="text-text-muted hover:text-primary transition-colors">
              Activities
            </a>
            <a href="#contact" className="text-text-muted hover:text-primary transition-colors">
              Contact
            </a>

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background with data grid */}
        <div
          className="absolute inset-0 data-grid-bg"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663493646000/aW35T6wqwCw6MNGKZMLhKb/hero-bg-buFoMFUDwY8UzpxRWTJzGb.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6 lg:px-12 py-20">
          {/* Left: Text Content */}
          <div className="space-y-8 animate-in" style={{ animationDelay: "0.1s" }}>
            <div className="space-y-4">
              <p className="text-primary text-sm font-mono tracking-wider uppercase">
                Portfolio / 2025
              </p>
              
              {/* Open to Work Badge */}
              <div className="badge-glow inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-green-500/50 backdrop-blur-sm w-fit">
                <div className="pulse-dot w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="text-xs font-semibold text-green-400 tracking-wide">
                  Available for Internship · Starting January 2027
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Phyo Thant Kyaw
              </h1>
              <p className="text-lg text-text-light font-medium">
                Data & AI Engineer
              </p>
            </div>

            <p className="text-text-muted text-base leading-relaxed max-w-lg">
              Bridging the gap between complex data and actionable intelligence. Building production-ready ETL pipelines, engineering predictive models, and architecting Generative AI (RAG) solutions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects
              </Button>
              <a
                href="https://d2xsxph8kpxj0f.cloudfront.net/310519663493646000/aW35T6wqwCw6MNGKZMLhKb/DataEngineer_PT_Resume_50c0ce36.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-6 border-2 border-primary text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
              >
                <Download size={20} />
                Download CV
              </a>
              <a
                href="https://github.com/pt22-mfu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-6 border-2 border-primary text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
              >
                <Github size={20} />
                GitHub
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/pt22-mfu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary/10 transition-all duration-300 hover-glow"
              >
                <Github size={20} className="text-primary" />
              </a>
              <a
                href="mailto:phyothantkyaw22.pku@gmail.com"
                className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary/10 transition-all duration-300 hover-glow"
              >
                <Mail size={20} className="text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/phyo-thant-kyaw-2816332a4/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary/10 transition-all duration-300 hover-glow"
              >
                <Linkedin size={20} className="text-primary" />
              </a>
            </div>
          </div>

          {/* Right: Profile Image with Glow Frame */}
          <div
            className="relative flex justify-center items-center animate-in lg:justify-end"
            style={{ animationDelay: "0.3s" }}
          >
            <div
              className="w-72 h-72 lg:w-80 lg:h-80 rounded-3xl border-4 border-primary glow-frame flex items-center justify-center overflow-hidden"
              style={{
                boxShadow: "0 0 40px rgba(0, 212, 255, 0.4), inset 0 0 40px rgba(0, 212, 255, 0.1)",
              }}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493646000/aW35T6wqwCw6MNGKZMLhKb/PtCV_ff732073.png"
                alt="Phyo Thant Kyaw"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-primary" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        data-section
        className={`py-24 relative transition-all duration-700 ${
          visibleSections['about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container">
          <div className="mb-16">
            <div className="accent-bar w-16 mb-4" />
            <h2 className="text-3xl font-bold text-text-white">About Me</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Bio */}
            <div className="lg:col-span-2 space-y-6">
              <p className="text-text-light text-base leading-relaxed">
                I am a 4th-year Computer Engineering student at Mae Fah Luang University (MFU). Operating as a T-Shaped Data Professional, my core expertise lies in Data Engineering and Cloud Architecture, while I build end-to-end solutions spanning Spatial Data Analytics, Machine Learning, and Generative AI.
              </p>
              <p className="text-text-light text-base leading-relaxed">
                I am actively seeking an internship starting in January 2027 where I can architect automated data pipelines and deploy LLM-powered applications. My experience ranges from optimizing XGBoost models to integrating LangChain and Google Gemini for proactive intelligence.
              </p>
            </div>

            {/* Stats */}
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border border-border-subtle">
                <p className="text-text-muted text-sm mb-2">Current Status</p>
                <p className="text-2xl font-bold text-primary">4th Year</p>
                <p className="text-text-muted text-sm">Computer Engineering Student</p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border-subtle">
                <p className="text-text-muted text-sm mb-2">Expected Graduation</p>
                <p className="text-2xl font-bold text-primary">2027</p>
                <p className="text-text-muted text-sm">Mae Fah Luang University</p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border-subtle">
                <p className="text-text-muted text-sm mb-2">Skill Profile</p>
                <p className="text-2xl font-bold text-primary">T-Shaped</p>
                <p className="text-text-muted text-sm">Multi-disciplinary</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        data-section
        className={`py-24 relative transition-all duration-700 ${
          visibleSections['experience'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container">
          <div className="mb-16">
            <div className="accent-bar w-16 mb-4" />
            <h2 className="text-3xl font-bold text-text-white">Experience</h2>
          </div>

          {/* Experience Card */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-lg p-8 border-2 border-primary/50 hover:border-primary transition-all duration-300" style={{
              boxShadow: '0 0 20px rgba(0, 212, 255, 0.2)'
            }}>
              <h3 className="text-2xl font-bold text-text-white mb-2">
                Work Assistant — Web & AI Projects
              </h3>
              <p className="text-primary font-semibold mb-6">MFU Learning Innovation Institute (MLii) · May 2026 – Present</p>

              <div className="space-y-3 text-text-light text-base leading-relaxed">
                <p>• Assisting in the development and maintenance of web applications for university internal systems.</p>
                <p>• Supporting the integration of AI/ML features into web platforms using Python and modern LLM tools.</p>
                <p>• Collaborating with academic and technical teams to deliver production-ready digital solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Timeline Section */}
      <section
        id="education"
        data-section
        className={`py-24 relative transition-all duration-700 ${
          visibleSections['education'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container">
          <div className="mb-16">
            <div className="accent-bar w-16 mb-4" />
            <h2 className="text-3xl font-bold text-text-white">Academic Background</h2>
          </div>

          {/* Timeline Container */}
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-primary/30" style={{
              boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)'
            }} />

            {/* Education Entries */}
            <div className="space-y-12">
              {/* Entry 1: MFU (Current) */}
              <div className="relative pl-24 animate-in" style={{ animationDelay: '0.1s' }}>
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 w-16 h-16 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center border-4 border-background" style={{
                    boxShadow: '0 0 30px rgba(0, 212, 255, 0.8), inset 0 0 20px rgba(0, 212, 255, 0.3)'
                  }}>
                    <span className="text-background font-bold text-sm">2023</span>
                  </div>
                </div>

                {/* Card */}
                <div className="bg-card rounded-lg p-8 border-2 border-primary/50 hover:border-primary transition-all duration-300" style={{
                  boxShadow: '0 0 20px rgba(0, 212, 255, 0.2)'
                }}>
                  {/* Status Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/50" style={{
                      boxShadow: '0 0 10px rgba(34, 197, 94, 0.4)'
                    }}>
                      Currently Enrolled
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-text-white mb-2">
                    Bachelor of Engineering – Computer Engineering
                  </h3>
                  <p className="text-primary font-semibold mb-4">Mae Fah Luang University (MFU), Chiang Rai, Thailand</p>

                  <div className="space-y-3 mb-4">
                    <p className="text-text-light text-sm">
                      <span className="text-primary font-semibold">Status:</span> Currently 4th Year Student
                    </p>
                    <p className="text-text-light text-sm">
                      <span className="text-primary font-semibold">GPAX:</span> <span className="text-primary font-bold text-base" style={{ textShadow: '0 0 10px rgba(0, 212, 255, 0.6)' }}>3.81</span>
                    </p>
                    <p className="text-text-light text-sm">
                      <span className="text-primary font-semibold">Focus:</span> Data Engineering, Cloud Infrastructure
                    </p>
                    <p className="text-text-light text-sm">
                      <span className="text-primary font-semibold">Expected Graduation:</span> 2027
                    </p>
                  </div>

                  <div className="border-t border-border-subtle pt-4">
                    <p className="text-text-muted text-sm mb-3">
                      <span className="text-primary font-semibold">Relevant Coursework:</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        'Data Structures & Algorithms',
                        'Database Systems',
                        'Business Data Analytics',
                        'Cloud Computing',
                        'Software Engineering'
                      ].map((course) => (
                        <span key={course} className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/30">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Entry 2: MTU (Completed) */}
              <div className="relative pl-24 animate-in" style={{ animationDelay: '0.2s' }}>
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 w-16 h-16 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center border-4 border-background" style={{
                    boxShadow: '0 0 30px rgba(0, 212, 255, 0.8), inset 0 0 20px rgba(0, 212, 255, 0.3)'
                  }}>
                    <span className="text-background font-bold text-sm">2019</span>
                  </div>
                </div>

                {/* Card */}
                <div className="bg-card rounded-lg p-8 border border-border-subtle hover:border-text-muted transition-all duration-300">
                  <h3 className="text-2xl font-bold text-text-white mb-2">
                    Bachelor of Engineering – Electronics Engineering
                  </h3>
                  <p className="text-text-muted font-semibold mb-4">Mandalay Technological University (MTU/MIT), Myanmar</p>

                  <div className="space-y-3 mb-4">
                    <p className="text-text-light text-sm">
                      <span className="text-primary font-semibold">Period:</span> Dec 2016 – Sep 2019
                    </p>
                    <p className="text-text-light text-sm">
                      <span className="text-primary font-semibold">Status:</span> Completed up to 3rd Year
                    </p>
                    <p className="text-text-light text-sm">
                      <span className="text-primary font-semibold">GPA:</span> 3.04
                    </p>
                  </div>

                  <div className="border-t border-border-subtle pt-4">
                    <p className="text-text-muted text-sm">
                      Strong foundation in engineering principles, circuit design, and technical problem-solving.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        data-section
        className={`py-24 bg-card/30 relative transition-all duration-700 ${
          visibleSections['skills'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container">
          <div className="mb-16">
            <div className="accent-bar w-16 mb-4" />
            <h2 className="text-3xl font-bold text-text-white">Tech Stack</h2>
          </div>

          {/* Tech Stack Icon Grid */}
          <div className="space-y-12">
            {/* Data Engineering */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-6">Data Engineering</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "Apache Spark", icon: "spark" },
                  { name: "Airflow", icon: "apacheairflow" },
                  { name: "ETL Pipelines", icon: "flow" },
                  { name: "Cloud Infrastructure", icon: "cloud" },
                ].map((tech) => (
                  <div key={tech.name} className="flex items-center gap-4 p-4 bg-black/30 rounded-lg border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:bg-black/50">
                    <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon}/${tech.icon}-original.svg`} alt={tech.name} className="w-10 h-10" onError={(e) => {e.currentTarget.style.display = 'none'}} />
                    <span className="text-base font-semibold text-text-light">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Science */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-6">Data Science</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "Python", icon: "python" },
                  { name: "Machine Learning", icon: "tensorflow" },
                  { name: "Scikit-learn", icon: "scikitlearn" },
                  { name: "Pandas / NumPy", icon: "pandas" },
                ].map((tech) => (
                  <div key={tech.name} className="flex items-center gap-4 p-4 bg-black/30 rounded-lg border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:bg-black/50">
                    <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.icon}/${tech.icon}-original.svg`} alt={tech.name} className="w-10 h-10" onError={(e) => {e.currentTarget.style.display = 'none'}} />
                    <span className="text-base font-semibold text-text-light">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Analytics */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-6">Data Analytics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", fallback: "🗄️" },
                  { name: "Power BI", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/powerbi.svg", fallback: "📊" },
                  { name: "Tableau", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/tableau.svg", fallback: "📈" },
                  { name: "Statistical Analysis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg", fallback: "📉" },
                ].map((tech) => (
                  <div key={tech.name} className="flex items-center gap-4 p-4 bg-black/30 rounded-lg border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:bg-black/50">
                    <img src={tech.icon} alt={tech.name} className="w-10 h-10" style={{ filter: 'brightness(0) invert(1)' }} onError={(e) => {e.currentTarget.style.display = 'none'}} />
                    <span className="text-2xl" style={{display: 'none'}}>{tech.fallback}</span>
                    <span className="text-base font-semibold text-text-light">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI & LLMs */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-6">AI & LLMs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "Generative AI & LLMs", icon: "🤖", fallback: "🤖" },
                  { name: "LangChain", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/langchain.svg", fallback: "🔗" },
                  { name: "Google Gemini", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/google.svg", fallback: "✨" },
                  { name: "RAG (Retrieval-Augmented Generation)", icon: "📚", fallback: "📚" },
                  { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg", fallback: "🔥" },
                  { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg", fallback: "⚡" },
                  { name: "Google Colab", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/googlecolab.svg", fallback: "📓" },
                  { name: "Streamlit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg", fallback: "🎨" },
                ].map((tech) => {
                  const isEmoji = tech.icon.length <= 2;
                  return (
                    <div key={tech.name} className="flex items-center gap-4 p-4 bg-black/30 rounded-lg border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:bg-black/50">
                      {isEmoji ? (
                        <span className="text-2xl">{tech.icon}</span>
                      ) : (
                        <img src={tech.icon} alt={tech.name} className="w-10 h-10" style={{ filter: 'brightness(0) invert(1)' }} onError={(e) => {e.currentTarget.style.display = 'none'; const fallback = document.createElement('span'); fallback.textContent = tech.fallback; fallback.className = 'text-2xl'; e.currentTarget.parentElement?.appendChild(fallback);}} />
                      )}
                      <span className="text-base font-semibold text-text-light">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Cloud & Tools */}
            <div>
              <h3 className="text-xl font-bold text-primary mb-6">Cloud & Tools</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg", fallback: "☁️" },
                  { name: "BigQuery", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v12/icons/googlecloud.svg", fallback: "🔍" },
                  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", fallback: "🐳" },
                  { name: "Git / GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", fallback: "🔗" },
                ].map((tech) => {
                  const [imageError, setImageError] = useState(false);
                  return (
                    <div key={tech.name} className="flex items-center gap-4 p-4 bg-black/30 rounded-lg border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:bg-black/50">
                      {!imageError ? (
                        <img src={tech.icon} alt={tech.name} className="w-10 h-10" style={{ filter: tech.name === 'BigQuery' ? 'brightness(0) invert(1)' : 'none' }} onError={() => setImageError(true)} />
                      ) : (
                        <span className="text-2xl">{tech.fallback}</span>
                      )}
                      <span className="text-base font-semibold text-text-light">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section
        id="languages"
        data-section
        className={`py-24 relative transition-all duration-700 ${
          visibleSections['languages'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container">
          <div className="mb-16">
            <div className="accent-bar w-16 mb-4" />
            <h2 className="text-3xl font-bold text-text-white">Languages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* English */}
            <div className="bg-card rounded-lg p-6 border border-border-subtle hover:border-primary transition-all duration-300">
              <h3 className="text-primary font-bold mb-4 text-base">English</h3>
              <div className="space-y-2">
                <p className="text-text-muted text-sm">• Fluent</p>
              </div>
            </div>

            {/* Myanmar */}
            <div className="bg-card rounded-lg p-6 border border-border-subtle hover:border-primary transition-all duration-300">
              <h3 className="text-primary font-bold mb-4 text-base">Myanmar</h3>
              <div className="space-y-2">
                <p className="text-text-muted text-sm">• Native / Fluent</p>
              </div>
            </div>

            {/* Japanese */}
            <div className="bg-card rounded-lg p-6 border border-border-subtle hover:border-primary transition-all duration-300">
              <h3 className="text-primary font-bold mb-4 text-base">Japanese</h3>
              <div className="space-y-2">
                <p className="text-text-muted text-sm">• Basic</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Clean Hard Reset */}
      <section
        id="projects"
        data-section
        className={`py-24 relative transition-all duration-700 ${
          visibleSections['projects'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container">
          {/* Section Header */}
          <div className="mb-16">
            <div className="accent-bar w-16 mb-4" />
            <h2 style={{ fontSize: '32px', fontWeight: 700 }} className="text-text-white">Featured Projects</h2>
          </div>

          {/* Projects Grid - Two Identical Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* PROJECT 1: MFU PM2.5 */}
            <div className="bg-card rounded-xl border-2 border-primary/50 hover:border-primary transition-all duration-300 overflow-hidden" style={{
              boxShadow: '0 0 30px rgba(0, 212, 255, 0.2)'
            }}>
              <div className="p-8 space-y-6">
                {/* Title */}
                <h3 style={{ fontSize: '24px', fontWeight: 700 }} className="text-text-white">
                  MFU PM2.5 Prediction Engine (v2) - Champion Model
                </h3>

                {/* Description */}
                <p style={{ fontSize: '16px', fontWeight: 400, lineHeight: '1.6' }} className="text-text-light">
                  Production-ready 5-Model Showdown Architecture dynamically integrating real-time satellite fire hotspot data — 89% accuracy, 5-day forecast, deployed to production.
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2">
                  {['Python', 'XGBoost', 'Streamlit', 'NASA FIRMS', 'OpenWeather API'].map((tech) => (
                    <span key={tech} style={{ fontSize: '14px', fontWeight: 600 }} className="inline-block px-3 py-1 bg-black/40 border border-primary/50 rounded-full text-primary">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <a
                    href="https://mfu-pm25-prediction.streamlit.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '16px', fontWeight: 600 }}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-all duration-300"
                  >
                    🚀 Live Dashboard
                  </a>
                  <a
                    href="https://github.com/pt22-mfu/MFU_PM25_Prediction"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '16px', fontWeight: 600 }}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 border-2 border-primary text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
                  >
                    💻 GitHub Repo
                  </a>
                </div>
              </div>
            </div>

            {/* PROJECT 2: CHIANG MAI - IDENTICAL STRUCTURE */}
            <div className="bg-card rounded-xl border-2 border-primary/50 hover:border-primary transition-all duration-300 overflow-hidden" style={{
              boxShadow: '0 0 30px rgba(0, 212, 255, 0.2)'
            }}>
              <div className="p-8 space-y-6">
                {/* Title */}
                <h3 style={{ fontSize: '24px', fontWeight: 700 }} className="text-text-white">
                  Chiang Mai Tri-Node Zone: Geo-Predictive Platform
                </h3>

                {/* Description */}
                <p style={{ fontSize: '16px', fontWeight: 400, lineHeight: '1.6' }} className="text-text-light">
                  End-to-end geospatial AI platform integrating real-time satellite data and wind vectors to forecast PM2.5 movement across three critical Chiang Mai urban zones with spatial threat scoring and LLM-powered mitigation strategies.
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2">
                  {['Python', 'XGBoost', 'Streamlit', 'LangChain', 'Google Gemini', 'NASA FIRMS', 'GISTDA'].map((tech) => (
                    <span key={tech} style={{ fontSize: '14px', fontWeight: 600 }} className="inline-block px-3 py-1 bg-black/40 border border-primary/50 rounded-full text-primary">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <a
                    href="https://chiangmai-trinode-zone-pm25-prediction.streamlit.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '16px', fontWeight: 600 }}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-all duration-300"
                  >
                    🚀 Live Dashboard
                  </a>
                  <a
                    href="https://github.com/pt22-mfu/chiangmai-trinode-pm25"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '16px', fontWeight: 600 }}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 border-2 border-primary text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
                  >
                    💻 GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        data-section
        className={`py-24 bg-card/30 relative transition-all duration-700 ${
          visibleSections['certifications'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container">
          <div className="mb-16">
            <div className="accent-bar w-16 mb-4" />
            <h2 className="text-3xl font-bold text-text-white">Certifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Python",
                issuer: "Google",
                date: "Nov 2025",
                link: "https://www.coursera.org/account/accomplishments/verify/VBZJW4B7JFFQ",
              },
              {
                title: "Build Data Lakes and Data Warehouses",
                issuer: "Google Cloud",
                date: "Mar 2026",
                link: "https://www.coursera.org/account/accomplishments/verify/M8M3B0Y7QGVV",
              },
              {
                title: "Google Data Analytics Professional",
                issuer: "Google",
                date: "Mar 2026",
                link: "https://www.coursera.org/account/accomplishments/professional-cert/CT58UMUB0V4R",
              },
              {
                title: "SQL for Data Science",
                issuer: "University of California",
                date: "July 2025",
                link: "https://www.coursera.org/account/accomplishments/verify/KSRTIHE6BHO8",
              },
              {
                title: "Google Prompting Essentials",
                issuer: "Google",
                date: "Sep 2025",
                link: "https://www.coursera.org/account/accomplishments/specialization/HA7IOPDF4WUF",
              },
              {
                title: "Google AI Essentials",
                issuer: "Google",
                date: "Feb 2025",
                link: "https://www.coursera.org/account/accomplishments/verify/SPPAZGDMT9EO",
              },
            ].map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-lg p-6 border border-border-subtle hover:border-primary transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-primary text-sm font-mono mb-1">{cert.issuer}</p>
                    <h4 className="text-lg font-bold text-text-white group-hover:text-primary transition-colors">
                      {cert.title}
                    </h4>
                  </div>
                  <ExternalLink className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                </div>
                <p className="text-text-muted text-sm">{cert.date}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Activities & Experiential Learning Section */}
      <section
        id="activities"
        data-section
        className={`py-24 relative transition-all duration-700 ${
          visibleSections['activities'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container">
          <div className="mb-16">
            <p className="text-primary text-sm font-mono tracking-wider uppercase mb-4">
              Beyond the Classroom
            </p>
            <h2 className="text-3xl font-bold text-text-white">
              Activities & <span className="text-primary">Experiential Learning</span>
            </h2>
          </div>

          {/* Volunteer Activity Card */}
          <div className="bg-card rounded-lg border border-border-subtle overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Left: Image */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg blur-xl" />
                  <img
                    src="/manus-storage/photo_2026-05-06_20-53-36_a8a9e5ac.jpg"
                    alt="Volunteer Explainer: Vibe Coding & RAG"
                    className="relative rounded-lg w-full h-auto object-cover shadow-lg"
                  />
                  <p className="text-text-muted text-sm mt-4 text-center italic">
                    Receiving a souvenir for correctly solving and explaining the coding problem to the class.
                  </p>
                </div>
              </div>

              {/* Right: Content */}
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <p className="text-primary text-sm font-mono mb-2">April 18, 2026</p>
                  <h3 className="text-2xl font-bold text-text-white mb-4">
                    Volunteer Explainer: Vibe Coding & RAG
                  </h3>
                </div>

                <p className="text-text-light leading-relaxed">
                  During our Business Data Analytics course (guided by Ajarn Khwunta Kirimasthong), we had an insightful guest lecture on Vibe Coding and RAG. The session was delivered by Asst. Prof. Nongnuch Ketui, Ph.D., who serves as the Vice President of the Artificial Intelligence Association of Thailand (AIAT) and is a prominent AI researcher. During the hands-on activity, I volunteered to solve a data analytics coding problem and explain the logic to the class. It was a rewarding opportunity to share my approach. I was honored to receive a special souvenir from Asst. Prof. Nongnuch in recognition of providing a correct solution and volunteering as an explainer.
                </p>

                <div className="pt-4 border-t border-border-subtle">
                  <p className="text-text-muted text-sm">
                    <span className="text-primary font-semibold">Key Takeaway:</span> Collaboration and knowledge sharing are essential in data analytics. This experience reinforced my commitment to continuous learning and helping others understand complex concepts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        data-section
        className={`py-24 relative transition-all duration-700 ${
          visibleSections['contact'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <p className="text-primary text-sm font-mono tracking-wider uppercase mb-4">
                Get In Touch
              </p>
              <h2 className="text-4xl font-bold text-text-white mb-6">
                Let's build something <span className="text-primary">data-driven</span>
              </h2>
              <p className="text-text-light text-lg leading-relaxed">
                I'm currently open to internship and full-time opportunities in Data Engineering, Data Science, or Data Analytics. Feel free to reach out!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a
                href="mailto:phyothantkyaw22.pku@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-all duration-300 font-semibold hover:shadow-lg hover:shadow-primary/50"
              >
                <Mail size={20} />
                Email Me
              </a>
              <a
                href="https://github.com/pt22-mfu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary hover:bg-primary/10 rounded-lg transition-all duration-300 font-semibold"
              >
                <Github size={20} />
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border-subtle text-center text-text-muted">
        <p className="text-sm">
          © 2025 Phyo Thant Kyaw. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
