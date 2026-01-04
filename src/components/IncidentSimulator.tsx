import { useState } from 'react';

interface IncidentStep {
  title: string;
  content: string[];
}

interface Incident {
  id: string;
  title: string;
  severity: 'Critical' | 'High' | 'Medium';
  duration: string;
  symptoms: IncidentStep;
  investigation: IncidentStep;
  rootCause: IncidentStep;
  resolution: IncidentStep;
  escalation: IncidentStep;
}

const incidents: Incident[] = [
  {
    id: '1',
    title: 'EC2 Instance High CPU Alert',
    severity: 'Critical',
    duration: '25 minutes',
    symptoms: {
      title: 'Initial Symptoms',
      content: [
        'CloudWatch alarm triggered: CPU utilization > 90% for 5 minutes',
        'Application response time increased from 200ms to 3000ms',
        'Users reporting slow page loads and timeouts',
      ],
    },
    investigation: {
      title: 'Investigation Steps',
      content: [
        'Connected via SSH to inspect running processes with `top` and `htop`',
        'Identified runaway Python script consuming 95% CPU',
        'Checked application logs in /var/log/app/ for errors',
        'Reviewed recent deployments in CI/CD history',
      ],
    },
    rootCause: {
      title: 'Root Cause',
      content: [
        'Infinite loop in background job processing module',
        'Missing timeout configuration for external API calls',
        'No circuit breaker pattern implemented',
      ],
    },
    resolution: {
      title: 'Resolution',
      content: [
        'Killed the runaway process with `kill -9 <PID>`',
        'Applied hotfix with 30-second timeout on API calls',
        'Implemented process monitoring with automatic restart',
        'Added CPU usage alerting at 70% threshold for early warning',
      ],
    },
    escalation: {
      title: 'Escalation & Communication',
      content: [
        'When to escalate: If CPU stays > 90% after process kill, escalate to L2',
        'Info to pass: Instance ID, affected service, timeline, logs snapshot',
        'Communication: Posted status update in #incidents Slack channel',
        'SLA awareness: P1 incident - 15 min acknowledgment, 1 hour resolution target',
      ],
    },
  },
  {
    id: '2',
    title: 'Database Connection Pool Exhaustion',
    severity: 'High',
    duration: '40 minutes',
    symptoms: {
      title: 'Initial Symptoms',
      content: [
        'Application throwing "Connection pool exhausted" errors',
        'Database showing max_connections reached (100/100)',
        'New user requests failing with 500 errors',
      ],
    },
    investigation: {
      title: 'Investigation Steps',
      content: [
        'Ran `SHOW PROCESSLIST` to identify active connections',
        'Found multiple sleeping connections from specific application pods',
        'Checked connection pool configuration in application settings',
        'Analyzed connection lifecycle in application code',
      ],
    },
    rootCause: {
      title: 'Root Cause',
      content: [
        'Connection leak in exception handling code path',
        'Connections not being returned to pool on error scenarios',
        'Pool size not scaled for increased traffic volume',
      ],
    },
    resolution: {
      title: 'Resolution',
      content: [
        'Terminated stale connections manually',
        'Fixed connection leak in exception handler with proper try-finally blocks',
        'Increased pool size from 100 to 200 connections',
        'Added connection timeout and idle connection eviction policies',
      ],
    },
    escalation: {
      title: 'Escalation & Communication',
      content: [
        'When to escalate: If database requires restart, escalate to L3 DBA team',
        'Info to pass: Connection count trends, affected endpoints, error logs',
        'Communication: Notified development team for code review',
        'SLA awareness: P2 incident - 30 min acknowledgment, 2 hour resolution target',
      ],
    },
  },
  {
    id: '3',
    title: 'Disk Space Critical on Web Server',
    severity: 'Medium',
    duration: '15 minutes',
    symptoms: {
      title: 'Initial Symptoms',
      content: [
        'Monitoring alert: Disk usage > 95% on /var partition',
        'Application unable to write logs, throwing I/O errors',
        'Service degradation reported by health checks',
      ],
    },
    investigation: {
      title: 'Investigation Steps',
      content: [
        'Ran `df -h` to confirm disk space status',
        'Used `du -sh /var/*` to identify space-consuming directories',
        'Found /var/log/app consuming 45GB (log rotation misconfigured)',
        'Checked log rotation configuration in /etc/logrotate.d/',
      ],
    },
    rootCause: {
      title: 'Root Cause',
      content: [
        'Log rotation not configured for new application logs',
        'Debug logging accidentally left enabled in production',
        'No disk space monitoring alert at lower threshold (80%)',
      ],
    },
    resolution: {
      title: 'Resolution',
      content: [
        'Compressed and archived old logs: `gzip /var/log/app/*.log.1`',
        'Configured logrotate with daily rotation and 7-day retention',
        'Disabled debug logging in production environment',
        'Added 80% disk usage alert for early warning',
      ],
    },
    escalation: {
      title: 'Escalation & Communication',
      content: [
        'When to escalate: If disk 100% and service down, escalate to L2 immediately',
        'Info to pass: Current disk usage, largest directories, affected services',
        'Communication: Created internal wiki page for disk cleanup procedures',
        'SLA awareness: P3 incident - 1 hour acknowledgment, 4 hour resolution target',
      ],
    },
  },
];

const tabs = ['Symptoms', 'Investigation', 'Root Cause', 'Resolution', 'Escalation'];

export function IncidentSimulator() {
  const [selectedIncident, setSelectedIncident] = useState(incidents[0]);
  const [activeTab, setActiveTab] = useState('Symptoms');

  const getTabContent = (tab: string): IncidentStep => {
    switch (tab) {
      case 'Symptoms':
        return selectedIncident.symptoms;
      case 'Investigation':
        return selectedIncident.investigation;
      case 'Root Cause':
        return selectedIncident.rootCause;
      case 'Resolution':
        return selectedIncident.resolution;
      case 'Escalation':
        return selectedIncident.escalation;
      default:
        return selectedIncident.symptoms;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical':
        return 'bg-destructive/10 text-destructive border-destructive/30';
      case 'High':
        return 'bg-orange/10 text-orange border-orange/30';
      case 'Medium':
        return 'bg-primary/10 text-primary border-primary/30';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="incidents" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Incident <span className="text-gradient">Simulator</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interactive walkthrough of real incident response scenarios, demonstrating systematic troubleshooting methodology.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Incident List */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4">Select Incident</h3>
            {incidents.map((incident) => (
              <button
                key={incident.id}
                onClick={() => {
                  setSelectedIncident(incident);
                  setActiveTab('Symptoms');
                }}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  selectedIncident.id === incident.id
                    ? 'bg-card border-primary/50 shadow-lg'
                    : 'bg-card/50 border-border hover:border-primary/30'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-sm font-medium text-foreground">
                    {incident.title}
                  </span>
                  <span
                    className={`px-2 py-0.5 text-xs font-medium rounded-full border ${getSeverityColor(
                      incident.severity
                    )}`}
                  >
                    {incident.severity}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground">
                  Resolution time: {incident.duration}
                </div>
              </button>
            ))}
          </div>

          {/* Incident Details */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl border border-border p-6">
              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 pb-4 border-b border-border">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                      activeTab === tab
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="animate-fade-in">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  {getTabContent(activeTab).title}
                </h4>
                <ul className="space-y-3">
                  {getTabContent(activeTab).content.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1.5 w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-muted-foreground text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline indicator */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Current Step:</span>
                  <span className="text-primary font-medium">
                    {tabs.indexOf(activeTab) + 1} of {tabs.length}
                  </span>
                </div>
                <div className="mt-2 h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-primary transition-all duration-300"
                    style={{ width: `${((tabs.indexOf(activeTab) + 1) / tabs.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
