// ─────────────────────────────────────────────────────────────
//  Edit this file to update the portfolio content.
//  Everything on the site is rendered from here.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Ruwan Chamikara',
  shortName: 'Ruwan',
  title: 'Software Engineer | FinTech',
  // true shows an "Open to new opportunities" badge and job-seeking text. Keep false while employed.
  openToWork: false,
  // Google Analytics 4 Measurement ID, e.g. 'G-AB12CD34EF'. Leave '' to turn analytics off.
  analyticsId: '',
  roles: ['Backend Engineer', 'FinTech Developer', 'Full Stack Developer', 'Flutter Developer'],
  location: 'Western Province, Sri Lanka',
  avatar: 'https://github.com/ruwan97.png',
  tagline:
    'I build secure, reliable backend systems that move real money — digital wallets, payment integrations and core-banking connectivity for one of Sri Lanka’s leading finance companies.',
  // Set your email here to show the "Email me" button. Leave '' to hide it.
  email: '',
  // Put a PDF named cv.pdf in /public and set this to '/cv.pdf' to show a "Download CV" button.
  cv: '',
  socials: {
    github: 'https://github.com/ruwan97',
    linkedin: 'https://www.linkedin.com/in/ruwan-chamikara-a928a6179',
  },
}

// Career start date — "Years of experience" is calculated from this automatically.
export const careerStart = '2022-06-01'

// value = fallback shown if the live number can't be loaded.
//  auto: 'years'  → calculated from careerStart (updates by itself every year)
//  auto: 'repos'  → live public-repo count from the GitHub API
//  no auto        → edit by hand (LinkedIn has no public API; it shows "500+" anyway)
export const stats = [
  { value: 4, suffix: '+', label: 'Years of experience', auto: 'years' },
  { value: 17, suffix: '', label: 'GitHub repositories', auto: 'repos' },
  { value: 500, suffix: '+', label: 'LinkedIn connections' },
  { value: 2024, suffix: '', label: 'Building LB CIM since' },
]

export const about = [
  'I’m a backend-focused software engineer and BICT graduate from the University of Ruhuna. I started my career in June 2022 as an intern at DH3 Solutions, growing to Software Engineer there, and since March 2024 I’ve been at LB Finance PLC working on the Cash-in-Mobile (LB CIM) digital wallet — a widely used mobile finance app in Sri Lanka.',
  'My day-to-day is Java and Spring: designing REST APIs, writing high-performance SQL and stored procedures, tuning transaction flows, and integrating with core banking and national payment networks. I care about correctness, auditability and clean, maintainable code — because in finance, every cent counts.',
  'Beyond the backend I build with Flutter and modern web tooling, so I can take an idea from database schema to a polished mobile or web UI.',
]

export const focus = [
  { title: 'Digital Wallets', text: 'Wallet services, fund transfers, scheduled payments and transaction history at scale.' },
  { title: 'Payment Integrations', text: 'UnionPay Virtual Card, LankaClear, QR payments and core-banking (Eclipse) connectivity.' },
  { title: 'Performance', text: 'Async transaction processing, query optimisation and flattened reporting tables.' },
  { title: 'Compliance & KYC', text: 'Customer onboarding, KYC verification, liens, TIN collection and agent workflows.' },
]

export const skillGroups = [
  { name: 'Backend', items: ['Java', 'Spring Boot', 'Spring Security', 'JAX-RS / Jersey', 'Hibernate / JPA', 'REST APIs', 'JWT', 'Spring WebFlux'] },
  { name: 'Data', items: ['MS SQL Server', 'Stored Procedures', 'Query Tuning', 'MySQL', 'MongoDB (basic)'] },
  { name: 'Frontend & Mobile', items: ['Flutter', 'Dart', 'JavaScript', 'TypeScript', 'HTML / CSS', 'PHP'] },
  { name: 'Tools & Practices', items: ['Git', 'GitHub', 'Postman', 'IntelliJ IDEA', 'Agile / Scrum', 'Code Review'] },
]

export const marquee = ['Java', 'Spring Boot', 'Flutter', 'Dart', 'Hibernate', 'MS SQL', 'REST APIs', 'Spring Security', 'JWT', 'Git', 'UnionPay', 'LankaQR']

export const experience = [
  {
    company: 'LB Finance PLC',
    period: 'Mar 2024 — Present',
    location: 'Colombo, Sri Lanka · On-site',
    roles: [{ title: 'Software Engineer', period: 'Mar 2024 — Present', type: 'Full-time' }],
    highlight: 'UnionPay Virtual Card — virtual card features, card transactions, e-commerce payments, tap to pay and QR payments.',
    points: [
      'Software engineer on LB CIM (Cash-in-Mobile), LB Finance’s digital wallet platform, working across Flutter, Java, Spring Boot, JAX-RS/Jersey, Hibernate and MS SQL Server.',
      'Build and maintain wallet services: fund transfers, standing orders, e-gift and voucher flows, FD loan requests and transaction history.',
      'Integrate with the Eclipse core-banking system and external payment partners including UnionPay and LankaClear.',
      'Delivered transaction-flow optimisation work — asynchronous processing, API standardisation and a flattened transaction-history model for faster queries.',
      'Ship customer-onboarding and compliance features: in-app KYC prompts, Agent Portal verification, lien handling and TIN collection.',
    ],
    tags: ['FinTech', 'Flutter', 'Java', 'Spring Boot', 'Spring WebFlux', 'JAX-RS', 'Hibernate', 'MS SQL', 'UnionPay', 'LankaClear'],
  },
  {
    company: 'DH3 Solutions Private Limited',
    period: 'Jun 2022 — Mar 2024',
    location: 'Colombo, Sri Lanka',
    roles: [
      { title: 'Software Engineer', period: 'Jan 2024 — Mar 2024', type: 'Full-time · Hybrid' },
      { title: 'Associate Software Engineer', period: 'Dec 2022 — Jan 2024', type: 'Full-time · Hybrid' },
      { title: 'Software Engineer Intern', period: 'Jun 2022 — Dec 2022', type: 'Internship · On-site' },
    ],
    highlight: '',
    points: [
      'Grew from intern to Software Engineer in under two years, working on FinTech products with Spring Boot and SQL.',
    ],
    tags: ['FinTech', 'Spring Boot', 'Java', 'SQL'],
  },
]

// Product showcase — the YouTube video shown in the "Product I build" section.
// To use a different video, paste the ID from its link (youtube.com/watch?v=THIS_PART).
export const showcase = {
  name: 'LB CIM — Cash In Mobile',
  video: 'cim-promo.mp4',
  poster: 'cim-poster.jpg',
  text: 'LB CIM is LB Finance’s digital finance app and mobile wallet, licensed by the Central Bank of Sri Lanka. Customers use it to open fixed deposits, apply for loans, transfer money to any bank or CIM wallet, pay bills, reload mobiles and scan-to-pay with LankaQR.',
  myPart: 'I’ve developed several features across LB CIM — wallet transactions, fund transfers, scheduled payments, onboarding and KYC, and integrations with core banking and payment networks. One of the most important is the UnionPay Virtual Card.',
  links: [
    { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.cashinmobile.lb.customer' },
    { label: 'App Store', url: 'https://apps.apple.com/lk/app/lb-cim/id1459216386' },
    { label: 'LB CIM on YouTube', url: 'https://www.youtube.com/@LBCIM' },
    { label: 'Official website', url: 'https://lbcim.com' },
  ],
}

export const education = [
  {
    school: 'University of Ruhuna',
    degree: 'Bachelor of Information and Communication Technology (BICT) — 4-year degree',
    period: 'Dec 2017 — Dec 2022',
    note: 'Captain of the faculty volleyball team and member of the university volleyball team.',
  },
  {
    school: 'WP/MT/Mihindu Central College',
    degree: 'G.C.E. Advanced Level — Technology stream',
    period: 'Jun 2014 — Aug 2016',
    note: '',
  },
]

export const projects = [
  {
    name: 'Spring Boot 3 JWT Security',
    desc: 'Stateless authentication and role-based authorisation for REST APIs using Spring Boot 3, Spring Security and JWT.',
    tags: ['Java', 'Spring Boot 3', 'JWT'],
    url: 'https://github.com/ruwan97/spring-boot-3-jwt-security',
    featured: true,
  },
  {
    name: 'Spring Reactive Mongo CRUD',
    desc: 'Non-blocking reactive CRUD service built with Spring WebFlux and reactive MongoDB.',
    tags: ['Spring WebFlux', 'MongoDB', 'Reactive'],
    url: 'https://github.com/ruwan97/Spring-Reactive-Mongo-CRUD',
    featured: true,
  },
  {
    name: 'IMS for New Universe Clothing',
    desc: 'Inventory management system for a clothing business — stock, products and sales tracking.',
    tags: ['PHP', 'MySQL'],
    url: 'https://github.com/ruwan97/IMS-For-New-Universe-Clothing',
    featured: true,
  },
  {
    name: 'E-Commerce',
    desc: 'Online store web application with product catalogue and cart.',
    tags: ['JavaScript'],
    url: 'https://github.com/ruwan97/E-Commerce',
  },
  {
    name: 'MIS for Chartered Accountant',
    desc: 'Management information system for a chartered accountancy practice.',
    tags: ['JavaScript'],
    url: 'https://github.com/ruwan97/MIS-For-Charted-Accountant',
  },
  {
    name: 'Canteen Management System',
    desc: 'Ordering and management system for a canteen.',
    tags: ['HTML', 'Web'],
    url: 'https://github.com/ruwan97/Canteen-Management-System',
  },
  {
    name: 'Complaint & Asset Management',
    desc: 'System for logging complaints and tracking organisational assets.',
    tags: ['HTML', 'Web'],
    url: 'https://github.com/ruwan97/Complain-and-Assets-Management-System',
  },
  {
    name: 'RMI Chat App',
    desc: 'Client–server chat application using Java RMI.',
    tags: ['Java', 'RMI'],
    url: 'https://github.com/ruwan97/RMI-Chat-App',
  },
  {
    name: 'FOT TECMIS',
    desc: 'Faculty of Technology management information system.',
    tags: ['Java'],
    url: 'https://github.com/ruwan97/FOT-TECMIS',
  },
]
