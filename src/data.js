export const profile = {
  name: 'Marouane EL WALI',
  title: 'Développeur Web Full Stack | AI Workflows & Modern Tech',
  stack: 'Laravel · Symfony · React · Node.js · MCP',
  summary:
    "Passionné par l'architecture logicielle et les écosystèmes PHP & JavaScript, j'intègre l'IA générative et le Model Context Protocol (MCP) dans mon workflow pour accélérer le développement, optimiser les tests et garantir une haute qualité de code.",
  email: 'marouane27112004@gmail.com',
  phone: '07-77-37-52-91',
  linkedin: 'https://linkedin.com/in/marouane-el-wali-aba2a0288',
  github: 'https://github.com/marouaneelwali',
}

export const menu = [
  { id: 'about', label: 'ABOUT ME' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'contact', label: 'CONTACT' },
]

export const stats = [
  ['BACK-END', 5], ['FRONT-END', 4], ['ARCHITECTURE', 4], ['AI WORKFLOW', 5], ['DEVOPS', 3],
]

export const experience = [
  {
    rank: 'MISSION 01', role: 'Développeur Full-Stack', org: 'Polyclinique Internationale de Laâyoune', date: '04/2024 – 08/2024',
    points: [
      "Analyse des exigences fonctionnelles et conception de l'architecture globale via UML.",
      'Développement de fonctionnalités front-end et back-end performantes avec Laravel.',
      "Optimisation de la sécurité de l'application et collaboration technique en équipe.",
      'Rédaction de la documentation technique et revues de code.',
    ],
  },
  {
    rank: 'MISSION 02', role: 'Assistant Technique & Gestionnaire de Données', org: 'Alhikma Medical Center', date: '12/2023 – 01/2024',
    points: [
      'Administration du système de gestion des temps ZKbiotime sous Windows Server.',
      'Gestion des empreintes digitales et attribution des emplois du temps par département.',
      'Identification et résolution des problèmes techniques liés à l’application.',
      'Formation des chefs de département sur l’exploitation des données.',
    ],
  },
]

export const education = [
  ['Licence en Ingénierie des Systèmes d’Information', 'Sup MTI', '2025 – 2026'],
  ['Certificat Innovation Entrepreneuriale', 'CMC', '2023 – 2024'],
  ['TS Développement Digital — Web Full Stack', 'CMC', '2022 – 2024'],
  ['Baccalauréat Sciences Physiques', 'Lycée Jawharat Sahara', '2021 – 2022'],
]

// [nom, niveau /5] — ajuste les niveaux à ta guise
export const skills = {
  'BACK-END': [['PHP (Laravel, Symfony)', 5], ['Node.js (Express)', 4], ['Python', 3], ['Java', 3], ['C', 3]],
  'FRONT-END': [['JavaScript ES6+', 4], ['React.js', 4], ['Vue.js', 3], ['HTML5 / CSS3', 5]],
  'STYLES & UI': [['Tailwind CSS', 5], ['Bootstrap', 4], ['jQuery / AJAX', 3]],
  'SYSTEMS & DEVOPS': [['Windows Server 2022', 4], ['Docker', 3], ['Git / GitHub / GitLab', 4]],
  'AI PRODUCTIVITY': [['AI-assisted dev (Claude, Codex)', 5], ['MCP', 4], ['GitHub Copilot', 4], ['Prompt Engineering', 4]],
  DATABASES: [['MySQL', 4], ['SQL Server / PL/SQL', 3], ['MongoDB', 3]],
  ARCHITECTURE: [['UML', 4], ['Design Patterns', 4], ['Agile / Scrum', 4], ['Photoshop (UI)', 3]],
}
