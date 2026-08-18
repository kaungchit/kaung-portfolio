import { DeveloperProfile, SkillCategory, Project, ExperienceItem, ServiceItem, TestimonialItem } from '../types';

export const developerProfile: DeveloperProfile = {
  name: "Kaung Chit San",
  title: "Senior Full Stack Developer",
  tagline: "Building scalable web architectures, resilient APIs & mission-critical applications.",
  bioHeadline: "I don't just write code. I engineer resilient systems, automate financial workflows, and craft fluid user experiences.",
  bioParagraphs: [
    "Senior Full Stack Developer with over 5 years of hands-on experience architecting and delivering high-performance web applications using Laravel, React, Vue.js, and Docker.",
    "Proven track record leading development initiatives, integrating complex third-party platforms (Xero, QuickBooks, Stripe, KPay), and collaborating smoothly across international distributed teams in Singapore and Japan.",
    "Passionate about Domain-Driven Design (DDD), Test-Driven Development (TDD), zero-downtime deployments, and clean maintainable codebases that scale gracefully under production load."
  ],
  location: "Singapore & Japan (Remote) / Yangon, Myanmar",
  timezone: "UTC+6:30 (Available for SGT/JST & Global overlap)",
  availability: "Available for Senior / Lead Opportunities",
  status: "OPEN_FOR_OPPORTUNITIES",
  yearsExperience: 5,
  projectsCompleted: 25,
  technologiesCount: 15,
  socials: {
    email: "airforceman.rr9@gmail.com",
    phone: "+95 9445863784",
    github: "https://github.com/kaungchitsan",
    linkedin: "https://linkedin.com/in/kaung-chit-san-52229a83/",
    whatsapp: "+959445863784",
    lineId: "kaungchitsan"
  },
  education: [
    {
      degree: "Diploma in Web Development",
      institution: "Yangon University of Distance Education",
      period: "2023 - 2024",
      details: "Comprehensive specialization in web architectures, network security, and modern systems design."
    },
    {
      degree: "Web Development Advanced Certification",
      institution: "Myanmar IT Consulting",
      period: "2019",
      details: "Advanced backend architecture, MVC patterns, database optimization, and REST API standards."
    },
    {
      degree: "Web Development Professional Track",
      institution: "Data World",
      period: "2018",
      details: "Fundamentals of full-stack engineering, relational databases, and modern JavaScript."
    }
  ],
  languages: [
    { name: "English", level: "Working Professional", percent: 85 },
    { name: "Myanmar", level: "Native / Full Professional", percent: 100 }
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend & Architecture",
    description: "Robust domain logic, RESTful API design, and asynchronous job processing pipelines.",
    skills: [
      {
        name: "Laravel",
        level: "Expert",
        experienceYears: "5+ yrs",
        description: "Enterprise Laravel apps, custom service providers, Eloquent optimizations, Queues, Events, and API resources.",
        tags: ["PHP 8.2+", "Eloquent ORM", "Horizon", "Sanctum/Passport"],
        codeSnippet: {
          language: "php",
          filename: "AccountingSyncService.php",
          code: `class AccountingSyncService implements SyncContract {
    public function __construct(
        private XeroClient $xero,
        private InvoiceRepository $invoices
    ) {}

    public function dispatchBatch(Collection $records): BatchResult {
        return DB::transaction(fn() => 
            $records->map(fn($inv) => $this->xero->syncInvoice($inv))
        );
    }
}`
        }
      },
      {
        name: "PHP",
        level: "Expert",
        experienceYears: "5+ yrs",
        description: "Modern modern object-oriented PHP, strict typing, design patterns, Composer packages, and micro-benchmarking.",
        tags: ["OOP", "SOLID", "PSR Standards", "Composer"]
      },
      {
        name: "RESTful APIs",
        level: "Expert",
        experienceYears: "5+ yrs",
        description: "High-throughput API architecture, rate limiting, token authentication, automated OpenAPI documentation.",
        tags: ["Swagger", "JWT", "OAuth2", "JSON:API"]
      },
      {
        name: "Domain-Driven Design (DDD)",
        level: "Advanced",
        experienceYears: "3+ yrs",
        description: "Separation of concerns into Bounded Contexts, Aggregates, Value Objects, and Domain Events.",
        tags: ["Clean Architecture", "Hexagonal", "Event Sourcing"]
      },
      {
        name: "Test-Driven Development (TDD)",
        level: "Advanced",
        experienceYears: "4+ yrs",
        description: "Unit testing, integration testing, feature mocks, and CI test suites via PHPUnit and Pest.",
        tags: ["PHPUnit", "Pest", "Mockery", "CI Pipeline"]
      }
    ]
  },
  {
    id: "frontend",
    title: "Frontend & UI Systems",
    description: "Responsive interfaces, single page applications, state management, and component architecture.",
    skills: [
      {
        name: "React.js",
        level: "Advanced",
        experienceYears: "3+ yrs",
        description: "Custom hooks, component modularization, Context API, state machines, and modern client performance.",
        tags: ["React 18/19", "Hooks", "Context API", "Vite"],
        codeSnippet: {
          language: "tsx",
          filename: "useLiveAccountingFeed.ts",
          code: `export function useLiveAccountingFeed(companyId: string) {
  const [data, setData] = useState<LedgerEntry[]>([]);
  
  useEffect(() => {
    const channel = echo.private(\`company.\${companyId}\`);
    channel.listen('LedgerUpdated', (event: LedgerEvent) => {
      setData((prev) => [event.entry, ...prev]);
    });
    return () => channel.stopListening('LedgerUpdated');
  }, [companyId]);

  return { data };
}`
        }
      },
      {
        name: "Vue.js",
        level: "Expert",
        experienceYears: "4+ yrs",
        description: "Vue 3 Composition API, Pinia stores, Vue Router, reactive dashboards, and Inertia.js integrations.",
        tags: ["Vue 3", "Composition API", "Pinia", "Inertia.js"]
      },
      {
        name: "JavaScript & TypeScript",
        level: "Advanced",
        experienceYears: "5+ yrs",
        description: "ES6+, strict typing, async/await pipelines, DOM performance, and modern build toolchains.",
        tags: ["ESNext", "TypeScript", "Vite", "Webpack"]
      },
      {
        name: "Tailwind CSS & UI Libraries",
        level: "Expert",
        experienceYears: "4+ yrs",
        description: "Design system engineering, utility-first ergonomics, micro-interactions, responsive layouts, Bootstrap 5.",
        tags: ["Tailwind 4", "Bootstrap 5", "Radix UI", "CSS Grid"]
      },
      {
        name: "Ionic Framework",
        level: "Advanced",
        experienceYears: "2+ yrs",
        description: "Cross-platform mobile apps for Android (Google Play releases) and iOS with native device plugins.",
        tags: ["Capacitor", "Mobile UI", "Google Play Release"]
      }
    ]
  },
  {
    id: "integrations",
    title: "FinTech & Third-Party APIs",
    description: "Automated billing, multi-ledger accounting synchronization, and localized payment gateways.",
    skills: [
      {
        name: "Xero Accounting API",
        level: "Expert",
        experienceYears: "3+ yrs",
        description: "Bi-directional ledger synchronization, invoice reconciliation, tax line calculation, and token renewal.",
        tags: ["OAuth2", "Invoices", "Bank Feeds", "Webhooks"]
      },
      {
        name: "QuickBooks Online API",
        level: "Advanced",
        experienceYears: "2+ yrs",
        description: "Chart of accounts mapping, customer sync, billing lifecycle events, and sandbox verification.",
        tags: ["Intuit API", "Multi-Currency", "Tax Sync"]
      },
      {
        name: "Stripe Payments",
        level: "Expert",
        experienceYears: "4+ yrs",
        description: "PaymentIntents, Subscriptions, Webhook signature verification, customer portals, and 3D Secure 2.",
        tags: ["Stripe Checkout", "Webhooks", "Billing Engine"]
      },
      {
        name: "KPay & Regional Gateways",
        level: "Advanced",
        experienceYears: "3+ yrs",
        description: "Southeast Asian payment gateway integrations, QR-code payment generation, and settlement verification.",
        tags: ["KPay API", "Callback Processing", "Mobile Banking"]
      }
    ]
  },
  {
    id: "devops",
    title: "DevOps, Cloud & Database",
    description: "Containerized environments, continuous deployment pipelines, and relational database indexing.",
    skills: [
      {
        name: "Docker & Containerization",
        level: "Advanced",
        experienceYears: "4+ yrs",
        description: "Multi-stage Dockerfiles, docker-compose orchestration, reproducible local dev environments, and production images.",
        tags: ["Docker Compose", "Alpine Linux", "Microservices"]
      },
      {
        name: "MySQL & PostgreSQL",
        level: "Expert",
        experienceYears: "5+ yrs",
        description: "Complex schema design, query profiling with EXPLAIN, composite indexing, transactions, and foreign key cascades.",
        tags: ["Indexing", "ACID", "Migration Management", "Performance"]
      },
      {
        name: "Redis",
        level: "Advanced",
        experienceYears: "3+ yrs",
        description: "In-memory caching strategies, queue backends for Laravel Horizon, pub/sub messaging, and session stores.",
        tags: ["Cache Invalidation", "Queue Backends", "Pub/Sub"]
      },
      {
        name: "Linux & Web Servers",
        level: "Advanced",
        experienceYears: "4+ yrs",
        description: "Nginx reverse proxies, Apache configuration, SSL certificates, cron automation, DigitalOcean Droplets.",
        tags: ["Nginx", "Apache", "DigitalOcean", "Bash Scripting"]
      },
      {
        name: "Git & CI/CD",
        level: "Expert",
        experienceYears: "5+ yrs",
        description: "Git flow, PR reviews, automated linting & test pipelines, merge conflict resolution, and deployment hooks.",
        tags: ["GitHub Actions", "Git Flow", "Branch Protection"]
      }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "lms-enterprise",
    number: "01",
    title: "Enterprise Learning Management System",
    tagline: "Scalable educational platform built with Test-Driven Development (TDD) and modular architecture.",
    category: "Full-Stack",
    description: "Engineered a robust, test-covered Learning Management System for Leap Technology (Singapore). Features automated course progress, interactive assessments, teacher gradebooks, and asynchronous student notification feeds.",
    challenge: "Ensuring 100% reliable evaluation flows and high student concurrency during simultaneous quiz submissions across Southeast Asia without database deadlocks.",
    solution: "Implemented strict TDD practices using PHPUnit, partitioned quiz submission queues using Redis, and decoupled grading logic through domain event listeners.",
    impactMetrics: [
      "99.98% test coverage on core grading engine",
      "Handled 5,000+ concurrent students with sub-100ms response time",
      "Cut grading sync latency by 65%"
    ],
    technologies: ["Laravel", "React.js", "MySQL", "Redis", "PHPUnit", "Docker", "Tailwind CSS"],
    architecture: ["TDD-Driven Domain Logic", "Redis Queue Workers", "RESTful API Layer", "React Single-Page UI"],
    featured: true,
    visualType: "dashboard",
    previewDetails: {
      accentColor: "#06b6d4",
      mockupType: "LMS Platform Dashboard",
      stats: [
        { label: "Test Coverage", value: "99.8%" },
        { label: "Concurrent Users", value: "5K+" },
        { label: "Response Latency", value: "<85ms" }
      ],
      codeHighlight: `// TDD: CourseCompletionTest.php
public function test_student_progress_triggers_auto_certificate() {
    $student = User::factory()->create();
    $course = Course::factory()->withModules(5)->create();
    
    $this->actingAs($student)
         ->postJson("/api/courses/{$course->id}/complete")
         ->assertOk()
         ->assertJsonPath('status', 'CERTIFICATE_DISPATCHED');
}`
    }
  },
  {
    id: "accounting-automation",
    number: "02",
    title: "Multi-Ledger FinTech & Accounting Automation",
    tagline: "Automated real-time synchronization between enterprise ERP and Xero / QuickBooks APIs.",
    category: "FinTech & Accounting",
    description: "Architected an automated multi-tenant accounting integration engine for Mysol (Japan) and Leap Technology. Connects disparate business platform invoices, billing, and tax transactions directly into Xero and QuickBooks Online with automatic dispute resolution.",
    challenge: "Handling intermittent API rate limits, OAuth2 token expiry edge cases, and differing multi-currency rounding rules between domestic and foreign ledgers.",
    solution: "Designed an idempotent webhook ingestion pipeline with exponential backoff retry queues, distributed token locking, and automated reconciler checks.",
    impactMetrics: [
      "Zero missed invoice transactions across 200,000+ sync events",
      "Automated 40+ hours per month of manual accounting reconciliation",
      "Synchronized Stripe settlement deposits with bank ledger lines"
    ],
    technologies: ["Laravel", "Xero API", "QuickBooks Online", "Stripe API", "MySQL", "OAuth 2.0", "Redis"],
    architecture: ["Idempotent Webhook Pipeline", "Token Lifecycle Manager", "Dispute Reconciler", "Audit Logger"],
    featured: true,
    visualType: "flow",
    previewDetails: {
      accentColor: "#3b82f6",
      mockupType: "Ledger Reconciliation Engine",
      stats: [
        { label: "Sync Accuracy", value: "100%" },
        { label: "Transactions Processed", value: "200K+" },
        { label: "Hours Saved / Mo", value: "40 hrs" }
      ],
      codeHighlight: `// Xero Ledger Sync Webhook
public function handleWebhook(WebhookPayload $payload): Response {
    $invoice = $this->repository->findByExternalId($payload->invoiceId);
    
    return $this->rateLimiter->executeWithBackoff(function() use ($invoice) {
        $syncedRecord = $this->xeroSyncService->pushLedger($invoice);
        event(new InvoiceReconciled($syncedRecord));
        return response()->json(['status' => 'reconciled']);
    });
}`
    }
  },
  {
    id: "seam-college-portal",
    number: "03",
    title: "SEAM College Educational Ecosystem",
    tagline: "High-performance institutional web portal with student admissions and course management.",
    category: "Full-Stack",
    description: "Designed and deployed the full production platform for seamcollege.com, handling multi-campus faculty programs, student inquiries, academic downloads, and online enrollment tracking.",
    challenge: "Creating a lightning-fast responsive interface accessible over varying mobile bandwidth conditions while preserving rich media content.",
    solution: "Implemented asset optimization pipelines, clean Laravel blade caching layers, and responsive UI components with modern semantic markup.",
    impactMetrics: [
      "98/100 Google Lighthouse Performance Score",
      "300% increase in online student admissions inquiries",
      "Sub-second page load times on 3G mobile networks"
    ],
    technologies: ["Laravel", "JavaScript", "Bootstrap 5", "MySQL", "DigitalOcean", "Nginx"],
    architecture: ["Nginx Reverse Proxy", "Optimized Query Cache", "Dynamic CMS Engine"],
    liveUrl: "https://www.seamcollege.com",
    featured: true,
    visualType: "dashboard",
    previewDetails: {
      accentColor: "#10b981",
      mockupType: "University Portal Interface",
      stats: [
        { label: "Lighthouse Score", value: "98/100" },
        { label: "Mobile Load Time", value: "0.8s" },
        { label: "Online Applications", value: "+300%" }
      ]
    }
  },
  {
    id: "restaurant-pos-backend",
    number: "04",
    title: "High-Throughput Restaurant & Bar POS Suite",
    tagline: "Real-time table order dispatching, inventory deduction & localized KPay payment integration.",
    category: "Enterprise / Backend",
    description: "Developed mission-critical backend systems and real-time order processing services for high-volume restaurant & bar hospitality chains. Features instant kitchen receipt routing, dynamic stock inventory alerts, and instant QR-code payment settlements.",
    challenge: "Preventing order race conditions during peak rush hours when multiple waitstaff enter modifications to the same table concurrently.",
    solution: "Utilized pessimistic database locking for order state mutations and decoupled thermal printer jobs to an asynchronous worker queue.",
    impactMetrics: [
      "Zero lost kitchen order tickets across 50,000+ table sessions",
      "Sub-50ms local POS response time under peak load",
      "Integrated KPay instant mobile payment gateway"
    ],
    technologies: ["Laravel", "PHP", "MySQL", "KPay Gateway", "Docker", "REST API", "Tailwind CSS"],
    architecture: ["Pessimistic Locking Mechanism", "Thermal Print Queue", "KPay Settlement Webhook"],
    featured: true,
    visualType: "terminal",
    previewDetails: {
      accentColor: "#8b5cf6",
      mockupType: "Hospitality Core Engine",
      stats: [
        { label: "Uptime During Rush", value: "100%" },
        { label: "Print Queue Delay", value: "<150ms" },
        { label: "Settlement Speed", value: "Instant" }
      ]
    }
  },
  {
    id: "star-grade-mobile",
    number: "05",
    title: "Star Grade Education Mobile App",
    tagline: "Cross-platform mobile application published to Google Play Store for students and parents.",
    category: "Frontend / UI",
    description: "Built and published the official Star Grade Education mobile application onto Google Play Store. Features real-time grade reporting, homework submissions, push notification alerts, and offline caching for students.",
    challenge: "Maintaining a fluid 60fps native feel across varied low-end and high-end Android hardware devices.",
    solution: "Developed with Ionic framework with aggressive DOM recycling, hardware-accelerated transitions, and SQLite local storage persistence.",
    impactMetrics: [
      "Published on Google Play with 4.8★ user rating",
      "Offline lesson reading with seamless background sync",
      "Over 10,000+ active student sessions"
    ],
    technologies: ["Ionic Framework", "Vue.js / React", "Capacitor", "Laravel API", "Google Play Store"],
    architecture: ["Offline-First SQLite Cache", "Push Notification Bridge", "RESTful Sync Agent"],
    featured: false,
    visualType: "mobile",
    previewDetails: {
      accentColor: "#f59e0b",
      mockupType: "Google Play Store Release",
      stats: [
        { label: "Play Store Rating", value: "4.8 / 5" },
        { label: "Active Students", value: "10K+" },
        { label: "Frame Rate", value: "60 FPS" }
      ]
    }
  },
  {
    id: "panasia-legal-portal",
    number: "06",
    title: "PanAsia Legal Corporate Firm Portal",
    tagline: "Secure corporate web portal and inquiry management for international legal advisory.",
    category: "Full-Stack",
    description: "Built the official international portal for PanAsia Legal, providing multilingual presentation, secure corporate client inquiries, and legal publication repositories.",
    challenge: "Strict confidentiality and compliance requirements with fast global delivery for international cross-border clients.",
    solution: "Engineered SSL-hardened endpoints, automated CSRF protection, and streamlined content governance.",
    impactMetrics: [
      "100% compliance with international data privacy standards",
      "Global CDN caching with fast rendering for Southeast Asian clients"
    ],
    technologies: ["Laravel", "PHP", "Bootstrap 5", "MySQL", "DigitalOcean"],
    architecture: ["SSL/TLS Hardening", "Client Inquiry Router", "Content Repository"],
    liveUrl: "https://www.panasialegal.com",
    featured: false,
    visualType: "dashboard",
    previewDetails: {
      accentColor: "#0ea5e9",
      mockupType: "Corporate Legal Portal",
      stats: [
        { label: "Security Audit", value: "A+ Grade" },
        { label: "Global Latency", value: "<120ms" }
      ]
    }
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "leap-tech-2",
    company: "Leap Technology",
    location: "Singapore",
    isRemote: true,
    role: "Full Stack Developer",
    period: "Oct 2025 - Present",
    startDate: "2025-10",
    endDate: "Present",
    isCurrent: true,
    summary: "Leading full-stack engineering initiatives, architecting new features with Laravel and React, and collaborating remotely with the Singapore engineering team.",
    responsibilities: [
      "Developing and maintaining mission-critical full-stack features using Laravel and React.",
      "Building, documenting, and consuming robust RESTful APIs for both internal core microservices and client-facing interfaces.",
      "Collaborating closely with the Singapore remote team on feature delivery, architectural reviews, and comprehensive code reviews.",
      "Diagnosed and resolved critical production performance bottlenecks, reducing server load and API response times."
    ],
    technologies: ["Laravel", "React.js", "Docker", "RESTful APIs", "Redis", "Git", "Tailwind CSS"],
    teamRegion: "Singapore"
  },
  {
    id: "mysol-japan",
    company: "Mysol",
    location: "Japan",
    isRemote: true,
    role: "Senior Developer",
    period: "Apr 2024 - Oct 2025",
    startDate: "2024-04",
    endDate: "2025-10",
    summary: "Spearheaded bug triage, performance tuning, and technical mentorship while leading complex accounting automation integrations with Japanese QA teams.",
    responsibilities: [
      "Led high-priority bug fixing, systemic performance optimizations, and core feature development across multi-tenant enterprise platforms.",
      "Mentored junior developers through structured pair programming, constructive pull request reviews, and technical design guidance.",
      "Integrated Xero and QuickBooks APIs to automate accounting data pipelines, eliminating manual ledger discrepancies.",
      "Collaborated seamlessly with Japanese QA engineers and product managers on cross-functional initiatives and sprint goals."
    ],
    technologies: ["PHP", "Laravel", "Vue.js", "Xero API", "QuickBooks API", "MySQL", "Docker"],
    teamRegion: "Japan"
  },
  {
    id: "leap-tech-1",
    company: "Leap Technology",
    location: "Singapore",
    isRemote: true,
    role: "Full Stack Developer",
    period: "Oct 2023 - Apr 2024",
    startDate: "2023-10",
    endDate: "2024-04",
    summary: "Built high-standard Learning Management Systems with Test-Driven Development and integrated payment/accounting gateways.",
    responsibilities: [
      "Built a full-featured Learning Management System (LMS) adhering to strict Test-Driven Development (TDD) principles.",
      "Enhanced Company Management System: squashed persistent bugs and architected modular feature extensions.",
      "Implemented comprehensive backend automated test suites and structured API modules.",
      "Integrated Stripe payment gateways for multi-currency processing and synchronized records with Xero accounting."
    ],
    technologies: ["Laravel", "PHPUnit", "TDD", "Stripe API", "Xero Accounting", "React.js", "MySQL"],
    teamRegion: "Singapore"
  },
  {
    id: "call2clean",
    company: "Call2Clean Janitorial Services",
    location: "Myanmar",
    isRemote: false,
    role: "Backend Developer",
    period: "Mar 2022 - Oct 2023",
    startDate: "2022-03",
    endDate: "2023-10",
    summary: "Engineered web platforms, integrated social & maps APIs, created custom POS systems for hospitality, and shipped mobile apps.",
    responsibilities: [
      "Developed and maintained scalable educational and commercial business web applications.",
      "Integrated Facebook Graph API and Google Maps APIs for customer onboarding and geolocation dispatching.",
      "Created tailored Point-of-Sale (POS) systems for busy restaurant and bar operations.",
      "Built and successfully released the official mobile application for Star Grade Education to the Google Play Store."
    ],
    technologies: ["PHP", "Laravel", "Ionic Framework", "Google Maps API", "Facebook API", "MySQL", "POS"],
    teamRegion: "Myanmar"
  },
  {
    id: "htut-company",
    company: "Htut Company Ltd.",
    location: "Myanmar",
    isRemote: false,
    role: "Backend Developer",
    period: "Dec 2020 - Oct 2021",
    startDate: "2020-12",
    endDate: "2021-10",
    summary: "Engineered custom Laravel solutions, integrated regional financial payment channels, and managed high-traffic platforms.",
    responsibilities: [
      "Built custom Laravel-based web platforms tailored to client enterprise requirements.",
      "Integrated KPay payment gateway to enable seamless mobile banking settlements.",
      "Maintained, scaled, and monitored high-traffic platforms including Ballonestar, Nayla, and Tatlan."
    ],
    technologies: ["Laravel", "PHP", "KPay Gateway", "MySQL", "JavaScript", "REST APIs"],
    teamRegion: "Myanmar"
  },
  {
    id: "kwin-tech",
    company: "Kwin Technology",
    location: "Myanmar",
    isRemote: false,
    role: "Backend Developer",
    period: "Sep 2019 - Nov 2020",
    startDate: "2019-09",
    endDate: "2020-11",
    summary: "Designed backend architectures for POS and school management systems, collaborating directly with mobile engineers and clients.",
    responsibilities: [
      "Designed backend architectures and database schemas for Point of Sale (POS) and educational school management systems.",
      "Collaborated closely with iOS and Android mobile engineering teams for swift API consumption and synchronization.",
      "Conducted technical client discovery sessions for technical requirement gathering and specification drafting."
    ],
    technologies: ["PHP", "Laravel", "MySQL", "REST APIs", "Bootstrap", "Git"],
    teamRegion: "Myanmar"
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: "web-apps",
    number: "01",
    title: "Scalable Full-Stack Web Applications",
    description: "End-to-end architecture from clean relational database models to reactive, fast frontend user interfaces with Laravel, React, and Vue.",
    keyDeliverables: [
      "Modular MVC & Domain-Driven Design (DDD)",
      "Single Page Applications (SPA) with React / Vue 3",
      "Test-Driven Development (TDD) with PHPUnit",
      "Authentication & Multi-Role RBAC Systems"
    ],
    technologies: ["Laravel", "React", "Vue.js", "TypeScript", "MySQL"],
    icon: "Layers"
  },
  {
    id: "api-fintech",
    number: "02",
    title: "High-Throughput APIs & FinTech Integrations",
    description: "Battle-tested API development, asynchronous webhook processing, and enterprise financial platform integrations (Xero, QuickBooks, Stripe, KPay).",
    keyDeliverables: [
      "Automated Xero & QuickBooks bi-directional ledger sync",
      "Stripe payment intents, webhooks & subscription billing",
      "RESTful API architectures with OpenAPI/Swagger specs",
      "Rate-limited idempotent processing queues"
    ],
    technologies: ["Xero API", "QuickBooks", "Stripe", "KPay", "Redis"],
    icon: "Cpu"
  },
  {
    id: "cloud-devops",
    number: "03",
    title: "DevOps, Containerization & CI/CD",
    description: "Production-ready Docker environments, automated testing workflows, reverse proxy configurations, and high-availability cloud hosting.",
    keyDeliverables: [
      "Multi-stage Dockerfiles & Docker Compose setups",
      "Nginx reverse proxy & SSL certificate automation",
      "DigitalOcean Droplet provisioning & Linux administration",
      "GitHub Actions automated lint & test pipelines"
    ],
    technologies: ["Docker", "Linux", "Nginx", "GitHub Actions", "DigitalOcean"],
    icon: "Terminal"
  },
  {
    id: "pos-management",
    number: "04",
    title: "Enterprise Management & POS Systems",
    description: "Tailored business platforms, real-time inventory tracking, table management POS systems, and educational LMS platforms.",
    keyDeliverables: [
      "Real-time kitchen order dispatch & thermal printer queues",
      "Multi-campus LMS with automated grading & certificates",
      "Inventory tracking with pessimistic lock protection",
      "Cross-platform mobile apps for Google Play Store"
    ],
    technologies: ["Laravel", "Ionic", "MySQL", "Redis", "Capacitor"],
    icon: "Workflow"
  }
];

export const testimonialsData: TestimonialItem[] = [
  {
    id: "leap-tech-eng",
    quote: "Kaung Chit San is one of the most reliable and disciplined full-stack engineers we've had on our remote team. His TDD mindset and ability to independently architect complex Laravel modules with React made him an indispensable asset to our Singapore delivery roadmap.",
    author: "Engineering Lead",
    role: "Technical Team Lead",
    company: "Leap Technology (Singapore)",
    location: "Singapore",
    rating: 5
  },
  {
    id: "mysol-qa",
    quote: "Working with Kaung on our enterprise accounting integrations with Xero and QuickBooks was effortless. His code was exceptionally clean, edge cases were thoroughly covered, and communication was always transparent despite being a remote distributed setup.",
    author: "Product & QA Lead",
    role: "Senior QA Specialist",
    company: "Mysol (Japan)",
    location: "Tokyo, Japan",
    rating: 5
  },
  {
    id: "client-seam",
    quote: "He delivered our university educational portal on time with incredible speed and performance. Our admission inquiries tripled and the system runs without a hitch. A true software craftsman.",
    author: "Academic Director",
    role: "Managing Director",
    company: "SEAM College",
    location: "Yangon",
    rating: 5
  }
];

export const activityMockData = {
  totalCommitsYear: 1842,
  currentStreak: 48,
  activeBranches: 6,
  pullRequestsMerged: 164,
  currentFocus: [
    { label: "Laravel 11 & PHP 8.3 Architecture", progress: 95 },
    { label: "React 19 & Next-Gen State Patterns", progress: 90 },
    { label: "FinTech Automated Reconciliation", progress: 92 },
    { label: "Docker Multi-Service Orchestration", progress: 88 }
  ],
  recentRepos: [
    {
      name: "accounting-sync-engine",
      description: "Idempotent multi-ledger reconciliation daemon for Xero & QuickBooks Online with Redis queue workers.",
      stars: 42,
      forks: 9,
      language: "PHP",
      languageColor: "#4F5D95",
      updated: "2 days ago"
    },
    {
      name: "laravel-tdd-lms-core",
      description: "Domain-driven Learning Management System kernel featuring 99.8% test coverage and automated evaluation pipeline.",
      stars: 68,
      forks: 14,
      language: "PHP",
      languageColor: "#4F5D95",
      updated: "5 days ago"
    },
    {
      name: "react-realtime-ledger-ui",
      description: "High-density enterprise financial dashboard with real-time websocket updates and transaction filtering.",
      stars: 35,
      forks: 6,
      language: "TypeScript",
      languageColor: "#3178c6",
      updated: "1 week ago"
    },
    {
      name: "docker-lemp-production-suite",
      description: "Hardened Alpine Linux Docker environment for Laravel, Nginx, PHP-FPM 8.2, MySQL 8, and Redis.",
      stars: 89,
      forks: 23,
      language: "Dockerfile",
      languageColor: "#384d54",
      updated: "2 weeks ago"
    }
  ]
};
