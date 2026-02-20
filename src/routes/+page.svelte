<script>
  import Logo from '$lib/components/Logo.svelte';
  import { onMount } from 'svelte';

  let mounted = false;
  
  onMount(() => {
    mounted = true;
  });

  const experiences = [
    {
      company: 'ODT',
      period: 'May 2022 - Present',
      projects: [
        {
          name: 'TTB Project, Retail Lending Team, Common Apply Team',
          role: 'Frontend',
          description: 'Development Web Application (Loan, Credit card Feature) with React, Development Native Application (NTB Feature) with IOS Swift, Development Cross Platform (Customer360 feature) with Flutter',
          technologies: ['React', 'Swift (IOS)', 'Flutter']
        },
        {
          name: 'a-chieve social enterprise',
          role: 'Full Stack',
          description: 'Developing a Web Application to Support Career and Life Guidance for Thai Students, Developing a Tool and Report for Career Counselors to Assess Their Students, Developing a Tools and Report support Admin',
          technologies: ['Vue', 'Nuxt', 'Strapi', 'Go', 'GitLab CI/CD', 'Kubernetes', 'ArgoCD', 'Airflow', 'Supperset']
        }
      ]
    },
    {
      company: 'Hi-Q Food Products Co., Ltd.',
      period: 'Oct 2019 – May 2022',
      projects: [
        {
          name: 'Internal and Public Application',
          role: 'Senior Programmer & Technical Lead',
          description: 'Team management with Agile and daily meetups with Scrum. Development of authorization systems using sessions, cookies, and JWT. Development of SSR applications using SvelteKit and database with PostgreSQL, Prisma ORM. Implementation of authorization systems using Session Cookie Authentication, JWT Authentication, and Keycloak. On-premises infrastructure setup network configuration. Use Proxmox to Manage Instant of VM. Project deployment management using Docker Nginx. Some Projects Deployment on Kubernetes. Build and deploy automation using Jenkins or GitLab CI. Reverse proxy implementation using Nginx Proxy Manager and Manage DNS with PowerDNS.',
          technologies: ['SvelteKit', 'NestJS', 'PostgreSQL', 'Prisma', 'MongoDB', 'MS SQL', 'Docker', 'Nginx', 'Kubernetes', 'Jenkins', 'GitLab CI', 'Keycloak', 'Proxmox', 'PowerDNS'],
          keyProjects: [
            'Felina Canino Application: Developed by Svelte Frontend Framework use NestJS to Develop Backend, integrating with Navision API and storage data with MongoDB and MS SQL.',
            'Line Official Account (Point Reward System): Full-stack development using Svelte Implement with Line Liff Framework.',
            'HR Management Platform: Built an Express backend with MongoDB via Strapi V2.',
            'Mobile Survey Application: Created a Flutter-based solution with Firebase integration.',
            'Jobber Application: Optimized backend with Fastify using dual database architecture.'
          ]
        }
      ]
    },
    {
      company: 'Saraff Infotech Co., Ltd (site AIS)',
      period: 'Jul 2018 - Oct 2019',
      projects: [
        {
          name: 'AIS Project',
          role: 'Frontend',
          description: 'Develop web Application run on Kiosk, Develop API service',
          technologies: ['Angular 6', 'Redux', 'Bootstrap 4', 'HapiJS', 'NodeJS']
        }
      ]
    },
    {
      company: 'Nextwaver.NET',
      period: 'Jan 2018 - Apr 2018',
      projects: [
        {
          name: 'AIS Project',
          role: 'Frontend',
          description: 'Develop web application PHR Profile, Develop Text recognition for Save profile in the book Profile, Develop Deep learning for Training software, Manage Data using .Net Core',
          technologies: ['PHR', 'Python', 'C# .Net Core']
        }
      ]
    }
  ];

  const skills = {
    frontend: ['Vue', 'NuxtJs', 'Angular', 'React', 'Svelte', 'Quasar Framework', 'Flutter'],
    backend: ['Express', 'Fastify', 'NestJS', 'Strapi', 'Go (Go-gin)', 'Java', 'C#', 'SvelteKit'],
    database: ['MongoDB', 'Firebase', 'PostgreSQL', 'SQLite', 'MySQL'],
    mobile: ['Flutter', 'IOS (Swift)', 'Android (Java, Kotlin)', 'React Native'],
    devops: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'ArgoCD', 'Nginx', 'Apache', 'Kong', 'Cloudflare', 'PowerDNS'],
    other: ['Wails', 'Tauri', 'Jest', 'Vitest', 'Selenium', 'Cypress', 'Playwright', 'JMeter', 'K6', 'JWT', 'OAuth', 'Keycloak']
  };

  const education = {
    degree: 'B.S. Computer Science',
    university: 'UDON THANI RAJABHAT UNIVERSITY'
  };

  const contact = {
    address: '216 M.2 Ban Khok Niyom Wang Chompoo, Porncharoen Buengkan Thailand 38180',
    phone: '+6692-947-9535',
    email: 'nakarin.weerasak@gmail.com',
    birthday: 'July 18, 1995',
    nationality: 'Thai'
  };
</script>

<svelte:head>
  <title>Nakarin Weerasak | Full-Stack Developer with DevOps Experience</title>
</svelte:head>

<main>
  <!-- Header / Navigation -->
  <header class="header">
    <div class="container header-content">
      <a href="/" class="logo-link">
        <Logo size={50} />
        <span class="logo-text">NW</span>
      </a>
      <nav class="nav">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="hero" class="hero">
    <div class="hero-bg"></div>
    <div class="container hero-content">
      <div class="hero-text" class:mounted={mounted}>
        <h1 class="hero-title">
          <span class="gradient-text">Nakarin Weerasak</span>
        </h1>
        <p class="hero-subtitle">Full-Stack Developer with DevOps Experience</p>
        <div class="hero-cta">
          <a href="#contact" class="btn btn-primary">Get In Touch</a>
          <a href="#experience" class="btn btn-outline">View Work</a>
        </div>
      </div>
      <div class="hero-visual" class:mounted={mounted}>
        <Logo size={200} />
      </div>
    </div>
    <div class="scroll-indicator">
      <span>Scroll Down</span>
      <div class="scroll-arrow"></div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="section">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <div class="about-content">
        <div class="about-card">
          <p class="about-text">
            I'm a passionate Full-Stack Developer with extensive experience in modern web technologies 
            and DevOps practices. With expertise spanning from frontend frameworks like React, Vue, and Svelte 
            to backend technologies including Node.js, NestJS, and Go, I build scalable and performant applications.
          </p>
          <p class="about-text">
            My experience includes leading teams, designing system architectures, and implementing CI/CD pipelines. 
            I'm particularly interested in cloud infrastructure, containerization, and automation to deliver 
            robust solutions.
          </p>
        </div>
        <div class="stats-grid">
          <div class="stat-card">
            <span class="stat-number">8+</span>
            <span class="stat-label">Years Experience</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">15+</span>
            <span class="stat-label">Projects Completed</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">5+</span>
            <span class="stat-label">Technologies</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Experience Section -->
  <section id="experience" class="section">
    <div class="container">
      <h2 class="section-title">Work Experience</h2>
      <div class="timeline">
        {#each experiences as exp, i}
          <div class="timeline-item" style="animation-delay: {i * 0.2}s" class:mounted={mounted}>
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="exp-header">
                <h3 class="company-name">{exp.company}</h3>
                <span class="period">{exp.period}</span>
              </div>
              {#each exp.projects as project}
                <div class="project-card">
                  <h4 class="project-name">{project.name}</h4>
                  <span class="role-badge">{project.role}</span>
                  <p class="project-description">{project.description}</p>
                  {#if project.keyProjects}
                    <ul class="key-projects">
                      {#each project.keyProjects as keyProject}
                        <li>{keyProject}</li>
                      {/each}
                    </ul>
                  {/if}
                  <div class="tech-stack">
                    {#each project.technologies as tech}
                      <span class="tech-tag">{tech}</span>
                    {/each}
                  </div>
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section id="skills" class="section">
    <div class="container">
      <h2 class="section-title">Technical Expertise</h2>
      <div class="skills-grid">
        <div class="skill-category">
          <h3 class="skill-title">
            <span class="icon">🎨</span>
            Frontend
          </h3>
          <div class="skill-tags">
            {#each skills.frontend as skill}
              <span class="skill-tag">{skill}</span>
            {/each}
          </div>
        </div>
        <div class="skill-category">
          <h3 class="skill-title">
            <span class="icon">⚙️</span>
            Backend
          </h3>
          <div class="skill-tags">
            {#each skills.backend as skill}
              <span class="skill-tag">{skill}</span>
            {/each}
          </div>
        </div>
        <div class="skill-category">
          <h3 class="skill-title">
            <span class="icon">🗄️</span>
            Database
          </h3>
          <div class="skill-tags">
            {#each skills.database as skill}
              <span class="skill-tag">{skill}</span>
            {/each}
          </div>
        </div>
        <div class="skill-category">
          <h3 class="skill-title">
            <span class="icon">📱</span>
            Mobile
          </h3>
          <div class="skill-tags">
            {#each skills.mobile as skill}
              <span class="skill-tag">{skill}</span>
            {/each}
          </div>
        </div>
        <div class="skill-category">
          <h3 class="skill-title">
            <span class="icon">🚀</span>
            DevOps
          </h3>
          <div class="skill-tags">
            {#each skills.devops as skill}
              <span class="skill-tag">{skill}</span>
            {/each}
          </div>
        </div>
        <div class="skill-category">
          <h3 class="skill-title">
            <span class="icon">🔧</span>
            Other
          </h3>
          <div class="skill-tags">
            {#each skills.other as skill}
              <span class="skill-tag">{skill}</span>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Education Section -->
  <section id="education" class="section">
    <div class="container">
      <h2 class="section-title">Education</h2>
      <div class="education-card" class:mounted={mounted}>
        <div class="edu-icon">🎓</div>
        <div class="edu-content">
          <h3 class="degree">{education.degree}</h3>
          <p class="university">{education.university}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="section">
    <div class="container">
      <h2 class="section-title">Contact</h2>
      <div class="contact-grid">
        <a href="mailto:{contact.email}" class="contact-card">
          <div class="contact-icon">✉️</div>
          <span class="contact-label">Email</span>
          <span class="contact-value">{contact.email}</span>
        </a>
        <a href="tel:{contact.phone}" class="contact-card">
          <div class="contact-icon">📱</div>
          <span class="contact-label">Phone</span>
          <span class="contact-value">{contact.phone}</span>
        </a>
        <div class="contact-card">
          <div class="contact-icon">📍</div>
          <span class="contact-label">Location</span>
          <span class="contact-value">{contact.address}</span>
        </div>
        <div class="contact-card">
          <div class="contact-icon">🎂</div>
          <span class="contact-label">Birthday</span>
          <span class="contact-value">{contact.birthday}</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <Logo size={40} />
        <p class="footer-text">© 2024 Nakarin Weerasak. All rights reserved.</p>
        <div class="footer-links">
          <a href="mailto:{contact.email}">Email</a>
          <span class="divider">|</span>
          <span>Full-Stack Developer</span>
        </div>
      </div>
    </div>
  </footer>
</main>

<style>
  /* Header */
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(15, 23, 42, 0.9);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border);
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .logo-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
  }

  .logo-text {
    font-size: 1.5rem;
    font-weight: 800;
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .nav {
    display: flex;
    gap: 2rem;
  }

  .nav a {
    color: var(--text-secondary);
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;
  }

  .nav a::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient);
    transition: width 0.3s ease;
  }

  .nav a:hover {
    color: var(--text-primary);
  }

  .nav a:hover::after {
    width: 100%;
  }

  /* Hero */
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    padding-top: 80px;
  }

  .hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 50% 80%, rgba(6, 182, 212, 0.1) 0%, transparent 40%);
    z-index: -1;
  }

  .hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  .hero-text {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
  }

  .hero-text.mounted {
    opacity: 1;
    transform: translateY(0);
  }

  .hero-title {
    font-size: 4rem;
    margin-bottom: 1rem;
    line-height: 1.1;
  }

  .gradient-text {
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .hero-subtitle {
    font-size: 1.5rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
  }

  .hero-cta {
    display: flex;
    gap: 1rem;
  }

  .btn {
    padding: 0.875rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
  }

  .btn-primary {
    background: var(--gradient);
    color: white;
    border: none;
    box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(59, 130, 246, 0.5);
  }

  .btn-outline {
    background: transparent;
    color: var(--text-primary);
    border: 2px solid var(--border);
  }

  .btn-outline:hover {
    border-color: var(--primary);
    background: rgba(59, 130, 246, 0.1);
  }

  .hero-visual {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.8s ease;
    transition-delay: 0.2s;
  }

  .hero-visual.mounted {
    opacity: 1;
    transform: scale(1);
  }

  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-muted);
    font-size: 0.875rem;
  }

  .scroll-arrow {
    width: 20px;
    height: 30px;
    border: 2px solid var(--text-muted);
    border-radius: 10px;
    position: relative;
  }

  .scroll-arrow::after {
    content: '';
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 8px;
    background: var(--primary);
    border-radius: 2px;
    animation: scrollBounce 1.5s ease-in-out infinite;
  }

  @keyframes scrollBounce {
    0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
    50% { transform: translateX(-50%) translateY(10px); opacity: 0.5; }
  }

  /* Sections */
  .section {
    padding: 6rem 0;
  }

  .section-title {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    position: relative;
    display: inline-block;
  }

  .section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: var(--gradient);
    border-radius: 2px;
  }

  /* About */
  .about-content {
    display: grid;
    gap: 2rem;
  }

  .about-card {
    background: var(--bg-card);
    border-radius: 16px;
    padding: 2rem;
    border: 1px solid var(--border);
  }

  .about-text {
    color: var(--text-secondary);
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  .about-text:last-child {
    margin-bottom: 0;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  .stat-card {
    background: var(--bg-card);
    border-radius: 16px;
    padding: 2rem;
    text-align: center;
    border: 1px solid var(--border);
    transition: all 0.3s ease;
  }

  .stat-card:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
    box-shadow: 0 10px 40px rgba(59, 130, 246, 0.2);
  }

  .stat-number {
    display: block;
    font-size: 3rem;
    font-weight: 800;
    background: var(--gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .stat-label {
    color: var(--text-muted);
    font-size: 0.875rem;
  }

  /* Experience Timeline */
  .timeline {
    position: relative;
    padding-left: 30px;
  }

  .timeline::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, var(--primary), var(--secondary), var(--accent));
  }

  .timeline-item {
    position: relative;
    margin-bottom: 2rem;
    opacity: 0;
    transform: translateX(30px);
    transition: all 0.6s ease;
  }

  .timeline-item.mounted {
    opacity: 1;
    transform: translateX(0);
  }

  .timeline-marker {
    position: absolute;
    left: -36px;
    top: 0;
    width: 14px;
    height: 14px;
    background: var(--primary);
    border-radius: 50%;
    border: 3px solid var(--bg-dark);
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
  }

  .timeline-content {
    background: var(--bg-card);
    border-radius: 16px;
    padding: 2rem;
    border: 1px solid var(--border);
  }

  .exp-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .company-name {
    font-size: 1.5rem;
    color: var(--text-primary);
  }

  .period {
    color: var(--primary);
    font-weight: 600;
  }

  .project-card {
    background: rgba(15, 23, 42, 0.5);
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 1rem;
    border: 1px solid var(--border);
  }

  .project-card:last-child {
    margin-bottom: 0;
  }

  .project-name {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
  }

  .role-badge {
    display: inline-block;
    background: var(--gradient);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .project-description {
    color: var(--text-secondary);
    margin-bottom: 1rem;
    font-size: 0.95rem;
  }

  .key-projects {
    list-style: none;
    padding: 0;
    margin-bottom: 1rem;
  }

  .key-projects li {
    color: var(--text-secondary);
    padding: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;
    font-size: 0.9rem;
  }

  .key-projects li::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: var(--accent);
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .tech-tag {
    background: rgba(59, 130, 246, 0.1);
    color: var(--primary);
    padding: 0.375rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 500;
    border: 1px solid rgba(59, 130, 246, 0.2);
  }

  /* Skills */
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .skill-category {
    background: var(--bg-card);
    border-radius: 16px;
    padding: 1.5rem;
    border: 1px solid var(--border);
    transition: all 0.3s ease;
  }

  .skill-category:hover {
    transform: translateY(-3px);
    border-color: var(--primary);
  }

  .skill-title {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .skill-title .icon {
    font-size: 1.25rem;
  }

  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .skill-tag {
    background: rgba(139, 92, 246, 0.1);
    color: var(--secondary);
    padding: 0.375rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
    border: 1px solid rgba(139, 92, 246, 0.2);
    transition: all 0.3s ease;
  }

  .skill-tag:hover {
    background: rgba(139, 92, 246, 0.2);
    transform: scale(1.05);
  }

  /* Education */
  .education-card {
    display: flex;
    align-items: center;
    gap: 2rem;
    background: var(--bg-card);
    border-radius: 16px;
    padding: 2.5rem;
    border: 1px solid var(--border);
    max-width: 600px;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
  }

  .education-card.mounted {
    opacity: 1;
    transform: translateY(0);
  }

  .edu-icon {
    font-size: 3rem;
  }

  .degree {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .university {
    color: var(--text-secondary);
  }

  /* Contact */
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .contact-card {
    background: var(--bg-card);
    border-radius: 16px;
    padding: 2rem;
    border: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease;
  }

  .contact-card:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
    box-shadow: 0 10px 40px rgba(59, 130, 246, 0.2);
  }

  .contact-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .contact-label {
    color: var(--text-muted);
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }

  .contact-value {
    color: var(--text-primary);
    font-weight: 500;
  }

  /* Footer */
  .footer {
    background: var(--bg-card);
    border-top: 1px solid var(--border);
    padding: 2rem 0;
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .footer-text {
    color: var(--text-secondary);
  }

  .footer-links {
    display: flex;
    gap: 1rem;
    align-items: center;
    color: var(--text-muted);
  }

  .footer-links a {
    color: var(--text-secondary);
  }

  .footer-links .divider {
    color: var(--border);
  }

  /* Responsive */
  @media (max-width: 768px) {
    .hero-content {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .hero-title {
      font-size: 2.5rem;
    }

    .hero-subtitle {
      font-size: 1.125rem;
    }

    .hero-cta {
      justify-content: center;
    }

    .hero-visual {
      order: -1;
    }

    .nav {
      display: none;
    }

    .stats-grid {
      grid-template-columns: 1fr;
    }

    .skills-grid {
      grid-template-columns: 1fr;
    }

    .contact-grid {
      grid-template-columns: 1fr;
    }

    .education-card {
      flex-direction: column;
      text-align: center;
    }

    .exp-header {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>
