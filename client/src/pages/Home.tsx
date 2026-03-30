import { Button } from "@/components/ui/button";
import { Mail, Github, ExternalLink, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * PT Portfolio - Cyberpunk Minimalism Design
 * Dark theme with cyan/teal glow accents
 * Asymmetric layouts with data-driven aesthetics
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
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

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 animate-in" style={{ animationDelay: "0.1s" }}>
            <div className="space-y-4">
              <p className="text-primary text-sm font-mono tracking-wider uppercase">
                Portfolio / 2025
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight">
                Phyo Thant Kyaw
              </h1>
              <p className="text-lg text-text-light font-medium">
                Computer Engineering Student & Aspiring Data Engineer
              </p>
            </div>

            <p className="text-text-muted text-base leading-relaxed max-w-md">
              Building robust data pipelines, uncovering insights, and engineering predictive models. Capable across Data Engineering, Data Science, and Data Analytics.
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
            </div>
          </div>

          {/* Right: Profile Image with Glow Frame */}
          <div
            className="relative flex justify-center items-center animate-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative w-full max-w-sm aspect-square">
              {/* Hexagonal Glow Frame */}
              <div
                className="absolute inset-0 rounded-3xl glow-cyan-border"
                style={{
                  background: "linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(0, 168, 204, 0.05))",
                }}
              />
              {/* Profile Image Placeholder */}
              <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663493646000/aW35T6wqwCw6MNGKZMLhKb/PtCV_ef559052.png"
                  alt="Phyo Thant Kyaw"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-primary" size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background relative">
        <div className="container">
          <div className="mb-16">
            <div className="accent-bar w-16 mb-4" />
            <h2 className="text-3xl font-bold text-text-white">About Me</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Bio */}
            <div className="lg:col-span-2 space-y-6">
              <p className="text-text-light text-base leading-relaxed">
                I am a 3rd-year Computer Engineering student at Mae Fah Luang University (MFU), expected to graduate in 2027. While my primary focus and passion lie in Data Engineering and cloud infrastructure, I maintain a strong 'T-shaped' skill set with proven capabilities in Data Analytics and Data Science.
              </p>
              <p className="text-text-light text-base leading-relaxed">
                I am actively seeking roles where I can architect end-to-end data solutions. My experience spans from designing ETL pipelines to building predictive models and creating actionable insights through data visualization.
              </p>
            </div>

            {/* Stats */}
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border border-border-subtle">
                <p className="text-text-muted text-sm mb-2">Current Status</p>
                <p className="text-2xl font-bold text-primary">3rd Year</p>
                <p className="text-text-muted text-sm">CE Student</p>
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

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-card/30 relative">
        <div className="container">
          <div className="mb-16">
            <div className="accent-bar w-16 mb-4" />
            <h2 className="text-3xl font-bold text-text-white">Tech Stack</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Data Engineering */}
            <div className="bg-card rounded-lg p-6 border border-border-subtle hover:border-primary transition-all duration-300">
              <h3 className="text-primary font-bold mb-4 text-base">Data Engineering</h3>
              <div className="space-y-2">
                {["Apache Spark", "Airflow", "ETL Pipelines", "Cloud Infrastructure"].map((skill) => (
                  <p key={skill} className="text-text-muted text-sm">
                    • {skill}
                  </p>
                ))}
              </div>
            </div>

            {/* Data Science */}
            <div className="bg-card rounded-lg p-6 border border-border-subtle hover:border-primary transition-all duration-300">
              <h3 className="text-primary font-bold mb-4 text-lg">Data Science</h3>
              <div className="space-y-2">
                {["Python", "Machine Learning", "Scikit-learn", "Pandas / NumPy"].map((skill) => (
                  <p key={skill} className="text-text-muted text-sm">
                    • {skill}
                  </p>
                ))}
              </div>
            </div>

            {/* Data Analytics */}
            <div className="bg-card rounded-lg p-6 border border-border-subtle hover:border-primary transition-all duration-300">
              <h3 className="text-primary font-bold mb-4 text-lg">Data Analytics</h3>
              <div className="space-y-2">
                {["SQL", "Power BI", "Tableau", "Statistical Analysis"].map((skill) => (
                  <p key={skill} className="text-text-muted text-sm">
                    • {skill}
                  </p>
                ))}
              </div>
            </div>

            {/* Cloud & Tools */}
            <div className="bg-card rounded-lg p-6 border border-border-subtle hover:border-primary transition-all duration-300">
              <h3 className="text-primary font-bold mb-4 text-lg">Cloud & Tools</h3>
              <div className="space-y-2">
                {["Google Cloud", "BigQuery", "Docker", "Git / GitHub"].map((skill) => (
                  <p key={skill} className="text-text-muted text-sm">
                    • {skill}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-background relative">
        <div className="container">
          <div className="mb-16">
            <div className="accent-bar w-16 mb-4" />
            <h2 className="text-3xl font-bold text-text-white">Featured Project</h2>
          </div>

          <a
            href="https://github.com/pt22-mfu/MFU_PM25_Prediction"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-card rounded-lg border border-border-subtle overflow-hidden hover:border-primary transition-all duration-300 cursor-pointer"
          >
            <div className="p-8 md:p-12">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-primary text-sm font-mono mb-2">HIGHLIGHT</p>
                  <h3 className="text-2xl font-bold text-text-white">
                    PM2.5 Air Quality Prediction for the MFU Valley
                  </h3>
                </div>
                <ExternalLink className="text-primary flex-shrink-0" size={24} />
              </div>

              <p className="text-text-muted mb-6">Team: The Outliers</p>

              <p className="text-text-light text-lg leading-relaxed mb-8">
                An end-to-end data solution predicting air quality levels. Demonstrates full-stack data capabilities: automating data ingestion from sensors (Data Engineering), training predictive machine learning algorithms (Data Science), and visualizing trends for stakeholders (Data Analytics).
              </p>

              <div className="flex flex-wrap gap-3">
                {["Data Engineering", "Data Science", "Data Analytics"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-primary/10 border border-primary text-primary rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 bg-card/30 relative">
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
                href={cert.link || "#"}
                target={cert.link ? "_blank" : undefined}
                rel={cert.link ? "noopener noreferrer" : undefined}
                className="block bg-card rounded-lg p-6 border border-border-subtle hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-2">
                  <p className="text-primary text-xs font-mono">{cert.issuer}</p>
                  {cert.link && <ExternalLink size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />}
                </div>
                <h4 className="text-text-white font-bold mb-3">{cert.title}</h4>
                <p className="text-text-muted text-sm">{cert.date}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background relative">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <p className="text-primary text-sm font-mono tracking-wider uppercase mb-4">
                Get In Touch
              </p>
              <h2 className="text-4xl font-bold text-text-white mb-6">
                Let's build something
                <br />
                <span className="text-primary">data-driven</span>
              </h2>
            </div>

              <p className="text-text-light text-base mb-12">
              I'm currently open to internship and full-time opportunities in Data Engineering, Data Science, or Data Analytics. Feel free to reach out!
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="mailto:phyothantkyaw22.pku@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
              >
                <Mail size={20} />
                Email Me
              </a>
              <a
                href="https://github.com/pt22-mfu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary hover:bg-primary/10 rounded-lg font-semibold transition-all duration-300"
              >
                <Github size={20} />
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/50 border-t border-border-subtle py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between text-text-muted text-sm">
          <p>© 2025 Phyo Thant Kyaw. All rights reserved.</p>
          <p>Built with passion & precision</p>
        </div>
      </footer>
    </div>
  );
}
