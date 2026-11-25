// ─────────────────────────────────────────────────────────────
// Les constellations de compétences : leur dessin (positions,
// liens, favorites). Les noms et descriptions sont dans fr.ts / en.ts.
//
// Chaque scène mesure 396 × 340 : x et y sont la place de l'étoile
// dans ce rectangle. cote = côté où s'écrit son nom ('d' droite, 'g' gauche).
// ─────────────────────────────────────────────────────────────

export type CleEtoile =
  | 'react' | 'tailwind' | 'astro' | 'php' | 'wordpress' | 'shopify' | 'mysql'
  | 'maquettes' | 'typographie' | 'designSystem' | 'illustration' | 'parcours' | 'cahier' | 'gestion'
  | 'figma' | 'canva' | 'procreate' | 'vscode' | 'git';

export type CleFamille = 'developpement' | 'conception' | 'outils';

export interface Etoile {
  cle: CleEtoile;
  x: number;
  y: number;
  cote: 'd' | 'g';
  favori?: boolean; // tes coups de cœur, en doré
}

export interface Constellation {
  cle: CleFamille;
  etoiles: Etoile[];
  liens: [number, number][]; // paires d'étoiles reliées (par leur position dans la liste)
}

export const constellations: Constellation[] = [
  {
    cle: 'developpement',
    etoiles: [
      { cle: 'react', x: 60, y: 80, cote: 'd', favori: true },
      { cle: 'tailwind', x: 230, y: 56, cote: 'd', favori: true },
      { cle: 'astro', x: 100, y: 190, cote: 'd' },
      { cle: 'php', x: 300, y: 170, cote: 'g' },
      { cle: 'wordpress', x: 330, y: 284, cote: 'g' },
      { cle: 'shopify', x: 200, y: 318, cote: 'd' },
      { cle: 'mysql', x: 176, y: 246, cote: 'd' },
    ],
    liens: [[0, 1], [1, 2], [2, 0], [1, 3], [3, 4], [4, 5], [3, 6], [6, 4]],
  },
  {
    cle: 'conception',
    etoiles: [
      { cle: 'maquettes', x: 50, y: 64, cote: 'd' },
      { cle: 'typographie', x: 240, y: 40, cote: 'd' },
      { cle: 'designSystem', x: 320, y: 146, cote: 'g' },
      { cle: 'illustration', x: 70, y: 164, cote: 'd' },
      { cle: 'parcours', x: 160, y: 236, cote: 'd' },
      { cle: 'cahier', x: 36, y: 326, cote: 'd' },
      { cle: 'gestion', x: 360, y: 292, cote: 'g' },
    ],
    liens: [[0, 1], [1, 2], [0, 3], [3, 4], [4, 6], [6, 5], [5, 4]],
  },
  {
    cle: 'outils',
    etoiles: [
      { cle: 'figma', x: 70, y: 80, cote: 'd' },
      { cle: 'canva', x: 220, y: 50, cote: 'd', favori: true },
      { cle: 'procreate', x: 320, y: 160, cote: 'g' },
      { cle: 'vscode', x: 230, y: 282, cote: 'd' },
      { cle: 'git', x: 80, y: 250, cote: 'd' },
    ],
    liens: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]],
  },
];