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
};

export default en;
