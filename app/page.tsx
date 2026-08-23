import Navigation from "@/components/Navigation";
import ScrollEffects from "@/components/ScrollEffects";
import ContactForm from "@/components/ContactForm";

const TECH_STRIP = [
  { slug: "javascript", color: "F7DF1E", name: "JavaScript" },
  { slug: "typescript", color: "3178C6", name: "TypeScript" },
  { slug: "react", color: "61DAFB", name: "React" },
  { slug: "nodedotjs", color: "6DA55F", name: "Node.js" },
  { slug: "express", color: "ffffff", name: "Express" },
  { slug: "mongodb", color: "47A248", name: "MongoDB" },
  { slug: "python", color: "3776AB", name: "Python" },
  { slug: "flutter", color: "02569B", name: "Flutter" },
  { slug: "git", color: "F05032", name: "Git" },
  { slug: "vercel", color: "e2e8f0", name: "Vercel" },
  { slug: "html5", color: "E34F26", name: "HTML5" },
  { slug: "css", color: "264de4", name: "CSS3" },
  { slug: "docker", color: "2496ED", name: "Docker" },
  { slug: "postman", color: "FF6C37", name: "Postman" },
];

const EXPERIENCE_START = new Date(2025, 1, 1); // Feb 2025

function getExperienceDuration(now: Date) {
  let years = now.getFullYear() - EXPERIENCE_START.getFullYear();
  let months = now.getMonth() - EXPERIENCE_START.getMonth();
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return { years, months };
}

function TechStripRow({ hidden }: { hidden?: boolean }) {
  return (
    <div className="tech-strip-inner" aria-hidden={hidden ? "true" : undefined}>
      {TECH_STRIP.map((t) => (
        <span className="tech-item" key={t.slug}>
          <img src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`} alt={hidden ? "" : t.name} width={22} height={22} />
          <span>{t.name}</span>
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  const { years: expYears, months: expMonths } = getExperienceDuration(new Date());
  const experienceUnitText = expMonths === 0 ? "yrs" : `yr ${expMonths}mo`;
  const experienceProse =
    expMonths === 0
      ? `${expYears} year${expYears === 1 ? "" : "s"}`
      : `${expYears} yr ${expMonths} mo`;

  return (
    <>
      <Navigation />
      <ScrollEffects />

      <main id="main">
        {/* HERO */}
        <section id="hero-section" aria-label="Introduction">
          <div className="hero-bg" aria-hidden="true" />
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-badges">
                <span className="badge badge-available">
                  <span className="pulse-dot" aria-hidden="true" />
                  Available for Work
                </span>
                <span className="badge badge-certified">
                  <i className="fas fa-robot" aria-hidden="true" />
                  Anthropic Certified AI Developer
                </span>
              </div>

              <h1>
                <span className="hero-name">
                  Umar <span className="hero-name-accent">Kamara</span>
                </span>
              </h1>

              <p className="hero-role">Software Developer & AI Integration Engineer</p>

              <p className="hero-location">
                <i className="fas fa-location-dot" aria-hidden="true" />
                Freetown, Sierra Leone
              </p>

              <p className="hero-bio">
                I build web applications and AI-powered tools using React, Node.js, and the Anthropic SDK. Self-taught,
                based in Sierra Leone, and shipping to production since early 2025.
              </p>

              <div className="hero-actions">
                <a href="#contact-section" className="btn btn-primary">
                  <i className="fas fa-paper-plane" aria-hidden="true" /> Let&apos;s Talk
                </a>
                <a href="#projects-section" className="btn btn-outline">
                  <i className="fas fa-code-branch" aria-hidden="true" /> View Projects
                </a>
              </div>

              <ul className="hero-social" aria-label="Social profiles" role="list">
                <li>
                  <a href="https://github.com/umak21?tab=repositories&type=public" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <i className="fab fa-github" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/umar-kamara-3aa528384"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/umar21_k" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
                    <i className="fab fa-twitter" aria-hidden="true" />
                  </a>
                </li>
              </ul>

              <div className="tech-chips" aria-label="Technology stack">
                <span className="chip">
                  <i className="fab fa-react" aria-hidden="true" /> React
                </span>
                <span className="chip">
                  <i className="fab fa-node-js" aria-hidden="true" /> Node.js
                </span>
                <span className="chip">
                  <i className="fas fa-code" aria-hidden="true" /> TypeScript
                </span>
                <span className="chip">
                  <i className="fas fa-server" aria-hidden="true" /> Express
                </span>
                <span className="chip">
                  <i className="fas fa-robot" aria-hidden="true" /> Claude API
                </span>
                <span className="chip">
                  <i className="fas fa-shield-halved" aria-hidden="true" /> Blue Team
                </span>
                <span className="chip">
                  <i className="fab fa-python" aria-hidden="true" /> Python
                </span>
                <span className="chip">
                  <i className="fas fa-database" aria-hidden="true" /> MongoDB
                </span>
                <span className="chip">
                  <i className="fab fa-git-alt" aria-hidden="true" /> Git
                </span>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="avatar-glow" />
              <div className="avatar-ring" />
              <img src="/static/Avatar.jpg" alt="Umar Kamara" className="hero-avatar" width={360} height={360} />
            </div>
          </div>

          <a href="#stats-section" className="hero-scroll" aria-label="Scroll down">
            <i className="fas fa-chevron-down" aria-hidden="true" />
          </a>
        </section>

        {/* STATS BAR */}
        <section id="stats-section" aria-label="Key statistics">
          <div className="stats-inner">
            <div className="stat-item" data-animate="fade-up">
              <strong className="stat-number" data-count={10}>
                0
              </strong>
              <span className="stat-plus">+</span>
              <p>
                Technologies
                <br />
                in Daily Use
              </p>
            </div>
            <div className="stat-divider" aria-hidden="true" />
            <div className="stat-item" data-animate="fade-up" data-delay={100}>
              <strong className="stat-number" data-count={7}>
                0
              </strong>
              <span className="stat-plus" />
              <p>
                Professional
                <br />
                Certifications
              </p>
            </div>
            <div className="stat-divider" aria-hidden="true" />
            <div className="stat-item" data-animate="fade-up" data-delay={200}>
              <strong className="stat-number" data-count={expYears}>
                0
              </strong>
              <span className="stat-plus stat-unit-text">{experienceUnitText}</span>
              <p>
                Development
                <br />
                Experience
              </p>
            </div>
            <div className="stat-divider" aria-hidden="true" />
            <div className="stat-item" data-animate="fade-up" data-delay={300}>
              <strong className="stat-number" data-count={6}>
                0
              </strong>
              <span className="stat-plus" />
              <p>
                Service
                <br />
                Areas
              </p>
            </div>
          </div>
        </section>

        {/* TECH STACK STRIP */}
        <div className="tech-strip" aria-label="Technologies I work with">
          <div className="tech-strip-fade tech-strip-fade-left" aria-hidden="true" />
          <div className="tech-strip-fade tech-strip-fade-right" aria-hidden="true" />
          <div className="tech-strip-track" aria-hidden="true">
            <TechStripRow />
            <TechStripRow hidden />
          </div>
        </div>

        {/* ABOUT */}
        <section id="about-section" className="section-light" aria-labelledby="about-heading">
          <div className="section-container">
            <div className="about-grid">
              <div className="about-image-col" data-animate="fade-right">
                <div className="about-img-frame">
                  <img src="/static/Avatar.jpg" alt="Umar Kamara" loading="lazy" width={440} height={520} />
                </div>
                <div className="about-socials">
                  <a href="https://github.com/umak21?tab=repositories&type=public" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <i className="fab fa-github" aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/umar-kamara-3aa528384"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="about-text-col" data-animate="fade-left">
                <p className="section-eyebrow">Who I Am</p>
                <h2 id="about-heading">About Me</h2>

                <p className="about-lead">
                  I am a self-taught full-stack developer and current BSc Electrical and Electronic Engineering
                  student based in Freetown, Sierra Leone. I started from scratch in early 2025 and have been
                  shipping real applications ever since.
                </p>

                <p className="about-body">
                  My day-to-day work is building web applications and integrating AI into products using React,
                  Node.js, and the Anthropic SDK. Along the way I picked up Anthropic AI engineering certifications
                  and a Blue Team Security certification from Centri. I am looking for remote engineering roles where I can
                  do real work from day one.
                </p>

                <dl className="about-info-grid">
                  <div className="info-item">
                    <dt>
                      <i className="fas fa-graduation-cap" aria-hidden="true" /> Education
                    </dt>
                    <dd>
                      BSc Electrical and Electronic Engineering <em>(In Progress)</em>
                    </dd>
                  </div>
                  <div className="info-item">
                    <dt>
                      <i className="fas fa-map-marker-alt" aria-hidden="true" /> Location
                    </dt>
                    <dd>Freetown, Sierra Leone</dd>
                  </div>
                  <div className="info-item">
                    <dt>
                      <i className="fas fa-envelope" aria-hidden="true" /> Email
                    </dt>
                    <dd>
                      <a href="mailto:umar21kamara@gmail.com">umar21kamara@gmail.com</a>
                    </dd>
                  </div>
                  <div className="info-item status-open">
                    <dt>
                      <i className="fas fa-circle-check" aria-hidden="true" /> Status
                    </dt>
                    <dd>Open for Global Opportunities</dd>
                  </div>
                </dl>

                <div className="about-skills-preview">
                  <p className="skills-label">Core Expertise</p>
                  <div className="skill-tags">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>REST APIs</span>
                    <span>Claude API</span>
                    <span>Blue Team Security</span>
                    <span>Python</span>
                    <span>MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* JOURNEY / TIMELINE */}
        <section id="journey-section" className="section-dark" aria-labelledby="journey-heading">
          <div className="section-container">
            <p className="section-eyebrow light">My Path</p>
            <h2 id="journey-heading" className="light">
              Professional Journey
            </h2>
            <p className="section-sub light">{experienceProse} of self-directed learning and real-world shipping</p>

            <div className="timeline" data-animate="fade-up">
              <div className="timeline-line" aria-hidden="true" />

              <article className="timeline-item">
                <div className="tl-year">Feb 2025</div>
                <div className="tl-dot" aria-hidden="true" />
                <div className="tl-card">
                  <h3>First Production Projects</h3>
                  <p>
                    Started building and shipping real applications from scratch. Learned React, Node.js, Express,
                    and MongoDB by building actual projects rather than tutorials, deployed them to Vercel, and
                    delivered the first client work including news platforms and portfolio sites.
                  </p>
                  <div className="tl-tags">
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>React</span>
                    <span>MongoDB</span>
                    <span>Vercel</span>
                  </div>
                </div>
              </article>

              <article className="timeline-item">
                <div className="tl-year">Mid 2025</div>
                <div className="tl-dot" aria-hidden="true" />
                <div className="tl-card">
                  <h3>AI and Security Certifications</h3>
                  <p>
                    Earned Anthropic developer certifications covering the Claude API, Model Context Protocol, and
                    agent architecture. Completed the Blue Team Security certification from Centri. Added Python
                    and Flutter to the stack.
                  </p>
                  <div className="tl-tags">
                    <span>Claude API</span>
                    <span>MCP</span>
                    <span>Blue Team</span>
                    <span>Python</span>
                    <span>Flutter</span>
                  </div>
                </div>
              </article>

              <article className="timeline-item">
                <div className="tl-year">Now</div>
                <div className="tl-dot tl-dot-active" aria-hidden="true" />
                <div className="tl-card tl-card-active">
                  <h3>Open to Global Opportunities</h3>
                  <p>
                    Actively building AI-integrated applications and applying security-first development practices. Available for full-time
                    roles, freelance projects, and collaborative ventures worldwide.
                  </p>
                  <div className="tl-tags">
                    <span className="tag-active">Available for Work</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* EXPERIENCE & SKILLS */}
        <section id="experience-section" className="section-light" aria-labelledby="experience-heading">
          <div className="section-container">
            <p className="section-eyebrow">Capabilities</p>
            <h2 id="experience-heading">Experience &amp; Skills</h2>
            <p className="section-sub">Eight areas of hands-on professional expertise</p>

            <div className="exp-grid">
              <article className="exp-card" data-animate="fade-up">
                <div className="exp-icon-wrap">
                  <i className="fas fa-globe" aria-hidden="true" />
                </div>
                <h3>Web Development</h3>
                <ul>
                  <li>Responsive, accessible interfaces</li>
                  <li>Next.js and React with hooks and context</li>
                  <li>HTML5, CSS3, Tailwind CSS</li>
                </ul>
              </article>
              <article className="exp-card" data-animate="fade-up" data-delay={50}>
                <div className="exp-icon-wrap">
                  <i className="fas fa-server" aria-hidden="true" />
                </div>
                <h3>Backend Engineering</h3>
                <ul>
                  <li>RESTful APIs with Node.js and Express</li>
                  <li>Supabase and JWT-based authentication</li>
                  <li>Serverless deployment on Vercel</li>
                </ul>
              </article>
              <article className="exp-card" data-animate="fade-up" data-delay={100}>
                <div className="exp-icon-wrap exp-icon-ai">
                  <i className="fas fa-robot" aria-hidden="true" />
                </div>
                <h3>
                  AI Integration <span className="exp-badge">Certified</span>
                </h3>
                <ul>
                  <li>Claude API and Anthropic SDK</li>
                  <li>Model Context Protocol (MCP)</li>
                  <li>AI agent architecture</li>
                </ul>
              </article>
              <article className="exp-card" data-animate="fade-up" data-delay={150}>
                <div className="exp-icon-wrap exp-icon-chain">
                  <i className="fas fa-shield-halved" aria-hidden="true" />
                </div>
                <h3>
                  Blue Team Security <span className="exp-badge">Certified</span>
                </h3>
                <ul>
                  <li>Threat detection and incident response</li>
                  <li>Network defence and monitoring</li>
                  <li>Security operations fundamentals</li>
                </ul>
              </article>
              <article className="exp-card" data-animate="fade-up" data-delay={200}>
                <div className="exp-icon-wrap">
                  <i className="fas fa-mobile-alt" aria-hidden="true" />
                </div>
                <h3>Mobile Development</h3>
                <ul>
                  <li>Flutter cross-platform apps</li>
                  <li>Dart language fundamentals</li>
                  <li>UI layout and navigation patterns</li>
                </ul>
              </article>
              <article className="exp-card" data-animate="fade-up" data-delay={250}>
                <div className="exp-icon-wrap">
                  <i className="fas fa-database" aria-hidden="true" />
                </div>
                <h3>Database Engineering</h3>
                <ul>
                  <li>MongoDB and PostgreSQL (Supabase)</li>
                  <li>Schema design and indexing</li>
                  <li>Query optimisation</li>
                </ul>
              </article>
              <article className="exp-card" data-animate="fade-up" data-delay={300}>
                <div className="exp-icon-wrap">
                  <i className="fas fa-chart-bar" aria-hidden="true" />
                </div>
                <h3>Data and Scripting</h3>
                <ul>
                  <li>Python for scripting and data work</li>
                  <li>Pandas and NumPy for analysis</li>
                  <li>Jupyter notebooks for exploration</li>
                </ul>
              </article>
              <article className="exp-card" data-animate="fade-up" data-delay={350}>
                <div className="exp-icon-wrap">
                  <i className="fas fa-terminal" aria-hidden="true" />
                </div>
                <h3>Tooling and Workflow</h3>
                <ul>
                  <li>Git version control and GitHub</li>
                  <li>Vercel deployments and CI</li>
                  <li>Postman for API testing</li>
                </ul>
              </article>
            </div>

            <div className="skills-panel" data-animate="fade-up">
              <h3>Technical Stack</h3>
              <div className="stack-groups">
                <div className="stack-group">
                  <p className="stack-group-label">Used in production projects</p>
                  <div className="skill-tags">
                    <span>Next.js</span>
                    <span>React</span>
                    <span>TypeScript</span>
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>Tailwind CSS</span>
                    <span>Supabase</span>
                    <span>MongoDB</span>
                    <span>WordPress</span>
                    <span>Vercel</span>
                    <span>Git</span>
                  </div>
                </div>
                <div className="stack-group">
                  <p className="stack-group-label">Integrated in real projects</p>
                  <div className="skill-tags">
                    <span>Claude API</span>
                    <span>Anthropic SDK</span>
                    <span>MCP</span>
                    <span>Blue Team Security</span>
                    <span>Clerk</span>
                    <span>Drizzle ORM</span>
                    <span>Python</span>
                  </div>
                </div>
                <div className="stack-group">
                  <p className="stack-group-label">Learning and building with</p>
                  <div className="skill-tags">
                    <span>Flutter</span>
                    <span>Docker</span>
                    <span>PostgreSQL</span>
                    <span>Redis</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects-section" className="section-dark" aria-labelledby="projects-heading">
          <div className="section-container">
            <p className="section-eyebrow light">My Work</p>
            <h2 id="projects-heading" className="light">Projects</h2>
            <p className="section-sub light">Real applications built and shipped across AI, web, and engineering</p>

            <div className="projects-grid" data-animate="fade-up">

              {/* MakitIQ — featured */}
              <article className="project-card project-featured">
                <div className="project-gfx project-gfx-3">
                  <i className="fas fa-brain" aria-hidden="true" />
                </div>
                <div className="project-body">
                  <div className="project-header">
                    <span className="project-tag project-tag-ai">AI · SaaS</span>
                    <div className="project-links">
                      <a href="https://github.com/umak21?tab=repositories&type=public" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fab fa-github" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                  <h3>MakitIQ</h3>
                  <p>
                    AI-powered inventory management SaaS for businesses. Integrates with third-party POS systems,
                    supplier APIs, payment gateways, and notification services — giving operators real-time stock
                    intelligence and automated reorder workflows.
                  </p>
                  <div className="project-stack">
                    <span>Next.js</span>
                    <span>Node.js</span>
                    <span>Claude API</span>
                    <span>MongoDB</span>
                    <span>REST APIs</span>
                    <span>Stripe</span>
                  </div>
                </div>
              </article>

              {/* ConnectSL */}
              <article className="project-card">
                <div className="project-gfx project-gfx-7">
                  <i className="fas fa-tower-broadcast" aria-hidden="true" />
                </div>
                <div className="project-body">
                  <div className="project-header">
                    <span className="project-tag">Web · Academic</span>
                    <div className="project-links">
                      <a href="https://github.com/umak21?tab=repositories&type=public" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fab fa-github" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                  <h3>ConnectSL</h3>
                  <p>
                    Sierra Leone Telecommunications Intelligence Portal. A client-side web application built for
                    EENG 427 Web Design, presenting telecom data sourced from ITU, GSMA, and national regulatory
                    bodies in an interactive, accessible format.
                  </p>
                  <div className="project-stack">
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>JavaScript</span>
                    <span>Chart.js</span>
                  </div>
                </div>
              </article>

              {/* AC Phasor Analyser */}
              <article className="project-card">
                <div className="project-gfx project-gfx-5">
                  <i className="fas fa-wave-square" aria-hidden="true" />
                </div>
                <div className="project-body">
                  <div className="project-header">
                    <span className="project-tag">Tool · Python</span>
                    <div className="project-links">
                      <a href="https://github.com/umak21?tab=repositories&type=public" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fab fa-github" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                  <h3>AC Phasor Analyser</h3>
                  <p>
                    Python GUI tool for analysing AC circuits. Enter circuit parameters and instantly get phasor
                    diagrams, impedance calculations, phase angles, and voltage/current magnitudes — all in one
                    window.
                  </p>
                  <div className="project-stack">
                    <span>Python</span>
                    <span>NumPy</span>
                    <span>Matplotlib</span>
                    <span>Tkinter</span>
                  </div>
                </div>
              </article>

              {/* Health Management */}
              <article className="project-card">
                <div className="project-gfx project-gfx-4">
                  <i className="fas fa-heart-pulse" aria-hidden="true" />
                </div>
                <div className="project-body">
                  <div className="project-header">
                    <span className="project-tag">Web · Healthcare</span>
                    <div className="project-links">
                      <a href="https://github.com/umak21?tab=repositories&type=public" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fab fa-github" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                  <h3>Health Management</h3>
                  <p>
                    Integrated digital platform engineered for efficient storage, retrieval, and management of
                    diverse medical records and healthcare data — giving providers and patients a unified,
                    structured view of health information.
                  </p>
                  <div className="project-stack">
                    <span>Next.js</span>
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>MongoDB</span>
                    <span>REST APIs</span>
                  </div>
                </div>
              </article>

              {/* Portfolio */}
              <article className="project-card">
                <div className="project-gfx project-gfx-2">
                  <i className="fas fa-code" aria-hidden="true" />
                </div>
                <div className="project-body">
                  <div className="project-header">
                    <span className="project-tag">Web · Portfolio</span>
                    <div className="project-links">
                      <a href="https://github.com/umak21/Portfolio" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fab fa-github" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                  <h3>Portfolio</h3>
                  <p>
                    Personal developer portfolio built with Next.js 16 and React 19. Features animated sections,
                    a rate-limited contact form with Cloudflare Turnstile CAPTCHA, Resend email delivery, and
                    is fully deployed on Vercel.
                  </p>
                  <div className="project-stack">
                    <span>Next.js</span>
                    <span>React</span>
                    <span>TypeScript</span>
                    <span>Resend</span>
                    <span>Cloudflare</span>
                    <span>Vercel</span>
                  </div>
                </div>
              </article>

              {/* DefendSL */}
              <article className="project-card">
                <div className="project-gfx project-gfx-1">
                  <i className="fas fa-shield-halved" aria-hidden="true" />
                </div>
                <div className="project-body">
                  <div className="project-header">
                    <span className="project-tag project-tag-ai">Security · SaaS</span>
                    <div className="project-links">
                      <a href="https://github.com/umak21/DefendSL" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fab fa-github" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                  <h3>DefendSL</h3>
                  <p>
                    Gamified cybersecurity awareness and training platform designed to make security education
                    engaging and measurable. Features role-based access, interactive learning modules, timed
                    quizzes, a points and badge system, real-time leaderboard, and full admin management.
                  </p>
                  <div className="project-stack">
                    <span>Next.js</span>
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>Supabase</span>
                    <span>PostgreSQL</span>
                  </div>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* EDUCATION & CERTIFICATIONS */}
        <section id="education-section" className="section-dark" aria-labelledby="edu-heading">
          <div className="section-container">
            <p className="section-eyebrow light">Credentials</p>
            <h2 id="edu-heading" className="light">
              Education &amp; Certifications
            </h2>
            <p className="section-sub light">
              Formal credentials across AI engineering, cybersecurity, and Electrical and Electronic Engineering
            </p>

            <div className="edu-card" data-animate="fade-up">
              <div className="edu-icon">
                <i className="fas fa-university" aria-hidden="true" />
              </div>
              <div className="edu-body">
                <span className="edu-label">Current Study</span>
                <h3>BSc Electrical and Electronic Engineering</h3>
                <p>Covers electrical systems, electronics, signal processing, and engineering fundamentals. Running alongside active development work.</p>
              </div>
              <div className="edu-status">In Progress</div>
            </div>

            <div className="cert-group" data-animate="fade-up">
              <div className="cert-group-header">
                <div className="cert-issuer-logo cert-issuer-anthropic">
                  <i className="fas fa-robot" aria-hidden="true" />
                </div>
                <div>
                  <h3>Anthropic Developer Certifications</h3>
                  <p>Developer-focused certifications from Anthropic covering Claude API usage, agent architecture, and Model Context Protocol</p>
                </div>
              </div>
              <div className="certs-grid">
                <a href="https://verify.skilljar.com/c/u4oacbwrkkak" target="_blank" rel="noopener noreferrer" className="cert-card cert-card-link">
                  <i className="fas fa-certificate" aria-hidden="true" />
                  <span>Claude 101</span>
                  <i className="fas fa-arrow-up-right-from-square cert-ext" aria-hidden="true" />
                </a>
                <a href="https://verify.skilljar.com/c/34dnsmbdfhar" target="_blank" rel="noopener noreferrer" className="cert-card cert-card-link">
                  <i className="fas fa-certificate" aria-hidden="true" />
                  <span>Claude Code in Action</span>
                  <i className="fas fa-arrow-up-right-from-square cert-ext" aria-hidden="true" />
                </a>
                <a href="https://verify.skilljar.com/c/ebpgge7x6zob" target="_blank" rel="noopener noreferrer" className="cert-card cert-card-link">
                  <i className="fas fa-certificate" aria-hidden="true" />
                  <span>Building with the Claude API</span>
                  <i className="fas fa-arrow-up-right-from-square cert-ext" aria-hidden="true" />
                </a>
                <a href="https://verify.skilljar.com/c/to76qgvyha5o" target="_blank" rel="noopener noreferrer" className="cert-card cert-card-link">
                  <i className="fas fa-certificate" aria-hidden="true" />
                  <span>Introduction to Agent Skills</span>
                  <i className="fas fa-arrow-up-right-from-square cert-ext" aria-hidden="true" />
                </a>
                <a href="https://verify.skilljar.com/c/y5wg246rtbea" target="_blank" rel="noopener noreferrer" className="cert-card cert-card-link">
                  <i className="fas fa-certificate" aria-hidden="true" />
                  <span>Introduction to Model Context Protocol</span>
                  <i className="fas fa-arrow-up-right-from-square cert-ext" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="cert-group" data-animate="fade-up">
              <div className="cert-group-header">
                <div className="cert-issuer-logo cert-issuer-anthropic">
                  <i className="fas fa-robot" aria-hidden="true" />
                </div>
                <div>
                  <h3>Anthropic AI Literacy</h3>
                  <p>Foundational AI literacy certifications from Anthropic covering responsible use, frameworks, and practical applications</p>
                </div>
              </div>
              <div className="certs-grid">
                <a href="https://verify.skilljar.com/c/prak7u34sehi" target="_blank" rel="noopener noreferrer" className="cert-card cert-card-link">
                  <i className="fas fa-certificate" aria-hidden="true" />
                  <span>AI Fluency: Framework &amp; Foundations</span>
                  <i className="fas fa-arrow-up-right-from-square cert-ext" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="cert-group" data-animate="fade-up">
              <div className="cert-group-header">
                <div className="cert-issuer-logo cert-issuer-hedera">
                  <i className="fas fa-shield-halved" aria-hidden="true" />
                </div>
                <div>
                  <h3>Centri</h3>
                  <p>Professional cybersecurity certification covering defensive security operations and Blue Team practices</p>
                </div>
              </div>
              <div className="certs-grid">
                <a
                  href="https://elearning.centri.org/home/certificate/138922440"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-card cert-card-link"
                >
                  <i className="fas fa-certificate" aria-hidden="true" />
                  <span>Blue Team Security</span>
                  <i className="fas fa-arrow-up-right-from-square cert-ext" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BADGES */}
        <section className="trust-section section-light" aria-label="Verified credentials">
          <div className="section-container">
            <p className="section-eyebrow">Verified Credentials</p>
            <h2 className="trust-heading">Certified &amp; Recognised</h2>
            <p className="section-sub">Official certifications you can verify directly with the issuing organisation</p>
            <div className="trust-badges-grid" data-animate="fade-up">
              <div className="trust-badge">
                <div className="trust-badge-icon trust-badge-anthropic">
                  <img src="https://cdn.simpleicons.org/anthropic/ffffff" alt="Anthropic" width={32} height={32} />
                </div>
                <div className="trust-badge-body">
                  <span className="trust-badge-issuer">Anthropic</span>
                  <h3 className="trust-badge-title">AI Developer Certifications</h3>
                  <p className="trust-badge-detail">6 certifications &middot; Claude API, MCP, Agent Skills, AI Fluency</p>
                  <span className="trust-badge-verified">
                    <i className="fas fa-circle-check" aria-hidden="true" /> Verified
                  </span>
                  <a href="#education-section" className="trust-badge-link trust-badge-link-inline">
                    View all 6 <i className="fas fa-arrow-right" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="trust-badge">
                <div className="trust-badge-icon trust-badge-hedera">
                  <i className="fas fa-shield-halved" style={{fontSize: "32px"}} aria-hidden="true" />
                </div>
                <div className="trust-badge-body">
                  <span className="trust-badge-issuer">Centri</span>
                  <h3 className="trust-badge-title">Blue Team Security</h3>
                  <p className="trust-badge-detail">1 certification &middot; Defensive security operations</p>
                  <span className="trust-badge-verified">
                    <i className="fas fa-circle-check" aria-hidden="true" /> Verified
                  </span>
                  <a
                    href="https://elearning.centri.org/home/certificate/138922440"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="trust-badge-link trust-badge-link-inline"
                  >
                    View Certificate <i className="fas fa-arrow-up-right-from-square" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="trust-badge">
                <div className="trust-badge-icon trust-badge-github">
                  <img src="https://cdn.simpleicons.org/github/ffffff" alt="GitHub" width={32} height={32} />
                </div>
                <div className="trust-badge-body">
                  <span className="trust-badge-issuer">GitHub</span>
                  <h3 className="trust-badge-title">Open Source Contributor</h3>
                  <p className="trust-badge-detail">Public repositories &middot; Real-world production projects</p>
                  <a href="https://github.com/umak21?tab=repositories&type=public" target="_blank" rel="noopener noreferrer" className="trust-badge-link">
                    View Profile <i className="fas fa-arrow-up-right-from-square" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HIRE ME CTA */}
        <section id="hire-section" className="section-cta" aria-labelledby="hire-heading">
          <div className="cta-bg" aria-hidden="true" />
          <div className="cta-inner">
            <span className="cta-eyebrow">Open to remote work</span>
            <h2 id="hire-heading">
              Have a project or
              <br />
              <span className="cta-accent">a role to fill?</span>
            </h2>
            <p>
              I am available for full-time remote roles and freelance projects. If you need a full-stack web
              application, an AI integration, or a security-conscious build, reach out and let&apos;s talk through
              what you need.
            </p>
            <div className="cta-actions">
              <a href="#contact-section" className="btn btn-primary btn-lg">
                <i className="fas fa-paper-plane" aria-hidden="true" /> Discuss Your Project
              </a>
              <a href="#projects-section" className="btn btn-ghost btn-lg">
                <i className="fas fa-code-branch" aria-hidden="true" /> See My Work
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="section-dark" aria-labelledby="contact-heading">
          <div className="section-container">
            <p className="section-eyebrow">Get In Touch</p>
            <h2 id="contact-heading" className="light">
              Contact Me
            </h2>
            <p className="section-sub light">Have a project in mind? I&apos;d love to hear from you.</p>

            <div className="contact-layout">
              <div className="contact-form-col" data-animate="fade-right">
                <ContactForm />
              </div>

              <div className="contact-info-col" data-animate="fade-left">
                <div className="contact-card">
                  <h3>Let&apos;s Connect</h3>
                  <p>
                    Prefer direct contact? I&apos;m reachable across multiple channels and typically respond within a
                    business day.
                  </p>

                  <ul className="contact-methods" role="list">
                    <li>
                      <a href="mailto:umar21kamara@gmail.com" className="c-method">
                        <span className="c-icon">
                          <i className="fas fa-envelope" aria-hidden="true" />
                        </span>
                        <span>
                          <strong>Email</strong>
                          <em>umar21kamara@gmail.com</em>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://wa.me/23273899282" target="_blank" rel="noopener noreferrer" className="c-method">
                        <span className="c-icon">
                          <i className="fab fa-whatsapp" aria-hidden="true" />
                        </span>
                        <span>
                          <strong>WhatsApp</strong>
                          <em>+232 73 899 282</em>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://t.me/Skia_Dev_001" target="_blank" rel="noopener noreferrer" className="c-method">
                        <span className="c-icon">
                          <i className="fab fa-telegram" aria-hidden="true" />
                        </span>
                        <span>
                          <strong>Telegram</strong>
                          <em>@Skia_Dev_001</em>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="https://calendly.com/umar_kamara" target="_blank" rel="noopener noreferrer" className="c-method">
                        <span className="c-icon">
                          <i className="far fa-calendar-check" aria-hidden="true" />
                        </span>
                        <span>
                          <strong>Schedule a Call</strong>
                          <em>Book on Calendly</em>
                        </span>
                      </a>
                    </li>
                  </ul>

                  <div className="c-socials">
                    <a href="https://github.com/umak21?tab=repositories&type=public" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <i className="fab fa-github" aria-hidden="true" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/umar-kamara-3aa528384"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin" aria-hidden="true" />
                    </a>
                    <a href="https://x.com/umar21_k" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
                      <i className="fab fa-twitter" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <div className="footer-brand">
            <a href="#hero-section" className="footer-logo">
              Umar <span>Kamara</span>
            </a>
            <p>
              Full-stack developer and AI integration engineer
              <br />
              based in Sierra Leone, open for remote work.
            </p>
          </div>

          <div className="footer-links-group">
            <h4>Navigate</h4>
            <ul role="list">
              <li>
                <a href="#about-section">About</a>
              </li>
              <li>
                <a href="#experience-section">Experience</a>
              </li>
              <li>
                <a href="#projects-section">Projects</a>
              </li>
              <li>
                <a href="#education-section">Certifications</a>
              </li>
              <li>
                <a href="#contact-section">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Connect</h4>
            <ul role="list">
              <li>
                <a href="https://github.com/umak21?tab=repositories&type=public" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github" aria-hidden="true" /> GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/umar-kamara-3aa528384" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin" aria-hidden="true" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://x.com/umar21_k" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter" aria-hidden="true" /> Twitter / X
                </a>
              </li>
              <li>
                <a href="mailto:umar21kamara@gmail.com">
                  <i className="fas fa-envelope" aria-hidden="true" /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; <span id="footer-year" /> Umar Kamara. All rights reserved.
          </p>
          <p className="footer-tagline">Anthropic Certified &middot; Blue Team Certified &middot; Open for Work</p>
        </div>
      </footer>
    </>
  );
}
