import profilePhoto from '@/assets/profile-photo.jpg';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="animate-fade-in-up opacity-0">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
                Cloud Support Engineer / Associate Cloud Engineer (AWS | Azure)
              </span>
            </div>
            
            <h1 className="animate-fade-in-up opacity-0 delay-100 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="text-gradient">Ghanshyam Chavan</span>
            </h1>
            
            <p className="animate-fade-in-up opacity-0 delay-200 text-lg md:text-xl text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0">
              Entry-level Cloud Support Engineer with hands-on experience supporting{' '}
              <span className="text-foreground font-medium">AWS</span> and{' '}
              <span className="text-foreground font-medium">Microsoft Azure</span> environments. 
              Skilled in L1/L2 infrastructure support, incident troubleshooting, and{' '}
              <span className="text-foreground font-medium">Linux administration</span>.
            </p>

            {/* Location & Availability */}
            <div className="animate-fade-in-up opacity-0 delay-250 flex flex-wrap justify-center lg:justify-start gap-4 mb-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Maharashtra, India
              </span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="4" />
                </svg>
                Open to Mumbai / Thane / Remote
              </span>
            </div>

            {/* Scope disclaimer */}
            <p className="animate-fade-in-up opacity-0 delay-300 text-sm text-muted-foreground mb-8 italic">
              All projects are built and monitored in self-managed lab and simulated production environments following real-world cloud operations practices.
            </p>
            
            <div className="animate-fade-in-up opacity-0 delay-400 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold bg-gradient-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity shadow-lg glow-primary"
              >
                View Projects
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-foreground bg-secondary hover:bg-secondary/80 rounded-lg transition-colors border border-border"
              >
                Get in Touch
              </a>
            </div>
          </div>
          
          {/* Profile Photo */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="animate-fade-in-up opacity-0 delay-200 relative">
              {/* Glow effect behind photo */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl glow-primary">
                <img
                  src={profilePhoto}
                  alt="Ghanshyam Chavan - Cloud Support Engineer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Floating badges */}
              <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-card rounded-lg border border-border shadow-lg animate-fade-in delay-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-foreground">Available for hire</span>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-card rounded-lg border border-border shadow-lg animate-fade-in delay-500">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  <span className="text-sm font-medium text-foreground">AWS | Azure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
