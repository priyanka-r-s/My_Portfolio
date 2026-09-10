import { PortfolioData } from '../types/portfolio';

export const initialPortfolioData: PortfolioData = {
  brandName: 'PRIYANKA',
  brandSub: 'DATA ANALYST & ML',
  creatorName: 'Priyanka Rani Sahu',
  roleTagline: 'Data Analyst | Aspiring Data Scientist',
  availabilityTag: 'Open for Opportunities • Pune & Remote',
  heroHeadingLine1: 'Transforming Data into',
  heroHeadingItalic: 'Actionable Impact.',
  heroSubheading:
    'Data Science Intern and CSE graduate skilled in Python, SQL, Power BI, Machine Learning, and statistical analysis. I build data pipelines, predictive models, and interactive dashboards that turn complex datasets into actionable business insights.',
  heroPortrait:
    '/priyanka.jpg?v=2',
  heroBadgeQuote: 'Turning complex numbers into strategic business clarity',
  stats: [
    { value: '9.10', label: 'B.Tech CGPA' },
    { value: '19+', label: 'Projects & Repos' },
    { value: '4+', label: 'ML & Tech Certs' },
    { value: 'NIFTY 500', label: 'Equities Analyzed' },
  ],
  aboutPortrait:
    '/about-priyanka.png?v=2',
  contactPortrait:
    '/contact-priyanka.jpg?v=2',
  aboutTitle: "I'm Priyanka — uncovering insights that drive growth.",
  aboutSubtitle: 'ABOUT ME',
  aboutBio: [
    'I am currently working as a Data Science Intern at WEINTERN Pvt. Limited in Kharadi, Pune, where I work on student analytics, end-to-end dashboards, and financial time-series forecasting.',
    'With a strong academic foundation in Computer Science & Engineering and a 9.10 CGPA, I combine exploratory data analysis, statistical modeling, machine learning, and data visualization to solve practical problems.',
    'Whether analyzing market volatility across the NIFTY 500 or uncovering customer purchasing patterns in large retail datasets, I focus on transforming data into clear, actionable business strategies.',
  ],
  aboutPoints: [
    'Exploratory Data Analysis & Cleaning (Pandas, NumPy)',
    'Predictive Modeling (Scikit-learn, ARIMA, LSTM)',
    'Executive BI Dashboards (Power BI, DAX Measures)',
    'Relational Database Querying (MySQL, PostgreSQL)',
  ],
  aboutMissionQuote:
    'My mission is simple: to transform raw, unstructured data into predictive intelligence and meaningful business outcomes.',
  skillCategories: [
    {
      title: 'Data Analytics & BI',
      badge: 'Core Competency',
      iconType: 'analytics',
      description:
        'Transforming enterprise datasets into clean, reliable, and visually compelling decision tools.',
      strongSkills: [
        'Python (Pandas, NumPy)',
        'SQL (MySQL, PostgreSQL, Joins & Aggregations)',
        'Power BI (Interactive DAX Dashboards)',
        'Exploratory Data Analysis (EDA)',
        'Data Cleaning & Validation',
      ],
      workingKnowledge: [
        'Statistical Hypothesis Testing',
        'Data Visualization (Matplotlib, Seaborn, Plotly)',
        'Business Intelligence KPIs',
        'Excel (Pivot Tables, Advanced Lookups)',
      ],
      skills: [
        'Python (Pandas, NumPy)',
        'SQL (MySQL, PostgreSQL)',
        'Power BI (Interactive DAX)',
        'Exploratory Data Analysis (EDA)',
        'Data Visualization (Seaborn, Matplotlib)',
      ],
      tools: ['SQL', 'Python', 'Power BI', 'MySQL', 'PostgreSQL', 'Pandas', 'NumPy', 'Excel'],
    },
    {
      title: 'Machine Learning & Modeling',
      badge: 'Advanced Analytics',
      iconType: 'ml',
      description:
        'Developing predictive models, statistical time-series forecasting, and evaluation pipelines.',
      strongSkills: [
        'Scikit-learn (Regression & Classification)',
        'Feature Engineering & Preprocessing',
        'Model Evaluation (RMSE, MAE, ROC-AUC, F1)',
        'Cross-Validation & Grid Search',
      ],
      workingKnowledge: [
        'XGBoost & Gradient Boosting',
        'Time Series Forecasting (ARIMA, Statsmodels)',
        'Deep Learning (TensorFlow, Keras, LSTM)',
        'PyTorch Foundations',
      ],
      skills: [
        'Scikit-learn (Regression & Classification)',
        'Feature Engineering & Preprocessing',
        'Time Series Analysis (ARIMA)',
        'Deep Learning (TensorFlow, LSTM)',
        'Model Evaluation (RMSE, ROC-AUC)',
      ],
      tools: ['Scikit-learn', 'XGBoost', 'ARIMA', 'TensorFlow', 'Keras', 'LSTM'],
    },
    {
      title: 'Tools & Practical Development',
      badge: 'Engineering & Workflow',
      iconType: 'engineering',
      description:
        'Building reproducible workflows, interactive analytical apps, and version-controlled repositories.',
      strongSkills: [
        'Git & GitHub Version Control (19+ Repos)',
        'Jupyter Notebook Analytical Pipelines',
        'Python Scripting & Automation',
        'Modular & Documented Code Architecture',
      ],
      workingKnowledge: [
        'Streamlit Web Applications',
        'VS Code Environment',
        'REST API Integration',
      ],
      skills: [
        'Git & GitHub (19+ Repos)',
        'Jupyter Notebooks',
        'Python Scripting & Automation',
        'Streamlit Web Applications',
        'VS Code Development',
      ],
      tools: ['Git', 'GitHub', 'VS Code', 'Jupyter', 'Streamlit', 'Python'],
    },
  ],
  projects: [
    {
      id: 'nifty-500-prediction',
      title: 'NIFTY 500 Stock Market Prediction',
      client: 'Financial Analytics & Time Series',
      category: 'Data Science / ML',
      type: 'flagship',
      metric: 'NIFTY 500',
      metricLabel: 'Equities Analyzed',
      image:
        '/projects/nifty500.jpg',
      description:
        'Developed a machine learning-based stock market prediction framework using historical NIFTY 500 financial data to study market volatility and forecast asset trends.',
      problem:
        'Financial time-series data contains severe market noise, volatility clustering, and non-linear patterns that standard linear models fail to capture.',
      challenge:
        'Financial time-series data contains significant market noise, non-stationarity, and non-linear volatility clustering that standard linear models fail to capture.',
      solution:
        'Performed data preprocessing, stationarity checks (ADF tests), moving-average feature engineering, ARIMA baseline modeling, and multi-layer LSTM neural networks for sequence forecasting.',
      outcome:
        'Achieved test RMSE of 0.024 and MAE of 0.018 with 78.4% directional trend prediction accuracy across modeled volatility windows.',
      techStack: ['Python', 'Pandas', 'NumPy', 'ARIMA', 'LSTM', 'Matplotlib', 'Statsmodels'],
      keyMetrics: [
        { label: 'RMSE', value: '0.024' },
        { label: 'MAE', value: '0.018' },
        { label: 'Directional Accuracy', value: '78.4%' },
      ],
      tags: ['Python', 'ARIMA', 'LSTM', 'XGBoost', 'TensorFlow', 'Pandas', 'Statsmodels'],
      githubUrl: 'https://github.com/priyanka-r-s',
    },
    {
      id: 'diwali-sales-analysis',
      title: 'Diwali Festive Sales Analysis',
      client: 'Retail & Consumer Analytics',
      category: 'Data Analytics & EDA',
      type: 'flagship',
      metric: '10K+',
      metricLabel: 'Transactions Analyzed',
      image:
        '/projects/diwali-sales.jpg',
      description:
        'Comprehensive exploratory data analysis on a large Diwali festival sales dataset to discover customer purchasing patterns and demographic drivers.',
      problem:
        'Detecting consumer preferences across varying age brackets, occupations, marital statuses, and Indian states to guide targeted inventory planning.',
      challenge:
        'Detecting consumer preferences across varying age brackets, occupations, marital statuses, and Indian states to guide targeted inventory planning.',
      solution:
        'Conducted end-to-end data cleaning, missing-value imputation, demographic aggregation, and designed statistical visualizations with Seaborn and Matplotlib.',
      outcome:
        'Identified that married women aged 26-35 in the IT, Healthcare, and Aviation sectors drove over 62% of total revenue in Food, Clothing, and Electronics categories.',
      techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'EDA'],
      keyMetrics: [
        { label: 'Transactions', value: '10,000+' },
        { label: 'Revenue Analyzed', value: '₹12.3M+' },
        { label: 'Key Segment', value: 'Women 26-35 (62%)' },
      ],
      tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'EDA', 'Business Insights'],
      githubUrl: 'https://github.com/priyanka-r-s',
    },
    {
      id: 'weintern-dashboards',
      title: 'Student, Mentor & Admin Analytics Platform',
      client: 'WEINTERN Pvt. Limited (Internship)',
      category: 'Dashboard Development',
      type: 'flagship',
      metric: '3',
      metricLabel: 'Role-Based Portals',
      image:
        '/projects/weintern-dashboard.jpg',
      description:
        'Working with student-related data to build intuitive analytics dashboards for Students, Mentors, and Administrators for the WEINTERN official platform.',
      problem:
        'Raw student activity, submission records, and attendance data were siloed, making real-time monitoring of cohort engagement and curriculum progress tedious.',
      challenge:
        'Raw student activity, submission records, and attendance data were siloed, making real-time monitoring of engagement and curriculum progress tedious.',
      solution:
        'Engineered unified data models, created calculated DAX measures for completion rates, and developed interactive role-based drill-down dashboards.',
      outcome:
        'Enabled leadership to track cohort performance at a glance and gave students transparency over their progress and learning milestones across 1,200+ active records.',
      techStack: ['Power BI', 'DAX', 'Python', 'SQL', 'Data Modeling'],
      keyMetrics: [
        { label: 'Portals', value: '3 (Student/Mentor/Admin)' },
        { label: 'Active Records', value: '1,200+' },
        { label: 'DAX Measures', value: '15+ KPIs' },
      ],
      tags: ['Power BI', 'DAX', 'Data Analytics', 'Python', 'SQL', 'KPIs'],
      githubUrl: 'https://github.com/priyanka-r-s',
    },
    {
      id: 'adhyayan-ai-newswise',
      title: 'Adhyayan AI Guru & NewsWise',
      client: 'Artificial Intelligence & NLP',
      category: 'AI / Data Application',
      type: 'flagship',
      metric: 'NLP AI',
      metricLabel: 'Automated Summaries',
      image:
        '/projects/ai-guru.jpg',
      description:
        'An intelligent educational learning companion and automated news summarization utility utilizing NLP concepts and Python-based logic.',
      problem:
        'Information overload in educational learning materials and high volume daily news feeds.',
      challenge:
        'Information overload in educational learning materials and high volume daily news feeds.',
      solution:
        'Built text parsing algorithms, knowledge retrieval flows, and interactive Streamlit user interfaces to distill key information on demand.',
      outcome:
        'Provides personalized educational assistance and rapid, concise summaries of current articles for enhanced learning efficiency.',
      techStack: ['Python', 'NLP', 'Streamlit', 'NLTK', 'TextBlob'],
      keyMetrics: [
        { label: 'Articles Processed', value: '500+' },
        { label: 'Avg Text Reduction', value: '65%' },
        { label: 'Interface', value: 'Streamlit' },
      ],
      tags: ['Python', 'NLP', 'Streamlit', 'TextBlob', 'NLTK'],
      githubUrl: 'https://github.com/priyanka-r-s',
    },
    {
      id: 'webfuzzer-pro',
      title: 'WebFuzzerPro',
      client: 'Cyber Security & Automated Testing',
      category: 'Security Testing',
      type: 'python_app',
      metric: 'Automation',
      metricLabel: 'Endpoint Auditing',
      image:
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      description:
        'A web security testing tool exploring web fuzzing concepts and identifying potential web application vulnerabilities through automated payload injection.',
      tags: ['Python', 'Web Testing', 'Security', 'Automation'],
      githubUrl: 'https://github.com/priyanka-r-s',
    },
    {
      id: 'python-games-suite',
      title: 'Interactive Python Logic Suite',
      client: 'Games & Algorithm Logic',
      category: 'Software Architecture',
      type: 'python_app',
      metric: '6+ Games',
      metricLabel: 'Classic Game Logic',
      image:
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80',
      description:
        'A collection of algorithmic Python projects including Snake Game, Gun-Snake-Water, Interactive Quiz System, Number Guess, and Password Guesser.',
      tags: ['Python', 'Algorithms', 'Logic Flow', 'User Interaction'],
      githubUrl: 'https://github.com/priyanka-r-s',
    },
    {
      id: 'calculator-currency',
      title: 'Calculator with History & Currency Converter',
      client: 'Utility Applications',
      category: 'Data Utility',
      type: 'python_app',
      metric: 'Real-time',
      metricLabel: 'State & API Logic',
      image:
        'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
      description:
        'Financial utility applications featuring dynamic state management, calculation history logs, and multi-currency exchange value conversions.',
      tags: ['Python', 'State Management', 'Data Handling'],
      githubUrl: 'https://github.com/priyanka-r-s',
    },
  ],
  experience: [
    {
      role: 'Data Science Intern',
      company: 'WEINTERN Pvt. Limited',
      location: 'Kharadi, Pune, Maharashtra (On-site)',
      period: 'May 2026 – Continuing',
      mode: 'Currently Pursuing (On-site)',
      highlights: [
        'Developed analytics dashboards for Students, Mentors, and Administrators to track engagement and cohort performance across 1,200+ active learners.',
        'Built time-series forecasting workflows using ARIMA and LSTM for financial market analysis across NIFTY 500 equity datasets.',
        'Performed data cleaning, EDA, feature engineering, and model benchmarking across structured relational and tabular datasets.',
        'Maintained reproducible project workflows using Git and GitHub, including structured branch workflows and version control.',
      ],
      technologies: [
        'Python',
        'SQL',
        'Power BI',
        'Pandas',
        'NumPy',
        'Scikit-learn',
        'XGBoost',
        'ARIMA',
        'LSTM',
        'Git',
        'GitHub',
      ],
    },
  ],
  education: [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Gandhi Engineering College, Bhubaneswar',
      university: 'Biju Patnaik University of Technology (BPUT), Rourkela',
      period: '2022 – 2026',
      score: '9.10 / 10',
      scoreLabel: 'CGPA',
      details:
        'Focus on Data Science, Machine Learning, Database Management Systems (DBMS), Operating Systems, and Advanced Algorithms.',
    },
    {
      degree: 'Higher Secondary (12th Science)',
      institution: 'Royal College of Science and Technology, Bhubaneswar',
      period: '2019 – 2021',
      score: '90.83%',
      scoreLabel: 'Percentage',
      details: 'Physics, Chemistry, Mathematics & Computer Science.',
    },
    {
      degree: 'Secondary School Examination (10th)',
      institution: 'Saraswati Sishu Vidya Mandir, Rayagada',
      period: 'Passed: 2019',
      score: '88.16%',
      scoreLabel: 'Percentage',
      details:
        'Ranked among Top 10 students across the entire Rayagada district. Honored with an academic award by Sambad newspaper.',
    },
  ],
  certifications: [
    {
      title: 'Machine Learning',
      issuer: 'NPTEL',
      year: '2024',
      tag: 'NPTEL Certified',
      description:
        'Rigorous coursework covering mathematical foundations of ML, supervised & unsupervised learning, kernel methods, and neural networks.',
      credentialUrl: 'https://nptel.ac.in/',
    },
    {
      title: 'Artificial Intelligence & Machine Learning',
      issuer: 'CTTC, Bhubaneswar',
      year: '2025',
      tag: 'Govt. of India Enterprise',
      description:
        'Hands-on technical training program focusing on Python for data analysis, computer vision concepts, and practical ML algorithms.',
    },
    {
      title: 'Cyber Security',
      issuer: 'Skill India Digital Hub',
      year: '2024',
      tag: 'Skill India',
      description:
        'Comprehensive security foundations including network protocols, encryption, ethical testing principles, and incident response.',
    },
    {
      title: 'Professional Edge Career Essentials',
      issuer: 'NIIT',
      year: '2024',
      tag: 'Professional Development',
      description:
        'Industry workplace skills, structured business communication, technical leadership, and collaborative team delivery.',
    },
  ],
  achievements: [
    {
      title: 'District Top 10 Rank & Sambad Recognition',
      organization: 'Rayagada District / Sambad Newspaper',
      description:
        'Ranked among the Top 10 students in the district with 88.16% in 10th standard; awarded formal recognition by leading daily newspaper Sambad.',
    },
    {
      title: 'Academic Merit Scholarships',
      organization: 'Merit Scholarship Board',
      description:
        'Awarded competitive academic merit scholarships across secondary (10th) and higher secondary (12th) education for consistent scholastic excellence.',
    },
    {
      title: 'College Hackathon Finalist',
      organization: 'Gandhi Engineering College | 2025',
      description:
        'Selected as a finalist in competitive technical hackathons to develop rapid prototypes and software solutions under time constraints.',
    },
  ],
  faqs: [
    {
      id: 'faq-1',
      question: 'What types of roles are you actively looking for?',
      answer:
        'I am actively seeking entry-level and full-time opportunities in Data Analytics, Data Science, and Business Intelligence, where I can apply Python, SQL, Machine Learning, and Power BI to solve real-world business problems.',
    },
    {
      id: 'faq-2',
      question: 'What are your core technical strengths?',
      answer:
        'My core strengths lie in exploratory data analysis (EDA), cleaning messy datasets, building predictive ML pipelines with Scikit-learn and XGBoost, time-series forecasting (ARIMA/LSTM), complex SQL data transformations (MySQL/PostgreSQL), and creating executive-ready Power BI dashboards.',
    },
    {
      id: 'faq-3',
      question: 'Can you work on-site in Pune or relocate?',
      answer:
        'Yes! I am currently based in Kharadi, Pune, Maharashtra and available for on-site, hybrid, and remote roles. I am also open to relocation across major tech hubs in India.',
    },
    {
      id: 'faq-4',
      question: 'Where can I inspect your code and repositories?',
      answer:
        'All my public repositories, including the NIFTY 500 prediction model, Diwali sales analysis, and Python projects, are available on my GitHub profile at github.com/priyanka-r-s.',
    },
  ],
  contactHeading: "Let's Build Something Impactful Together.",
  contactSubheading:
    "I'm currently open to Data Analyst, Data Science, and Business Intelligence opportunities. Whether you have an open role, a collaborative project, or want to discuss data strategies, feel free to reach out!",
  email: 'sahuranipriyanka56@gmail.com',
  phone: '+91 8260091373',
  location: 'Pune, Maharashtra, India',
  socials: {
    github: 'https://github.com/priyanka-r-s',
    linkedin: 'https://www.linkedin.com/in/priyanka-rani-sahu-3768b4303',
    email: 'sahuranipriyanka56@gmail.com',
  },
  resumeUrl: '/Priyanka_Resume.pdf',
};
