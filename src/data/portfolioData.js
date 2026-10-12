export const personalData = {
  name: "Ashutosh Kumar Singh",
  brandName: "ASHU.DEV",
  roles: [
    "AI Teacher & Educator",
    "Generative AI Specialist",
    "Creative Front-End Developer",
    "ERP & Digital Infrastructure Coordinator"
  ],
  headline: "Building the Future with AI & Code.",
  subheadline: "I am an AI Educator and Developer passionate about turning complex technology into meaningful digital experiences, empowering 100+ students and 30+ educators with modern computational tools.",
  email: "ashutosh91528@hotmail.com",
  phone: "+91 7017615918",
  location: "India",
  status: "Available for Consulting & Keynotes",
  links: {
    github: "https://github.com/jordanashu",
    linkedin: "https://www.linkedin.com/in/jordanashu",
    email: "mailto:ashutosh91528@hotmail.com"
  },
  stats: [
    { value: "3+", label: "Years Experience", description: "In AI Education & Modern Front-End Dev" },
    { value: "100+", label: "Students Taught", description: "Across grades 6-10 with 95%+ engagement" },
    { value: "30+", label: "Educators Trained", description: "On Generative AI classroom workflows" },
    { value: "10+", label: "Student AI Projects", description: "Deployed ML, Python & interactive models" },
    { value: "500+", label: "Records Managed", description: "Optimized academic ERP modules at SMPS" }
  ]
};

export const experienceData = [
  {
    role: "AI Teacher & ERP Coordinator",
    organization: "SMPS School, Chandausi",
    period: "April 2024 – Present",
    type: "Full-Time",
    badge: "Current Role",
    highlights: [
      "Designed & delivered AI/Computational Thinking curriculum to 100+ students across 6-10 grades, integrating hands-on projects with Python and Machine Learning concepts.",
      "Developed AI-focused lessons aligned with CBSE/IB standards using interactive tools (ChatGPT, Gemini, Canva, NotebookLM).",
      "Facilitated district-level AI awareness programs, training 30+ educators on Generative AI integration in classrooms.",
      "Achieved 95%+ student engagement in AI workshop series; guided 10+ students in deploying functional AI applications.",
      "Managed and optimized school ERP system (Edunext) handling 500+ student/staff records across academic, administrative, and examination modules.",
      "Maintained and updated school website; increased visitor traffic by 40% through modern design and SEO optimization."
    ],
    skills: ["Generative AI", "Python", "Machine Learning", "Edunext ERP", "Curriculum Design", "NotebookLM", "Canva", "SEO"]
  },
  {
    role: "Front-End Developer | Intern",
    organization: "Code Brew Innovation",
    period: "Jan 2023 – June 2023",
    type: "Internship",
    badge: "Web3 & Front-End",
    highlights: [
      "Designed and implemented responsive and user-friendly web applications with React.",
      "Ensured seamless interaction with blockchain networks using Web3.js and modern API hooks.",
      "Collaborated with cross-functional teams to deliver high-performance user interfaces."
    ],
    skills: ["React.js", "Web3.js", "JavaScript", "Tailwind CSS", "REST APIs", "UI/UX"]
  },
  {
    role: "Front-End Developer | Intern",
    organization: "Hoping Minds",
    period: "Jan 2023 – June 2023",
    type: "Internship",
    badge: "Production React",
    highlights: [
      "Developed highly responsive websites and web applications using modern React architecture.",
      "Configured automated continuous deployment and hosting pipelines via Netlify and Git.",
      "Optimized client-side rendering performance, state management, and asset pipelines."
    ],
    skills: ["React.js", "Redux", "Netlify", "JavaScript", "HTML5/CSS3", "Git Workflow"]
  }
];

export const educationData = [
  {
    degree: "MCA (Master of Computer Applications)",
    institution: "Chandigarh University",
    location: "Mohali, Punjab",
    date: "01-06-2023",
    scoreBadge: "Major GPA: 7.9 / 10.0",
    level: "Postgraduate Degree",
    highlights: [
      "Advanced studies in Artificial Intelligence & Machine Learning architectures",
      "Distributed software systems, modern full stack web development & cloud deployments",
      "Advanced Algorithms, Data Structures, and Database Management Systems"
    ]
  },
  {
    degree: "BCA (Bachelor of Computer Applications)",
    institution: "Bareilly College",
    location: "Bareilly, UP",
    date: "Grad. 01-12-2017",
    scoreBadge: "First Class / Foundation Computing",
    level: "Undergraduate Degree",
    highlights: [
      "Core programming in C++, Python, and Object-Oriented Software Principles",
      "Relational Database Systems (SQL) and Table Normalization",
      "Computer Networks, Operating Systems, and Foundation Computational Theory"
    ]
  }
];

export const courseworkData = [
  { name: "Full Stack Web Development", icon: "Code2" },
  { name: "Database Systems (SQL & RDBMS)", icon: "Database" },
  { name: "Algorithms and Data Structures", icon: "Binary" },
  { name: "AI and Machine Learning", icon: "Cpu" },
  { name: "Internet of Things (IoT)", icon: "Network" },
  { name: "Distributed Systems & Cloud", icon: "Server" }
];

export const projectsData = [
  {
    id: "persona-chatbot",
    title: "Persona AI Chatbot",
    category: "Generative AI & LLM",
    shortDesc: "Interactive AI chatbot application powered by OpenAI GPT-4o-mini with custom system prompts, contextual memory, and role persona switches.",
    fullDesc: "An interactive, multi-persona AI conversational system built using Python and OpenAI's GPT API. Features custom persona prompting, dynamic memory recall, token streaming, and an intuitive UI for real-time natural language interaction.",
    tags: ["Python", "OpenAI API", "GPT-4o-mini", "Streamlit / React", "Prompt Engineering"],
    stats: "Sub-second response streaming with role memory",
    github: "https://github.com/jordanashu",
    live: "https://github.com",
    featured: true,
    accent: "#00f0ff"
  },
  {
    id: "tanishkaips",
    title: "Tanishkaips.com — Educational Portal",
    category: "Full-Stack Web App",
    shortDesc: "A live, production school web application and portal built for educational institutions with responsive design, dynamic admissions, and SEO optimization.",
    fullDesc: "Designed, developed, and deployed a live school web platform catering to students, parents, and administrative staff. Increased traffic by 40% through strict Core Web Vitals compliance, modern responsive layouts, and structured search metadata.",
    tags: ["React.js", "Tailwind CSS", "Node.js", "SEO", "Responsive UI"],
    stats: "40% Traffic Increase & Live Production",
    github: "https://github.com/jordanashu",
    live: "https://www.tanishkaips.com",
    featured: true,
    accent: "#8a2be2"
  },
  {
    id: "rag-assistant",
    title: "RAG Knowledge Assistant",
    category: "AI & Vector Search",
    shortDesc: "A Retrieval-Augmented Generation pipeline answering complex academic questions directly from uploaded syllabus and research documents.",
    fullDesc: "Built an intelligent document retrieval system combining vector embeddings and LLM reasoning. Allows students and teachers to search across textbook PDFs, generating source-cited explanations with zero hallucinations.",
    tags: ["Python", "LangChain", "ChromaDB", "Gemini / OpenAI", "Vector Embeddings"],
    stats: "Zero-hallucination semantic document retrieval",
    github: "https://github.com",
    live: "https://github.com",
    featured: true,
    accent: "#6366f1"
  },
  {
    id: "student-coding-labs",
    title: "Interactive AI & Coding Lab",
    category: "EdTech & Interactive 3D",
    shortDesc: "Curated series of hands-on interactive coding labs designed for 100+ students covering computer vision, Python games, and Teachable Machine models.",
    fullDesc: "Interactive learning playground integrating Google Teachable Machine, block-to-code bridges in Scratch, and browser-based Python executions for middle and high-school computational thinking lessons.",
    tags: ["Teachable Machine", "Python", "JavaScript", "Scratch", "Canva Education"],
    stats: "100+ Active Students & 95%+ Engagement",
    github: "https://github.com/jordanashu",
    live: "https://github.com",
    featured: false,
    accent: "#10b981"
  },
  {
    id: "web3-dashboard",
    title: "Web3 Decentralized Application",
    category: "Blockchain & Frontend",
    shortDesc: "Modern crypto portfolio and interaction dashboard interfacing with smart contracts via Web3.js and animated React components.",
    fullDesc: "Developed during internship at Code Brew Innovation, delivering real-time wallet balance tracking, transaction receipts, and seamless smart contract RPC interactions with high visual polish.",
    tags: ["React.js", "Web3.js", "Tailwind CSS", "Ethers.js", "REST APIs"],
    stats: "Seamless EVM wallet connections",
    github: "https://github.com/jordanashu",
    live: "https://github.com",
    featured: false,
    accent: "#f59e0b"
  }
];

export const skillsCategories = [
  {
    name: "AI & Generative AI",
    badge: "Core Specialization",
    description: "Hands-on expertise in prompt architecture, foundational models, LLM integration, and classroom AI literacy.",
    skills: [
      { name: "Generative AI", level: 95, icon: "Sparkles", desc: "Advanced prompting, workflow automation, and multimodal applications" },
      { name: "Prompt Engineering", level: 96, icon: "Terminal", desc: "Few-shot prompting, system steering, reasoning chains (CoT)" },
      { name: "RAG Architectures", level: 88, icon: "Database", desc: "Retrieval-Augmented Generation with vector embeddings and chunking" },
      { name: "AI Agents", level: 86, icon: "Bot", desc: "Autonomous task execution, function calling, tool use" },
      { name: "Machine Learning Concepts", level: 85, icon: "Cpu", desc: "Classification, regression, supervised & unsupervised paradigms" },
      { name: "Computer Vision Basics", level: 80, icon: "Eye", desc: "Image recognition, Google Teachable Machine, OpenCV principles" },
      { name: "Interactive AI Tools", level: 98, icon: "Wand2", desc: "ChatGPT, Google Gemini, NotebookLM, Claude for education & code" }
    ]
  },
  {
    name: "Frontend & Web Development",
    badge: "Production Engineering",
    description: "Developing blazing-fast, responsive web applications with modern component architectures and fluid animations.",
    skills: [
      { name: "React.js", level: 92, icon: "Code2", desc: "Custom hooks, state management, SPA routing, performance optimization" },
      { name: "JavaScript (ES6+)", level: 94, icon: "FileCode", desc: "Async/await, closures, modern ES features, DOM manipulation" },
      { name: "Tailwind CSS", level: 95, icon: "Palette", desc: "Utility-first design systems, responsive layouts, glassmorphism" },
      { name: "HTML5 & CSS3", level: 96, icon: "Layout", desc: "Semantic structure, responsive Flexbox/Grid, CSS variables, keyframes" },
      { name: "Redux", level: 82, icon: "Layers", desc: "Predictable state containers, slices, middleware" },
      { name: "Bootstrap & Sass", level: 88, icon: "Component", desc: "CSS preprocessing, modular mixins, grid systems" },
      { name: "Git & BitBucket", level: 90, icon: "GitBranch", desc: "Version control, branching workflows, PR reviews, CI/CD" }
    ]
  },
  {
    name: "Programming & Backend",
    badge: "Foundation Computing",
    description: "Solid computational fundamentals in data structures, algorithms, and backend scripting.",
    skills: [
      { name: "Python", level: 90, icon: "FileCode2", desc: "AI scripting, data analytics, automation, educational labs" },
      { name: "C++", level: 80, icon: "Binary", desc: "Object-oriented programming, memory fundamentals, data structures" },
      { name: "SQL & RDBMS", level: 85, icon: "Database", desc: "Relational queries, schema design, table normalization" },
      { name: "REST APIs & Web3.js", level: 84, icon: "Network", desc: "Connecting decentralized networks and cloud endpoints" }
    ]
  },
  {
    name: "Educational Tech & Creative Tools",
    badge: "Pedagogy & Design",
    description: "Empowering next-generation learners through visual creativity, gamified learning, and enterprise school management.",
    skills: [
      { name: "Edunext ERP", level: 92, icon: "Server", desc: "Managing 500+ records, exam modules, fees, student portals" },
      { name: "Canva Education", level: 95, icon: "Brush", desc: "Visual storytelling, classroom slides, dynamic graphic assets" },
      { name: "Google Colab", level: 90, icon: "Laptop", desc: "Cloud GPU notebook executions for student Python & ML labs" },
      { name: "Scratch & Block Coding", level: 92, icon: "Gamepad2", desc: "Computational thinking fundamentals for grades 6-8" },
      { name: "Three.js & 3D Web", level: 78, icon: "Box", desc: "WebGL interactive viewports, particles, shaders" }
    ]
  }
];

export const certificationsData = {
  educator: [
    {
      title: "Gemini Certified Educator",
      issuer: "Google",
      badge: "Active",
      icon: "ShieldCheck",
      color: "from-blue-500 to-cyan-400",
      description: "Certified by Google for leveraging Gemini and AI-assisted pedagogy to enhance classroom instruction, curriculum design, and teacher productivity."
    },
    {
      title: "AI Aware Certification",
      issuer: "CBSE (Central Board of Secondary Education)",
      badge: "Verified",
      icon: "Award",
      color: "from-indigo-500 to-purple-500",
      description: "Official CBSE certification validating mastery in core AI concepts, computational thinking frameworks, and school curriculum integration."
    },
    {
      title: "District-Level Deliberation on Computational Thinking & AI",
      issuer: "District Academic Council",
      badge: "Honor",
      icon: "Users",
      color: "from-purple-500 to-pink-500",
      description: "Recognized for leading interactive district-level sessions empowering 30+ teachers with actionable AI teaching methodologies."
    },
    {
      title: "Canva Education: Code & Magic Activities",
      issuer: "Mahattattva Academy",
      badge: "Certified",
      icon: "Wand2",
      color: "from-cyan-500 to-emerald-400",
      description: "Specialized training on integrating creative visual media, magic design, and interactive coding activities into STEM education."
    },
    {
      title: "Critical and Creative Thinking",
      issuer: "CBSE (2-Day Intensive)",
      badge: "Intensive",
      icon: "Brain",
      color: "from-amber-500 to-orange-500",
      description: "Rigorous pedagogical immersion in higher-order thinking skills, problem-solving rubrics, and modern inquiry-based learning."
    },
    {
      title: "Learning through Art Integration - Secondary Stage",
      issuer: "CBSE",
      badge: "Certified",
      icon: "Palette",
      color: "from-rose-500 to-pink-500",
      description: "Innovative curriculum design merging artistic expression with science, math, and coding concepts for secondary grades."
    },
    {
      title: "Induction Training Programme (Guru Dakshta)",
      issuer: "CBSE",
      badge: "Honors",
      icon: "GraduationCap",
      color: "from-blue-600 to-indigo-600",
      description: "Comprehensive institutional faculty training focused on student psychology, classroom management, and tech-driven instruction."
    }
  ],
  technical: [
    {
      title: "Data Analytics with Python (12-Week Course)",
      issuer: "NPTEL / IIT",
      badge: "12 Weeks",
      icon: "FileSpreadsheet",
      color: "from-emerald-500 to-teal-400",
      description: "In-depth academic training covering NumPy, Pandas, Matplotlib, statistical inference, data wrangling, and predictive modeling."
    },
    {
      title: "SAFAL Exam Training Programme",
      issuer: "CBSE",
      badge: "Competency Based",
      icon: "CheckCircle2",
      color: "from-cyan-500 to-blue-500",
      description: "Structured assessment program for evaluating foundational and competency-based student learning outcomes."
    },
    {
      title: "Digital Marketing Certification",
      issuer: "Great Learning",
      badge: "Industry Certified",
      icon: "TrendingUp",
      color: "from-violet-500 to-indigo-500",
      description: "SEO optimization, social engagement pipelines, content analytics, and digital brand elevation."
    },
    {
      title: "DOEACC 'O' Level",
      issuer: "NIELIT (1 Year Professional Course)",
      badge: "1 Year Foundation",
      icon: "Layers",
      color: "from-sky-500 to-cyan-500",
      description: "Government-recognized professional IT certification covering programming fundamentals, databases, OS, and networking."
    },
    {
      title: "Cyber Safety and Security",
      issuer: "CBSE",
      badge: "Security Standard",
      icon: "Lock",
      color: "from-red-500 to-orange-500",
      description: "Essential protocols for student data protection, ethical AI use, digital hygiene, and cybersecurity compliance in schools."
    }
  ]
};

export const aiLabConcepts = [
  {
    id: "rag",
    title: "Retrieval-Augmented Generation (RAG)",
    concept: "Knowledge Vectorization",
    desc: "Bridges private knowledge bases with LLM power. Extracts document chunks, embeds them into high-dimensional vector spaces, and feeds context directly into prompts for fact-grounded responses.",
    formula: "Query → Vector Index → Top-K Chunks → Contextual Prompt → LLM Response",
    color: "#00f0ff"
  },
  {
    id: "agents",
    title: "Autonomous AI Agents",
    concept: "ReAct & Tool Use",
    desc: "Systems that do not just chat, but reason, plan, call external APIs, query databases, and execute multi-step workflows until achieving user-defined goals.",
    formula: "Thought → Action (API / Tool) → Observation → Next Step → Completion",
    color: "#8a2be2"
  },
  {
    id: "prompting",
    title: "System & Cognitive Prompting",
    concept: "Reasoning Architectures",
    desc: "Directing foundational models with structured schemas, few-shot demonstration exemplars, chain-of-thought (CoT) branching, and guardrailed safety rules.",
    formula: "Role + Context + Constraints + Few-Shot Examples + Desired Output Schema",
    color: "#38bdf8"
  },
  {
    id: "neural-nets",
    title: "Neural Network Architectures",
    concept: "Deep Representation Learning",
    desc: "Layered matrix transformations with non-linear activation functions that learn representations from high-dimensional inputs such as vision tokens and word embeddings.",
    formula: "y = σ(W · x + b)",
    color: "#f59e0b"
  }
];
