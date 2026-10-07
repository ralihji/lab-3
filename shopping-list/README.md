# Laboratoire 3 · Liste de courses (Angular)

SEG3502 A00 · Université d'Ottawa

| Membre | Numéro étudiant | Rôle |
|---|---|---|
| Hjiyej Andaloussi Elghali | 300379897 | Logique : composants, `@Input` / `@Output` |
| Brayan Adou | 300433616 | Interface : feuilles de style CSS, README, rapport |

## Description

Application Angular (standalone, Angular 20) qui gère une liste de courses :

- un champ de texte et un bouton **Ajouter** pour ajouter un article ;
- la liste des articles, chacun avec son bouton **Supprimer**.

L'application compte trois composants :

```
App (garde le tableau items: string[])
├── ItemInput   champ + bouton Ajouter      → @Output() addItem
└── ItemList    articles + boutons Supprimer → @Input() items, @Output() removeItem
```

- `ItemInput` émet le texte saisi vers `App` (un texte vide ou fait seulement d'espaces est ignoré, le champ est vidé après un ajout).
- `App` ajoute l'article au tableau et le redonne à `ItemList` par `[items]`.
- `ItemList` émet l'indice de l'article à retirer ; `App` retire seulement cet article.

### Interface (CSS)

| Fichier | Contenu |
|---|---|
| `src/styles.css` | Variables de couleurs communes, police, fond de la page, contour de focus au clavier |
| `src/app/app.css` | Carte principale encadrée et titre avec une icône de chariot |
| `src/app/item-input/item-input.css` | Cadre du composant de saisie, champ arrondi, bouton gris « Ajouter » avec effet de touche enfoncée |
| `src/app/item-list/item-list.css` | Cadre du composant liste, articles en barres bleues, boutons « Supprimer » (rouges au survol), message de liste vide, animation d'ajout |

Chaque composant est entouré d'un cadre (`:host`) comme sur la maquette de l'énoncé, pour bien voir les deux composants. La mise en page s'adapte aux écrans de téléphone (le bouton Ajouter passe sous le champ).

## Installer et exécuter

Prérequis : **Node.js 20.19 ou plus récent** (vérifier avec `node -v`) et Git. Angular CLI n'a pas besoin d'être installé globalement : `npx` utilise la version du projet.

```bash
git clone https://github.com/ralihji/LAB-3.git
cd LAB-3/shopping-list
npm install
npx ng serve
```

Ouvrir ensuite <http://localhost:4200/> dans un navigateur. Arrêter le serveur avec `Ctrl + C`.

### Tests

```bash
npx ng test --watch=false
```

### Compilation de production

```bash
npx ng build
```

Les fichiers compilés sont placés dans `dist/shopping-list/`.
