import { developerTools, type DeveloperTool } from '../data/developerTools';

function getStatusClassName(status: DeveloperTool['status']): string {
  return `tool-status tool-status-${status}`;
}

type ToolCardProps = {
  tool: DeveloperTool;
};

function ToolCard({ tool }: ToolCardProps) {
  return (
    <li className="tool-card-item">
      <article className="tool-card" aria-labelledby={`${tool.id}-title`}>
        <div className="tool-card-header">
          <div>
            <span className="tool-kind">{tool.kind}</span>
            <h3 id={`${tool.id}-title`}>{tool.title}</h3>
          </div>
          <span className={getStatusClassName(tool.status)}>{tool.statusLabel}</span>
        </div>

        <p>{tool.description}</p>

        <div className="tool-stack" aria-label={`${tool.title} stack`}>
          {tool.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <ul className="tool-highlights" aria-label={`${tool.title} highlights`}>
          {tool.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <div className="tool-card-actions">
          <a className="tool-action-primary" href={tool.primaryAction.href} aria-label={tool.primaryAction.ariaLabel}>
            {tool.primaryAction.label}
          </a>
          <a
            className="tool-action-secondary"
            href={tool.secondaryAction.href}
            aria-label={tool.secondaryAction.ariaLabel}
          >
            {tool.secondaryAction.label}
          </a>
        </div>
      </article>
    </li>
  );
}

export function ToolsDirectory() {
  return (
    <section id="tools" className="section-block tools-directory" aria-labelledby="tools-directory-title">
      <div className="section-header">
        <div>
          <span className="eyebrow">Developer tools directory</span>
          <h2 id="tools-directory-title">Local-ready building blocks for Philippine apps.</h2>
        </div>
        <p>
          Browse the MVP toolkit by use case. Each tool is designed to be practical,
          copy-paste-friendly, and useful for real local-market applications.
        </p>
      </div>

      <ul className="tools-grid" aria-label="PH DevKit developer tools">
        {developerTools.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </ul>
    </section>
  );
}
