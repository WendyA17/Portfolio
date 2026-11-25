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
};

export default fr;
