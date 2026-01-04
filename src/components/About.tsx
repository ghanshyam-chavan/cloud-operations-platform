import profilePhoto from '@/assets/profile-photo.jpg';

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl rotate-6 opacity-20" />
              <div className="absolute inset-0 bg-card rounded-2xl border border-border overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Ghanshyam Chavan - Cloud Support Engineer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About <span className="text-gradient">Me</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Entry-level Cloud Support Engineer with hands-on experience supporting{' '}
                <span className="text-foreground font-medium">AWS</span> and{' '}
                <span className="text-foreground font-medium">Microsoft Azure</span> environments 
                through self-managed lab projects.
              </p>

              <p>
                Skilled in{' '}
                <span className="text-foreground font-medium">L1/L2 infrastructure support</span>,{' '}
                <span className="text-foreground font-medium">incident troubleshooting</span>,{' '}
                <span className="text-foreground font-medium">Linux administration</span>, monitoring, 
                and service restoration within SLA-driven environments.
              </p>

              <p>
                Seeking a Cloud Support or Associate Cloud Engineer role focused on cloud operations 
                and reliability. Comfortable working in 24x7 support environments and rotational shifts.
              </p>
            </div>

            {/* Education */}
            <div className="mt-6 p-4 bg-card rounded-lg border border-border">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎓</span>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Bachelor of Science in Computer Science</h4>
                  <p className="text-xs text-muted-foreground">Mumbai University</p>
                </div>
              </div>
            </div>

            {/* Key strengths */}
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                { icon: '🔍', title: 'Incident Management', desc: 'L1/L2 Support, Root Cause Analysis' },
                { icon: '📊', title: 'Monitoring & Alerts', desc: 'CloudWatch, Azure Monitor, Dashboards' },
                { icon: '🐧', title: 'Linux Administration', desc: 'Ubuntu, Amazon Linux, Log Analysis' },
                { icon: '🌐', title: 'Networking', desc: 'VPC, VNet, DNS, Load Balancing' },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
