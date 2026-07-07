import { useMemo, useState, type ChangeEvent } from 'react';
import { formatPeso, validatePHMobile } from '@ph-devkit/core';
import { PHAddressSelector, type PHAddressValue } from '@ph-devkit/react';
import { sampleRegions } from './data/sampleAddressData';

const toolkitStats = [
  { label: 'MVP utilities', value: '3' },
  { label: 'Backend examples', value: '2' },
  { label: 'Target stack', value: 'React + TS' }
] as const;

const featureCards = [
  {
    eyebrow: 'Forms',
    title: 'PH Address Selector',
    description:
      'Cascading region, province, city or municipality, and barangay fields for local onboarding and checkout forms.'
  },
  {
    eyebrow: 'Money',
    title: 'Peso Formatter',
    description:
      'A small TypeScript utility for consistent Philippine peso display in dashboards, invoices, and admin tools.'
  },
  {
    eyebrow: 'Auth and CRM',
    title: 'Mobile Validator',
    description:
      'Normalize common PH mobile number formats before signup, lead capture, support, or notification flows.'
  }
] as const;

const stackItems = [
  'React + TypeScript components',
  '.NET Web API examples',
  'Laravel API examples',
  'SQL schema starter patterns'
] as const;

const playgroundNotes = [
  'Uses sample PSGC-like demo data only.',
  'Keeps copied code small and readable.',
  'Designed for App Builders PH launch feedback.'
] as const;

const starterCode = `import { formatPeso, validatePHMobile } from '@ph-devkit/core';
import { PHAddressSelector } from '@ph-devkit/react';

formatPeso(1500, { symbol: true });
validatePHMobile('0917 123 4567');`;

function parsePesoInput(amount: string) {
  const normalized = amount.trim().replace(/,/g, '');

  if (normalized.length === 0) {
    return { isValid: false, message: 'Enter an amount to preview peso formatting.' } as const;
  }

  const parsed = Number(normalized);

  if (!Number.isFinite(parsed)) {
    return { isValid: false, message: 'Enter a valid number, such as 1500 or 1,500.50.' } as const;
  }

  return {
    isValid: true,
    symbol: formatPeso(parsed, { symbol: true }),
    code: formatPeso(parsed)
  } as const;
}

export function App() {
  const [amount, setAmount] = useState('1500');
  const [mobile, setMobile] = useState('0917 123 4567');
  const [address, setAddress] = useState<PHAddressValue>({});

  const pesoPreview = useMemo(() => parsePesoInput(amount), [amount]);
  const mobileResult = useMemo(() => validatePHMobile(mobile), [mobile]);

  const selectedAddress = useMemo(() => {
    const region = sampleRegions.find((item) => item.code === address.regionCode);
    const province = region?.provinces.find((item) => item.code === address.provinceCode);
    const city = province?.cities.find((item) => item.code === address.cityCode);
    const barangay = city?.barangays.find((item) => item.code === address.barangayCode);

    return { region, province, city, barangay };
  }, [address]);

  const selectedAddressPath = [
    selectedAddress.region?.name,
    selectedAddress.province?.name,
    selectedAddress.city?.name,
    selectedAddress.barangay?.name
  ].filter(Boolean);

  const addressOutput = {
    codes: address,
    names: {
      region: selectedAddress.region?.name ?? null,
      province: selectedAddress.province?.name ?? null,
      city: selectedAddress.city?.name ?? null,
      barangay: selectedAddress.barangay?.name ?? null
    }
  };

  function handleAmountChange(event: ChangeEvent<HTMLInputElement>) {
    setAmount(event.target.value);
  }

  function handleMobileChange(event: ChangeEvent<HTMLInputElement>) {
    setMobile(event.target.value);
  }

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header" aria-label="PH DevKit header">
        <a className="brand" href="#top" aria-label="PH DevKit home">
          <span className="brand-mark" aria-hidden="true">PH</span>
          <span>
            <strong>PH DevKit</strong>
            <small>Local-ready developer tools</small>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#components">Components</a>
          <a href="#playground">Playground</a>
          <a href="#install">Install</a>
        </nav>
      </header>

      <main id="main-content">
        <section id="top" className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="badge">Developer Tools for Filipino Makers</div>
            <h1 id="hero-title">Build Philippine-ready apps faster.</h1>
            <p>
              PH DevKit gives Filipino developers reusable components, TypeScript utilities,
              backend examples, and starter SQL patterns for local-market web applications.
            </p>

            <div className="hero-actions" aria-label="Primary calls to action">
              <a href="#playground" className="button primary">Try the playground</a>
              <a href="#install" className="button secondary">Copy starter snippet</a>
            </div>

            <dl className="stat-strip" aria-label="PH DevKit MVP summary">
              {toolkitStats.map((stat) => (
                <div key={stat.label}>
                  <dt>{stat.label}</dt>
                  <dd>{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="hero-panel" aria-label="PH DevKit launch scope preview">
            <div className="panel-topline">
              <span className="status-dot" aria-hidden="true" />
              MVP launch scope
            </div>
            <h2>Reusable local primitives, not another heavy framework.</h2>
            <ul className="stack-list">
              {stackItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <pre className="mini-code" aria-label="Example PH DevKit usage"><code>{starterCode}</code></pre>
          </aside>
        </section>

        <section id="components" className="section-block" aria-labelledby="components-title">
          <div className="section-header">
            <div>
              <span className="eyebrow">MVP toolkit</span>
              <h2 id="components-title">Start with the Philippine app basics.</h2>
            </div>
            <p>
              The first release focuses on frequent local requirements that slow down forms,
              billing displays, registration flows, and backend examples.
            </p>
          </div>

          <div className="feature-grid">
            {featureCards.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <span>{feature.eyebrow}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="playground" className="section-block playground" aria-labelledby="playground-title">
          <div className="section-header">
            <div>
              <span className="eyebrow">Live Playground</span>
              <h2 id="playground-title">Test the MVP components.</h2>
            </div>
            <p>
              These examples are intentionally compact so builders can inspect, copy,
              and adapt the implementation quickly.
            </p>
          </div>

          <div className="playground-shell">
            <article className="demo-card address-card">
              <div className="card-heading">
                <div>
                  <span className="card-kicker">Component</span>
                  <h3>PH Address Selector</h3>
                </div>
                <span className="pill">React</span>
              </div>

              <PHAddressSelector
                className="address-selector"
                regions={sampleRegions}
                value={address}
                onChange={setAddress}
              />

              <div className="selection-preview" aria-live="polite">
                <span className="preview-label">Selected address</span>
                {selectedAddressPath.length > 0 ? (
                  <p>{selectedAddressPath.join(' / ')}</p>
                ) : (
                  <p>Choose a region to start the cascading selector.</p>
                )}
              </div>

              <pre className="json-output" aria-label="Selected address JSON output">
                {JSON.stringify(addressOutput, null, 2)}
              </pre>
            </article>

            <div className="utility-column">
              <article className="demo-card">
                <div className="card-heading">
                  <div>
                    <span className="card-kicker">Utility</span>
                    <h3>Peso Formatter</h3>
                  </div>
                  <span className="pill">Core</span>
                </div>

                <label className="input-label" htmlFor="amount">Amount</label>
                <input
                  id="amount"
                  value={amount}
                  onChange={handleAmountChange}
                  inputMode="decimal"
                  placeholder="1500"
                />

                <div className={pesoPreview.isValid ? 'result-box success' : 'result-box error'} role="status">
                  {pesoPreview.isValid ? (
                    <>
                      <strong>{pesoPreview.symbol}</strong>
                      <span>{pesoPreview.code}</span>
                    </>
                  ) : (
                    pesoPreview.message
                  )}
                </div>
              </article>

              <article className="demo-card">
                <div className="card-heading">
                  <div>
                    <span className="card-kicker">Utility</span>
                    <h3>PH Mobile Validator</h3>
                  </div>
                  <span className="pill">Core</span>
                </div>

                <label className="input-label" htmlFor="mobile">Mobile number</label>
                <input
                  id="mobile"
                  value={mobile}
                  onChange={handleMobileChange}
                  inputMode="tel"
                  placeholder="09171234567"
                />

                <div className={mobileResult.isValid ? 'result-box success' : 'result-box error'} role="status">
                  {mobileResult.isValid ? (
                    <>
                      <strong>Valid PH mobile</strong>
                      <span>{mobileResult.internationalFormat}</span>
                    </>
                  ) : (
                    mobileResult.reason
                  )}
                </div>
              </article>

              <aside className="playground-notes" aria-label="Playground notes">
                <h3>Built for launch feedback</h3>
                <ul>
                  {playgroundNotes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </section>

        <section id="install" className="section-block code-section" aria-labelledby="install-title">
          <div>
            <span className="eyebrow">Copy-paste starter</span>
            <h2 id="install-title">Use PH DevKit in a React project.</h2>
            <p>
              Keep the public API small for the MVP: install the core utilities,
              add the React package, then wire the selector to your form state.
            </p>
          </div>
          <pre className="code-output" aria-label="PH DevKit starter code"><code>{`npm install @ph-devkit/core @ph-devkit/react

${starterCode}`}</code></pre>
        </section>
      </main>

      <footer className="site-footer">
        <p>PH DevKit MVP for App Builders PH · Developer Tools</p>
        <a href="#top">Back to top</a>
      </footer>
    </>
  );
}
