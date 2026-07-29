import Image from "next/image";

const repositories = [
  {
    id: "01",
    name: "m1nd",
    fullName: "maxkle1nz/m1nd",
    field: "CONTEXT INFRASTRUCTURE",
    description:
      "The shell around your coding agent: a neuro-symbolic code graph with calibrated trust, via MCP.",
    href: "https://github.com/maxkle1nz/m1nd",
    language: "Rust",
    branch: "main",
    stars: 23,
    forks: 3,
    issues: 12,
    license: "MIT",
    pushed: "2026-07-29 00:59 UTC",
  },
  {
    id: "02",
    name: "deviance-skills",
    fullName: "maxkle1nz/deviance-skills",
    field: "OPERATING DOCTRINE",
    description:
      "Operational doctrine as installable skills for Claude Code and Codex — the DEViance Intelligence method pack.",
    href: "https://github.com/maxkle1nz/deviance-skills",
    language: "Python",
    branch: "main",
    stars: 2,
    forks: 0,
    issues: 0,
    license: "MIT",
    pushed: "2026-07-24 18:48 UTC",
  },
  {
    id: "03",
    name: "RETROBUILDER",
    fullName: "maxkle1nz/RETROBUILDER",
    field: "SOFTWARE ARCHAEOLOGY",
    description:
      "Structural instruments for exposing hidden coupling, ghost edges, duplicate systems, and safer refactor seams.",
    href: "https://github.com/maxkle1nz/RETROBUILDER",
    language: "TypeScript",
    branch: "main",
    stars: 2,
    forks: 0,
    issues: 0,
    license: "—",
    pushed: "2026-07-23 17:13 UTC",
  },
  {
    id: "04",
    name: "v1truvio",
    fullName: "maxkle1nz/v1truvio",
    field: "VISUAL COMPILER",
    description:
      "Not a design system. The compiler that generates them — six vectors, three laws, anti-cliché gates.",
    href: "https://github.com/maxkle1nz/v1truvio",
    language: "JavaScript",
    branch: "main",
    stars: 1,
    forks: 0,
    issues: 0,
    license: "MIT",
    pushed: "2026-07-23 17:08 UTC",
  },
  {
    id: "05",
    name: "synt0ny",
    fullName: "maxkle1nz/synt0ny",
    field: "MEANING GEOMETRY",
    description:
      "A local lab for the geometry of meaning, and an advisory engine built from what survived it. No LLM in the hot path.",
    href: "https://github.com/maxkle1nz/synt0ny",
    language: "Python",
    branch: "master",
    stars: 0,
    forks: 0,
    issues: 0,
    license: "MIT",
    pushed: "2026-07-23 17:08 UTC",
  },
  {
    id: "06",
    name: "pathos",
    fullName: "maxkle1nz/pathos",
    field: "SESSION CONTINUITY",
    description:
      "A Codex skill and continuity protocol for long human and agent work.",
    href: "https://github.com/maxkle1nz/pathos",
    language: "CSS",
    branch: "main",
    stars: 1,
    forks: 0,
    issues: 0,
    license: "MIT",
    pushed: "2026-07-23 17:02 UTC",
  },
];

const proofMarks = [
  ["01", "SEAL", "Write the rule before seeing the result."],
  ["02", "SPIKE", "Build the smallest impossible proof."],
  ["03", "PROVE", "Invite the skeptic. Keep the receipts."],
  ["04", "SHIP RAW", "Status first. Evidence second."],
  ["05", "HAND OFF", "Leave enough truth for the next builder."],
];

function Wordmark() {
  return (
    <span className="wordmark" aria-label="DEViance.dev">
      DEV<span className="deviation">i</span>ANCE<small>.DEV</small>
    </span>
  );
}

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <header className="site-header">
        <a href="#top" className="brand-link">
          <Wordmark />
        </a>
        <p className="header-note">PUBLIC PROTOTYPE LAB · MAX KLE1NZ</p>
        <nav aria-label="Primary navigation">
          <a href="#proof">Proof</a>
          <a href="#method">Method</a>
          <a href="#position">Position</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="content">
        <section className="hero" id="top">
          <Image
            className="hero-image"
            src="/deviance-signal.png"
            alt="Obsidian synthetic figure wearing a sealed orange optical instrument"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-tone" aria-hidden="true" />

          <aside className="source-docket source-docket--hero">
            <strong>CAPTURED</strong>
            <dl>
              <div>
                <dt>SCHEMA</dt>
                <dd>deviance-public-repository-sample-v1</dd>
              </div>
              <div>
                <dt>SOURCE</dt>
                <dd>github.com/maxkle1nz</dd>
              </div>
              <div>
                <dt>CAPTURED_AT</dt>
                <dd>2026-07-29 · 01:00 UTC</dd>
              </div>
            </dl>
          </aside>

          <div className="hero-copy">
            <p className="kicker">DEViance Intelligence / Est. 2016</p>
            <h1>
              THE DEVIATION
              <br />
              <span>IS THE METHOD.</span>
            </h1>
            <p className="hero-statement">
              I build the core, prove it under pressure, and launch it raw.
              Public systems for agents, compilers, and people working beyond
              the default.
            </p>
            <div className="hero-actions">
              <a className="action action--primary" href="#proof">
                Read the evidence <span>↘</span>
              </a>
              <a className="action action--quiet" href="https://github.com/maxkle1nz">
                GitHub profile <span>↗</span>
              </a>
            </div>
          </div>

          <p className="hero-label">INTELLIGENCE BEYOND THE EDGE</p>
        </section>

        <section className="position position--opening" id="position">
          <div className="section-tag">
            <span>00</span>
            <span>POSITION / NOT A PITCH</span>
          </div>
          <div className="position-grid">
            <h2>
              NOT A STUDIO.
              <br />
              <span>A TEST SITE FOR</span>
              <br />
              THE NEXT
              <br />
              OPERATING MODEL.
            </h2>
            <div className="position-copy">
              <p className="position-lead">
                I make the first version that proves an idea deserves to exist.
              </p>
              <p>
                QuakeWorld opened C for me in 1999. Music later taught me
                compression, headroom, and what survives the master. Today I
                apply the same discipline to human + agent systems.
              </p>
              <p>
                Some systems ship. Some die on the bench. Every public repo
                should make the difference visible.
              </p>
              <div className="evidence-note">
                <strong>THE REPOS ARE THE PITCH.</strong>
                <span>NO DECK REQUIRED.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="proof-sheet" id="proof">
          <div className="proof-intro">
            <aside className="source-docket source-docket--proof">
              <strong>SNAPSHOT / NOT LIVE</strong>
              <dl>
                <div>
                  <dt>SOURCE</dt>
                  <dd>GitHub REST API</dd>
                </div>
                <div>
                  <dt>ORDER</dt>
                  <dd>As captured — no ranking</dd>
                </div>
                <div>
                  <dt>LIMIT</dt>
                  <dd>Values may have changed after capture</dd>
                </div>
              </dl>
            </aside>
            <div className="proof-heading">
              <p className="kicker kicker--blue">01 / SELECTED PUBLIC WORK</p>
              <h2>WORK THAT CAN ARGUE BACK.</h2>
              <p>
                Six public lines of inquiry. The evidence and destination are
                part of every object; provenance is never hidden behind a card.
              </p>
            </div>
          </div>

          <div className="repository-list">
            {repositories.map((repository) => (
              <article className="repository-row" key={repository.name}>
                <span className="repo-node" aria-hidden="true">
                  {repository.id}
                </span>
                <div className="repo-plate">
                  <div className="repo-title">
                    <p>{repository.field}</p>
                    <h3>{repository.name}</h3>
                    <span>{repository.fullName}</span>
                  </div>
                  <p className="repo-description">{repository.description}</p>
                  <dl className="repo-facts">
                    <div>
                      <dt>LANGUAGE</dt>
                      <dd>{repository.language}</dd>
                    </div>
                    <div>
                      <dt>BRANCH</dt>
                      <dd>{repository.branch}</dd>
                    </div>
                    <div>
                      <dt>STARS</dt>
                      <dd>{repository.stars}</dd>
                    </div>
                    <div>
                      <dt>FORKS</dt>
                      <dd>{repository.forks}</dd>
                    </div>
                    <div>
                      <dt>ISSUES</dt>
                      <dd>{repository.issues}</dd>
                    </div>
                    <div>
                      <dt>LICENSE</dt>
                      <dd>{repository.license}</dd>
                    </div>
                  </dl>
                  <p className="repo-pushed">PUSHED {repository.pushed}</p>
                  <a className="continuation-cut" href={repository.href}>
                    OPEN <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <a className="all-repos" href="https://github.com/maxkle1nz?tab=repositories">
            ALL PUBLIC REPOSITORIES <span>↗</span>
          </a>
        </section>

        <section className="method" id="method">
          <div className="section-tag section-tag--dark">
            <span>02</span>
            <span>METHOD / FIVE PRESSURE MARKS</span>
          </div>
          <div className="method-heading">
            <h2>
              GREEN WITHOUT
              <br />
              <span>PROOF</span> IS NOISE.
            </h2>
            <p>
              An operating sequence, not a decorative timeline. Each mark
              advances only when the previous one leaves evidence.
            </p>
          </div>
          <ol className="proof-ruler">
            {proofMarks.map(([id, title, description]) => (
              <li className="proof-mark" key={id}>
                <span>{id}</span>
                <strong>{title}</strong>
                <p>{description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="principles">
          <div className="section-tag">
            <span>03</span>
            <span>THREE CONDITIONS / WHAT SURVIVES</span>
          </div>
          <div className="principle-grid">
            <article>
              <span>01 / SIGNAL</span>
              <h3>THE IDEA MUST SURVIVE THE MACHINE.</h3>
              <p>
                The medium changes. The test does not: connect the parts until
                the idea survives compression.
              </p>
            </article>
            <article>
              <span>02 / PROOF</span>
              <h3>A CLAIM WITHOUT A RECEIPT IS NOISE.</h3>
              <p>
                Documented, implemented, tested, runtime-proven, unproven, and
                blocked are different states.
              </p>
            </article>
            <article>
              <span>03 / EDGE</span>
              <h3>THE IMPOSSIBLE IS JUST AN OPINION.</h3>
              <p>
                Build the first version that changes the question. Then hand it
                to someone capable of carrying it further.
              </p>
            </article>
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="kicker">OPEN HANDOFF / BUILDERS WANTED</p>
          <h2>
            I BUILD THE FIRST
            <br />
            IMPOSSIBLE VERSION.
            <br />
            <span>YOU MAKE IT SURVIVE.</span>
          </h2>
          <p>
            DEViance moves at research speed. If you want to take ownership of
            unfinished systems and continue the work, open the source or write
            directly.
          </p>
          <div className="contact-actions">
            <a href="mailto:kleinz@cosmophonix.com">
              kleinz@cosmophonix.com <span>↗</span>
            </a>
            <a href="https://github.com/maxkle1nz">
              Enter the public lab <span>↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <Wordmark />
        <p>INDEPENDENT AI SYSTEMS LAB · 2016—2026</p>
        <nav aria-label="Social links">
          <a href="https://github.com/maxkle1nz">GITHUB ↗</a>
          <a href="https://x.com/kle1nzzz">X ↗</a>
          <a href="https://instagram.com/maxkle1nz">INSTAGRAM ↗</a>
        </nav>
      </footer>
    </div>
  );
}
