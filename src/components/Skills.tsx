interface SkillBarProps {
  name: string;
  percentage: number;
  category: string;
}

function SkillBar({ name, percentage }: SkillBarProps) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

const skillCategories = [
  {
    title: 'Cloud Platforms',
    skills: [
      { name: 'AWS (EC2, VPC, IAM, ELB, Auto Scaling, Route 53, CloudWatch)', percentage: 75, category: 'cloud' },
      { name: 'Microsoft Azure (VMs, VNet, NSG, Load Balancer, Azure Monitor)', percentage: 70, category: 'cloud' },
      { name: 'Networking (Subnets, Route Tables, Security Groups, DNS)', percentage: 70, category: 'cloud' },
    ],
  },
  {
    title: 'Cloud Operations & Support',
    skills: [
      { name: 'Incident Management & SLA Compliance', percentage: 80, category: 'support' },
      { name: 'L1/L2 Support & Root Cause Analysis', percentage: 80, category: 'support' },
      { name: 'Monitoring Alerts & Dashboards', percentage: 75, category: 'support' },
    ],
  },
  {
    title: 'Operating Systems & Tools',
    skills: [
      { name: 'Linux Administration (Ubuntu, Amazon Linux)', percentage: 85, category: 'os' },
      { name: 'Nginx & Apache HTTP Server', percentage: 70, category: 'os' },
      { name: 'Bash Scripting', percentage: 75, category: 'os' },
      { name: 'Git & Version Control', percentage: 70, category: 'os' },
    ],
  },
  {
    title: 'Certifications (In Progress)',
    skills: [
      { name: 'AWS Certified Cloud Practitioner (CLF-C02)', percentage: 85, category: 'cert' },
      { name: 'Microsoft Azure Fundamentals (AZ-900)', percentage: 80, category: 'cert' },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Core competencies developed through hands-on lab work, certifications, and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-colors"
            >
              <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 bg-card rounded-xl border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="text-xl">💡</span>
            Additional Information
          </h3>
          <ul className="grid md:grid-cols-3 gap-4">
            <li className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-primary mt-0.5">•</span>
              Familiar with ITSM-style support workflows and incident lifecycle management
            </li>
            <li className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-primary mt-0.5">•</span>
              Comfortable working in 24x7 support environments and rotational shifts
            </li>
            <li className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-primary mt-0.5">•</span>
              Actively improving cloud troubleshooting, scripting, and automation skills
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
