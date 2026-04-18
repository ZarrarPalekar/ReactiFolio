import type {
  ExperienceItem,
  HeroStat,
  NavigationItem,
  ProjectItem,
  SkillCategory,
  SocialLink,
  TestimonialItem,
} from "@/types/portfolio";

export const siteConfig = {
  whatsappMessage:
    "Hey, Zarrar! I came here from your website zarrarpalekar.com",
  name: "Zarrar Palekar",
  title: "Senior Full Stack Engineer & Delivery Lead",
  shortTitle: "Full Stack Developer in India",
  description:
    "Zarrar Palekar is a full stack engineer in India specializing in React, Node.js, TypeScript, enterprise web applications, stakeholder management, and end-to-end product delivery.",
  email: "zarrar@live.in",
  phone: "+91 98673 63215",
  whatsappUrl: `https://wa.me/919867363215?text=${encodeURIComponent(
    "Hey, Zarrar! I came here from your website zarrarpalekar.com",
  )}`,
  location: "Mumbai, India",
  country: "India",
  resumeUrl:
    "https://drive.google.com/file/d/192b3fDbA7bUnrfS4YamCyBVy-qCHl3hI/view?usp=sharing",
  calendlyUrl: "https://calendly.com/meetzarrar",
  githubUrl: "https://github.com/ZarrarPalekar",
  linkedinUrl: "https://www.linkedin.com/in/zarrarpalekar/",
  instagramUrl: "https://www.instagram.com/palekarzarrar/?hl=en",
  siteUrl: "https://www.zarrarpalekar.com/",
  ogImage: "/images/profile/profile.webp",
};

export const navigation: NavigationItem[] = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/#experience", label: "Experience" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export const heroStats: HeroStat[] = [
  { value: "9+", label: "Years building digital products" },
  { value: "E2E", label: "Enterprise and product applications led end to end" },
  {
    value: "4",
    label: "Startups, mid-sized teams, and enterprises partnered with directly",
  },
];

export const socialLinks: SocialLink[] = [
  { href: siteConfig.githubUrl, label: "GitHub" },
  { href: siteConfig.linkedinUrl, label: "LinkedIn" },
  { href: siteConfig.resumeUrl, label: "Resume" },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend + Backend",
    description:
      "Balanced product engineering across interface systems, application logic, APIs, and full-stack architecture.",
    skills: [
      { name: "React", icon: "/images/skills/react.svg" },
      { name: "TypeScript", icon: "/images/skills/typescript.svg" },
      { name: "JavaScript", icon: "/images/skills/javascript.svg" },
      { name: "Redux", icon: "/images/skills/redux.svg" },
      { name: "HTML5", icon: "/images/skills/html-5.svg" },
      { name: "CSS3", icon: "/images/skills/css3.svg" },
    ],
  },
  {
    title: "Enterprise Delivery",
    description:
      "Scalable backend delivery across APIs, databases, legacy modernization, and application ownership at production scale.",
    skills: [
      { name: "Node.js", icon: "/images/skills/nodejs.svg" },
      {
        name: "Express",
        icon: "/images/skills/express.svg",
        iconWrapperClassName: "w-14",
        iconClassName: "drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]",
      },
      {
        name: "MongoDB",
        icon: "/images/skills/mongodb.svg",
        iconClassName:
          "brightness-110 contrast-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.18)]",
      },
      {
        name: "MS SQL",
        icon: "/images/skills/mssql.svg",
        iconClassName:
          "brightness-125 contrast-125 drop-shadow-[0_0_10px_rgba(255,255,255,0.22)]",
      },
      {
        name: ".NET",
        icon: "/images/skills/net.svg",
        iconClassName:
          "brightness-125 contrast-125 drop-shadow-[0_0_10px_rgba(255,255,255,0.22)]",
      },
      { name: "Oracle", icon: "/images/skills/oracle.svg" },
    ],
  },
  {
    title: "Leadership & Execution",
    description:
      "Communication, delivery planning, and engineering workflows that keep stakeholders aligned and teams moving.",
    skills: [
      { name: "Git", icon: "/images/skills/git-icon.svg" },
      { name: "GitHub", icon: "/images/skills/github.svg" },
      { name: "Heroku", icon: "/images/skills/heroku.svg" },
      { name: "Bootstrap", icon: "/images/skills/bootstrap-4.svg" },
      { name: "Sass", icon: "/images/skills/sass-1.svg" },
      {
        name: "Styled Components",
        icon: "/images/skills/styled-components.svg",
      },
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "Azul Arc",
    companyUrl: "https://azularc.com/",
    logo: "/images/experience/aa.webp",
    role: "Senior Software Developer",
    track: "MERN Full Stack Developer",
    stack: "MERN Stack, Context API",
    start: "2022-10-01",
    summary: [
      "Led end-to-end development for enterprise-grade PERN products across frontend, backend, architecture, and delivery quality.",
      "Managed direct client communication, aligned stakeholders on scope, and translated business discussions into executable technical plans.",
    ],
  },
  {
    company: "Syndication Pro",
    companyUrl: "https://syndicationpro.com/",
    logo: "/images/experience/sp.jpg",
    role: "Software Engineer L2",
    track: "MERN Full Stack Developer",
    stack: "MERN Stack, Redux, GraphQL, Apollo",
    start: "2021-06-01",
    end: "2022-10-01",
    summary: [
      "Built and scaled full-stack SaaS modules with MERN, GraphQL, and Apollo across both user-facing flows and backend integration layers.",
      "Led delivery of new modules from scratch while coordinating expectations, technical decisions, and cross-functional communication.",
    ],
  },
  {
    company: "Euclid - Tenders Info",
    companyUrl: "https://www.tendersinfo.com/",
    logo: "/images/experience/ti.jpg",
    role: "Senior Software Developer",
    track: ".NET Full Stack Developer",
    stack: ".NET, C#, MS SQL",
    start: "2019-04-01",
    end: "2021-06-01",
    summary: [
      "Delivered enterprise CRM and CMS features across business-critical web applications with ownership spanning UI, backend, and data workflows.",
      "Built APIs, mailer systems, and custom modules that improved connected client experiences and internal operational efficiency.",
      "Worked closely with business stakeholders to understand requirements deeply and turn them into reliable production solutions.",
    ],
  },
  {
    company: "Tech Mahindra",
    companyUrl: "https://www.techmahindra.com/",
    logo: "/images/experience/techmahindra.svg",
    role: "Software Engineer",
    track: ".NET Full Stack Developer",
    stack: ".NET, C#, Oracle PL/SQL",
    start: "2017-03-01",
    end: "2019-04-01",
    summary: [
      "Contributed to enterprise CRM and CMS platforms while supporting backend services, database workflows, and downstream UI integrations.",
      "Strengthened delivery standards with better engineering practices, clear communication, and dependable execution in large-team environments.",
    ],
  },
];

export const testimonials: TestimonialItem[] = [
  {
    author: "Swapnil Patil",
    role: "Sr Software Developer",
    company: "Azul Arc",
    relationship: "Swapnil reported to Zarrar directly",
    image: "/images/testimonials/swapnil.jpeg",
    quote:
      "I had the privilege of working with Zarrar, who seamlessly balances his role as a Team Lead and Scrum Master while also being an AI enthusiast constantly exploring ways to bring innovation into our projects. As a leader, Zarrar stands out for his ability to foster collaboration, encourage open communication, and guide the team with clarity and purpose. He has an exceptional knack for breaking down complex challenges into achievable steps, ensuring that everyone stays aligned and motivated. What truly sets him apart is his passion for AI and emerging technologies. He actively shares insights, experiments with new ideas, and inspires the team to think beyond conventional solutions. This forward-thinking mindset has helped us improve processes, deliver smarter solutions, and stay ahead of the curve.",
  },
  {
    author: "Sadaf Mirza",
    role: "Senior Software Engineer",
    company: "AzulArc",
    relationship: "Sadaf reported to Zarrar directly",
    image: "/images/testimonials/sadaf.jpeg",
    quote:
      "I've had the privilege of working with Zarrar as my team lead, and it has truly been an enriching experience. From the very beginning, Zarrar has been very supportive and approachable, always ready to lend a hand or share his insights whenever needed. His straightforward approach makes communication clear and effective, while also creating a space where ideas and opinions can be freely expressed. What stands out the most about Zarrar is not only his impressive skill set and professionalism but also his genuine willingness to help others grow. He takes the time to guide, mentor, and ensure the team feels supported in every challenge. His ability to balance technical expertise with empathy and encouragement has had a huge impact on my own growth and confidence at work. Zarrar is more than just a great leader, he's someone who inspires trust, collaboration, and continuous learning within the team. I feel grateful to have worked under his guidance and would highly recommend him to anyone looking for a strong, supportive, and impactful leader.",
  },
  {
    author: "Nihar Makwana",
    role: "Sr. Software Developer",
    company: "AzulArc",
    relationship: "Nihar reported to Zarrar directly",
    image: "/images/testimonials/nihar.jpeg",
    quote:
      "I've had the pleasure of working with Zarrar for nearly three years, first as a peer and later as a member of his team. Throughout this time, I've seen firsthand that Zarrar is not only a highly skilled and intelligent engineer but also a natural leader. As a team leader, Zarrar excels at creating an environment where everyone can thrive. He consistently supported our team, advocated for our needs, and encouraged us to grow while also ensuring we maintained a healthy work-life balance. His approachability and willingness to help made him an incredibly effective leader; I never felt intimidated, and it was always easy to seek his guidance. In my seven years of professional experience, Zarrar stands out as the best colleague and team leader I've had the honor of working with. His commitment to both the team's success and individual well-being makes him an exceptional asset.",
  },
  {
    author: "Premraj Tripute",
    role: "Full Stack Developer",
    relationship: "Premraj reported to Zarrar directly",
    image: "/images/testimonials/premraj.jpeg",
    quote:
      "I'm incredibly fortunate to be working alongside Zarrar! As a colleague at Azul Arc, they've proven to be a truly exceptional leader and a master of project management. Their deep knowledge of software development, especially with the PERN stack and DevOps, is a huge asset to our team. They've been instrumental in guiding our projects, and their expertise in agile practices ensures we consistently stay on track and deliver high-quality work. What truly sets Zarrar apart is his fantastic approach to team management. They foster a collaborative and positive environment, always providing clear direction and empowering everyone to do their best work. Their ability to lead, mentor, and motivate makes our team incredibly effective.",
  },
  {
    author: "Nikhil Joshi",
    role: "International Business Development",
    relationship: "Nikhil worked with Zarrar but on different teams",
    image: "/images/testimonials/nikhil.jpeg",
    quote:
      "During the time of working alongside Zarrar at Euclid, I was instantly awed by his unwavering zest to go deep into requirements, his working on the problems encountered and coming out with a solution. A curious self learner that he is and technical brilliance that he brought to the table, resonates well with the progress he has done till date and definitely way to go. Onward and Upwards.",
  },
  {
    author: "Shir Avidan",
    role: "Sr. Software Product Manager",
    relationship: "Shir managed Zarrar directly",
    image: "/images/testimonials/shir.jpeg",
    quote:
      "Zarrar has skillfully navigated through the project's most challenging aspects. His effective communication and proactive problem-solving reflect his strong commitment to excellence and delivering results. Zarrar's hard work and dedication have greatly contributed to the ongoing success of our organization.",
  },
  {
    author: "Shubham Singh",
    role: "Senior Software Engineer",
    company: "SponsorCloud",
    relationship: "Shubham worked with Zarrar on the same team",
    image: "/images/testimonials/shubham.jpeg",
    quote:
      "Zarrar is very passionate and has a great vision for his work. His focus keeps everything moving smoothly, he makes sure all the deadlines are met and makes sure that whatever project he is working on meets the highest standards. His helping nature to other colleagues makes him a more loving employee and person.",
  },
];

export const projects: ProjectItem[] = [
  {
    slug: "e-shop-app",
    name: "E-Shop App",
    image: "/images/projects/eshopapp.webp",
    date: "March 2021",
    summary:
      "A MERN e-commerce experience with payments, Redux state, and responsive UX.",
    description:
      "Full-stack commerce app with sandbox PayPal checkout, product discovery, and an admin-friendly workflow.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Redux", "JWT"],
    repoUrl: "https://github.com/ZarrarPalekar/ProShop",
  },
  {
    slug: "dev-social-app",
    name: "Dev Social App",
    image: "/images/projects/1DevConnApp.webp",
    date: "November 2020",
    summary:
      "A social platform for developers with rich interaction flows and profile management.",
    description:
      "Developer-focused social product that combines community features, profiles, and state-heavy frontend flows.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Redux", "JWT"],
    repoUrl: "https://github.com/ZarrarPalekar/SocialDevApp",
  },
  {
    slug: "shopping-list-app",
    name: "Shopping List App",
    image: "/images/projects/7MernShopList.webp",
    date: "October 2020",
    summary:
      "A simple but polished list-management experience backed by the MERN stack.",
    description:
      "Productivity-focused shopping list application designed to keep CRUD workflows fast and intuitive.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Redux", "JWT"],
  },
  {
    slug: "ejs-todo-app",
    name: "EJS Todo App",
    image: "/images/projects/2ToDoApp.webp",
    date: "September 2020",
    summary: "Custom list management with dynamic route-based list creation.",
    description:
      "Todo application built around EJS templates and flexible custom lists generated from the URL.",
    stack: ["Node.js", "Express", "MongoDB", "EJS"],
  },
  {
    slug: "my-blogs",
    name: "My Blogs",
    image: "/images/projects/5Blogs.webp",
    date: "September 2020",
    summary:
      "A blog platform with an editorial workflow and admin publishing controls.",
    description:
      "Personal publishing platform that supports article discovery, long-form content, and admin writing flows.",
    stack: ["HTML", "CSS", "Bootstrap", "EJS", "MongoDB"],
  },
  {
    slug: "my-newsletter",
    name: "My Newsletter",
    image: "/images/projects/4SignUpNewsLetter.webp",
    date: "September 2020",
    summary: "Mailchimp-powered signup flow with user onboarding automation.",
    description:
      "Newsletter registration experience connected to Mailchimp for audience capture and welcome automation.",
    stack: ["Node.js", "Express", "EJS", "Mailchimp API"],
  },
  {
    slug: "secrets-app",
    name: "Secrets App",
    image: "/images/projects/3Secrets.webp",
    date: "August 2020",
    summary: "Anonymized posting experience with Google OAuth authentication.",
    description:
      "A lightweight social product for anonymous sharing, supported by OAuth-based sign-in and feed rendering.",
    stack: ["HTML", "CSS", "React", "MongoDB", "Google OAuth"],
  },
  {
    slug: "portfolio-website",
    name: "Portfolio Website",
    image: "/images/projects/pzjportfolio.webp",
    date: "July 2020",
    summary:
      "The previous portfolio iteration that established the personal brand online.",
    description:
      "React-based portfolio site with styled-components, GitHub Pages deployment, and WhatsApp contact hooks.",
    stack: ["React", "Styled Components", "GitHub Pages", "WhatsApp"],
    featured: true,
  },
  {
    slug: "tindog",
    name: "Tindog",
    image: "/images/projects/6TinDog.webp",
    date: "June 2020",
    summary: "A playful landing-page build inspired by Tinder, but for dogs.",
    description:
      "Brand-forward single-page experiment built to sharpen marketing layout and front-end fundamentals.",
    stack: ["HTML", "CSS", "Bootstrap"],
    liveUrl: "https://tindog.zarrarpalekar.com/",
    featured: true,
  },
  {
    slug: "my-first-website",
    name: "My First Website",
    image: "/images/projects/8OldCV.webp",
    date: "June 2020",
    summary: "The original online CV that kicked off the portfolio journey.",
    description:
      "Early portfolio and resume site that laid the groundwork for later frontend and personal-brand iterations.",
    stack: ["HTML", "CSS", "Bootstrap"],
    liveUrl: "https://oldcv.zarrarpalekar.com/",
    featured: true,
  },
];
