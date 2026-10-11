const GH = 'https://github.com/marouaneelwali'

export const profile = {
  name: 'Marouane EL WALI',
  title: 'Full Stack Web Developer | Laravel · React · Next.js · AI Workflows (MCP)',
  stack: 'Laravel · Symfony · React · Next.js · Node.js · MCP',
  summary:
    'Full Stack Developer focused on clean architecture and shipping real products. I build web applications with Laravel, Symfony, React and Next.js, from UML design to deployment on Vercel, and I use generative AI and the Model Context Protocol (MCP) to speed up development, testing and code review. Finishing my Bachelor\'s in Information Systems Engineering and open to full-stack opportunities.',
  email: 'marouane27112004@gmail.com',
  phone: '07-77-37-52-91',
  linkedin: 'https://linkedin.com/in/marouane-el-wali-aba2a0288',
  github: GH,
}

export const menu = [
  { id: 'about', label: 'ABOUT ME' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'contact', label: 'CONTACT' },
]

export const stats = [
  ['BACK-END', 5], ['FRONT-END', 4], ['ARCHITECTURE', 4], ['AI WORKFLOW', 5], ['DEVOPS', 3],
]

export const experience = [
  {
    rank: 'MISSION 01', role: 'Full-Stack Developer', org: 'Polyclinique Internationale de Laâyoune', date: '04/2024 – 08/2024',
    points: [
      'Contributed to requirements analysis and designed the overall architecture with UML.',
      'Built front-end and back-end features with Laravel.',
      'Hardened application security and collaborated closely with the technical team.',
      'Wrote technical documentation and performed code reviews.',
    ],
  },
  {
    rank: 'MISSION 02', role: 'Technical Assistant & Data Manager', org: 'Alhikma Medical Center', date: '12/2023 – 01/2024',
    points: [
      'Administered the ZKBioTime attendance system on Windows Server.',
      'Managed fingerprint enrollment and assigned work schedules by department.',
      'Diagnosed and resolved technical issues with the application.',
      'Trained department heads to use the system\'s data.',
    ],
  },
]

export const education = [
  ['Bachelor\'s in Information Systems Engineering', 'Sup MTI', '2025 – 2026'],
  ['Entrepreneurial Innovation Program (certificate)', 'CMC', '2023 – 2024'],
  ['Specialized Technician in Digital Development, Full Stack Web', 'CMC', '2022 – 2024'],
  ['Baccalaureate in Physical Sciences', 'Lycée Jawharat Sahara', '2021 – 2022'],
]

// [name, level out of 5] — adjust levels to match reality
export const skills = {
  'BACK-END': [['PHP (Laravel, Symfony)', 5], ['Node.js (Express)', 4], ['Python', 3], ['Java', 3], ['C', 3]],
  'FRONT-END': [['JavaScript ES6+ / TypeScript', 4], ['React.js / Next.js', 4], ['Vue.js', 3], ['HTML5 / CSS3', 5]],
  'STYLES & UI': [['Tailwind CSS / ShadCN UI', 5], ['Bootstrap', 4], ['jQuery / AJAX', 3]],
  'SYSTEMS & DEVOPS': [['Windows Server 2022', 4], ['Docker', 3], ['Git / GitHub / GitLab', 4], ['Vercel deployments', 4]],
  'AI PRODUCTIVITY': [['AI-assisted dev (Claude, Codex)', 5], ['MCP', 4], ['GitHub Copilot', 4], ['Prompt Engineering', 4]],
  DATABASES: [['MySQL', 4], ['SQL Server / PL/SQL', 3], ['MongoDB', 3], ['Firebase (Firestore, Auth)', 3]],
  ARCHITECTURE: [['UML', 4], ['Design Patterns', 4], ['Agile / Scrum', 4], ['Photoshop (UI)', 3]],
}

export const projects = [
  {
    rank: 'TREASURE 01', name: 'SaharaCash ERP-Light',
    desc: "HR and administrative management platform for SaharaCash's agency network in Morocco, built as my final-year project (PFE).",
    tags: ['Laravel 10', 'PHP 8', 'MySQL', 'Bootstrap 5', 'Alpine.js', 'Chart.js'],
    details: [
      'Employee management per agency and city, plus contract lifecycle tracking (ANAPEC, CDD, CDI) with 30-day expiry alerts.',
      'Leave management with automatic balances, an interactive absence calendar and PDF certificates.',
      'Cash-deficit and lateness tracking with an employee/agency risk score and a KPI dashboard.',
      'Role-based access (HR vs branch) and an audit trail of sensitive actions.',
      'Excel import/export and PDF reports.',
    ],
    repo: `${GH}/Saharacash-erp`,
  },
  {
    rank: 'TREASURE 02', name: 'Wali Shop',
    desc: 'E-commerce web app built with Next.js, ShadCN UI and Firebase.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'ShadCN UI', 'Firebase'],
    details: [
      'Firebase Authentication (email/password and Google) with a Firestore database.',
      'Admin role handling through Firebase custom claims.',
      'WhatsApp contact configurable through environment variables.',
      'Deployed on Vercel.',
    ],
    live: 'https://ecomerce-wali-shop.vercel.app/', repo: `${GH}/ECOMERCE-WALI-SHOP`,
  },
  {
    rank: 'TREASURE 03', name: 'Find2P',
    desc: 'A gaming hub: upcoming games, free-to-play titles, news and deals in one place.',
    tags: ['React', 'Axios', 'Twitch API', 'Vercel'],
    details: [
      'Fetches games, streams and gaming data from the Twitch API with Axios.',
      'Sections for upcoming games, all games, free-to-play, news and deals.',
      'Responsive on desktop and mobile; deployed on Vercel.',
    ],
    live: 'https://find2p.vercel.app/', repo: `${GH}/FIND2P`,
  },
  {
    rank: 'TREASURE 04', name: 'Hospital HR Management',
    desc: 'Human resources management application for a hospital environment, built with Laravel.',
    tags: ['Laravel', 'PHP', 'Tailwind CSS', 'Vite'],
    details: [
      'Full Laravel application: routes, database migrations and a Vite + Tailwind front-end.',
      'Developed iteratively over 240+ commits.',
    ],
    repo: `${GH}/application-de-gestion-RH-hospitalier`,
  },
]
