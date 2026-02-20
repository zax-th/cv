<script>
  import Logo from "$lib/components/Logo.svelte";
  import { onMount } from "svelte";
  import { t, locale, toggleLocale } from "$lib/stores/i18n.js";

  let mounted = false;
  let scrollY = 0;

  const profileImages = ["/profile-1.png", "/profile-2.png", "/profile-3.png"];
  let currentImageIndex = 0;

  onMount(() => {
    mounted = true;
    const interval = setInterval(() => {
      currentImageIndex = (currentImageIndex + 1) % profileImages.length;
    }, 4000);

    return () => clearInterval(interval);
  });

  const experiences = [
    {
      company: "ODT",
      period: "May 2022 - Present",
      projects: [
        {
          name: "TTB Project, Retail Lending Team, Common Apply Team",
          role: "Frontend",
          description:
            "Development Web Application (Loan, Credit card Feature) with React, Development Native Application (NTB Feature) with IOS Swift, Development Cross Platform (Customer360 feature) with Flutter",
          technologies: ["React", "Swift (IOS)", "Flutter"],
        },
        {
          name: "a-chieve social enterprise",
          role: "Full Stack",
          description:
            "Developing a Web Application to Support Career and Life Guidance for Thai Students, Developing a Tool and Report for Career Counselors to Assess Their Students, Developing a Tools and Report support Admin",
          technologies: [
            "Vue",
            "Nuxt",
            "Strapi",
            "Go",
            "GitLab CI/CD",
            "Kubernetes",
            "ArgoCD",
            "Airflow",
            "Superset",
          ],
        },
      ],
    },
    {
      company: "Hi-Q Food Products Co., Ltd.",
      period: "Oct 2019 – May 2022",
      projects: [
        {
          name: "Internal and Public Application",
          role: "Senior Programmer & Technical Lead",
          description:
            "Team management with Agile and daily meetups with Scrum. Development of authorization systems using sessions, cookies, and JWT. Development of SSR applications using SvelteKit and database with PostgreSQL, Prisma ORM. Implementation of authorization systems using Session Cookie Authentication, JWT Authentication, and Keycloak. On-premises infrastructure setup network configuration. Use Proxmox to Manage Instant of VM. Project deployment management using Docker Nginx. Some Projects Deployment on Kubernetes. Build and deploy automation using Jenkins or GitLab CI. Reverse proxy implementation using Nginx Proxy Manager and Manage DNS with PowerDNS.",
          technologies: [
            "SvelteKit",
            "NestJS",
            "PostgreSQL",
            "Prisma",
            "MongoDB",
            "MS SQL",
            "Docker",
            "Nginx",
            "Kubernetes",
            "Jenkins",
            "GitLab CI",
            "Keycloak",
            "Proxmox",
            "PowerDNS",
          ],
          keyProjects: [
            "Felina Canino Application: Developed by Svelte Frontend Framework use NestJS to Develop Backend, integrating with Navision API and storage data with MongoDB and MS SQL.",
            "Line Official Account (Point Reward System): Full-stack development using Svelte Implement with Line Liff Framework.",
            "HR Management Platform: Built an Express backend with MongoDB via Strapi V2.",
            "Mobile Survey Application: Created a Flutter-based solution with Firebase integration.",
            "Jobber Application: Optimized backend with Fastify using dual database architecture.",
          ],
        },
      ],
    },
    {
      company: "Saraff Infotech Co., Ltd (site AIS)",
      period: "Jul 2018 - Oct 2019",
      projects: [
        {
          name: "AIS Project",
          role: "Frontend",
          description:
            "Develop web Application run on Kiosk, Develop API service",
          technologies: [
            "Angular 6",
            "Redux",
            "Bootstrap 4",
            "HapiJS",
            "NodeJS",
          ],
        },
      ],
    },
    {
      company: "Nextwaver.NET",
      period: "Jan 2018 - Apr 2018",
      projects: [
        {
          name: "AIS Project",
          role: "Frontend",
          description:
            "Develop web application PHR Profile, Develop Text recognition for Save profile in the book Profile, Develop Deep learning for Training software, Manage Data using .Net Core",
          technologies: ["PHR", "Python", "C# .Net Core"],
        },
      ],
    },
  ];

  const skills = {
    frontend: [
      "Vue",
      "NuxtJs",
      "Angular",
      "React",
      "Svelte",
      "Quasar Framework",
      "Flutter",
    ],
    backend: [
      "Express",
      "Fastify",
      "NestJS",
      "Strapi",
      "Go (Go-gin)",
      "Java",
      "C#",
      "SvelteKit",
    ],
    database: ["MongoDB", "Firebase", "PostgreSQL", "SQLite", "MySQL"],
    mobile: [
      "Flutter",
      "IOS (Swift)",
      "Android (Java, Kotlin)",
      "React Native",
    ],
    devops: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitLab CI",
      "ArgoCD",
      "Nginx",
      "Apache",
      "Kong",
      "Cloudflare",
      "PowerDNS",
    ],
    other: [
      "Wails",
      "Tauri",
      "Jest",
      "Vitest",
      "Selenium",
      "Cypress",
      "Playwright",
      "JMeter",
      "K6",
      "JWT",
      "OAuth",
      "Keycloak",
    ],
  };

  const education = {
    degree: "B.S. Computer Science",
    university: "Udon Thani Rajabhat University",
  };

  const contact = {
    address: "Bueng Kan, Thailand",
    phone: "+6692-947-9535",
    email: "nakarin.weerasak@gmail.com",
  };
</script>

<svelte:window bind:scrollY />

<svelte:head>
  <title>Nakarin Weerasak | Software Engineer</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main
  class="min-h-screen bg-[#000000] text-[#A1A1AA] font-['Inter'] selection:bg-zinc-800/50 selection:text-white overflow-x-hidden relative"
>
  <!-- Minimalist Background Grid -->
  <div
    class="fixed inset-0 z-0 pointer-events-none"
    style="background-image: radial-gradient(rgba(255, 255, 255, 0-[0].1) 1px, transparent 1px); background-size: 32px 32px; opacity: 0.3;"
  ></div>

  <!-- Subtle top glow -->
  <div
    class="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white opacity-[0.02] blur-[150px] pointer-events-none z-0 rounded-full"
  ></div>

  <div class="relative z-10">
    <!-- Ultra-clean Header -->
    <header
      class="fixed top-0 left-0 right-0 z-50 bg-[#000000]/80 backdrop-blur-md transition-all {scrollY >
      20
        ? 'border-b border-zinc-800/50 py-4'
        : 'py-6'}"
    >
      <div class="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a
          href="/"
          class="text-xl font-['Outfit'] font-semibold text-white tracking-tight no-underline hover:opacity-80 transition-opacity"
        >
          Nakarin.
        </a>
        <nav class="hidden md:flex gap-8 items-center">
          <a
            href="#about"
            class="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >{$t("nav.about")}</a
          >
          <a
            href="#experience"
            class="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >{$t("nav.experience")}</a
          >
          <a
            href="#skills"
            class="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >{$t("nav.skills")}</a
          >
          <a
            href="#contact"
            class="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >{$t("nav.contact")}</a
          >

          <!-- Language Toggle Button -->
          <button
            on:click={toggleLocale}
            class="ml-4 px-3 py-1.5 rounded-full border border-zinc-800 bg-[#0A101D] text-xs font-semibold text-zinc-300 hover:text-white hover:border-zinc-600 transition-all flex items-center gap-2 group"
          >
            <span class={$locale === "en" ? "text-white" : "text-zinc-500"}
              >EN</span
            >
            <span class="text-zinc-700">/</span>
            <span class={$locale === "th" ? "text-white" : "text-zinc-500"}
              >TH</span
            >
          </button>
        </nav>
      </div>
    </header>

    <!-- Refined Hero Section -->
    <section
      class="min-h-screen flex flex-col justify-center pt-32 pb-12 px-6 max-w-6xl mx-auto relative"
    >
      <div class="grid lg:grid-cols-12 gap-12 items-center">
        <!-- Text Content -->
        <div
          class="lg:col-span-7 {mounted
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4'} transition-all duration-1000 ease-out z-10"
        >
          <div
            class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800/80 bg-zinc-900/30 mb-8 backdrop-blur-sm"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
            ></span>
            <span class="text-xs font-medium text-zinc-300"
              >Open to new opportunities</span
            >
          </div>

          <h1
            class="text-5xl md:text-7xl lg:text-[5.5rem] font-['Outfit'] font-semibold leading-[1.1] text-white tracking-tight mb-6"
          >
            Software Engineer <br />
            <span class="text-zinc-500">{$t("hero.subtitle")}</span>
          </h1>

          <p
            class="text-lg text-zinc-400 mb-10 max-w-xl font-light leading-relaxed"
          >
            {$t("about.p1")}
          </p>

          <div class="flex items-center gap-5">
            <a
              href="#experience"
              class="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors text-sm"
            >
              {$t("hero.viewWork")}
            </a>
            <a
              href="#contact"
              class="px-6 py-3 border border-zinc-800 text-white font-semibold rounded-lg hover:bg-zinc-900 transition-colors text-sm"
            >
              {$t("hero.getInTouch")}
            </a>
          </div>
        </div>

        <!-- Profile Image Bento Card -->
        <div
          class="lg:col-span-5 {mounted
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'} transition-all duration-1000 delay-300 ease-out"
        >
          <div
            class="relative w-full aspect-square md:aspect-4/3 lg:aspect-square rounded-3xl border border-zinc-800/80 bg-zinc-900/20 group"
          >
            <div
              class="absolute inset-1.5 bg-[#0A101D] rounded-[2.8rem] z-0 overflow-hidden"
            >
              {#each profileImages as src, i}
                <img
                  {src}
                  alt="Nakarin Weerasak"
                  class="absolute inset-0 w-full h-full object-cover grayscale-30 group-hover:grayscale-0 transition-opacity duration-1000 {i ===
                  currentImageIndex
                    ? 'opacity-100 scale-100 z-10'
                    : 'opacity-0 scale-105 z-0'}"
                />
              {/each}
            </div>
            <!-- Tech floating badges -->
            <div
              class="absolute -top-4 -left-4 z-20 bg-[#0A101D] border border-zinc-800 rounded-2xl w-14 h-14 flex items-center justify-center shadow-xl backdrop-blur-md transform -rotate-12 group-hover:-rotate-6 transition-all duration-300"
            >
              <svg
                class="w-7 h-7 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <div
              class="absolute -bottom-4 -right-2 z-20 bg-[#0A101D] border border-zinc-800 rounded-2xl w-14 h-14 flex items-center justify-center shadow-xl backdrop-blur-md transform rotate-12 group-hover:rotate-6 transition-all duration-300"
            >
              <svg
                class="w-7 h-7 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div
              class="absolute top-1/2 -right-6 z-20 bg-[#0A101D] border border-zinc-800 rounded-2xl w-14 h-14 flex items-center justify-center shadow-xl backdrop-blur-md transform rotate-6 group-hover:translate-x-2 transition-all duration-300 md:flex"
            >
              <svg
                class="w-7 h-7 text-purple-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bento Grid Section (About & Quick Stats) -->
    <section id="about" class="py-24 px-6 max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Main About Bento -->
        <div
          class="md:col-span-2 rounded-3xl border border-zinc-800/80 bg-zinc-900/30 p-8 md:p-12 hover:border-zinc-700 transition-colors group"
        >
          <h2 class="text-2xl font-['Outfit'] font-semibold text-white mb-6">
            {$t("about.title")}
          </h2>
          <p
            class="text-zinc-400 text-lg leading-relaxed font-light mb-6 group-hover:text-zinc-300 transition-colors"
          >
            {$t("about.p1")}
          </p>
          <p
            class="text-zinc-400 text-lg leading-relaxed font-light group-hover:text-zinc-300 transition-colors"
          >
            {$t("about.p2")}
          </p>
        </div>

        <!-- Metric Bentos -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-auto">
          <div
            class="bg-zinc-900/40 rounded-3xl p-6 border border-zinc-800/80 hover:bg-zinc-800/80 hover:border-slate-500/30 transition-all flex flex-col justify-center items-center h-full"
          >
            <span
              class="block text-4xl font-['Outfit'] font-extrabold text-white mb-1"
              >8+</span
            >
            <span
              class="text-zinc-500 font-medium text-sm tracking-wide uppercase"
              >{$t("about.yearsExp")}</span
            >
          </div>
          <div
            class="bg-zinc-900/40 rounded-3xl p-6 border border-zinc-800/80 hover:bg-zinc-800/80 hover:border-slate-500/30 transition-all flex flex-col justify-center items-center h-full"
          >
            <span
              class="block text-4xl font-['Outfit'] font-extrabold text-white mb-1"
              >15+</span
            >
            <span
              class="text-zinc-500 font-medium text-sm tracking-wide uppercase"
              >{$t("about.projectsCompleted")}</span
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section
      id="experience"
      class="py-24 px-6 max-w-6xl mx-auto border-t border-zinc-900"
    >
      <div class="flex flex-col md:flex-row gap-12 md:gap-24">
        <!-- Sticky specific -->
        <div class="w-full md:w-1/4">
          <h2
            class="text-sm font-semibold text-zinc-500 uppercase tracking-widest sticky top-32"
          >
            {$t("experience.title")}
          </h2>
        </div>

        <div class="w-full md:w-3/4 space-y-16">
          {#each experiences as exp, idx}
            <div class="group relative">
              <div
                class="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2"
              >
                <h3 class="text-2xl font-['Outfit'] font-semibold text-white">
                  {$t(`experience.exp${idx + 1}_company`) || exp.company}
                </h3>
                <span class="text-zinc-500 font-mono text-sm"
                  >{$t(`experience.exp${idx + 1}_period`) || exp.period}</span
                >
              </div>

              <div class="space-y-10">
                {#each exp.projects as project, pIdx}
                  <div>
                    <h4 class="text-lg font-medium text-zinc-200 mb-1">
                      {$t(`experience.exp${idx + 1}_p${pIdx + 1}_name`) ||
                        project.name}
                    </h4>
                    <p class="text-sm text-zinc-500 mb-4">
                      {project.role === "Frontend"
                        ? $t("experience.role_frontend")
                        : project.role === "Full Stack"
                          ? $t("experience.role_fullstack")
                          : project.role ===
                              "Senior Programmer & Technical Lead"
                            ? $t("experience.role_senior_lead")
                            : project.role}
                    </p>
                    <p
                      class="text-zinc-400 font-light leading-relaxed text-sm mb-5 max-w-2xl"
                    >
                      {$t(`experience.exp${idx + 1}_p${pIdx + 1}_desc`) ||
                        project.description}
                    </p>

                    {#if project.keyProjects}
                      <ul class="space-y-3 mb-6">
                        {#each project.keyProjects as keyProject, kpIdx}
                          <li
                            class="text-zinc-400 text-sm font-light flex items-start leading-relaxed"
                          >
                            <span class="text-zinc-700 mr-3 mt-1">-</span>
                            <span
                              >{$t(`experience.exp${idx + 1}_kp${kpIdx + 1}`) ||
                                keyProject}</span
                            >
                          </li>
                        {/each}
                      </ul>
                    {/if}

                    <div class="flex flex-wrap gap-2">
                      {#each project.technologies as tech}
                        <span
                          class="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 text-[11px] font-mono tracking-wide"
                          >{tech}</span
                        >
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

    <!-- Skills Bento Grid -->
    <section
      id="skills"
      class="py-24 px-6 max-w-6xl mx-auto border-t border-zinc-900"
    >
      <div class="flex flex-col md:flex-row gap-12 md:gap-24 mb-12">
        <div class="w-full md:w-1/4">
          <h2
            class="text-sm font-semibold text-zinc-500 uppercase tracking-widest sticky top-32"
          >
            {$t("skills.title")}
          </h2>
        </div>
        <div class="w-full md:w-3/4">
          <p class="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
            A comprehensive, adaptable toolset optimized for building end-to-end
            full-stack architectures.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each Object.entries(skills) as [category, items]}
          <div
            class="rounded-2xl border border-zinc-800/80 bg-zinc-900/20 p-8 hover:bg-zinc-900/40 transition-colors"
          >
            <h3
              class="text-lg font-['Outfit'] font-semibold mb-6 text-white capitalize"
            >
              {$t("skills." + category) || category}
            </h3>
            <ul class="space-y-3">
              {#each items as skill}
                <li
                  class="text-zinc-400 font-light text-sm flex items-center group cursor-default"
                >
                  <span
                    class="w-1.5 h-1.5 rounded-full bg-zinc-800 mr-3 group-hover:bg-white transition-colors"
                  ></span>
                  {skill}
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </section>

    <!-- Education Section -->
    <section id="education" class="py-24 px-6 relative">
      <div class="max-w-3xl mx-auto">
        <div
          class="bg-linear-to-br from-blue-900/40 via-purple-900/20 to-slate-900/40 backdrop-blur-2xl rounded-[3rem] p-10 md:p-14 border border-white/10 text-center relative overflow-hidden group"
        >
          <!-- decorative blur in background of the card -->
          <div
            class="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-700"
          ></div>

          <h2
            class="text-2xl font-['Outfit'] font-bold text-blue-400 mb-8 uppercase tracking-widest text-sm"
          >
            {$t("education.title")}
          </h2>

          <div class="relative z-10">
            <span class="text-6xl mb-6 block drop-shadow-lg">🎓</span>
            <h3
              class="text-3xl md:text-4xl font-['Outfit'] font-extrabold text-white mb-4 leading-tight"
            >
              {$t("education.degree")}
            </h3>
            <p class="text-xl text-slate-400">{$t("education.university")}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact & Footer -->
    <section id="contact" class="pt-24 pb-12 px-6">
      <div class="max-w-5xl mx-auto">
        <h2
          class="text-4xl md:text-5xl font-['Outfit'] font-bold mb-16 text-center text-white relative"
        >
          {$t("contact.title")}
          <div
            class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-linear-to-r from-blue-500 to-purple-500 rounded-full"
          ></div>
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          <a
            href="mailto:{contact.email}"
            class="bg-zinc-900/30 backdrop-blur-xl rounded-4xl p-8 border border-zinc-800/80 flex flex-col items-center text-center hover:bg-zinc-800/50 hover:border-slate-500/30 hover:-translate-y-2 transition-all group no-underline"
          >
            <div
              class="w-14 h-14 rounded-full bg-slate-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
            >
              <svg
                class="w-6 h-6 text-slate-300 group-hover:text-white transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span class="text-slate-400 text-sm mb-2 font-medium"
              >{$t("contact.email")}</span
            >
            <span class="text-white font-semibold text-sm break-all"
              >{contact.email}</span
            >
          </a>
          <a
            href="tel:{contact.phone}"
            class="bg-zinc-900/30 backdrop-blur-xl rounded-4xl p-8 border border-zinc-800/80 flex flex-col items-center text-center hover:bg-zinc-800/50 hover:border-slate-500/30 hover:-translate-y-2 transition-all group no-underline"
          >
            <div
              class="w-14 h-14 rounded-full bg-slate-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
            >
              <svg
                class="w-6 h-6 text-slate-300 group-hover:text-white transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <span class="text-slate-400 text-sm mb-2 font-medium"
              >{$t("contact.phone")}</span
            >
            <span class="text-white font-semibold">{contact.phone}</span>
          </a>
          <div
            class="bg-zinc-900/30 backdrop-blur-xl rounded-4xl p-8 border border-zinc-800/80 flex flex-col items-center text-center hover:bg-zinc-800/50 transition-all group"
          >
            <div
              class="w-14 h-14 rounded-full bg-slate-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
            >
              <svg
                class="w-6 h-6 text-slate-300 group-hover:text-white transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <span class="text-slate-400 text-sm mb-2 font-medium"
              >{$t("contact.location")}</span
            >
            <span class="text-white font-semibold text-sm"
              >{$t("contact.address")}</span
            >
          </div>
          <div
            class="bg-zinc-900/30 backdrop-blur-xl rounded-4xl p-8 border border-zinc-800/80 flex flex-col items-center text-center hover:bg-zinc-800/50 transition-all group"
          >
            <div
              class="w-14 h-14 rounded-full bg-slate-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
            >
              <svg
                class="w-6 h-6 text-slate-300 group-hover:text-white transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span class="text-slate-400 text-sm mb-2 font-medium">Status</span>
            <span class="text-white font-semibold text-sm">Available</span>
          </div>
        </div>

        <!-- Footer -->
        <footer
          class="border-t border-zinc-800/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-600"
        >
          <div
            class="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity"
          >
            <Logo size={24} />
            <span class="text-sm font-semibold text-white tracking-widest"
              >NAKARIN W.</span
            >
          </div>
          <p class="font-medium inline-block flex gap-1">
            {$t("footer.rights")}
            <span class="hidden md:inline">Built with SvelteKit.</span>
          </p>
        </footer>
      </div>
    </section>
  </div>
</main>
