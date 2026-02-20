import { c as create_ssr_component, b as add_attribute, a as subscribe, e as escape, v as validate_component, d as each } from "../../chunks/ssr.js";
import { d as derived, w as writable } from "../../chunks/index.js";
const css = {
  code: ".logo.svelte-1m6skgg.svelte-1m6skgg{display:inline-block;transition:transform 0.3s ease}.logo.svelte-1m6skgg.svelte-1m6skgg:hover{transform:scale(1.05)}.logo.svelte-1m6skgg:hover circle.svelte-1m6skgg:last-child{animation:pulse 1s ease-in-out infinite}",
  map: '{"version":3,"file":"Logo.svelte","sources":["Logo.svelte"],"sourcesContent":["<script>\\n  export let size = 60;\\n<\/script>\\n\\n<svg \\n  width={size} \\n  height={size} \\n  viewBox=\\"0 0 100 100\\" \\n  fill=\\"none\\" \\n  xmlns=\\"http://www.w3.org/2000/svg\\"\\n  class=\\"logo\\"\\n>\\n  <defs>\\n    <linearGradient id=\\"logoGradient\\" x1=\\"0%\\" y1=\\"0%\\" x2=\\"100%\\" y2=\\"100%\\">\\n      <stop offset=\\"0%\\" stop-color=\\"#3b82f6\\" />\\n      <stop offset=\\"50%\\" stop-color=\\"#8b5cf6\\" />\\n      <stop offset=\\"100%\\" stop-color=\\"#06b6d4\\" />\\n    </linearGradient>\\n    <linearGradient id=\\"bgGradient\\" x1=\\"0%\\" y1=\\"0%\\" x2=\\"100%\\" y2=\\"100%\\">\\n      <stop offset=\\"0%\\" stop-color=\\"#1e293b\\" />\\n      <stop offset=\\"100%\\" stop-color=\\"#0f172a\\" />\\n    </linearGradient>\\n  </defs>\\n  \\n  <!-- Background circle -->\\n  <circle cx=\\"50\\" cy=\\"50\\" r=\\"48\\" fill=\\"url(#bgGradient)\\" stroke=\\"url(#logoGradient)\\" stroke-width=\\"2\\"/>\\n  \\n  <!-- Decorative ring -->\\n  <circle cx=\\"50\\" cy=\\"50\\" r=\\"40\\" stroke=\\"url(#logoGradient)\\" stroke-width=\\"1\\" stroke-dasharray=\\"4 4\\" opacity=\\"0.5\\"/>\\n  \\n  <!-- N letter -->\\n  <path \\n    d=\\"M28 70V30L50 55L72 30V70\\" \\n    stroke=\\"url(#logoGradient)\\" \\n    stroke-width=\\"5\\" \\n    stroke-linecap=\\"round\\" \\n    stroke-linejoin=\\"round\\"\\n    fill=\\"none\\"\\n  />\\n  \\n  <!-- W letter -->\\n  <path \\n    d=\\"M25 45L38 70L50 52L62 70L75 45\\" \\n    stroke=\\"url(#logoGradient)\\" \\n    stroke-width=\\"4\\" \\n    stroke-linecap=\\"round\\" \\n    stroke-linejoin=\\"round\\"\\n    fill=\\"none\\"\\n    opacity=\\"0.8\\"\\n  />\\n  \\n  <!-- Dot accent -->\\n  <circle cx=\\"75\\" cy=\\"28\\" r=\\"4\\" fill=\\"#06b6d4\\">\\n    <animate attributeName=\\"opacity\\" values=\\"0.5;1;0.5\\" dur=\\"2s\\" repeatCount=\\"indefinite\\" />\\n  </circle>\\n</svg>\\n\\n<style>\\n  .logo {\\n    display: inline-block;\\n    transition: transform 0.3s ease;\\n  }\\n  \\n  .logo:hover {\\n    transform: scale(1.05);\\n  }\\n  \\n  .logo:hover circle:last-child {\\n    animation: pulse 1s ease-in-out infinite;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA0DE,mCAAM,CACJ,OAAO,CAAE,YAAY,CACrB,UAAU,CAAE,SAAS,CAAC,IAAI,CAAC,IAC7B,CAEA,mCAAK,MAAO,CACV,SAAS,CAAE,MAAM,IAAI,CACvB,CAEA,oBAAK,MAAM,CAAC,qBAAM,WAAY,CAC5B,SAAS,CAAE,KAAK,CAAC,EAAE,CAAC,WAAW,CAAC,QAClC"}'
};
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = 60 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  $$result.css.add(css);
  return `<svg${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="logo svelte-1m6skgg"><defs><linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#3b82f6"></stop><stop offset="50%" stop-color="#8b5cf6"></stop><stop offset="100%" stop-color="#06b6d4"></stop></linearGradient><linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#1e293b"></stop><stop offset="100%" stop-color="#0f172a"></stop></linearGradient></defs><circle cx="50" cy="50" r="48" fill="url(#bgGradient)" stroke="url(#logoGradient)" stroke-width="2" class="svelte-1m6skgg"></circle><circle cx="50" cy="50" r="40" stroke="url(#logoGradient)" stroke-width="1" stroke-dasharray="4 4" opacity="0.5" class="svelte-1m6skgg"></circle><path d="M28 70V30L50 55L72 30V70" stroke="url(#logoGradient)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"></path><path d="M25 45L38 70L50 52L62 70L75 45" stroke="url(#logoGradient)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" opacity="0.8"></path><circle cx="75" cy="28" r="4" fill="#06b6d4" class="svelte-1m6skgg"><animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"></animate></circle></svg>`;
});
const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      contact: "Contact"
    },
    hero: {
      subtitle: "Full-Stack Developer with DevOps Experience",
      getInTouch: "Get In Touch",
      viewWork: "View Work",
      scrollDown: "Scroll Down"
    },
    about: {
      title: "About Me",
      p1: "I'm a passionate Full-Stack Developer with extensive experience in modern web technologies and DevOps practices. With expertise spanning from frontend frameworks like React, Vue, and Svelte to backend technologies including Node.js, NestJS, and Go, I build scalable and performant applications.",
      p2: "My experience includes leading teams, designing system architectures, and implementing CI/CD pipelines. I'm particularly interested in cloud infrastructure, containerization, and automation to deliver robust solutions.",
      yearsExp: "Years Experience",
      projectsCompleted: "Projects Completed",
      technologies: "Technologies"
    },
    experience: {
      title: "Work Experience",
      role_frontend: "Frontend",
      role_fullstack: "Full Stack",
      role_senior_lead: "Senior Programmer & Technical Lead",
      exp1_company: "ODT",
      exp1_period: "May 2022 - Present",
      exp1_p1_name: "TTB Project, Retail Lending Team, Common Apply Team",
      exp1_p1_desc: "Development Web Application (Loan, Credit card Feature) with React, Development Native Application (NTB Feature) with IOS Swift, Development Cross Platform (Customer360 feature) with Flutter",
      exp1_p2_name: "a-chieve social enterprise",
      exp1_p2_desc: "Developing a Web Application to Support Career and Life Guidance for Thai Students, Developing a Tool and Report for Career Counselors to Assess Their Students, Developing a Tools and Report support Admin",
      exp2_company: "Hi-Q Food Products Co., Ltd.",
      exp2_period: "Oct 2019 – May 2022",
      exp2_p1_name: "Internal and Public Application",
      exp2_p1_desc: "Team management with Agile and daily meetups with Scrum. Development of authorization systems using sessions, cookies, and JWT. Development of SSR applications using SvelteKit and database with PostgreSQL, Prisma ORM. Implementation of authorization systems using Session Cookie Authentication, JWT Authentication, and Keycloak. On-premises infrastructure setup network configuration. Use Proxmox to Manage Instant of VM. Project deployment management using Docker Nginx. Some Projects Deployment on Kubernetes. Build and deploy automation using Jenkins or GitLab CI. Reverse proxy implementation using Nginx Proxy Manager and Manage DNS with PowerDNS.",
      exp2_kp1: "Felina Canino Application: Developed by Svelte Frontend Framework use NestJS to Develop Backend, integrating with Navision API and storage data with MongoDB and MS SQL.",
      exp2_kp2: "Line Official Account (Point Reward System): Full-stack development using Svelte Implement with Line Liff Framework.",
      exp2_kp3: "HR Management Platform: Built an Express backend with MongoDB via Strapi V2.",
      exp2_kp4: "Mobile Survey Application: Created a Flutter-based solution with Firebase integration.",
      exp2_kp5: "Jobber Application: Optimized backend with Fastify using dual database architecture.",
      exp3_company: "Saraff Infotech Co., Ltd (site AIS)",
      exp3_period: "Jul 2018 - Oct 2019",
      exp3_p1_name: "AIS Project",
      exp3_p1_desc: "Develop web Application run on Kiosk, Develop API service",
      exp4_company: "Nextwaver.NET",
      exp4_period: "Jan 2018 - Apr 2018",
      exp4_p1_name: "AIS Project",
      exp4_p1_desc: "Develop web application PHR Profile, Develop Text recognition for Save profile in the book Profile, Develop Deep learning for Training software, Manage Data using .Net Core"
    },
    skills: {
      title: "Technical Expertise",
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      mobile: "Mobile",
      devops: "DevOps",
      other: "Other"
    },
    education: {
      title: "Education",
      degree: "B.S. Computer Science",
      university: "UDON THANI RAJABHAT UNIVERSITY"
    },
    contact: {
      title: "Contact",
      email: "Email",
      phone: "Phone",
      location: "Location",
      birthday: "Birthday",
      address: "216 M.2 Ban Khok Niyom Wang Chompoo, Porncharoen Buengkan Thailand 38180",
      birthdayDate: "July 18, 1995"
    },
    footer: {
      rights: "© 2024 Nakarin Weerasak. All rights reserved.",
      role: "Full-Stack Developer"
    }
  },
  th: {
    nav: {
      about: "เกี่ยวกับ",
      experience: "ประสบการณ์",
      skills: "ทักษะ",
      education: "การศึกษา",
      contact: "ติดต่อ"
    },
    hero: {
      subtitle: "นักพัฒนา Full-Stack ผู้มีประสบการณ์ด้าน DevOps",
      getInTouch: "ติดต่อฉัน",
      viewWork: "ดูผลงาน",
      scrollDown: "เลื่อนลง"
    },
    about: {
      title: "เกี่ยวกับฉัน",
      p1: "ผมคือนักพัฒนา Full-Stack ที่มีความหลงใหลในเทคโนโลยีเว็บสมัยใหม่และมีประสบการณ์การทำงานจริงด้าน DevOps ผมมีความเชี่ยวชาญตั้งแต่ Frontend framework เช่น React, Vue, และ Svelte ไปจนถึง Backend อย่าง Node.js, NestJS, และ Go เพื่อสร้างแอปพลิเคชันที่รองรับการขยายตัวและมีประสิทธิภาพสูง",
      p2: "ประสบการณ์ของผมรวมถึงการนำทีม การออกแบบสถาปัตยกรรมระบบ และการจัดทำ CI/CD pipeline ผมมีความสนใจเป็นพิเศษในเรื่องโครงสร้างพื้นฐานคลาวด์ การทำ Containerization และระบบอัตโนมัติ เพื่อส่งมอบโซลูชันที่แข็งแกร่ง",
      yearsExp: "ปีแห่งประสบการณ์",
      projectsCompleted: "โปรเจกต์ที่สำเร็จ",
      technologies: "เทคโนโลยี"
    },
    experience: {
      title: "ประสบการณ์การทำงาน",
      role_frontend: "นักพัฒนา Frontend",
      role_fullstack: "นักพัฒนา Full Stack",
      role_senior_lead: "ซีเนียร์โปรแกรมเมอร์ & เทคนิคคัลลีด",
      exp1_company: "ODT",
      exp1_period: "พ.ค. 2022 - ปัจจุบัน",
      exp1_p1_name: "โปรเจกต์ TTB (ทีม Retail Lending, ทีม Common Apply)",
      exp1_p1_desc: "พัฒนาเว็บแอปพลิเคชัน (ฟีเจอร์สินเชื่อและบัตรเครดิต) ด้วย React, พัฒนาแอปพลิเคชัน Native (ฟีเจอร์ NTB) ด้วย IOS Swift, พัฒนา Cross Platform (ฟีเจอร์ Customer360) ด้วย Flutter",
      exp1_p2_name: "a-chieve (วิสาหกิจเพื่อสังคม)",
      exp1_p2_desc: "พัฒนาเว็บแอปพลิเคชันสนับสนุนแนะแนวอาชีพและการใช้ชีวิตสำหรับนักเรียนไทย, พัฒนาเครื่องมือและรายงานสำหรับครูแนะแนวในการประเมินนักเรียน, พัฒนาเครื่องมือและรายงานสนับสนุนผู้ดูแลระบบ",
      exp2_company: "Hi-Q Food Products Co., Ltd.",
      exp2_period: "ต.ค. 2019 – พ.ค. 2022",
      exp2_p1_name: "แอปพลิเคชันใช้งานภายในและสาธารณะ",
      exp2_p1_desc: "บริหารจัดการทีมแบบ Agile และมีการประชุมรายวันด้วย Scrum. พัฒนาระบบยืนยันตัวตนด้วย sessions, cookies, และ JWT. พัฒนาแอปพลิเคชัน SSR ด้วย SvelteKit และฐานข้อมูล PostgreSQL, Prisma ORM. อิมพลีเมนต์ระบบยืนยันตัวตนด้วย Session Cookie, JWT, และ Keycloak. เซ็ตอัประบบเครือข่ายสำหรับ On-premises infrastructure. ใช้ Proxmox จัดการ VM. จัดการการ Deploy ด้วย Docker Nginx. จัดการโปรเจกต์บางส่วนบน Kubernetes. สร้างระบบ CI/CD อัตโนมัติด้วย Jenkins หรือ GitLab CI. ทำ Reverse proxy ด้วย Nginx Proxy Manager และจัดการ DNS ด้วย PowerDNS.",
      exp2_kp1: "แอปพลิเคชัน Felina Canino: พัฒนา Frontend ด้วย Svelte และ Backend ด้วย NestJS เพื่อเชื่อมต่อกับ API ของ Navision ใช้ฐานข้อมูล MongoDB และ MS SQL.",
      exp2_kp2: "Line Official Account (ระบบสะสมแต้ม): พัฒนา Full-stack ด้วย Svelte ทำงานร่วมกับ Liff Framework ของ Line.",
      exp2_kp3: "แพลตฟอร์มจัดการ HR: สร้าง Backend ด้วย Express และ MongoDB ผ่าน Strapi V2.",
      exp2_kp4: "แอปพลิเคชันทำแบบสอบถามบนมือถือ: โซลูชันบน Flutter ที่มีการเชื่อมต่อกับ Firebase.",
      exp2_kp5: "แอปพลิเคชัน Jobber: จัดทำ Backend ที่มีประสิทธิภาพด้วย Fastify ร่วมกับสถาปัตยกรรมฐานข้อมูลแบบคู่.",
      exp3_company: "Saraff Infotech Co., Ltd (ประจำไซต์ AIS)",
      exp3_period: "ก.ค. 2018 - ต.ค. 2019",
      exp3_p1_name: "โปรเจกต์ AIS",
      exp3_p1_desc: "พัฒนาเว็บแอปพลิเคชันสำหรับใช้งานบนตู้ Kiosk, พัฒนา API service",
      exp4_company: "Nextwaver.NET",
      exp4_period: "ม.ค. 2018 - เม.ย. 2018",
      exp4_p1_name: "โปรเจกต์ AIS",
      exp4_p1_desc: "พัฒนาเว็บแอปพลิเคชันสร้างโปรไฟล์ PHR Profile, พัฒนาระบบ Text recognition เพื่อบันทึกข้อมูลเข้าสู่ระบบ, พัฒนา Deep learning สำหรับซอฟต์แวร์เทรนนิ่ง, จัดการข้อมูลด้วย .Net Core"
    },
    skills: {
      title: "ความเชี่ยวชาญทางเทคนิค",
      frontend: "มิติผู้ใช้งาน (Frontend)",
      backend: "ระบบหลังบ้าน (Backend)",
      database: "ฐานข้อมูล",
      mobile: "มือถือ",
      devops: "DevOps",
      other: "อื่นๆ"
    },
    education: {
      title: "การศึกษา",
      degree: "วท.บ. วิทยาการคอมพิวเตอร์",
      university: "มหาวิทยาลัยราชภัฏอุดรธานี"
    },
    contact: {
      title: "การติดต่อ",
      email: "อีเมล",
      phone: "เบอร์โทรศัพท์",
      location: "สถานที่",
      birthday: "วันเกิด",
      address: "216 ม.2 บ้านโคกนิยม ต.วังชมภู อ.พรเจริญ จ.บึงกาฬ 38180",
      birthdayDate: "18 กรกฎาคม 1995"
    },
    footer: {
      rights: "© 2024 นครินทร์ วีระศักดิ์ สงวนลิขสิทธิ์",
      role: "นักพัฒนา Full-Stack"
    }
  }
};
const locale = writable("en");
const t = derived(locale, ($locale) => (key) => {
  const keys = key.split(".");
  let value = translations[$locale];
  for (const k of keys) {
    if (value && value[k] !== void 0) {
      value = value[k];
    } else {
      let fallback = translations["en"];
      for (const fallbackKey of keys) {
        if (fallback && fallback[fallbackKey] !== void 0) {
          fallback = fallback[fallbackKey];
        } else {
          return key;
        }
      }
      return fallback;
    }
  }
  return value;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let experiences;
  let education;
  let contact;
  let $locale, $$unsubscribe_locale;
  let $t, $$unsubscribe_t;
  $$unsubscribe_locale = subscribe(locale, (value) => $locale = value);
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  const skills = {
    frontend: ["Vue", "NuxtJs", "Angular", "React", "Svelte", "Quasar Framework", "Flutter"],
    backend: [
      "Express",
      "Fastify",
      "NestJS",
      "Strapi",
      "Go (Go-gin)",
      "Java",
      "C#",
      "SvelteKit"
    ],
    database: ["MongoDB", "Firebase", "PostgreSQL", "SQLite", "MySQL"],
    mobile: ["Flutter", "IOS (Swift)", "Android (Java, Kotlin)", "React Native"],
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
      "PowerDNS"
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
      "Keycloak"
    ]
  };
  experiences = [
    {
      company: $t("experience.exp1_company"),
      period: $t("experience.exp1_period"),
      projects: [
        {
          name: $t("experience.exp1_p1_name"),
          role: $t("experience.role_frontend"),
          description: $t("experience.exp1_p1_desc"),
          technologies: ["React", "Swift (IOS)", "Flutter"]
        },
        {
          name: $t("experience.exp1_p2_name"),
          role: $t("experience.role_fullstack"),
          description: $t("experience.exp1_p2_desc"),
          technologies: [
            "Vue",
            "Nuxt",
            "Strapi",
            "Go",
            "GitLab CI/CD",
            "Kubernetes",
            "ArgoCD",
            "Airflow",
            "Supperset"
          ]
        }
      ]
    },
    {
      company: $t("experience.exp2_company"),
      period: $t("experience.exp2_period"),
      projects: [
        {
          name: $t("experience.exp2_p1_name"),
          role: $t("experience.role_senior_lead"),
          description: $t("experience.exp2_p1_desc"),
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
            "PowerDNS"
          ],
          keyProjects: [
            $t("experience.exp2_kp1"),
            $t("experience.exp2_kp2"),
            $t("experience.exp2_kp3"),
            $t("experience.exp2_kp4"),
            $t("experience.exp2_kp5")
          ]
        }
      ]
    },
    {
      company: $t("experience.exp3_company"),
      period: $t("experience.exp3_period"),
      projects: [
        {
          name: $t("experience.exp3_p1_name"),
          role: $t("experience.role_frontend"),
          description: $t("experience.exp3_p1_desc"),
          technologies: ["Angular 6", "Redux", "Bootstrap 4", "HapiJS", "NodeJS"]
        }
      ]
    },
    {
      company: $t("experience.exp4_company"),
      period: $t("experience.exp4_period"),
      projects: [
        {
          name: $t("experience.exp4_p1_name"),
          role: $t("experience.role_frontend"),
          description: $t("experience.exp4_p1_desc"),
          technologies: ["PHR", "Python", "C# .Net Core"]
        }
      ]
    }
  ];
  education = {
    degree: $t("education.degree"),
    university: $t("education.university")
  };
  contact = {
    address: $t("contact.address"),
    phone: $t("contact.phone"),
    email: "nakarin.weerasak@gmail.com",
    birthday: $t("contact.birthdayDate"),
    nationality: $locale === "th" ? "สัญชาติไทย" : "Thai"
  };
  $$unsubscribe_locale();
  $$unsubscribe_t();
  return `${$$result.head += `<!-- HEAD_svelte-1uzvyg4_START -->${$$result.title = `<title>Nakarin Weerasak | ${escape($t("hero.subtitle"))}</title>`, ""}<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700;800&amp;display=swap" rel="stylesheet"><!-- HEAD_svelte-1uzvyg4_END -->`, ""} <main class="${"min-h-screen " + escape($locale === "th" ? "font-[Kanit]" : "font-[Inter]", true)}"> <header class="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700"><div class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center"><a href="/" class="flex items-center gap-2 no-underline">${validate_component(Logo, "Logo").$$render($$result, { size: 50 }, {}, {})} <span class="text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent" data-svelte-h="svelte-18ryrj1">NW</span></a> <div class="flex items-center gap-6"><nav class="hidden md:flex gap-8"><a href="#about" class="text-slate-400 hover:text-white font-medium transition-colors relative">${escape($t("nav.about"))}</a> <a href="#experience" class="text-slate-400 hover:text-white font-medium transition-colors relative">${escape($t("nav.experience"))}</a> <a href="#skills" class="text-slate-400 hover:text-white font-medium transition-colors relative">${escape($t("nav.skills"))}</a> <a href="#education" class="text-slate-400 hover:text-white font-medium transition-colors relative">${escape($t("nav.education"))}</a> <a href="#contact" class="text-slate-400 hover:text-white font-medium transition-colors relative">${escape($t("nav.contact"))}</a></nav> <button class="px-4 py-2 rounded-full border border-slate-600 bg-slate-800 text-slate-300 hover:text-white hover:border-blue-500 hover:bg-slate-700 transition-all font-semibold text-sm cursor-pointer shadow-sm">${escape($locale === "en" ? "🇹🇭 TH" : "🇬🇧 EN")}</button></div></div></header>  <section class="min-h-screen flex items-center pt-20 relative overflow-hidden"><div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div> <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10"><div class="${escape(
    "opacity-0 translate-y-8",
    true
  ) + " transition-all duration-700"}"><h1 class="text-5xl md:text-6xl font-bold mb-4" data-svelte-h="svelte-1d7gs7h"><span class="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">Nakarin Weerasak</span></h1> <p class="text-xl text-slate-400 mb-8">${escape($t("hero.subtitle"))}</p> <div class="flex gap-4"><a href="#contact" class="px-8 py-3.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">${escape($t("hero.getInTouch"))}</a> <a href="#experience" class="px-8 py-3.5 border-2 border-slate-600 text-white font-semibold rounded-full hover:border-blue-500 hover:bg-blue-500/10 transition-all">${escape($t("hero.viewWork"))}</a></div></div> <div class="${escape("opacity-0 scale-90", true) + " transition-all duration-700 delay-200 flex justify-center"}">${validate_component(Logo, "Logo").$$render($$result, { size: 200 }, {}, {})}</div></div> <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-sm"><span>${escape($t("hero.scrollDown"))}</span> <div class="w-5 h-8 border-2 border-slate-500 rounded-full relative" data-svelte-h="svelte-zw6tpp"><div class="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-blue-500 rounded-full animate-pulse"></div></div></div></section>  <section id="about" class="py-24"><div class="max-w-6xl mx-auto px-6"><h2 class="text-4xl font-bold mb-12 relative inline-block">${escape($t("about.title"))} <span class="absolute -bottom-3 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full"></span></h2> <div class="space-y-8"><div class="bg-slate-800 rounded-2xl p-8 border border-slate-700"><p class="text-slate-300 text-lg mb-4">${escape($t("about.p1"))}</p> <p class="text-slate-300 text-lg">${escape($t("about.p2"))}</p></div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6"><div class="bg-slate-800 rounded-2xl p-8 text-center border border-slate-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all hover:-translate-y-1"><span class="block text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent" data-svelte-h="svelte-1fy3urh">8+</span> <span class="text-slate-500 text-sm">${escape($t("about.yearsExp"))}</span></div> <div class="bg-slate-800 rounded-2xl p-8 text-center border border-slate-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all hover:-translate-y-1"><span class="block text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent" data-svelte-h="svelte-m85nfd">15+</span> <span class="text-slate-500 text-sm">${escape($t("about.projectsCompleted"))}</span></div> <div class="bg-slate-800 rounded-2xl p-8 text-center border border-slate-700 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all hover:-translate-y-1"><span class="block text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent" data-svelte-h="svelte-16l0jf5">20+</span> <span class="text-slate-500 text-sm">${escape($t("about.technologies"))}</span></div></div></div></div></section>  <section id="experience" class="py-24 bg-slate-800/50"><div class="max-w-6xl mx-auto px-6"><h2 class="text-4xl font-bold mb-12 relative inline-block">${escape($t("experience.title"))} <span class="absolute -bottom-3 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full"></span></h2> <div class="space-y-8 pl-8 border-l-2 border-gradient-to-b from-blue-500 via-purple-500 to-cyan-500">${each(experiences, (exp, i) => {
    return `<div class="${"relative " + escape(
      "opacity-0 translate-x-8",
      true
    ) + " transition-all duration-500"}" style="${"transition-delay: " + escape(i * 150, true) + "ms"}"><div class="absolute -left-10 top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 shadow-lg shadow-blue-500/50"></div> <div class="bg-slate-800 rounded-2xl p-8 border border-slate-700"><div class="flex flex-wrap justify-between items-start gap-4 mb-6"><h3 class="text-2xl font-bold text-white">${escape(exp.company)}</h3> <span class="text-blue-400 font-semibold">${escape(exp.period)}</span></div> ${each(exp.projects, (project) => {
      return `<div class="bg-slate-900/50 rounded-xl p-6 mb-4 border border-slate-700 last:mb-0"><h4 class="text-lg font-semibold text-white mb-2">${escape(project.name)}</h4> <span class="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">${escape(project.role)}</span> <p class="text-slate-400 mb-4 text-sm">${escape(project.description)}</p> ${project.keyProjects ? `<ul class="space-y-2 mb-4">${each(project.keyProjects, (keyProject) => {
        return `<li class="text-slate-400 text-sm flex items-start gap-2"><span class="text-cyan-400 mt-1" data-svelte-h="svelte-nt68rs">▸</span> ${escape(keyProject)} </li>`;
      })} </ul>` : ``} <div class="flex flex-wrap gap-2">${each(project.technologies, (tech) => {
        return `<span class="bg-blue-500/10 text-blue-400 px-3 py-1.5 rounded-full text-xs font-medium border border-blue-500/20">${escape(tech)}</span>`;
      })}</div> </div>`;
    })}</div> </div>`;
  })}</div></div></section>  <section id="skills" class="py-24"><div class="max-w-6xl mx-auto px-6"><h2 class="text-4xl font-bold mb-12 relative inline-block">${escape($t("skills.title"))} <span class="absolute -bottom-3 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full"></span></h2> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"><div class="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-purple-500 hover:-translate-y-1 transition-all"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2"><span class="text-2xl" data-svelte-h="svelte-1md6vkd">🎨</span> ${escape($t("skills.frontend"))}</h3> <div class="flex flex-wrap gap-2">${each(skills.frontend, (skill) => {
    return `<span class="bg-purple-500/10 text-purple-400 px-3 py-1.5 rounded-full text-sm font-medium border border-purple-500/20 hover:bg-purple-500/20 transition-all">${escape(skill)}</span>`;
  })}</div></div> <div class="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-blue-500 hover:-translate-y-1 transition-all"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2"><span class="text-2xl" data-svelte-h="svelte-ilodbd">⚙️</span> ${escape($t("skills.backend"))}</h3> <div class="flex flex-wrap gap-2">${each(skills.backend, (skill) => {
    return `<span class="bg-blue-500/10 text-blue-400 px-3 py-1.5 rounded-full text-sm font-medium border border-blue-500/20 hover:bg-blue-500/20 transition-all">${escape(skill)}</span>`;
  })}</div></div> <div class="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-green-500 hover:-translate-y-1 transition-all"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2"><span class="text-2xl" data-svelte-h="svelte-2073lz">🗄️</span> ${escape($t("skills.database"))}</h3> <div class="flex flex-wrap gap-2">${each(skills.database, (skill) => {
    return `<span class="bg-green-500/10 text-green-400 px-3 py-1.5 rounded-full text-sm font-medium border border-green-500/20 hover:bg-green-500/20 transition-all">${escape(skill)}</span>`;
  })}</div></div> <div class="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-orange-500 hover:-translate-y-1 transition-all"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2"><span class="text-2xl" data-svelte-h="svelte-18zkvsj">📱</span> ${escape($t("skills.mobile"))}</h3> <div class="flex flex-wrap gap-2">${each(skills.mobile, (skill) => {
    return `<span class="bg-orange-500/10 text-orange-400 px-3 py-1.5 rounded-full text-sm font-medium border border-orange-500/20 hover:bg-orange-500/20 transition-all">${escape(skill)}</span>`;
  })}</div></div> <div class="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-cyan-500 hover:-translate-y-1 transition-all"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2"><span class="text-2xl" data-svelte-h="svelte-6trpby">🚀</span> ${escape($t("skills.devops"))}</h3> <div class="flex flex-wrap gap-2">${each(skills.devops, (skill) => {
    return `<span class="bg-cyan-500/10 text-cyan-400 px-3 py-1.5 rounded-full text-sm font-medium border border-cyan-500/20 hover:bg-cyan-500/20 transition-all">${escape(skill)}</span>`;
  })}</div></div> <div class="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-pink-500 hover:-translate-y-1 transition-all"><h3 class="text-lg font-semibold mb-4 flex items-center gap-2"><span class="text-2xl" data-svelte-h="svelte-wzkfh1">🔧</span> ${escape($t("skills.other"))}</h3> <div class="flex flex-wrap gap-2">${each(skills.other, (skill) => {
    return `<span class="bg-pink-500/10 text-pink-400 px-3 py-1.5 rounded-full text-sm font-medium border border-pink-500/20 hover:bg-pink-500/20 transition-all">${escape(skill)}</span>`;
  })}</div></div></div></div></section>  <section id="education" class="py-24 bg-slate-800/50"><div class="max-w-6xl mx-auto px-6"><h2 class="text-4xl font-bold mb-12 relative inline-block">${escape($t("education.title"))} <span class="absolute -bottom-3 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full"></span></h2> <div class="${"bg-slate-800 rounded-2xl p-10 border border-slate-700 max-w-2xl " + escape(
    "opacity-0 translate-y-8",
    true
  ) + " transition-all duration-500"}"><div class="flex items-center gap-8"><span class="text-6xl" data-svelte-h="svelte-1vyxqfi">🎓</span> <div><h3 class="text-2xl font-bold text-white mb-2">${escape(education.degree)}</h3> <p class="text-slate-400">${escape(education.university)}</p></div></div></div></div></section>  <section id="contact" class="py-24"><div class="max-w-6xl mx-auto px-6"><h2 class="text-4xl font-bold mb-12 relative inline-block">${escape($t("contact.title"))} <span class="absolute -bottom-3 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full"></span></h2> <div class="grid md:grid-cols-2 gap-6"><a href="${"mailto:" + escape(contact.email, true)}" class="bg-slate-800 rounded-2xl p-8 border border-slate-700 flex flex-col items-center text-center hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all no-underline"><span class="text-4xl mb-4" data-svelte-h="svelte-1xuc7ll">✉️</span> <span class="text-slate-500 text-sm mb-2">${escape($t("contact.email"))}</span> <span class="text-white font-medium">${escape(contact.email)}</span></a> <a href="${"tel:" + escape(contact.phone, true)}" class="bg-slate-800 rounded-2xl p-8 border border-slate-700 flex flex-col items-center text-center hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 hover:-translate-y-1 transition-all no-underline"><span class="text-4xl mb-4" data-svelte-h="svelte-11j3kx3">📱</span> <span class="text-slate-500 text-sm mb-2">${escape($t("contact.phone"))}</span> <span class="text-white font-medium">${escape(contact.phone)}</span></a> <div class="bg-slate-800 rounded-2xl p-8 border border-slate-700 flex flex-col items-center text-center"><span class="text-4xl mb-4" data-svelte-h="svelte-1n4d6bf">📍</span> <span class="text-slate-500 text-sm mb-2">${escape($t("contact.location"))}</span> <span class="text-white font-medium">${escape(contact.address)}</span></div> <div class="bg-slate-800 rounded-2xl p-8 border border-slate-700 flex flex-col items-center text-center"><span class="text-4xl mb-4" data-svelte-h="svelte-16o58hj">🎂</span> <span class="text-slate-500 text-sm mb-2">${escape($t("contact.birthday"))}</span> <span class="text-white font-medium">${escape(contact.birthday)}</span></div></div></div></section>  <footer class="bg-slate-800 border-t border-slate-700 py-8"><div class="max-w-6xl mx-auto px-6"><div class="flex flex-col items-center gap-4">${validate_component(Logo, "Logo").$$render($$result, { size: 40 }, {}, {})} <p class="text-slate-400">${escape($t("footer.rights"))}</p> <div class="flex items-center gap-4 text-slate-500"><a href="${"mailto:" + escape(contact.email, true)}" class="hover:text-white transition-colors">${escape($t("contact.email"))}</a> <span data-svelte-h="svelte-1e2i4m">|</span> <span>${escape($t("footer.role"))}</span></div></div></div></footer></main>`;
});
export {
  Page as default
};
