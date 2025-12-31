# Portfolio

Un portfolio moderne et multilingue construit avec SvelteKit et déployé automatiquement sur GitHub Pages.

## Stack Technique

### Framework & Core
- **SvelteKit** - Framework d'application web
- **Svelte** - Framework JavaScript réactif
- **TypeScript** - Typage statique
- **Vite** - Build tool et dev server

### Styling & UI
- **Tailwind CSS** v4 - Framework CSS utilitaire
- **Lucide Svelte** - Bibliothèque d'icônes
- **mode-watcher** - Gestion du mode sombre/clair

### Internationalisation
- **Wuchale** v0.18.11 - Solution i18n
- Support de 6 langues : Français (source), Anglais, Espagnol, Allemand, Japonais, Italien

## Installation

### Prérequis
- Bun (dernière version)

### Commandes

```bash
# Installation
bun i

# Développement
bun run dev

# Build
bun run build

# Preview
bun run preview

# Type checking
bun run check

# Traductions
bun run translate
```

## Déploiement

### GitHub Actions

Le workflow `.github/workflows/deploy.yaml` déploie automatiquement le site sur GitHub Pages à chaque push sur `main`.

**Pipeline:**
1. **Build** - Installation des dépendances et build avec Bun
2. **Deploy** - Déploiement sur GitHub Pages

**Permissions requises:**
- `contents: read`
- `pages: write`
- `id-token: write`

### Déploiement local avec Caddy

```bash
caddy run
```

Le serveur écoute sur le port 80 et sert les fichiers depuis le dossier `build`.

## Structure

```
portofolio/
├── .github/workflows/       # GitHub Actions
├── src/
│   ├── lib/                 # Composants réutilisables
│   ├── locales/             # Traductions
│   └── routes/              # Pages SvelteKit
├── static/                  # Fichiers statiques
├── svelte.config.js         # Config SvelteKit
├── vite.config.ts           # Config Vite
└── wuchale.config.js        # Config i18n
```
