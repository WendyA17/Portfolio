import fr from './fr';
import en from './en';

export const langues = ['fr', 'en'] as const;
export type Langue = (typeof langues)[number];
export const langueParDefaut: Langue = 'fr';

/** La forme que chaque fichier de traduction doit respecter (celle de fr.ts) */
export type Dictionnaire = typeof fr;

const dictionnaires: Record<Langue, Dictionnaire> = { fr, en };

/** Renvoie tous les textes d'une langue : t.header.collaborer, t.phases.projets.titre… */
export function traductions(langue: Langue): Dictionnaire {
  return dictionnaires[langue];
}

/**
 * Donne l'adresse de la page actuelle dans une autre langue.
 * /         → /en/
 * /en/      → /
 * /projets/x → /en/projets/x
 */
export function urlDansLangue(url: URL, cible: Langue): string {
  const sansLangue = url.pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  if (cible === langueParDefaut) return sansLangue;
  return sansLangue === '/' ? '/en/' : `/en${sansLangue}`;
}
