// ─────────────────────────────────────────────────────────────
// Réglages généraux du site, à modifier ici selon ta situation.
// ─────────────────────────────────────────────────────────────

/**
 * Ta situation professionnelle, affichée en haut de l'accueil :
 * - 'disponible' : point vert qui pulse, « Disponible »
 * - 'enPoste'    : point lavande, « En poste · ouverte aux échanges »
 * - 'masque'     : rien n'est affiché
 * Les textes se trouvent dans fr.ts et en.ts (bloc « statut »).
 */
export const statut: 'disponible' | 'enPoste' | 'masque' = 'enPoste';