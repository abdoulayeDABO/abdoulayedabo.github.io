# Hugo Integration

Ce projet utilise Hugo pour générer les articles à partir de fichiers Markdown.

## Structure

```
content/articles/          # Fichiers Markdown des articles
layouts/articles/          # Templates Hugo pour les articles
  - list.html             # Page liste des articles
  - single.html           # Page d'un article individuel
static/                    # Fichiers statiques
archetypes/articles.md     # Template pour nouveaux articles
hugo.toml                  # Configuration Hugo
```

## Créer un nouvel article

```bash
hugo new content/articles/mon-article.md
```

Cela créera un nouveau fichier avec le front matter de base. Éditez le fichier pour ajouter votre contenu en Markdown.

## Générer le site

```bash
# Copier les fichiers CSS et JS dans static
cp style.css static/css/
cp script.js static/js/

# Générer le site
hugo

# Copier les articles générés dans la racine
cp -r public/articles .
cp public/css/style.css .
cp public/js/script.js .

# Nettoyer
rm -rf public/
```

## Format d'un article

```markdown
---
title: "Titre de l'article"
date: 2026-01-15
draft: false
description: "Description courte de l'article"
tags: ["Tag1", "Tag2", "Tag3"]
---

Contenu de l'article en Markdown...
```

## Aperçu local

```bash
hugo server -D
```

Visitez http://localhost:1313/articles/
