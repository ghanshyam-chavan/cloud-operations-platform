import { useState } from 'react';

interface RunbookStep {
  step: number;
  action: string;
  command?: string;
  note?: string;
}

interface Runbook {
  id: string;
  title: string;
  description: string;
  steps: RunbookStep[];
}

const runbooks: Runbook[] = [
  {
    id: '1',
    title: 'High CPU on EC2 Instance',
    description: 'First response checklist when CloudWatch CPU alarm triggers',
    steps: [
      { step: 1, action: 'Acknowledge the alert in monitoring system', note: 'Start timer for SLA tracking' },
      { step: 2, action: 'SSH into the affected instance', command: 'ssh -i key.pem ec2-user@<instance-ip>' },
      { step: 3, action: 'Check top CPU-consuming processes', command: 'top -bn1 | head -20' },
      { step: 4, action: 'Check for runaway processes', command: 'ps aux --sort=-%cpu | head -10' },
      { step: 5, action: 'Review recent application logs', command: 'tail -100 /var/log/app/application.log' },
      { step: 6, action: 'If safe, kill runaway process', command: 'kill -9 <PID>', note: 'Only if identified as non-critical' },
      { step: 7, action: 'Monitor CPU for 5 minutes after action', note: 'Confirm issue resolved' },
      { step: 8, action: 'Update incident ticket with findings and resolution' },
    ],
  },
  {
    id: '2',
    title: 'Website Down - First 10 Minutes',
    description: 'Rapid triage procedure when site is unresponsive',
    steps: [
      { step: 1, action: 'Confirm outage from multiple locations', command: 'curl -I https://example.com' },
      { step: 2, action: 'Check DNS resolution', command: 'nslookup example.com' },
      { step: 3, action: 'Check load balancer health', note: 'AWS Console > EC2 > Load Balancers > Target Groups' },
      { step: 4, action: 'Check backend instance status', command: 'aws ec2 describe-instance-status' },
      { step: 5, action: 'Review recent deployments', note: 'Check CI/CD history for rollback candidate' },
      { step: 6, action: 'Check application health endpoint', command: 'curl http://<internal-ip>:8080/health' },
      { step: 7, action: 'If all green, check firewall/security groups', note: 'Review recent SG changes' },
      { step: 8, action: 'Escalate to L2 if not resolved within 10 minutes' },
    ],
  },
  {
    id: '3',
    title: 'Disk Full on Linux Server',
    description: 'Cleanup procedure when disk usage exceeds 95%',
    steps: [
      { step: 1, action: 'Check current disk usage', command: 'df -h' },
      { step: 2, action: 'Identify large directories', command: 'du -sh /* 2>/dev/null | sort -rh | head -10' },
      { step: 3, action: 'Check log directory sizes', command: 'du -sh /var/log/*' },
      { step: 4, action: 'Remove old logs (if safe)', command: 'find /var/log -name "*.gz" -mtime +7 -delete' },
      { step: 5, action: 'Clear package manager cache', command: 'apt clean && apt autoclean' },
      { step: 6, action: 'Check for large temp files', command: 'find /tmp -size +100M -ls' },
      { step: 7, action: 'Verify log rotation is configured', command: 'cat /etc/logrotate.d/app' },
      { step: 8, action: 'Set up 80% threshold alert for early warning' },
    ],
  },
];

export function Runbooks() {
  const [expandedRunbook, setExpandedRunbook] = useState<string | null>('1');

  return (
    <section id="runbooks" className="py-20 md:py-28 bg-gradient-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Operational <span className="text-gradient">Runbooks</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sample runbooks demonstrating structured, repeatable procedures for common production incidents.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {runbooks.map((runbook) => (
            <div
              key={runbook.id}
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedRunbook(expandedRunbook === runbook.id ? null : runbook.id)
                }
                className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
              >
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {runbook.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{runbook.description}</p>
                </div>
                <svg
                  className={`w-5 h-5 text-muted-foreground transition-transform ${
                    expandedRunbook === runbook.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {expandedRunbook === runbook.id && (
                <div className="px-6 pb-6 animate-fade-in">
                  <div className="pt-4 border-t border-border space-y-4">
                    {runbook.steps.map((step) => (
                      <div key={step.step} className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-sm font-semibold text-primary">
                            {step.step}
                          </span>
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-sm text-foreground mb-1">{step.action}</p>
                          {step.command && (
                            <code className="block px-3 py-2 bg-background rounded-md text-xs text-primary font-mono mt-2">
                              $ {step.command}
                            </code>
                          )}
                          {step.note && (
                            <p className="text-xs text-muted-foreground italic mt-1">
                              Note: {step.note}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
