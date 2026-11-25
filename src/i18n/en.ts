import type { Dictionnaire } from './utils';

// English texts: exactly the same structure as fr.ts
const en: Dictionnaire = {
  meta: {
    titre: 'Wendy Asmatico — Creative web developer',
    description: 'Portfolio of Wendy Asmatico, creative web developer and frontend architect.',
  },
  header: {
    accueil: 'Wendy Asmatico, back to home',
    collaborer: 'Work with me',
    choixLangue: 'Choose language',
  },
  phases: {
    accueil: { lune: 'New moon', titre: 'Home' },
    histoire: { lune: 'Waxing crescent', titre: 'Presentation' },
    competences: { lune: 'First quarter', titre: 'Skills' },
    projets: { lune: 'Waxing gibbous', titre: 'Projects' },
    etude: { lune: 'Full moon', titre: 'Case study' },
    parcours: { lune: 'Waning gibbous', titre: 'Journey' },
    contact: { lune: 'Last quarter', titre: 'Contact' },
    fin: { lune: 'Waning crescent', titre: 'End of the cycle' },
  },
  navigation: {
  libelle: 'Portfolio phases',
},
ouverture: {
  role: 'Creative development & frontend architecture',
  sousTitre: 'Creative web developer & frontend architect',
  citation: '“Weaving the poetry of code by moonlight to shape concrete, creative projects that reflect who we are.”',
  boutonProjets: 'Explore the constellations',
  boutonCycle: 'Enter the cycle',
  portfolio: 'Portfolio 2026',
  statut: {
    disponible: 'Open to work',
    enPoste: 'Currently employed · happy to connect',
  },
  defiler: 'Scroll down',
},
histoire: {
  journal: 'Observation log',
  titre: 'A passion awakened between design and code.',
  paragraphe: 'I’m Wendy, a creative web developer. Between careful design and rigorous code, I shape concrete, creative projects that reflect who we are. And when I’m not coding, I travel to other worlds.',
  domainesLabel: 'My fields',
  domaines: ['Web development', 'Interface design'],
  passions: { jeu: 'video games', lecture: 'reading', dessin: 'drawing' },
  legende: 'what orbits around me…',
  avatarAlt: 'Illustrated avatar of Wendy Asmatico',
  lien: 'Discover my skills',
},
  competences: {
    journal: 'Observation log',
    titre: 'My constellations',
    intro: 'Three families of skills, like three constellations. The golden stars are my favourites.',
    coupDeCoeur: 'Favourite',
    legende: 'My favourites',
    familles: {
      developpement: 'Development',
      conception: 'Design & planning',
      outils: 'Tools',
    },
    etoiles: {
      react: { nom: 'React', description: 'Dynamic interfaces built from reusable components.' },
      tailwind: { nom: 'Tailwind CSS', description: 'Fast, consistent styling right in the code.' },
      astro: { nom: 'Astro', description: 'Lightning-fast websites, like this portfolio.' },
      php: { nom: 'PHP', description: 'The server-side logic of dynamic websites.' },
      wordpress: { nom: 'WordPress', description: 'Custom websites that are easy to manage.' },
      shopify: { nom: 'Shopify', description: 'Online stores ready to sell.' },
      mysql: { nom: 'MySQL', description: 'Databases that keep content organised.' },
      maquettes: { nom: 'UI mockups', description: 'Screens designed before they are coded.' },
      typographie: { nom: 'Typography', description: 'Choosing and setting type so it speaks.' },
      designSystem: { nom: 'Design system', description: 'The rules and components that keep a site consistent.' },
      illustration: { nom: 'Illustration', description: 'Custom drawings that give projects a soul.' },
      parcours: { nom: 'User journey', description: 'Thinking through every step from the visitor’s point of view.' },
      cahier: { nom: 'Specifications', description: 'Turning an idea into clear requirements.' },
      gestion: { nom: 'Project management', description: 'Organising every step through to launch.' },
      figma: { nom: 'Figma', description: 'Mockups, prototypes and design systems.' },
      canva: { nom: 'Canva', description: 'Quick visuals for communication.' },
      procreate: { nom: 'Procreate', description: 'Drawing and illustration on a tablet.' },
      vscode: { nom: 'VS Code', description: 'My everyday code editor.' },
      git: { nom: 'Git', description: 'Tracking every version of my code.' },
    },
  },
};

export default en;
