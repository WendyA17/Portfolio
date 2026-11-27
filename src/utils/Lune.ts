// ─────────────────────────────────────────────────────────────
// Calculs communs à toutes les lunes du site.
// phase : de 0 (nouvelle lune) à 0.5 (pleine lune) puis 1 (retour)
// ─────────────────────────────────────────────────────────────

/** Forme SVG de la partie éclairée, dans un carré de 100 × 100 */
export function formeEclairee(phase: number): string {
  const p = ((phase % 1) + 1) % 1;
  if (p === 0) return '';
  const angle = 2 * Math.PI * p;
  const rx = Math.abs(Math.cos(angle)) * 50; // largeur de la limite jour/nuit
  const croissante = p < 0.5;                // la lumière vient de la droite
  const fin = Math.cos(angle) > 0;           // croissant fin ou lune gibbeuse ?
  const bord = croissante ? 1 : 0;
  const retour = croissante ? (fin ? 0 : 1) : fin ? 1 : 0;
  return `M50 0 A50 50 0 0 ${bord} 50 100 A${rx.toFixed(2)} 50 0 0 ${retour} 50 0 Z`;
}

/** Part éclairée : 0 à la nouvelle lune, 1 à la pleine lune */
export function partEclairee(phase: number): number {
  return (1 - Math.cos(2 * Math.PI * phase)) / 2;
}

/** Écrit un nombre en chiffres romains : 4 → « IV » */
export function enRomain(nombre: number): string {
  const table: [number, string][] = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'],
    [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
  ];
  let reste = nombre;
  let resultat = '';
  for (const [valeur, symbole] of table) {
    while (reste >= valeur) {
      resultat += symbole;
      reste -= valeur;
    }
  }
  return resultat;
}