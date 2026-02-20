import { c as create_ssr_component, b as add_attribute, a as subscribe, e as escape, d as each, v as validate_component } from "../../chunks/ssr.js";
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
      exp1_p1_name: "TTB Project, Retail Lending Team, Common Apply Team, Tep Team",
      exp1_p1_desc: "• Retail Lending Team: Developed Web Applications (Loan, Credit Card) with React.\n• Common Apply Team: Developed Native iOS apps (NTB - New To Bank) with Swift.\n• Tep Team: Led the development of a Cross-Platform internal application (Customer 360) using Flutter for TTB Bank's Call Center and Branch employees, implementing complex enterprise features including 360-degree Customer Profiles, Product Holdings (Assets & Liabilities), Touchpoint & Case History, Customer Suitability & Insights, RBAC Permissions, CRM Integration, and Personalized Messaging to enhance customer service capabilities.",
      exp1_p2_name: "a-chieve social enterprise",
      exp1_p2_desc: "Developed comprehensive platforms for the social enterprise, including:\n• Student Web Application: A platform for students and interested users to discover career paths and access guidance tools.\n• 'To School' Web Application: A dedicated portal enabling teachers to monitor, track, and support students under their care.\n• Admin CMS: A Content Management System for administrators to update system details, articles, and platform content.\n• Reporting System: Automated data reporting dashboards tailored for both teachers and administrators.",
      exp1_p3_name: "KhunaiStory (Personal Project)",
      exp1_p3_desc: "Developed an English learning application (app.khunaistory.com) through engaging stories. Features include AI-powered role-playing with avatars, interactive story reading, and flashcards for vocabulary practice (Oxford 3000). Built with a focus on immersive user experience and educational technology.",
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
      exp1_p1_name: "โปรเจกต์ TTB (ทีม Retail Lending, ทีม Common Apply, ทีม Tep)",
      exp1_p1_desc: "• ทีม Retail Lending: พัฒนาเว็บแอปพลิเคชัน (ระบบสินเชื่อและบัตรเครดิต) ด้วย React\n• ทีม Common Apply: พัฒนาแอปพลิเคชัน Native iOS (สำหรับลูกค้า NTB - New To Bank) ด้วย Swift\n• ทีม Tep: นำทีมพัฒนาแอปพลิเคชัน Cross-Platform ภายในองค์กร (Customer 360) ด้วย Flutter สำหรับพนักงาน Call Center และพนักงานหน้าสาขาของธนาคาร TTB โดยอิมพลีเมนต์ฟีเจอร์ระดับ Enterprise ที่ซับซ้อน เช่น โปรไฟล์ลูกค้าแบบ 360 องศา, ข้อมูลผลิตภัณฑ์ที่ถือครอง (สินทรัพย์และหนี้สิน), ประวัติ Touchpoint และ Case, ระบบจัดการสิทธิ์ (RBAC), ข้อมูลเชิงลึกและ Customer Suitability, ระบบข้อความเฉพาะบุคคล (Personalized Message) และการเชื่อมต่อระบบ CRM เพื่อยกระดับประสิทธิภาพการให้บริการลูกค้า",
      exp1_p2_name: "a-chieve (วิสาหกิจเพื่อสังคม)",
      exp1_p2_desc: "พัฒนาระบบแพลตฟอร์มแบบครบวงจร ประกอบด้วย:\n• Web Application สำหรับนักเรียนนักศึกษา: พื้นที่แนะแนวและเครื่องมือค้นหาตัวเองสำหรับผู้ที่สนใจ\n• To School Web Application: แพลตฟอร์มสำหรับครูแนะแนวเพื่อติดตามและดูแลนักเรียนในความดูแล\n• Admin CMS (Content Management System): ระบบจัดการข้อมูลหลังบ้านสำหรับ Admin ในการอัปเดตรายละเอียดระบบและบทความต่างๆ\n• Report System: ระบบรายงานและสรุปผลข้อมูลสำหรับทั้งครูและ Admin",
      exp1_p3_name: "โปรเจกต์ KhunaiStory (โปรเจกต์ส่วนตัว)",
      exp1_p3_desc: "พัฒนาแอปพลิเคชันเรียนภาษาอังกฤษ (app.khunaistory.com) ผ่านการอ่านเรื่องราวสนุกๆ มีฟีเจอร์ AI จำลองสถานการณ์ (Role-play) โต้ตอบกับตัวละคร ระบบอ่านเรื่องราวแบบมีเสียงบรรยาย และแฟลชการ์ดสำหรับฝึกฝนคำศัพท์ (Oxford 3000) เน้นการสร้างประสบการณ์ที่เสมือนจริงและนำเทคโนโลยีมาใช้กับการศึกษา",
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
  let $t, $$unsubscribe_t;
  let $locale, $$unsubscribe_locale;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_locale = subscribe(locale, (value) => $locale = value);
  const profileImages = ["/profile-1.png", "/profile-2.png", "/profile-3.png"];
  let currentImageIndex = 0;
  const parseUrl = (text) => {
    if (!text) return "";
    const urlRegex = /(https?:\/\/[^\s]+|[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?)/g;
    return text.replace(urlRegex, (url) => {
      let href = url;
      if (!href.startsWith("http://") && !href.startsWith("https://")) {
        href = "https://" + href;
      }
      const lastChar = href.slice(-1);
      let trailing = "";
      if ([".", ",", ")", "]"].includes(lastChar)) {
        href = href.slice(0, -1);
        url = url.slice(0, -1);
        trailing = lastChar;
      }
      return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="text-white hover:text-zinc-300 underline underline-offset-2 transition-colors relative z-10">${url}</a>${trailing}`;
    });
  };
  const experiences = [
    {
      company: "ODT",
      period: "May 2022 - Present",
      projects: [
        {
          name: "TTB Project, Retail Lending Team, Common Apply Team",
          role: "Frontend",
          description: "Development Web Application (Loan, Credit card Feature) with React, Development Native Application (NTB Feature) with IOS Swift, Development Cross Platform (Customer360 feature) with Flutter",
          technologies: ["React", "Swift (IOS)", "Flutter"]
        },
        {
          name: "a-chieve social enterprise",
          role: "Full Stack",
          description: "Developing a Web Application to Support Career and Life Guidance for Thai Students, Developing a Tool and Report for Career Counselors to Assess Their Students, Developing a Tools and Report support Admin",
          technologies: [
            "Vue",
            "Nuxt",
            "Strapi",
            "Go",
            "GitLab CI/CD",
            "Kubernetes",
            "ArgoCD",
            "Airflow",
            "Superset"
          ]
        },
        {
          name: "KhunaiStory",
          role: "Full Stack",
          description: "Developed an English learning application through engaging stories with AI-powered role-playing, interactive story reading, and flashcards.",
          technologies: ["SvelteKit", "Supabase", "AI (LLM)", "Tailwind CSS"]
        }
      ]
    },
    {
      company: "Hi-Q Food Products Co., Ltd.",
      period: "Oct 2019 – May 2022",
      projects: [
        {
          name: "Internal and Public Application",
          role: "Senior Programmer & Technical Lead",
          description: "Team management with Agile and daily meetups with Scrum. Development of authorization systems using sessions, cookies, and JWT. Development of SSR applications using SvelteKit and database with PostgreSQL, Prisma ORM. Implementation of authorization systems using Session Cookie Authentication, JWT Authentication, and Keycloak. On-premises infrastructure setup network configuration. Use Proxmox to Manage Instant of VM. Project deployment management using Docker Nginx. Some Projects Deployment on Kubernetes. Build and deploy automation using Jenkins or GitLab CI. Reverse proxy implementation using Nginx Proxy Manager and Manage DNS with PowerDNS.",
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
            "Felina Canino Application: Developed by Svelte Frontend Framework use NestJS to Develop Backend, integrating with Navision API and storage data with MongoDB and MS SQL.",
            "Line Official Account (Point Reward System): Full-stack development using Svelte Implement with Line Liff Framework.",
            "HR Management Platform: Built an Express backend with MongoDB via Strapi V2.",
            "Mobile Survey Application: Created a Flutter-based solution with Firebase integration.",
            "Jobber Application: Optimized backend with Fastify using dual database architecture."
          ]
        }
      ]
    },
    {
      company: "Saraff Infotech Co., Ltd (site AIS)",
      period: "Jul 2018 - Oct 2019",
      projects: [
        {
          name: "AIS Project",
          role: "Frontend",
          description: "Develop web Application run on Kiosk, Develop API service",
          technologies: ["Angular 6", "Redux", "Bootstrap 4", "HapiJS", "NodeJS"]
        }
      ]
    },
    {
      company: "Nextwaver.NET",
      period: "Jan 2018 - Apr 2018",
      projects: [
        {
          name: "AIS Project",
          role: "Frontend",
          description: "Develop web application PHR Profile, Develop Text recognition for Save profile in the book Profile, Develop Deep learning for Training software, Manage Data using .Net Core",
          technologies: ["PHR", "Python", "C# .Net Core"]
        }
      ]
    }
  ];
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
  const contact = {
    phone: "+6692-947-9535",
    email: "nakarin.weerasak@gmail.com"
  };
  $$unsubscribe_t();
  $$unsubscribe_locale();
  return ` ${$$result.head += `<!-- HEAD_svelte-peywps_START -->${$$result.title = `<title>Nakarin Weerasak | Software Engineer</title>`, ""}<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&amp;family=Inter:wght@400;500;600&amp;display=swap" rel="stylesheet"><!-- HEAD_svelte-peywps_END -->`, ""} <main class="min-h-screen bg-[#000000] text-[#A1A1AA] font-['Inter'] selection:bg-zinc-800/50 selection:text-white overflow-x-hidden relative"> <div class="fixed inset-0 z-0 pointer-events-none" style="background-image: radial-gradient(rgba(255, 255, 255, 0-[0].1) 1px, transparent 1px); background-size: 32px 32px; opacity: 0.3;"></div>  <div class="fixed top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white opacity-[0.02] blur-[150px] pointer-events-none z-0 rounded-full"></div> <div class="relative z-10"> <header class="${"fixed top-0 left-0 right-0 z-50 bg-[#000000]/80 backdrop-blur-md transition-all " + escape(
    "py-6",
    true
  )}"><div class="max-w-6xl mx-auto px-6 flex justify-between items-center"><a href="/" class="text-xl font-['Outfit'] font-semibold text-white tracking-tight no-underline hover:opacity-80 transition-opacity" data-svelte-h="svelte-omk2da">Nakarin.</a> <nav class="hidden md:flex gap-8 items-center"><a href="#about" class="text-sm font-medium text-zinc-400 hover:text-white transition-colors">${escape($t("nav.about"))}</a> <a href="#experience" class="text-sm font-medium text-zinc-400 hover:text-white transition-colors">${escape($t("nav.experience"))}</a> <a href="#skills" class="text-sm font-medium text-zinc-400 hover:text-white transition-colors">${escape($t("nav.skills"))}</a> <a href="#contact" class="text-sm font-medium text-zinc-400 hover:text-white transition-colors">${escape($t("nav.contact"))}</a>  <button class="ml-4 px-3 py-1.5 rounded-full border border-zinc-800 bg-[#0A101D] text-xs font-semibold text-zinc-300 hover:text-white hover:border-zinc-600 transition-all flex items-center gap-2 group"><span${add_attribute("class", $locale === "en" ? "text-white" : "text-zinc-500", 0)}>EN</span> <span class="text-zinc-700" data-svelte-h="svelte-1ye3l6u">/</span> <span${add_attribute("class", $locale === "th" ? "text-white" : "text-zinc-500", 0)}>TH</span></button></nav></div></header>  <section class="min-h-screen flex flex-col justify-center pt-32 pb-12 px-6 max-w-6xl mx-auto relative"><div class="grid lg:grid-cols-12 gap-12 items-center"> <div class="${"lg:col-span-7 " + escape(
    "opacity-0 translate-y-4",
    true
  ) + " transition-all duration-1000 ease-out z-10"}"><div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800/80 bg-zinc-900/30 mb-8 backdrop-blur-sm" data-svelte-h="svelte-fyrytz"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> <span class="text-xs font-medium text-zinc-300">Open to new opportunities</span></div> <h1 class="text-5xl md:text-7xl lg:text-[5.5rem] font-['Outfit'] font-semibold leading-[1.1] text-white tracking-tight mb-6">Software Engineer <br> <span class="text-zinc-500">${escape($t("hero.subtitle"))}</span></h1> <p class="text-lg text-zinc-400 mb-10 max-w-xl font-light leading-relaxed">${escape($t("about.p1"))}</p> <div class="flex items-center gap-5"><a href="#experience" class="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-colors text-sm">${escape($t("hero.viewWork"))}</a> <a href="#contact" class="px-6 py-3 border border-zinc-800 text-white font-semibold rounded-lg hover:bg-zinc-900 transition-colors text-sm">${escape($t("hero.getInTouch"))}</a></div></div>  <div class="${"lg:col-span-5 " + escape(
    "opacity-0 translate-y-8",
    true
  ) + " transition-all duration-1000 delay-300 ease-out"}"><div class="relative w-full aspect-square md:aspect-4/3 lg:aspect-square rounded-3xl border border-zinc-800/80 bg-zinc-900/20 group"><div class="absolute inset-1.5 bg-[#0A101D] rounded-[2.8rem] z-0 overflow-hidden">${each(profileImages, (src, i) => {
    return `<img${add_attribute("src", src, 0)} alt="Nakarin Weerasak" class="${"absolute inset-0 w-full h-full object-cover grayscale-30 group-hover:grayscale-0 transition-opacity duration-1000 " + escape(
      i === currentImageIndex ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0",
      true
    )}">`;
  })}</div>  <div class="absolute -top-4 -left-4 z-20 bg-[#0A101D] border border-zinc-800 rounded-2xl w-14 h-14 flex items-center justify-center shadow-xl backdrop-blur-md transform -rotate-12 group-hover:-rotate-6 transition-all duration-300" data-svelte-h="svelte-15mlfse"><svg class="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg></div> <div class="absolute -bottom-4 -right-2 z-20 bg-[#0A101D] border border-zinc-800 rounded-2xl w-14 h-14 flex items-center justify-center shadow-xl backdrop-blur-md transform rotate-12 group-hover:rotate-6 transition-all duration-300" data-svelte-h="svelte-g0ceoc"><svg class="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div> <div class="absolute top-1/2 -right-6 z-20 bg-[#0A101D] border border-zinc-800 rounded-2xl w-14 h-14 flex items-center justify-center shadow-xl backdrop-blur-md transform rotate-6 group-hover:translate-x-2 transition-all duration-300 md:flex" data-svelte-h="svelte-fxmff0"><svg class="w-7 h-7 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg></div></div></div></div></section>  <section id="about" class="py-24 px-6 max-w-6xl mx-auto"><div class="grid grid-cols-1 md:grid-cols-3 gap-4"> <div class="md:col-span-2 rounded-3xl border border-zinc-800/80 bg-zinc-900/30 p-8 md:p-12 hover:border-zinc-700 transition-colors group"><h2 class="text-2xl font-['Outfit'] font-semibold text-white mb-6">${escape($t("about.title"))}</h2> <p class="text-zinc-400 text-lg leading-relaxed font-light mb-6 group-hover:text-zinc-300 transition-colors">${escape($t("about.p1"))}</p> <p class="text-zinc-400 text-lg leading-relaxed font-light group-hover:text-zinc-300 transition-colors">${escape($t("about.p2"))}</p></div>  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-auto"><div class="bg-zinc-900/40 rounded-3xl p-6 border border-zinc-800/80 hover:bg-zinc-800/80 hover:border-slate-500/30 transition-all flex flex-col justify-center items-center h-full"><span class="block text-4xl font-['Outfit'] font-extrabold text-white mb-1" data-svelte-h="svelte-77kd8v">8+</span> <span class="text-zinc-500 font-medium text-sm tracking-wide uppercase">${escape($t("about.yearsExp"))}</span></div> <div class="bg-zinc-900/40 rounded-3xl p-6 border border-zinc-800/80 hover:bg-zinc-800/80 hover:border-slate-500/30 transition-all flex flex-col justify-center items-center h-full"><span class="block text-4xl font-['Outfit'] font-extrabold text-white mb-1" data-svelte-h="svelte-yzas8j">15+</span> <span class="text-zinc-500 font-medium text-sm tracking-wide uppercase">${escape($t("about.projectsCompleted"))}</span></div></div></div></section>  <section id="experience" class="py-24 px-6 max-w-6xl mx-auto border-t border-zinc-900"><div class="flex flex-col md:flex-row gap-12 md:gap-24"> <div class="w-full md:w-1/4"><h2 class="text-sm font-semibold text-zinc-500 uppercase tracking-widest sticky top-32">${escape($t("experience.title"))}</h2></div> <div class="w-full md:w-3/4 space-y-16">${each(experiences, (exp, idx) => {
    return `<div class="group relative"><div class="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2"><h3 class="text-2xl font-['Outfit'] font-semibold text-white">${escape($t(`experience.exp${idx + 1}_company`) || exp.company)}</h3> <span class="text-zinc-500 font-mono text-sm">${escape($t(`experience.exp${idx + 1}_period`) || exp.period)}</span></div> <div class="space-y-10">${each(exp.projects, (project, pIdx) => {
      return `<div><h4 class="text-lg font-medium text-zinc-200 mb-1">${escape($t(`experience.exp${idx + 1}_p${pIdx + 1}_name`) || project.name)}</h4> <p class="text-sm text-zinc-500 mb-4">${escape(project.role === "Frontend" ? $t("experience.role_frontend") : project.role === "Full Stack" ? $t("experience.role_fullstack") : project.role === "Senior Programmer & Technical Lead" ? $t("experience.role_senior_lead") : project.role)}</p> <p class="text-zinc-400 font-light leading-relaxed text-sm mb-5 max-w-2xl whitespace-pre-line"><!-- HTML_TAG_START -->${parseUrl($t(`experience.exp${idx + 1}_p${pIdx + 1}_desc`) || project.description)}<!-- HTML_TAG_END --></p> ${project.keyProjects ? `<ul class="space-y-3 mb-6">${each(project.keyProjects, (keyProject, kpIdx) => {
        return `<li class="text-zinc-400 text-sm font-light flex items-start leading-relaxed"><span class="text-zinc-700 mr-3 mt-1" data-svelte-h="svelte-1qk3wrq">-</span> <span>${escape($t(`experience.exp${idx + 1}_kp${kpIdx + 1}`) || keyProject)}</span> </li>`;
      })} </ul>` : ``} <div class="flex flex-wrap gap-2">${each(project.technologies, (tech) => {
        return `<span class="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 text-[11px] font-mono tracking-wide">${escape(tech)}</span>`;
      })}</div> </div>`;
    })}</div> </div>`;
  })}</div></div></section>  <section id="skills" class="py-24 px-6 max-w-6xl mx-auto border-t border-zinc-900"><div class="flex flex-col md:flex-row gap-12 md:gap-24 mb-12"><div class="w-full md:w-1/4"><h2 class="text-sm font-semibold text-zinc-500 uppercase tracking-widest sticky top-32">${escape($t("skills.title"))}</h2></div> <div class="w-full md:w-3/4" data-svelte-h="svelte-zlfmpv"><p class="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">A comprehensive, adaptable toolset optimized for building end-to-end
            full-stack architectures.</p></div></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">${each(Object.entries(skills), ([category, items]) => {
    return `<div class="rounded-2xl border border-zinc-800/80 bg-zinc-900/20 p-8 hover:bg-zinc-900/40 transition-colors"><h3 class="text-lg font-['Outfit'] font-semibold mb-6 text-white capitalize">${escape($t("skills." + category) || category)}</h3> <ul class="space-y-3">${each(items, (skill) => {
      return `<li class="text-zinc-400 font-light text-sm flex items-center group cursor-default"><span class="w-1.5 h-1.5 rounded-full bg-zinc-800 mr-3 group-hover:bg-white transition-colors"></span> ${escape(skill)} </li>`;
    })}</ul> </div>`;
  })}</div></section>  <section id="education" class="py-24 px-6 relative"><div class="max-w-3xl mx-auto"><div class="bg-linear-to-br from-blue-900/40 via-purple-900/20 to-slate-900/40 backdrop-blur-2xl rounded-[3rem] p-10 md:p-14 border border-white/10 text-center relative overflow-hidden group"> <div class="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-700"></div> <h2 class="text-2xl font-['Outfit'] font-bold text-blue-400 mb-8 uppercase tracking-widest text-sm">${escape($t("education.title"))}</h2> <div class="relative z-10"><span class="text-6xl mb-6 block drop-shadow-lg" data-svelte-h="svelte-gxmo79">🎓</span> <h3 class="text-3xl md:text-4xl font-['Outfit'] font-extrabold text-white mb-4 leading-tight">${escape($t("education.degree"))}</h3> <p class="text-xl text-slate-400">${escape($t("education.university"))}</p></div></div></div></section>  <section id="contact" class="pt-24 pb-12 px-6"><div class="max-w-5xl mx-auto"><h2 class="text-4xl md:text-5xl font-['Outfit'] font-bold mb-16 text-center text-white relative">${escape($t("contact.title"))} <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-linear-to-r from-blue-500 to-purple-500 rounded-full"></div></h2> <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-24"><a href="${"mailto:" + escape(contact.email, true)}" class="bg-zinc-900/30 backdrop-blur-xl rounded-4xl p-8 border border-zinc-800/80 flex flex-col items-center text-center hover:bg-zinc-800/50 hover:border-slate-500/30 hover:-translate-y-2 transition-all group no-underline"><div class="w-14 h-14 rounded-full bg-slate-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" data-svelte-h="svelte-yb8os"><svg class="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div> <span class="text-slate-400 text-sm mb-2 font-medium">${escape($t("contact.email"))}</span> <span class="text-white font-semibold text-sm break-all">${escape(contact.email)}</span></a> <a href="${"tel:" + escape(contact.phone, true)}" class="bg-zinc-900/30 backdrop-blur-xl rounded-4xl p-8 border border-zinc-800/80 flex flex-col items-center text-center hover:bg-zinc-800/50 hover:border-slate-500/30 hover:-translate-y-2 transition-all group no-underline"><div class="w-14 h-14 rounded-full bg-slate-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" data-svelte-h="svelte-vzriki"><svg class="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div> <span class="text-slate-400 text-sm mb-2 font-medium">${escape($t("contact.phone"))}</span> <span class="text-white font-semibold">${escape(contact.phone)}</span></a> <div class="bg-zinc-900/30 backdrop-blur-xl rounded-4xl p-8 border border-zinc-800/80 flex flex-col items-center text-center hover:bg-zinc-800/50 transition-all group"><div class="w-14 h-14 rounded-full bg-slate-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" data-svelte-h="svelte-1pa20of"><svg class="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div> <span class="text-slate-400 text-sm mb-2 font-medium">${escape($t("contact.location"))}</span> <span class="text-white font-semibold text-sm">${escape($t("contact.address"))}</span></div> <div class="bg-zinc-900/30 backdrop-blur-xl rounded-4xl p-8 border border-zinc-800/80 flex flex-col items-center text-center hover:bg-zinc-800/50 transition-all group" data-svelte-h="svelte-12wyd5l"><div class="w-14 h-14 rounded-full bg-slate-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"><svg class="w-6 h-6 text-slate-300 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div> <span class="text-slate-400 text-sm mb-2 font-medium">Status</span> <span class="text-white font-semibold text-sm">Available</span></div></div>  <footer class="border-t border-zinc-800/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-zinc-600"><div class="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">${validate_component(Logo, "Logo").$$render($$result, { size: 24 }, {}, {})} <span class="text-sm font-semibold text-white tracking-widest" data-svelte-h="svelte-1oiv7rm">NAKARIN W.</span></div> <p class="font-medium inline-block flex gap-1">${escape($t("footer.rights"))} <span class="hidden md:inline" data-svelte-h="svelte-xlq7l0">Built with SvelteKit.</span></p></footer></div></section></div></main>`;
});
export {
  Page as default
};
