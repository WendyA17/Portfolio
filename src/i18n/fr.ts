// ─────────────────────────────────────────────────────────────
// Textes en français : c'est la langue de référence.
// Toute clé ajoutée ici doit aussi exister dans en.ts,
// sinon VS Code (TypeScript) le signale en rouge.
// ─────────────────────────────────────────────────────────────
const fr = {
  meta: {
    titre: 'Wendy Asmatico — Développeuse web créative',
    description: 'Portfolio de Wendy Asmatico, développeuse web créative et architecte frontend.',
  },
  header: {
    accueil: 'Wendy Asmatico, retour à l’accueil',
    collaborer: 'Collaborer',
    choixLangue: 'Choisir la langue',
  },
  // Une entrée par section de l'accueil : le nom de la phase lunaire et le titre
  phases: {
    accueil: { lune: 'Nouvelle lune', titre: 'Accueil' },
    histoire: { lune: 'Premier croissant', titre: 'Mon histoire' },
    competences: { lune: 'Premier quartier', titre: 'Compétences' },
    projets: { lune: 'Gibbeuse croissante', titre: 'Projets' },
    etude: { lune: 'Pleine lune', titre: 'Étude de cas' },
    parcours: { lune: 'Gibbeuse décroissante', titre: 'Parcours' },
    contact: { lune: 'Dernier quartier', titre: 'Contact' },
    fin: { lune: 'Dernier croissant', titre: 'Fin du cycle' },
  },
  navigation: {
  libelle: 'Les phases du portfolio',
},
ouverture: {
  role: 'Développement créatif & architecture frontend',
  sousTitre: 'Développeuse web créative & architecte frontend',
  citation: '« Tisser la poésie du code sous la lueur de la lune pour façonner des projets concrets, créatifs et qui nous ressemblent. »',
  boutonProjets: 'Explorer les constellations',
  boutonCycle: 'Entrer dans le cycle',
  portfolio: 'Portfolio 2026',
  statut: {
    disponible: 'Disponible',
    enPoste: 'En poste · ouverte aux échanges',
  },
  defiler: 'Faites défiler',
},
histoire: {
  titre: 'L’éveil d’une passion entre création et code.',
  paragraphes: [
    'Je suis Wendy Asmatico, développeuse web créative. Entre le soin du design et la rigueur du code, je conçois des interfaces qui allient beauté et efficacité.',
    'J’aime les projets qui ont du sens : comprendre ce qui vous anime, puis le traduire en une expérience claire, rapide et agréable, pensée dans ses moindres détails.',
  ],
  valeurs: [
    { titre: 'Créativité', texte: 'Chaque projet est l’occasion d’inventer une expérience singulière.' },
    { titre: 'Soin', texte: 'Typographie, accessibilité, performance : tout se joue dans les détails.' },
    { titre: 'Écoute', texte: 'Construire ensemble des projets qui nous ressemblent.' },
  ],
  fiche: [
    { label: 'Basée à', valeur: 'Marseille' },
    { label: 'Langues', valeur: 'Français · Anglais' },
    { label: 'Curiosités', valeur: 'Code · Design' },
  ],
  photoAlt: 'Portrait de Wendy Asmatico',
  photoLegende: 'Développeuse web créative',
  lien: 'Découvrir mes compétences',
},
};

export default fr;
