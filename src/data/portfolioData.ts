import { PortfolioData } from '../types/portfolio';

export const initialPortfolioData: PortfolioData = {
  brandName: 'PRIYANKA',
  brandSub: 'DATA ANALYST & ML',
  creatorName: 'Priyanka',
  roleTagline: 'Data Analyst | Data Science',
  availabilityTag: 'Open for Opportunities • Pune & Remote',
  heroHeadingLine1: 'Transforming Data into',
  heroHeadingItalic: 'Actionable Impact.',
  heroSubheading:
    'Data Science Intern & CSE student passionate about Python, SQL, Machine Learning, and Power BI. I uncover hidden patterns, build predictive models, and design interactive dashboards that transform complex data into intelligent business decisions.',
  heroPortrait:
    '/priyanka.jpg?v=2',
  heroBadgeQuote: 'Turning complex numbers into strategic business clarity',
  stats: [
    { value: '9.10', label: 'B.Tech CGPA' },
    { value: '19+', label: 'GitHub Repositories' },
    { value: '4+', label: 'ML & Tech Certifications' },
    { value: '500+', label: 'Stocks Modeled (NIFTY)' },
  ],
  aboutPortrait:
    '/about-priyanka.jpg',
  contactPortrait:
    '/contact-priyanka.png',
  aboutTitle: "I'm Priyanka — uncovering insights that drive growth.",
  aboutSubtitle: 'ABOUT ME',
  aboutBio: [
    'I am currently pursuing a 6-month on-site internship in a Data Science role at WEINTERN Pvt. Limited in Kharadi, Pune, where I work with student analytics, design end-to-end multi-tier dashboards, and build financial time-series forecasting models.',
    'With a strong academic foundation in Computer Science & Engineering (9.10 CGPA at Gandhi Engineering College), I bridge exploratory data analysis with statistical modeling, predictive machine learning, and clean visual storytelling.',
    'Whether engineering features for the NIFTY 500 stock market or uncovering consumer trends in high-volume retail datasets, I love using Python, SQL, and Power BI to solve real-world problems.',
  ],
  aboutPoints: [
    'Exploratory Data Analysis (EDA) & Cleaning',
    'Machine Learning (Scikit-learn, XGBoost, LSTM)',
    'Executive Dashboards (Power BI & Seaborn)',
    'Complex SQL Queries & Statistical Analysis',
  ],
  aboutMissionQuote:
    'My mission is simple: to transform raw, unstructured data into predictive intelligence and meaningful business outcomes.',
  skillCategories: [
    {
      title: 'Data Analytics & BI',
      badge: 'Core Competency',
      iconType: 'analytics',
      description:
        'Transforming complex enterprise datasets into clean, reliable, and visually compelling decision tools.',
      skills: [
        'SQL (Complex Joins, Aggregations, Window Functions)',
        'Python (Pandas, NumPy)',
        'Power BI (Interactive DAX Dashboards)',
        'Exploratory Data Analysis (EDA)',
        'Data Visualization (Matplotlib, Seaborn, Plotly)',
        'Statistical Testing & Business Intelligence',
      ],
      tools: ['SQL', 'Python', 'Power BI', 'Excel', 'Pandas', 'NumPy'],
    },
    {
      title: 'Machine Learning & AI',
      badge: 'Advanced Modeling',
      iconType: 'ml',
      description:
        'Developing predictive models, time-series forecasting systems, and classification algorithms.',
      skills: [
        'Scikit-learn, XGBoost & Gradient Boosting',
        'Time Series Analysis (ARIMA, Statsmodels)',
        'Deep Learning (TensorFlow, Keras, LSTM, PyTorch)',
        'Feature Engineering & Data Preprocessing',
        'Model Evaluation (ROC-AUC, RMSE, F1-Score)',
        'Cross-Validation & Hyperparameter Tuning',
      ],
      tools: ['Scikit-learn', 'XGBoost', 'TensorFlow', 'Keras', 'LSTM', 'ARIMA'],
    },
    {
      title: 'Tools & Practical Development',
      badge: 'Engineering & Workflow',
      iconType: 'engineering',
      description:
        'Building scalable scripts, interactive data apps, and collaborating via modern version control.',
      skills: [
        'Streamlit Web Applications',
        'Jupyter Notebook & Data Pipelines',
        'Git & GitHub Version Control (19+ Repos)',
        'API Integration & Data Automation',
        'Python Scripting & Logic Architecture',
        'Clean, Documented & Reproducible Code',
      ],
      tools: ['Git', 'GitHub', 'Jupyter', 'Streamlit', 'VS Code', 'Python'],
    },
  ],
  projects: [
    {
      id: 'nifty-500-prediction',
      title: 'NIFTY 500 Stock Market Prediction',
      client: 'Financial Analytics & Time Series',
      category: 'Data Science / ML',
      type: 'flagship',
      metric: '500+',
      metricLabel: 'Equities Modeled',
      image:
        '/projects/nifty500.jpg',
      description:
        'Developed a machine learning-based stock market prediction framework using historical NIFTY 500 financial data to study market volatility and forecast asset trends.',
      challenge:
        'Financial time-series data contains significant market noise, non-stationarity, and non-linear patterns that standard linear models fail to capture.',
      solution:
        'Performed thorough data preprocessing, stationarity transformations, feature engineering (moving averages, technical indicators), and trained ensemble models (XGBoost, ARIMA, and Deep Learning LSTM neural networks).',
      outcome:
        'Successfully predicted multi-step price directions, evaluated performance using RMSE/MAE, and visualized predictive volatility trajectories in interactive charts.',
      tags: ['Python', 'XGBoost', 'ARIMA', 'LSTM', 'TensorFlow', 'Pandas', 'Statsmodels'],
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
      challenge:
        'Detecting consumer preferences across varying age brackets, occupations, marital statuses, and Indian states to guide targeted inventory planning.',
      solution:
        'Conducted end-to-end data cleaning, missing-value imputation, aggregation, and designed statistical visualizations with Seaborn and Matplotlib.',
      outcome:
        'Identified that married women aged 26-35 in the IT, Healthcare, and Aviation sectors drove over 60% of total revenue in Food, Clothing, and Electronics categories.',
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
      metricLabel: 'Interactive Portals',
      image:
        '/projects/weintern-dashboard.jpg',
      description:
        'Working with student-related data to build intuitive analytics dashboards for Students, Mentors, and Administrators for the WEINTERN official platform.',
      challenge:
        'Raw student activity, submission records, and attendance data were siloed, making real-time monitoring of engagement and curriculum progress tedious.',
      solution:
        'Engineered consolidated data pipelines and designed responsive dashboards highlighting key operational performance indicators (KPIs) and mentor review metrics.',
      outcome:
        'Enabled leadership to track cohort performance at a glance and gave students transparency over their progress and learning milestones.',
      tags: ['Power BI', 'Data Analytics', 'Python', 'KPIs', 'Git', 'GitHub'],
      githubUrl: 'https://github.com/priyanka-r-s',
    },
    {
      id: 'adhyayan-ai-newswise',
      title: 'Adhyayan AI Guru & NewsWise',
      client: 'Artificial Intelligence & NLP',
      category: 'AI / Data Application',
      type: 'flagship',
      metric: 'Smart AI',
      metricLabel: 'Interactive Assistance',
      image:
        '/projects/ai-guru.jpg',
      description:
        'An intelligent educational learning companion and automated news summarization utility utilizing NLP concepts and Python-based logic.',
      challenge:
        'Information overload in educational learning materials and high volume daily news feeds.',
      solution:
        'Built text parsing algorithms, knowledge retrieval flows, and interactive user interfaces to distill key information on demand.',
      outcome:
        'Provides personalized educational assistance and rapid, concise summaries of current articles for enhanced learning efficiency.',
      tags: ['Python', 'AI/ML', 'NLP', 'Streamlit', 'Python Libraries'],
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
      period: '04 May 2026 – 04 October 2026',
      mode: 'On-site Internship',
      highlights: [
        'Analyzed student engagement and cohort metrics to build comprehensive analytics dashboards for Students, Mentors, and Administrators.',
        'Engineered an ML-driven NIFTY 500 stock market prediction model applying statistical time-series forecasting, ARIMA, and LSTM architectures.',
        'Performed exploratory data analysis, data cleaning, feature extraction, and model performance benchmarking.',
        'Managed project codebase, branch workflows, and reproducible analytical pipelines using Git and GitHub.',
      ],
      technologies: [
        'Python',
        'Pandas',
        'NumPy',
        'Machine Learning',
        'Scikit-learn',
        'XGBoost',
        'LSTM',
        'Power BI',
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
      tag: 'NPTEL Certified',
      description:
        'Rigorous coursework covering mathematical foundations of ML, supervised & unsupervised learning, kernel methods, and neural networks.',
    },
    {
      title: 'Artificial Intelligence & Machine Learning',
      issuer: 'CTTC, Bhubaneswar',
      tag: 'Govt. of India Enterprise',
      description:
        'Hands-on technical training program focusing on Python for data analysis, computer vision concepts, and practical ML algorithms.',
    },
    {
      title: 'Cyber Security',
      issuer: 'Skill India Digital Hub',
      tag: 'Skill India',
      description:
        'Comprehensive security foundations including network protocols, encryption, ethical testing principles, and incident response.',
    },
    {
      title: 'Professional Edge Career Essentials',
      issuer: 'NIIT',
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
      title: 'College Hackathon Finalist / Participant',
      organization: 'Gandhi Engineering College',
      description:
        'Collaborated in competitive technical hackathons to develop rapid prototypes and software solutions under time constraints.',
    },
  ],
  faqs: [
    {
      id: 'faq-1',
      question: 'What types of roles are you actively looking for?',
      answer:
        'I am actively seeking full-time and internship opportunities as a Data Analyst, Junior Data Scientist, or Business Intelligence Analyst where I can leverage my expertise in Python, SQL, Machine Learning, and Power BI.',
    },
    {
      id: 'faq-2',
      question: 'What are your core technical strengths?',
      answer:
        'My core strengths lie in exploratory data analysis (EDA), cleaning messy datasets, building predictive ML pipelines with Scikit-learn and XGBoost, time-series forecasting (ARIMA/LSTM), complex SQL data transformations, and creating executive-ready Power BI dashboards.',
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
    'I am actively open to Data Analyst & Data Science opportunities. Whether you have an open role, a collaborative project, or want to discuss data strategies, feel free to reach out!',
  email: 'sahuranipriyanka56@gmail.com',
  phone: '+91 8260091373',
  location: 'Pune, Maharashtra, India',
  socials: {
    github: 'https://github.com/priyanka-r-s',
    linkedin: 'https://www.linkedin.com/in/priyanka-rani-sahu',
    email: 'sahuranipriyanka56@gmail.com',
  },
};
