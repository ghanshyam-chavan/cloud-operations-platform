const projects = [
  {
    title: 'AWS Infrastructure Monitoring Dashboard',
    objective: 'Detect infrastructure health issues early and reduce incident response time through proactive monitoring.',
    description: 'Designed and implemented a centralized monitoring dashboard using Amazon CloudWatch and Grafana to track EC2 performance metrics, S3 storage usage, and cost anomalies. Integrated custom AWS Lambda functions to automate alert evaluation and notifications.',
    operationalFocus: [
      'Proactive detection of high CPU, memory pressure, and disk I/O bottlenecks',
      'Cost monitoring to identify unexpected usage spikes',
      'Alert tuning to reduce false positives',
    ],
    tech: ['AWS CloudWatch', 'Grafana', 'AWS Lambda', 'Python', 'SNS'],
    type: 'Monitoring',
    icon: '📊',
    metrics: [
      { label: 'EC2 Instances Monitored', value: '10+' },
      { label: 'Alert Rules Configured', value: '25+' },
      { label: 'Multi-region Aggregation', value: '✓' },
    ],
  },
  {
    title: 'Linux Server Automation Suite',
    objective: 'Reduce manual operational overhead and improve system reliability through automation.',
    description: 'Developed a set of Bash and Python automation scripts to handle routine Linux administration tasks such as log rotation, automated backups, service health checks, and security patching. Scheduled execution using cron and configuration management principles.',
    operationalFocus: [
      'Prevent disk exhaustion via automated log cleanup',
      'Ensure backup consistency and verification',
      'Standardize patching to reduce configuration drift',
    ],
    tech: ['Linux', 'Bash', 'Python', 'Cron', 'Ansible'],
    type: 'Automation',
    icon: '⚙️',
    metrics: [
      { label: 'Automation Scripts', value: '15+' },
      { label: 'Hours Saved/Week', value: '~8' },
      { label: 'System Stability', value: 'Improved' },
    ],
  },
  {
    title: 'Docker Container Orchestration Lab',
    objective: 'Understand containerized application behavior, monitoring, and failure handling.',
    description: 'Built a containerized microservices lab using Docker and Docker Compose to simulate service dependencies. Implemented health checks, centralized logging, and performance monitoring to observe container failures and recovery behavior.',
    operationalFocus: [
      'Container health monitoring and restart policies',
      'Log aggregation for troubleshooting',
      'Basic CI-style deployment workflow simulation',
    ],
    tech: ['Docker', 'Docker Compose', 'Prometheus', 'Node.js'],
    type: 'Infrastructure',
    icon: '🐳',
    metrics: [
      { label: 'Containers Managed', value: '12+' },
      { label: 'Uptime Achieved', value: '99.5%' },
      { label: 'Auto-restart on Failure', value: '✓' },
    ],
  },
  {
    title: 'Incident Response Playbook System',
    objective: 'Improve incident response consistency and reduce MTTR through structured documentation.',
    description: 'Created detailed incident response runbooks covering common cloud and Linux failure scenarios, including high CPU usage, disk exhaustion, service downtime, and access issues. Defined investigation steps, escalation criteria, and resolution checklists.',
    operationalFocus: [
      'First-15-minutes response guidance',
      'Clear escalation thresholds (L1 → L2)',
      'Post-incident learning and prevention steps',
    ],
    tech: ['Markdown', 'Git', 'Confluence', 'PagerDuty'],
    type: 'Documentation',
    icon: '📘',
    metrics: [
      { label: 'Runbooks Authored', value: '8+' },
      { label: 'MTTR Reduction', value: '~40%' },
      { label: 'Troubleshooting Consistency', value: 'Improved' },
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-gradient-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-4xl mb-4 block">🔬</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lab <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hands-on cloud operations projects built in self-managed lab environments, designed to simulate real production monitoring, automation, and incident response workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                  {project.type}
                </span>
                <span className="text-2xl">{project.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {project.title}
              </h3>

              {/* Objective */}
              <p className="text-sm text-primary/80 mb-3 font-medium">
                Objective: {project.objective}
              </p>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Operational Focus */}
              <div className="mb-4">
                <h4 className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">
                  Operational Focus
                </h4>
                <ul className="space-y-1">
                  {project.operationalFocus.map((focus, fIndex) => (
                    <li key={fIndex} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      {focus}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-4 p-4 bg-background/50 rounded-lg">
                {project.metrics.map((metric, mIndex) => (
                  <div key={mIndex} className="text-center">
                    <div className="text-sm font-bold text-primary">{metric.value}</div>
                    <div className="text-[10px] text-muted-foreground leading-tight">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Lab Environment Label */}
              <p className="text-[10px] text-muted-foreground/60 mb-3 italic">
                * Metrics from lab environment
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2.5 py-1 text-xs font-medium text-muted-foreground bg-secondary rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
