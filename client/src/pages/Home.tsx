import { Button } from "@/components/ui/button";
import { Mail, Github, ExternalLink, ChevronDown, Download, Linkedin, Zap, Database, BarChart3, Brain, Cloud, Code2, GitBranch, BookOpen, Sparkles, Cpu, Flame, Link2, LayoutGrid, Gauge, MapPin, X } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * PT Portfolio - Enterprise Data Engineer
 * Professional, modern design with premium UX
 * Removed emojis, added professional SVG icons
 * Fixed layout issues and improved spacing
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border-subtle" : ""
        }`}
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
          <div className="text-2xl font-bold">
            <span className="text-primary">PT</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-text-muted hover:text-primary transition-colors text-sm font-medium">About</a>
            <a href="#projects" className="text-text-muted hover:text-primary transition-colors text-sm font-medium">Projects</a>
            <a href="#skills" className="text-text-muted hover:text-primary transition-colors text-sm font-medium">Skills</a>
            <a href="#certifications" className="text-text-muted hover:text-primary transition-colors text-sm font-medium">Certifications</a>
            <a href="#activities" className="text-text-muted hover:text-primary transition-colors text-sm font-medium">Activities</a>
            <a href="#contact" className="text-text-muted hover:text-primary transition-colors text-sm font-medium">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
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

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Left: Text Content */}
          <div className="space-y-8 animate-in">
            <div className="space-y-4">
              <p className="text-primary text-sm font-mono tracking-wider uppercase">
                Portfolio / 2025
              </p>
              
              <div className="badge-glow inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-green-500/50 backdrop-blur-sm w-fit">
                <div className="pulse-dot w-2.5 h-2.5 rounded-full bg-green-400" />
                <span className="text-xs font-semibold text-green-400 tracking-wide">
                  Available for Internship · Starting January 2027
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Phyo Thant Kyaw
              </h1>
              <p className="text-xl text-text-light font-medium">
                Enterprise Data & AI Engineer
              </p>
            </div>

            <p className="text-text-muted text-base leading-relaxed max-w-lg">
              Architecting production-ready data pipelines and AI systems. Specializing in ETL automation, predictive modeling, and enterprise-scale cloud infrastructure.
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
                className="inline-flex items-center justify-center gap-2 px-8 py-6 border-2 border-primary text-primary hover:bg-primary/10 rounded-lg transition-all duration-300 font-semibold"
              >
                <Download size={20} />
                Download CV
              </a>
              <a
                href="https://github.com/pt22-mfu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-6 border-2 border-primary text-primary hover:bg-primary/10 rounded-lg transition-all duration-300 font-semibold"
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
                className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary/10 transition-all duration-300"
              >
                <Github size={20} className="text-primary" />
              </a>
              <a
                href="mailto:phyothantkyaw22.pku@gmail.com"
                className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary/10 transition-all duration-300"
              >
                <Mail size={20} className="text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/phyo-thant-kyaw-2816332a4/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center hover:bg-primary/10 transition-all duration-300"
              >
                <Linkedin size={20} className="text-primary" />
              </a>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="relative flex justify-center items-center lg:justify-end">
            <div
              className="w-72 h-72 lg:w-80 lg:h-80 rounded-3xl border-4 border-primary flex items-center justify-center overflow-hidden"
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
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                I am actively seeking an internship starting in January 2027 where I can architect automated data pipelines and deploy LLM-powered applications. My experience ranges from optimizing machine learning models to integrating LangChain and Google Gemini for enterprise intelligence.
              </p>
            </div>

            {/* Stats */}
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border border-border-subtle hover:border-primary/50 transition-all">
                <p className="text-text-muted text-sm mb-2 font-semibold">Current Status</p>
                <p className="text-2xl font-bold text-primary">4th Year</p>
                <p className="text-text-muted text-sm">Computer Engineering</p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border-subtle hover:border-primary/50 transition-all">
                <p className="text-text-muted text-sm mb-2 font-semibold">Expected Graduation</p>
                <p className="text-2xl font-bold text-primary">2027</p>
                <p className="text-text-muted text-sm">Mae Fah Luang University</p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border-subtle hover:border-primary/50 transition-all">
                <p className="text-text-muted text-sm mb-2 font-semibold">Skill Profile</p>
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
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="accent-bar w-16 mb-4" />
            <h2 className="text-3xl font-bold text-text-white">Experience</h2>
          </div>

          <div className="bg-card rounded-lg border-2 border-primary/30 p-8 hover:border-primary/60 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-text-white">
                  Work Assistant — Web & AI Projects
                </h3>
                <p className="text-primary mt-2 font-semibold text-sm">
                  MFU Learning Innovation Institute (MLii)
                </p>
              </div>
              <p className="text-text-muted text-sm font-semibold flex-shrink-0">
                May 2026 – Present
              </p>
            </div>

            <ul className="space-y-3 text-text-light text-base">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Assisting in the development and maintenance of web applications for university internal systems.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Supporting the integration of AI/ML features into web platforms using Python and modern LLM tools.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Collaborating with academic and technical teams to deliver production-ready digital solutions.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Academic Background Section */}
      <section
        id="education"
        data-section
        className={`py-24 relative transition-all duration-700 ${
          visibleSections['education'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="accent-bar w-16 mb-4" />
            <h2 className="text-3xl font-bold text-text-white">Academic Background</h2>
          </div>

          <div className="relative">
            <div className="space-y-12">
              {/* MFU - Current */}
              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-background font-bold text-lg">
                    2023
                  </div>
                  <div className="w-1 h-32 bg-gradient-to-b from-primary to-primary/30 mt-4" />
                </div>
                <div className="bg-card rounded-lg p-6 border border-primary/30 flex-grow">
                  <div className="flex items-start gap-4 mb-4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsUV1OLFzikxsMB_iue3priwGmciZc_MEnGw&s" alt="MFU Logo" className="w-14 h-14 object-contain flex-shrink-0" />
                    <div className="flex-grow">
                      <p className="text-primary text-sm font-semibold mb-2">Currently Enrolled</p>
                      <h3 className="text-xl font-bold text-text-white mb-1">
                        Bachelor of Engineering – Computer Engineering
                      </h3>
                      <p className="text-text-muted text-sm">Mae Fah Luang University (MFU), Chiang Rai, Thailand</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-text-light">
                    <p><span className="text-primary font-semibold">Status:</span> Currently 4th Year Student</p>
                    <p><span className="text-primary font-semibold">GPAX:</span> <span className="text-primary font-bold">3.84</span></p>
                    <p><span className="text-primary font-semibold">Focus:</span> Data Engineering, Cloud Infrastructure</p>
                    <p><span className="text-primary font-semibold">Expected Graduation:</span> 2027</p>
                  </div>

                </div>
              </div>

              {/* MTU - Previous */}
              <div className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/50 flex items-center justify-center text-background font-bold text-lg">
                    2019
                  </div>
                </div>
                <div className="bg-card rounded-lg p-6 border border-border-subtle flex-grow">
                  <div className="flex items-start gap-4 mb-4">
                    <img src="https://upload.wikimedia.org/wikipedia/en/1/11/Logo_of_MTU.png" alt="MTU Logo" className="w-14 h-14 object-contain flex-shrink-0" />
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-text-white mb-1">
                        Bachelor of Engineering – Electronics Engineering
                      </h3>
                      <p className="text-text-muted text-sm">Mandalay Technological University (MTU/MIT), Myanmar</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-text-light">
                    <p><span className="text-primary font-semibold">Period:</span> Dec 2016 – Sep 2019</p>
                    <p><span className="text-primary font-semibold">Status:</span> Completed up to 3rd Year</p>
                    <p><span className="text-primary font-semibold">GPA:</span> 3.04</p>
                    <p className="text-text-muted">Strong foundation in engineering principles, circuit design, and technical problem-solving.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section
        id="skills"
        data-section
        className={`py-24 relative transition-all duration-700 ${
          visibleSections['skills'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="accent-bar w-16 mb-4" />
            <h2 className="text-3xl font-bold text-text-white">Tech Stack</h2>
          </div>

          {/* Data Engineering */}
          <div className="mb-12">
            <h3 className="text-primary text-lg font-bold mb-6 flex items-center gap-2">
              <Database size={20} /> Data Engineering
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Apache Spark', icon: Flame },
                { name: 'Airflow', icon: Zap },
                { name: 'ETL Pipelines', icon: LayoutGrid },
                { name: 'Cloud Infrastructure', icon: Cloud },
              ].map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <div key={tech.name} className="bg-card rounded-lg p-4 border border-border-subtle hover:border-primary transition-all">
                    <IconComponent size={24} className="text-primary mb-2" />
                    <span className="text-text-white font-semibold text-sm">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Data Science */}
          <div className="mb-12">
            <h3 className="text-primary text-lg font-bold mb-6 flex items-center gap-2">
              <Brain size={20} /> Data Science
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Python', icon: Code2 },
                { name: 'Machine Learning', icon: Cpu },
                { name: 'Scikit-learn', icon: BarChart3 },
                { name: 'Pandas / NumPy', icon: LayoutGrid },
              ].map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <div key={tech.name} className="bg-card rounded-lg p-4 border border-border-subtle hover:border-primary transition-all">
                    <IconComponent size={24} className="text-primary mb-2" />
                    <span className="text-text-white font-semibold text-sm">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Data Analytics */}
          <div className="mb-12">
            <h3 className="text-primary text-lg font-bold mb-6 flex items-center gap-2">
              <BarChart3 size={20} /> Data Analytics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'SQL', icon: Database },
                { name: 'Power BI', icon: BarChart3 },
                { name: 'Tableau', icon: Gauge },
                { name: 'Statistical Analysis', icon: LayoutGrid },
              ].map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <div key={tech.name} className="bg-card rounded-lg p-4 border border-border-subtle hover:border-primary transition-all">
                    <IconComponent size={24} className="text-primary mb-2" />
                    <span className="text-text-white font-semibold text-sm">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* AI & LLMs */}
          <div className="mb-12">
            <h3 className="text-primary text-lg font-bold mb-6 flex items-center gap-2">
              <Sparkles size={20} /> AI & LLMs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Generative AI & LLMs', icon: Brain },
                { name: 'LangChain', icon: Link2 },
                { name: 'Google Gemini', icon: Sparkles },
                { name: 'RAG (Retrieval-Augmented Generation)', icon: BookOpen },
                { name: 'PyTorch', icon: Flame },
                { name: 'TensorFlow', icon: Zap },
                { name: 'Google Colab', icon: Code2 },
                { name: 'Streamlit', icon: LayoutGrid },
              ].map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <div key={tech.name} className="bg-card rounded-lg p-4 border border-border-subtle hover:border-primary transition-all">
                    <IconComponent size={24} className="text-primary mb-2" />
                    <span className="text-text-white font-semibold text-sm">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cloud & Tools */}
          <div>
            <h3 className="text-primary text-lg font-bold mb-6 flex items-center gap-2">
              <Cloud size={20} /> Cloud & Tools
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: 'Google Cloud', icon: Cloud },
                { name: 'BigQuery', icon: Database },
                { name: 'Docker', icon: Code2 },
                { name: 'Git / GitHub', icon: GitBranch },
              ].map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <div key={tech.name} className="bg-card rounded-lg p-4 border border-border-subtle hover:border-primary transition-all">
                    <IconComponent size={24} className="text-primary mb-2" />
                    <span className="text-text-white font-semibold text-sm">{tech.name}</span>
                  </div>
                );
              })}
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
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="accent-bar w-16 mb-4" />
            <h2 className="text-3xl font-bold text-text-white">Languages</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'English', level: 'Fluent' },
              { name: 'Myanmar', level: 'Native / Fluent' },
              { name: 'Japanese', level: 'Basic' },
            ].map((lang) => (
              <div key={lang.name} className="bg-card rounded-lg p-6 border border-border-subtle hover:border-primary transition-all duration-300">
                <h3 className="text-primary font-bold mb-2 text-base">{lang.name}</h3>
                <p className="text-text-muted text-sm">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        data-section
        className={`py-24 relative transition-all duration-700 ${
          visibleSections['projects'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="accent-bar w-16 mb-4" />
            <h2 className="text-3xl font-bold text-text-white">Featured Projects</h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* PROJECT 1: MFU PM2.5 */}
            <div className="bg-card rounded-xl border-2 border-primary/50 hover:border-primary transition-all duration-300 overflow-hidden" style={{
              boxShadow: '0 0 30px rgba(0, 212, 255, 0.2)'
            }}>
              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-text-white leading-tight">
                  MFU PM2.5 GeoAI Warning System
                </h3>

                <p className="text-text-light text-base leading-relaxed">
                  Production-ready 4-Model Showdown Architecture dynamically integrating real-time satellite fire hotspot data. Achieved 85.9% accuracy with LightGBM for localized 5-day forecasting, deployed to production with a multi-lingual Gemini AI Campus Advisory.
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2">
                  {['Python', 'LightGBM', 'Streamlit', 'NASA FIRMS', 'OpenWeather API', 'Gemini AI'].map((tech) => (
                    <span key={tech} className="inline-block px-3 py-1.5 bg-black/40 border border-primary/50 rounded-full text-primary text-xs font-semibold">
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
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-all duration-300 font-semibold text-sm flex-1"
                  >
                    <Sparkles size={18} />
                    Live Dashboard
                  </a>
                  <a
                    href="https://github.com/pt22-mfu/MFU_PM25_Prediction"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 border-2 border-primary text-primary hover:bg-primary/10 rounded-lg transition-all duration-300 font-semibold text-sm flex-1"
                  >
                    <Github size={18} />
                    GitHub Repo
                  </a>
                  <button
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 border-2 border-primary/50 text-primary/70 hover:border-primary hover:text-primary rounded-lg transition-all duration-300 font-semibold text-sm flex-1"
                    onClick={() => setSelectedProject('mfu-pm25')}
                  >
                    <ExternalLink size={18} />
                    See Details
                  </button>
                </div>
              </div>
            </div>

            {/* PROJECT 2: CHIANG MAI */}
            <div className="bg-card rounded-xl border-2 border-primary/50 hover:border-primary transition-all duration-300 overflow-hidden" style={{
              boxShadow: '0 0 30px rgba(0, 212, 255, 0.2)'
            }}>
              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-text-white leading-tight">
                  Chiang Mai Tri-Node Zone: Geo-Predictive Platform
                </h3>

                <p className="text-text-light text-base leading-relaxed">
                  End-to-end geospatial AI platform integrating real-time NASA FIRMS (VIIRS) satellite data and wind vectors to forecast PM2.5 movement across three critical Chiang Mai urban zones (Z1: City, Z2: Doi Suthep, Z3: Mae Rim). Features a Spatial Threat Score and a Generative AI Mitigation Copilot to translate complex spatial data into proactive action plans for local authorities.
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2">
                  {['Python', 'XGBoost', 'Streamlit', 'LangChain', 'Google Gemini', 'NASA FIRMS', 'GISTDA'].map((tech) => (
                    <span key={tech} className="inline-block px-3 py-1.5 bg-black/40 border border-primary/50 rounded-full text-primary text-xs font-semibold">
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
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-all duration-300 font-semibold text-sm flex-1"
                  >
                    <Sparkles size={18} />
                    Live Dashboard
                  </a>
                  <a
                    href="https://github.com/pt22-mfu/chiangmai-trinode-pm25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 border-2 border-primary text-primary hover:bg-primary/10 rounded-lg transition-all duration-300 font-semibold text-sm flex-1"
                  >
                    <Github size={18} />
                    GitHub Repo
                  </a>
                  <button
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 border-2 border-primary/50 text-primary/70 hover:border-primary hover:text-primary rounded-lg transition-all duration-300 font-semibold text-sm flex-1"
                    onClick={() => setSelectedProject('chiang-mai')}
                  >
                    <ExternalLink size={18} />
                    See Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-card rounded-xl border-2 border-primary/50 max-w-3xl w-full max-h-[90vh] overflow-y-auto" style={{
            boxShadow: '0 0 40px rgba(0, 212, 255, 0.3)'
          }}>
            <div className="sticky top-0 bg-card border-b border-primary/30 flex items-center justify-between p-6">
              <h2 className="text-2xl font-bold text-text-white">
                {selectedProject === 'mfu-pm25' ? 'MFU PM2.5 GeoAI Warning System' : 'Chiang Mai Tri-Node Zone'}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-primary/10 rounded-lg transition-all"
              >
                <X size={24} className="text-primary" />
              </button>
            </div>

            <div className="p-8 space-y-8">
              {selectedProject === 'mfu-pm25' ? (
                <>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-primary">Overview</h3>
                    <p className="text-text-light leading-relaxed">
                      Traditional weather-only models often fail to predict PM2.5 spikes in localized valleys like the MFU microclimate. To solve this, I architected an end-to-end GeoAI Warning System that actively integrates meteorological data with real-time satellite fire hotspots, achieving an 85.90% prediction accuracy for 5-day proactive forecasting.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-primary">Automated ETL & Feature Engineering</h3>
                    <p className="text-text-light leading-relaxed">
                      Engineered a robust data pipeline ingesting real-time data from OpenWeather API and NASA FIRMS (VIIRS). Created 18 unique features, including a custom "Distance-Decay Fire Pressure Index" to quantify regional agricultural burning impact.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-primary">4-Model Defense Showdown</h3>
                    <p className="text-text-light leading-relaxed">
                      Designed a dynamic scientific pipeline evaluating a LightGBM Champion Model against XGBoost, SVR, and MLR to scientifically justify the necessity of non-linear tree-based algorithms.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-primary">Generative AI Campus Advisory</h3>
                    <p className="text-text-light leading-relaxed">
                      Integrated Google Gemini API to serve as a Mitigation Copilot, translating complex spatial data into actionable, multi-lingual situational advisories with a robust fallback mechanism for 100% uptime.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-primary">Geospatial Visualization</h3>
                    <p className="text-text-light leading-relaxed">
                      Integrated the GISTDA Sphere Map API to render interactive, localized prediction boundaries and nearby fire activity.
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-primary/30">
                    <h3 className="text-lg font-bold text-primary">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'LightGBM', 'Streamlit', 'NASA FIRMS', 'OpenWeather API', 'Gemini AI', 'GISTDA'].map((tech) => (
                        <span key={tech} className="inline-block px-3 py-1.5 bg-black/40 border border-primary/50 rounded-full text-primary text-xs font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <a
                      href="https://mfu-pm25-geoai-warning-system.streamlit.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-all duration-300 font-semibold text-sm flex-1"
                    >
                      <Sparkles size={18} />
                      Live Dashboard
                    </a>
                    <a
                      href="https://github.com/pt22-mfu/mfu-pm25-geoai-warning"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 border-2 border-primary text-primary hover:bg-primary/10 rounded-lg transition-all duration-300 font-semibold text-sm flex-1"
                    >
                      <Github size={18} />
                      GitHub Repo
                    </a>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-primary">Overview</h3>
                    <p className="text-text-light leading-relaxed">
                      Developed for the Geospatial Intelligence for Resilience Hackathon, this system solves the challenge of forecasting where PM2.5 will accumulate based on wind direction and topography in the Chiang Mai basin.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-primary">Tri-Node Spatial Architecture</h3>
                    <p className="text-text-light leading-relaxed">
                      Divided the target area into three distinct forecast zones (Z1: City, Z2: Doi Suthep, Z3: Mae Rim).
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-primary">Spatial Threat Scoring</h3>
                    <p className="text-text-light leading-relaxed">
                      Engineered a dynamic threat scoring logic that assigns higher weights to severe fire hotspots based on Fire Radiative Power (FRP) and their physical proximity to the Tri-Node zones.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-primary">Wind-Guided AI Predictions</h3>
                    <p className="text-text-light leading-relaxed">
                      The XGBoost model actively adjusts pollution risk levels dynamically. For instance, if real-time wind patterns shift from the north, the system automatically elevates the risk for southern urban zones.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-primary">Generative AI Mitigation Copilot</h3>
                    <p className="text-text-light leading-relaxed">
                      Built a "What-If Simulator" for local government authorities. The LLM acts as a virtual consultant, evaluating the AI's predictions to recommend proactive resource allocations (e.g., dispatching water trucks to vulnerable areas or ordering targeted school closures) before pollution reaches critical levels.
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-primary/30">
                    <h3 className="text-lg font-bold text-primary">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'XGBoost', 'Streamlit', 'LangChain', 'Google Gemini', 'NASA FIRMS', 'GISTDA'].map((tech) => (
                        <span key={tech} className="inline-block px-3 py-1.5 bg-black/40 border border-primary/50 rounded-full text-primary text-xs font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <a
                      href="https://chiangmai-trinode-zone-pm25-prediction.streamlit.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-all duration-300 font-semibold text-sm flex-1"
                    >
                      <Sparkles size={18} />
                      Live Dashboard
                    </a>
                    <a
                      href="https://github.com/pt22-mfu/chiangmai-trinode-pm25"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 border-2 border-primary text-primary hover:bg-primary/10 rounded-lg transition-all duration-300 font-semibold text-sm flex-1"
                    >
                      <Github size={18} />
                      GitHub Repo
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Certifications Section */}
      <section
        id="certifications"
        data-section
        className={`py-24 relative transition-all duration-700 ${
          visibleSections['certifications'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="accent-bar w-16 mb-4" />
            <h2 className="text-3xl font-bold text-text-white">Certifications & Credentials</h2>
            <p className="text-text-muted text-base mt-4">Professional certifications demonstrating expertise in data engineering, analytics, and AI.</p>
          </div>

          {/* Certifications List */}
          <div className="space-y-4">
            {[
              {
                title: "IBM Data Engineering Professional Certificate",
                issuer: "IBM",
                logoUrl: "/manus-storage/ibm_official_logo_89ae39a2.webp",
                date: "May 2026",
                link: "https://www.coursera.org/account/accomplishments/professional-cert/PEQB40RH0NUU",
                tags: ["Apache Spark", "Airflow", "Python"],
              },
              {
                title: "Google Data Analytics Professional Certificate",
                issuer: "Google",
                logoUrl: "/manus-storage/pasted_file_ObW2XW_image_b718fe37.png",
                date: "Mar 2026",
                link: "https://www.coursera.org/account/accomplishments/professional-cert/CT58UMUB0V4R",
                tags: ["BigQuery", "Tableau", "SQL"],
              },
              {
                title: "Crash Course on Python",
                issuer: "Google",
                logoUrl: "/manus-storage/pasted_file_ObW2XW_image_b718fe37.png",
                date: "Nov 2025",
                link: "https://www.coursera.org/account/accomplishments/verify/VBZJW4B7JFFQ",
                tags: ["Python", "OOP", "Debugging"],
              },
              {
                title: "SQL for Data Science",
                issuer: "UC Davis / Coursera",
                logoUrl: "/manus-storage/pasted_file_GU9jui_image_33703abb.png",
                date: "July 2025",
                link: "https://www.coursera.org/account/accomplishments/verify/KSRTIHE6BHO8",
                tags: ["SQL", "Database Design", "Queries"],
              },
              {
                title: "Google Prompting Essentials",
                issuer: "Google",
                logoUrl: "/manus-storage/pasted_file_ObW2XW_image_b718fe37.png",
                date: "Sep 2025",
                link: "https://www.coursera.org/account/accomplishments/specialization/HA7IOPDF4WUF",
                tags: ["Prompt Engineering", "LLMs", "AI"],
              },
              {
                title: "Google AI Essentials",
                issuer: "Google",
                logoUrl: "/manus-storage/pasted_file_ObW2XW_image_b718fe37.png",
                date: "Feb 2025",
                link: "https://www.coursera.org/account/accomplishments/verify/SPPAZGDMT9EO",
                tags: ["Generative AI", "AI Basics", "Ethics"],
              },
              {
                title: "Build Data Lakes and Data Warehouses",
                issuer: "Google Cloud",
                logoUrl: "/manus-storage/google_cloud_logo_26860e64.webp",
                date: "Mar 2026",
                link: "https://www.coursera.org/account/accomplishments/verify/M8M3B0Y7QGVV",
                tags: ["Data Warehousing", "Cloud", "Architecture"],
              },
            ].map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative bg-card rounded-lg border-2 border-border-subtle group-hover:border-primary/60 transition-all duration-300 overflow-hidden" style={{
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                }}>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 bg-black/20 rounded-lg flex items-center justify-center border border-primary/20">
                      <img
                        src={cert.logoUrl}
                        alt={cert.issuer}
                        className="w-16 h-16 md:w-20 md:h-20 object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>

                    {/* Content Section */}
                    <div className="flex-grow min-w-0">
                      <p className="text-primary uppercase tracking-wider mb-2 text-xs font-semibold">
                        {cert.issuer}
                      </p>
                      <h3 className="text-lg font-bold text-text-white group-hover:text-primary transition-colors mb-2 leading-snug">
                        {cert.title}
                      </h3>
                      <p className="text-text-muted mb-3 text-sm font-medium">
                        {cert.date}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cert.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-block bg-primary/10 border border-primary/40 text-primary rounded-full px-2.5 py-1 text-xs font-semibold"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Link */}
                    <div className="flex-shrink-0 flex items-center gap-2 text-primary/70 group-hover:text-primary transition-colors">
                      <span className="text-xs font-semibold">View</span>
                      <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section
        id="activities"
        data-section
        className={`py-24 relative transition-all duration-700 ${
          visibleSections['activities'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-primary text-sm font-mono tracking-wider uppercase mb-4">
              Beyond the Classroom
            </p>
            <h2 className="text-3xl font-bold text-text-white">
              Activities & <span className="text-primary">Experiential Learning</span>
            </h2>
          </div>

          {/* New Entry: UI Presentation & Stakeholder Review */}
          <div className="bg-card rounded-lg border border-border-subtle overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Left: Image */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg blur-xl" />
                  <img
                    src="/manus-storage/ChatGPTImageJun15,2026,03_15_37PM_bb496584.png"
                    alt="UI Presentation & Stakeholder Review: AI-Integrated Nursing Project"
                    className="relative rounded-lg w-full h-auto object-cover shadow-lg"
                  />
                </div>
              </div>

              {/* Right: Content */}
              <div className="flex flex-col justify-center space-y-4">
                <div>
                  <p className="text-primary text-sm font-semibold mb-2">June 15, 2026</p>
                  <h3 className="text-2xl font-bold text-text-white mb-4">
                    UI Presentation & Stakeholder Review: AI-Integrated Nursing Project
                  </h3>
                </div>

                <p className="text-text-light text-base leading-relaxed">
                  Conducted a UI presentation and project review at the MFU Learning Innovation Institute (MLii) with two professors from the School of Nursing. During the one-hour session, we discussed project details, gathered domain-specific suggestions, and reviewed the current progress. This modern web AI integration is my first solo full-stack project. During the meeting, my senior lead, P'First, provided essential support in communicating the underlying technical architecture and system capabilities to the academic stakeholders.
                </p>

                <div className="pt-4 border-t border-border-subtle">
                  <p className="text-primary font-semibold mb-2">Key Takeaway:</p>
                  <p className="text-text-muted text-sm">
                    Successfully delivering a technical project requires translating complex AI and web integrations into practical value for domain experts. Navigating these stakeholder discussions is a critical skill that is greatly enhanced by effective senior mentorship.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Original Entry: Volunteer Explainer */}
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
                </div>
              </div>

              {/* Right: Content */}
              <div className="flex flex-col justify-center space-y-4">
                <div>
                  <p className="text-primary text-sm font-semibold mb-2">April 18, 2026</p>
                  <h3 className="text-2xl font-bold text-text-white mb-4">
                    Volunteer Explainer: Vibe Coding & RAG
                  </h3>
                </div>

                <p className="text-text-light text-base leading-relaxed">
                  During our Business Data Analytics course (guided by Ajarn Khwunta Kirimasthong), we had an insightful guest lecture on Vibe Coding and RAG. The session was delivered by Asst. Prof. Nongnuch Ketui, Ph.D., who serves as the Vice President of the Artificial Intelligence Association of Thailand (AIAT) and is a prominent AI researcher. During the hands-on activity, I volunteered to solve a data analytics coding problem and explain the logic to the class. It was a rewarding opportunity to share my approach. I was honored to receive a special souvenir from Asst. Prof. Nongnuch in recognition of providing a correct solution and volunteering as an explainer.
                </p>

                <div className="pt-4 border-t border-border-subtle">
                  <p className="text-primary font-semibold mb-2">Key Takeaway:</p>
                  <p className="text-text-muted text-sm">
                    Collaboration and knowledge sharing are essential in data analytics. This experience reinforced my commitment to continuous learning and helping others understand complex concepts.
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
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-text-white mb-4">
                Let's build something <span className="text-primary">data-driven</span>
              </h2>
              <p className="text-text-muted text-lg max-w-2xl mx-auto">
                I'm currently open to internship and full-time opportunities in Data Engineering, Data Science, or Data Analytics. Feel free to reach out!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <a
                href="mailto:phyothantkyaw22.pku@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-all duration-300 font-semibold"
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
    </div>
  );
}
