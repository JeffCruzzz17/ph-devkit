import { getRelatedTools, getToolDetailBySlug } from '../data/toolDetails';
import type { DeveloperTool } from '../data/developerTools';

export function getToolSlugFromPath(pathname: string): string | null {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/';
  const match = /^\/tools\/([^/]+)$/.exec(normalizedPath);

  if (!match) {
    return null;
  }

  try {
    return decodeURIComponent(match[1]);
  } catch {
    return match[1];
  }
}

function getStatusClassName(status: DeveloperTool['status']): string {
  return `tool-status tool-status-${status}`;
}

type ToolDetailPageProps = {
  slug: string;
};

export function ToolDetailPage({ slug }: ToolDetailPageProps) {
  const resolved = getToolDetailBySlug(slug);

  if (!resolved) {
    return (
      <main className="tool-detail-shell">
        <a className="back-link" href="/">
          ← Back to PH DevKit
        </a>

        <section className="tool-detail-hero">
          <span className="eyebrow">Tool not found</span>
          <h1>This PH DevKit tool does not exist yet.</h1>
          <p>
            Return to the homepage to browse available Philippine developer tools,
            utilities, examples, and starter patterns.
          </p>

          <a className="primary-link" href="/#tools">
            Browse tools
          </a>
        </section>
      </main>
    );
  }

  const { tool, detail } = resolved;
  const relatedTools = getRelatedTools(tool.slug);

  return (
    <main className="tool-detail-shell">
      <a className="back-link" href="/">
        ← Back to PH DevKit
      </a>

      <section className="tool-detail-hero" aria-labelledby="tool-detail-title">
        <div className="tool-detail-kicker">
          <span className="tool-kind">{tool.kind}</span>
          <span className={getStatusClassName(tool.status)}>{tool.statusLabel}</span>
        </div>

        <h1 id="tool-detail-title">{tool.title}</h1>
        <p className="tool-detail-headline">{detail.headline}</p>
        <p>{detail.summary}</p>

        <div className="tool-stack" aria-label={`${tool.title} stack`}>
          {tool.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="tool-detail-actions">
          <a className="tool-action-primary" href="/#playground">
            Try in playground
          </a>
          <a className="tool-action-secondary" href="/#install">
            View install snippet
          </a>
        </div>
      </section>

      <section className="tool-detail-grid" aria-label={`${tool.title} details`}>
        <article className="tool-detail-panel">
          <h2>Best for</h2>
          <ul className="check-list">
            {detail.bestFor.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="tool-detail-panel">
          <h2>Implementation notes</h2>
          <ul className="check-list">
            {detail.implementationNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="tool-detail-code-section" aria-labelledby="code-examples-title">
        <div className="section-header compact">
          <div>
            <span className="eyebrow">Copy-paste starter</span>
            <h2 id="code-examples-title">Implementation example</h2>
          </div>
          <p>
            These snippets are intentionally small. Use them as starting points,
            then adapt validation, persistence, and dataset handling to your app.
          </p>
        </div>

        <div className="code-example-stack">
          {detail.codeExamples.map((example) => (
            <article className="code-example-card" key={example.title}>
              <div className="code-example-header">
                <h3>{example.title}</h3>
                <span>{example.language}</span>
              </div>
              <pre>
                <code>{example.code}</code>
              </pre>
            </article>
          ))}
        </div>
      </section>

      <section className="related-tools" aria-labelledby="related-tools-title">
        <div className="section-header compact">
          <div>
            <span className="eyebrow">Keep building</span>
            <h2 id="related-tools-title">Related PH DevKit tools</h2>
          </div>
        </div>

        <div className="related-tools-grid">
          {relatedTools.map((relatedTool) => (
            <a className="related-tool-card" href={`/tools/${relatedTool.slug}`} key={relatedTool.id}>
              <span>{relatedTool.kind}</span>
              <strong>{relatedTool.title}</strong>
              <small>{relatedTool.statusLabel}</small>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
