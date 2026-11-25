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
    histoire: { lune: 'Waxing crescent', titre: 'My story' },
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
  titre: 'A passion awakened between design and code.',
  paragraphes: [
    'I’m Wendy Asmatico, a creative web developer. Between careful design and rigorous code, I build interfaces that are both beautiful and effective.',
    'I love meaningful projects: understanding what drives you, then turning it into a clear, fast and pleasant experience, crafted down to the smallest detail.',
  ],
  valeurs: [
    { titre: 'Creativity', texte: 'Every project is a chance to invent a unique experience.' },
    { titre: 'Care', texte: 'Typography, accessibility, performance: it all comes down to details.' },
    { titre: 'Listening', texte: 'Building projects together that reflect who we are.' },
  ],
  fiche: [
    { label: 'Based in', valeur: 'Marseille' },
    { label: 'Languages', valeur: 'French · English' },
    { label: 'Interests', valeur: 'Code · Design' },
  ],
  photoAlt: 'Portrait of Wendy Asmatico',
  photoLegende: 'Creative web developer',
  lien: 'Discover my skills',
},
};

export default en;
