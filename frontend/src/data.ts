import {
  NavItem,
  ServicePillar,
  ValueCard,
  TeamMember,
  AcademyCourse,
  FeaturedProgram,
  ImpactStat,
  ProjectItem,
  BlogPost,
  FAQItem
} from './types';

export const NAVIGATION_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', description: 'Welcome to BlinkTech Solutions' },
  { id: 'about', label: 'About Us', description: 'Our history, mission, vision and leadership' },
  { id: 'business', label: 'Business Solutions', description: 'Enterprise advisory and corporate support' },
  { id: 'education', label: 'Education & Training', description: 'Student and teacher development programmes' },
  { id: 'debate', label: 'Debate & QUIZ', description: 'Our unique analytical and debate training' },
  { id: 'projects', label: 'Gallery', description: 'Our impact and community project records' },
  { id: 'blog', label: 'Blog', description: 'Latest articles and learning resources' },
  { id: 'contact', label: 'Contact', description: 'Get in touch for consultations or courses' }
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    title: 'Technology Solutions',
    description: 'We orchestrate custom digital transformations, from high-performance web development to custom software consulting and technology integrations designed to optimize operations.',
    iconName: 'Cpu'
  },
  {
    title: 'Education & Training',
    description: 'Tailored digital literacy courses, computational thinking frameworks, and technology-focused curriculums designed for schools, universities, and professional institutions.',
    iconName: 'GraduationCap'
  },
  {
    title: 'Business Development',
    description: 'Empowering startups and established enterprises through technology-driven market insights, strategic advisory services, efficiency tooling, and modern marketing solutions.',
    iconName: 'TrendingUp'
  },
  {
    title: 'Innovation Programmes',
    description: 'Our proprietary debate workshops (including our marquee QUIZ programme), emerging AI bootcamps, and hackathons designed to stimulate leadership and analytical thinking.',
    iconName: 'Lightbulb'
  }
];

export const CHOOSE_US_POINTS = [
  {
    title: 'Practical, Hands-on Learning',
    description: 'No empty theories. We build skills by executing real-world projects and solving concrete problems using cutting-edge tools.',
    iconName: 'Sparkles'
  },
  {
    title: 'Industry-Relevant Expertise',
    description: 'Our consultants and mentors are practitioners currently working at the vanguard of tech, business, and education industries.',
    iconName: 'Award'
  },
  {
    title: 'Tailored Business Solutions',
    description: 'We don’t believe in one-size-fits-all strategies. We customize frameworks depending on your business model, target market, and structural size.',
    iconName: 'Briefcase'
  },
  {
    title: 'Deep Community Impact',
    description: 'With social progress at our core, we actively bridge the digital divide by distributing technology access and education across underserved communities.',
    iconName: 'Users'
  }
];

export const FEATURED_PROGRAMMES: FeaturedProgram[] = [
  {
    title: 'Debate & QUIZ Programme',
    description: 'A transformative model that develops critical thinking, rapid reasoning, public speech coherence, and deep analytical capacity in students and corporate teams.',
    tag: 'Marquee Event',
    iconName: 'MessageSquare'
  },
  {
    title: 'Digital Skills Training',
    description: 'Comprehensive bootcamps empowering people of all experience levels with essential tech fluencies like digital communication, cybersecurity, and productivity suites.',
    tag: 'High Impact',
    iconName: 'CheckSquare'
  },
  {
    title: 'Entrepreneurship Academy',
    description: 'Nurture technical ideas into commercial models with legal structures, tech-stack optimization, pricing blueprints, and fundraising pitches.',
    tag: 'Business',
    iconName: 'Rocket'
  },
  {
    title: 'AI & Machine Learning training',
    description: 'Demystify LLMs, prompt engineering, generative AI tools, and workflow automation for modern workplaces and technical developers.',
    tag: 'Future-Proof',
    iconName: 'Brain'
  }
];

export const ACADEMY_COURSES: AcademyCourse[] = [
  {
    title: 'Digital Skills Fundamentals',
    category: 'Digital Literacy',
    duration: '4 Weeks',
    level: 'Beginner',
    tagline: 'Master the computer, cloud tools, digital safety, and modern communication foundations.',
    description: 'Develop the essential fluencies required to navigate the digital world. Learn professional spreadsheet techniques, cybersecurity habits, standard office suites, and collaborative cloud storage workflows.',
    isComingSoon: true,
    features: ['Practical assignments', 'Graduation certificate', 'Interactive assessments', 'On-demand coaching support']
  },
  {
    title: 'Web Design & Development',
    category: 'Technology',
    duration: '10 Weeks',
    level: 'Beginner to Intermediate',
    tagline: 'Build, animate, and deploy high-performance web applications using HTML, Tailwind, and React.',
    description: 'Learn modern responsive layouts, custom UX principles, state routing, and deployment processes. Build an elegant personal portfolio and multiple dynamic, fully customized web assets.',
    isComingSoon: true,
    features: ['Direct source mentorship', 'Code reviews and feedback', 'Live hosting projects', 'Modern design files access']
  },
  {
    title: 'AI Tools & Emerging Tech',
    category: 'Innovation',
    duration: '6 Weeks',
    level: 'All Levels',
    tagline: 'Leverage generative AI models, advanced prompting, and automated workflow pipelines.',
    description: 'Unlock substantial boosts in efficiency. Integrate AI into your operations to quickly draft documents, research legal precedents, generate professional graphics, and automate repetitive administrative workflows.',
    isComingSoon: true,
    features: ['Prompting cheat sheets', 'Real-world business case studies', 'Automation API templates', 'AI model updates list']
  },
  {
    title: 'Data Analysis & Visualisation',
    category: 'Technology',
    duration: '8 Weeks',
    level: 'Intermediate',
    tagline: 'Extract business treasures from messy data using spreadsheets, SQL, and design principles.',
    description: 'Understand how organizations store and interpret facts. Build executive dashboards, perform analytical calculations, identify trend corridors, and create visual narratives that drive major leadership decisions.',
    isComingSoon: true,
    features: ['Real-world CSV datasets', 'SQL playground access', 'Dashboard layout templates', 'Analytical presentation methods']
  },
  {
    title: 'Professional Communication',
    category: 'Career Readiness',
    duration: '4 Weeks',
    level: 'All Levels',
    tagline: 'Structure compelling business presentations, master public debate, and command rooms.',
    description: 'Formulate persuasive arguments under intense pressure. Harness professional speech body language, construct executive summaries, craft corporate email correspondence, and negotiate mutually beneficial outcomes.',
    isComingSoon: true,
    features: ['Simulated pressure sessions', 'Expert pitch feedback', 'Writing style guides', 'Lifetime video recordings access']
  },
  {
    title: 'Entrepreneurship & Tech Ideation',
    category: 'Business',
    duration: '8 Weeks',
    level: 'Intermediate',
    tagline: 'Validate your concept, build a lean landing page, and scope your minimum viable product.',
    description: 'A masterclass for creators looking to launch. Transition an abstract dream into a structured enterprise: analyze markets, calculate unit economics, construct legal entities, and configure secure digital payment links.',
    isComingSoon: true,
    features: ['Pitch deck templates', 'Financial modeling spreadsheets', 'Founders networking group', 'MVP launch checklists']
  }
];

export const IMPACT_STATISTICS: ImpactStat[] = [
  {
    value: '2,500+',
    label: 'Learners Trained',
    description: 'Students, graduates, and professionals equipped with essential digital skills.',
    iconName: 'GraduationCap'
  },
  {
    value: '150+',
    label: 'Workshops Conducted',
    description: 'Focused technological and critical-thinking camps across schools and workspaces.',
    iconName: 'Tv'
  },
  {
    value: '80+',
    label: 'Businesses Powered',
    description: 'Startups and SMEs digitized, streamlined, and actively supported.',
    iconName: 'Rocket'
  },
  {
    value: '15+',
    label: 'Regional Communities',
    description: 'Bridging technical gaps across cities, institutions, and local regions.',
    iconName: 'Globe'
  }
];

export const GALLERY_ITEMS: ProjectItem[] = [
  {
    title: 'Annual QUIZ Debate & Eloquence Tournament',
    category: 'event',
    description: 'A stellar gathering of hundreds of academic minds debating critical technological ethics and business policy reforms.',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop',
    tag: 'National Academic Level',
    date: 'March 2026'
  },
  {
    title: 'SME Digitisation and Setup Workshop',
    category: 'workshop',
    description: 'Equipping 40 regional retail owners with point-of-sale systems, digital transaction pipelines, and localized search marketing setups.',
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop',
    tag: 'Enterprise Support',
    date: 'May 2026'
  },
  {
    title: 'Youth In Tech: Coding and Data Academy Camp',
    category: 'community',
    description: 'A pro-bono digital immersion week preparing underprivileged public school graduates with foundation levels of HTML, data spreadsheets, and AI usage.',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop',
    tag: 'Bridging Gaps',
    date: 'January 2026'
  },
  {
    title: 'Cloud Transformation Advisory with Logistics Corp',
    category: 'project',
    description: 'Migrating legacy client paper-based tracking databases into a secure, real-time shared dashboard, improving transit accuracy by 44%.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
    tag: 'Client Deliverable',
    date: 'February 2026'
  },
  {
    title: 'Teacher Digital Empowerment Training',
    category: 'workshop',
    description: 'Training primary school educators to implement computer science concepts and digital tools inside standard non-technical classrooms.',
    imageUrl: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600&auto=format&fit=crop',
    tag: 'Education Pillar',
    date: 'November 2025'
  },
  {
    title: 'AI in the Modern Workplace Summit',
    category: 'event',
    description: 'Executive conference showing live automations, legal guardrails, and strategic adoption roadmaps to CEOs and institutional directors.',
    imageUrl: 'https://images.unsplash.com/photo-1591115765373-5209765f713e?q=80&w=600&auto=format&fit=crop',
    tag: 'Enterprise Elite',
    date: 'April 2026'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'The AI Shift: How SMEs can use free tools to save 20 hours weekly',
    summary: 'A direct guide for small business founders detailing specific ways to leverage generative models for copywriting, inventory tracking, and draft summaries.',
    excerpt: 'Many business founders perceive artificial intelligence as an expensive, complex infrastructure project. The reality is far simpler: easily accessible, free tools can automate your email drafting, organize messy sales excels, and research standard customer questions. In this deep dive, we outline exact workflows...',
    category: 'Business',
    author: 'Adebayo Johnson, Founder & CEO',
    readTime: '6 min read',
    date: 'May 18, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'A New Classroom: Navigating computational thinking inside academic curricula',
    summary: 'Why teaching coding syntax is less important than teaching systematic logic, and how school leaders can comfortably implement digital literacy on a budget.',
    excerpt: 'As classrooms race to introduce computer science, many make the mistake of prioritizing coding memorization over foundational computational thinking. Languages change fast, but logical breaking-down of problems, recognizing patterns, and designing workflows remain universally valuable...',
    category: 'Education',
    author: 'Clara Mensah, Director of Academic Policy',
    readTime: '8 min read',
    date: 'April 24, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Why public debate models like QUIZ are essential for future tech innovators',
    summary: 'Analyzing the link between dynamic structured debate preparation and high-performance software engineering and strategic corporate problem solving.',
    excerpt: 'Excellent innovators do not simply construct applications — they articulate structural value and anticipate complex edge cases. The QUIZ debate programme is explicitly calibrated to sharpen rapid perspective switching and data-backed argument styling, directly mapping to technical systems analysis...',
    category: 'Innovation',
    author: 'Prof. Simon Vance, Marquee debate coordinator',
    readTime: '5 min read',
    date: 'March 10, 2026',
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop'
  }
];

export const CORE_VALUES: ValueCard[] = [
  {
    title: 'Innovation',
    description: 'Pioneering new solutions and embracing creative approaches to solve complex technological challenges.',
    iconName: 'Lightbulb'
  },
  {
    title: 'Integrity',
    description: 'Operating with unwavering honesty, transparency, and ethical standards in every business interaction.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Growth',
    description: 'Fostering continuous personal and professional development for our team, clients, and community.',
    iconName: 'TrendingUp'
  },
  {
    title: 'Empowerment',
    description: 'Equipping individuals and enterprises with the tools and knowledge needed to control their digital future.',
    iconName: 'Zap'
  },
  {
    title: 'Excellence',
    description: 'Maintaining an unyielding standard of premium quality in our services, code, and educational delivery.',
    iconName: 'Sparkles'
  },
  {
    title: 'Transformation',
    description: 'Catalyzing profound positive changes that elevate business operations and individual career trajectories.',
    iconName: 'Rocket'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Adebayo Johnson',
    role: 'Co-Founder & Chief Executive Officer',
    bio: 'Formally educated in Systems Engineering with over 12 years coordinating corporate digital structures and modern educational reforms across West Africa and beyond.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    linkedIn: '#'
  },
  {
    name: 'Clara Mensah',
    role: 'Director of Education & Academic Partnerships',
    bio: 'Dedicated curriculum architect and former school council director. Designed digital skills standards deployed in over 50 educational models for thousands of young learners.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
    linkedIn: '#'
  },
  {
    name: 'Ezekiel Cole',
    role: 'Head of Technology & Chief Enterprise Architect',
    bio: 'Full-stack infrastructure consultant specializing in custom database optimization, secure cloud migrations, and localized training for private sectors trying to upscale operations.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop',
    linkedIn: '#'
  },
  {
    name: 'Sarah Adeyemi',
    role: 'Marquee Debate Coordinator & Logic Instructor',
    bio: 'Award-winning international debate adjudicator and structural speech architect. Spearheads our customized QUIZ analytical and public delivery bootcamps.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    linkedIn: '#'
  }
];

export const CONTRACT_FAQS: FAQItem[] = [
  {
    question: 'What is the "QUIZ Programme" and who is it designed for?',
    answer: 'QUIZ stands for Questions, Understanding, Insight, and Coherence. It is our proprietary analytical training model designed for schools and businesses. It develops fast reading comprehension, critical deconstruction of arguments, and rapid oral presentations of solutions. Perfect for high school debate teams, graduate trainees, and directors.',
    category: 'Debate'
  },
  {
    question: 'How do businesses collaborate with BlinkTech for Digital Transformation?',
    answer: 'We initiate our collaboration with a thorough diagnostic assessment of your current technological setups, workflow bottlenecks, and budget targets. Depending on the gaps, we provide localized consulting, cloud migration blueprints, custom web application setups, and structured corporate workforce upskill bootcamps.',
    category: 'Business'
  },
  {
    question: 'When will the courses at BlinkTech Academy officially launch?',
    answer: 'Our professional self-paced academy courses are slated for launch later this year. To be the first to receive invitation links, customized module structures, and early-bird scholarship discounts, you can register your email for any prospective category inside our interactive Academic form on the Academy page!',
    category: 'Academy'
  },
  {
    question: 'Does BlinkTech offer physical or virtual training classes?',
    answer: 'We offer a hybrid approach! Our academic courses can be accessed virtually with direct, on-demand tutor consultations, whereas our enterprise advisory, corporate training, and school computational workshops are comfortably deployed physically directly inside your local classrooms or offices.',
    category: 'General'
  }
];
