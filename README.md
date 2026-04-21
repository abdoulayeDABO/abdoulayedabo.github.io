# Portfolio — Single Page · Style karpathy.ai

Site portfolio **une seule page**, minimaliste, HTML + CSS pur (zéro framework).
Toute la donnée est dans les fichiers YAML dans `data/`.

## Lancer

```bash
sudo apt install hugo      # ou brew install hugo
hugo server -D             # → http://localhost:1313
```

## Personnaliser

### 1. Tes infos de base → `hugo.toml`
```toml
name     = "Ton Nom"
tagline  = "Ta phrase d'accroche"
github   = "https://github.com/..."
email    = "ton@email.com"
```

### 2. Ton parcours → `data/timeline.yaml`
Chaque bloc = une période. Texte en Markdown supporté.
```yaml
- year: "2024 - présent"
  logo: "esp.png"           # image dans static/img/logos/
  desc: |
    Description en **Markdown**...
```

### 3. Tes projets → `data/projects.yaml`
```yaml
- name: "Mon Projet"
  github: "https://github.com/..."
  image: "projet.jpg"       # dans static/img/projects/
  desc: |
    Description...
  tags: ["Python", "Linux"]
```

### 4. Tes articles → `data/writing.yaml`
```yaml
- date: "Jan 2025"
  title: "Titre de l'article"
  url: "https://..."        # laisser "" si non publié
```

### 5. Ta photo → `static/img/avatar.jpg`

### 6. Logos institutions → `static/img/logos/`
### 7. Images projets → `static/img/projects/`

## Déployer sur GitHub Pages

Ajoute le fichier `.github/workflows/hugo.yml` :
```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: peaceiris/actions-hugo@v3
        with:
          hugo-version: 'latest'
      - run: hugo --minify
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```
Puis dans Settings → Pages → Source : branche `gh-pages`.

## Structure
```
portfolio/
├── hugo.toml
├── content/_index.md       ← vide, tout est dans data/
├── data/
│   ├── timeline.yaml       ← ton parcours
│   ├── projects.yaml       ← tes projets
│   ├── writing.yaml        ← tes articles
│   ├── talks.yaml          ← tes présentations (optionnel)
│   ├── bio.yaml            ← ta bio courte
│   └── misc.yaml           ← liens divers
├── layouts/
│   ├── _default/baseof.html
│   └── index.html          ← template single page
└── static/
    ├── css/style.css
    └── img/
        ├── avatar.jpg
        ├── logos/
        ├── projects/
        └── talks/
```
