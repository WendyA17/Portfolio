// ─────────────────────────────────────────────────────────────
// Les « collections » de contenu du site.
// Une collection = un dossier de fichiers Markdown qui suivent
// tous la même fiche. Astro vérifie que chaque fiche est complète.
// ─────────────────────────────────────────────────────────────
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projets = defineCollection({
  // Un fichier .md par projet et par langue :
  //   src/content/projets/fr/mon-projet.md
  //   src/content/projets/en/mon-projet.md
  loader: glob({ pattern: '**/*.md', base: './src/assets/projets' }),

  // La fiche que chaque projet doit remplir
  schema: ({ image }) =>
    z.object({
      titre: z.string(),
      categorie: z.enum(['site', 'creation']), // site web ou création (Canva, Procreate…)
      type: z.string(),                        // ex. « Projet client », « Projet personnel », « Formation »
      annee: z.number(),
      description: z.string(),                 // une ou deux phrases pour la galerie
      role: z.string(),                        // ex. « Design + intégration »
      technos: z.array(z.string()).default([]),
      couverture: image(),
      cadrage: z.enum(['haut', 'centre', 'bas', 'gauche', 'droite']).default('centre'), // partie de l'image visible sur la carte                     // l'image principale, dans src/assets/projets/
      images: z.array(image()).default([]),    // d'autres images pour la page détaillée
      lien: z.url().optional(),                // le projet en ligne
      github: z.url().optional(),              // le code source
      aLaUne: z.boolean().default(false),      // le projet de la pleine lune
      ordre: z.number().default(99),           // pour choisir l'ordre dans la galerie
    }),
});

export const collections = { projets };