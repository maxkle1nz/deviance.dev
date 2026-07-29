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
  ["01", "FIND SIGNAL", "See what everyone else is still too early to see."],
  ["02", "MAKE IT REAL", "Turn instinct into the smallest working proof."],
  ["03", "BREAK IT", "Put the idea under enough pressure to deserve belief."],
  ["04", "SHIP RAW", "Let the work speak before the polish."],
  ["05", "FIND THE NEXT", "Hand it to someone who can take it past you."],
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
            <p className="kicker">DEViance Intelligence / A HOME FOR THE OUTLIERS</p>
            <h1>
              BUILT
              <br />
              <span>DIFFERENT?</span>
              <br />
              GOOD.
            </h1>
            <p className="hero-statement">
              DEViance is looking for the next generation of developers,
              vibecoders, and researchers. If the normal path never fit you,
              this is where you belong.
            </p>
            <div className="hero-actions">
              <a className="action action--primary" href="#proof">
                See the work <span>↘</span>
              </a>
              <a className="action action--quiet" href="#contact">
                Come build with us <span>↗</span>
              </a>
            </div>
          </div>

          <p className="hero-label">INTELLIGENCE BEYOND THE EDGE</p>
        </section>

        <section className="position position--opening" id="position">
          <div className="section-tag">
            <span>00</span>
            <span>POSITION / THE ENTRY REQUIREMENT</span>
          </div>
          <div className="position-grid">
            <h2>
              THE FUTURE
              <br />
              BELONGS TO
              <br />
              <span>THE MISFITS</span>
              <br />
              WHO CAN BUILD IT.
            </h2>
            <div className="position-copy">
              <p className="position-lead">
                We do not care what your title is. We care what you can make
                real.
              </p>
              <p>
                DEViance is a home for people who move between code, research,
                design, and instinct without asking permission.
              </p>
              <p>
                You bring the strange idea. We bring the pressure, the proof,
                and the people capable of carrying it further.
              </p>
              <div className="evidence-note">
                <strong>DIFFERENT IS NOT A BRAND POSITION.</strong>
                <span>IT IS THE ENTRY REQUIREMENT.</span>
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
              <p className="kicker kicker--blue">01 / THE WORK IS OPEN</p>
              <h2>THIS IS WHAT WE BUILD.</h2>
              <p>
                No polished case studies. Open the repos. Read the code. Find
                the signal.
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
            <span>METHOD / HOW INSTINCT BECOMES REAL</span>
          </div>
          <div className="method-heading">
            <h2>
              WE DO NOT WAIT
              <br />
              TO BE <span>QUALIFIED.</span>
            </h2>
            <p>
              We find the signal, make it real, break it, ship it, and hand it
              to the next dangerous mind.
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
            <span>WHO BELONGS HERE / THREE KINDS OF SIGNAL</span>
          </div>
          <div className="principle-grid">
            <article>
              <span>01 / DEVELOPERS</span>
              <h3>YOU SEE THE SYSTEM.</h3>
              <p>
                You turn complex ideas into infrastructure people can actually
                use — and you care whether it survives.
              </p>
            </article>
            <article>
              <span>02 / VIBECODERS</span>
              <h3>YOU TURN INTENT INTO MOMENTUM.</h3>
              <p>
                You move at the speed of taste. You can feel the product before
                the category has learned its name.
              </p>
            </article>
            <article>
              <span>03 / RESEARCHERS</span>
              <h3>YOU ASK THE QUESTION THAT CHANGES THE MAP.</h3>
              <p>
                You do not decorate certainty. You go where the evidence is
                strange, incomplete, and worth following.
              </p>
            </article>
          </div>
        </section>

        <section className="contact" id="contact">
          <p className="kicker">DEViance IS RECRUITING</p>
          <h2>
            IF YOU ARE BUILT
            <br />
            <span>DIFFERENT,</span>
            <br />
            YOU BELONG HERE.
          </h2>
          <p>
            We are looking for the next generation of developers, vibecoders,
            and researchers. Show us the impossible thing you made real — or
            the question you cannot stop following.
          </p>
          <div className="contact-actions">
            <a href="mailto:kleinz@cosmophonix.com">
              Show us what you built <span>↗</span>
            </a>
            <a href="https://github.com/maxkle1nz">
              Enter the GitHub lab <span>↗</span>
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
