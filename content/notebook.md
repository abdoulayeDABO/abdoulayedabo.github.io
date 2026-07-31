---
title: "Notebook"
---

Cette page contient des notebooks d'expérimentation, certains issues, des articles et livres que j'ai lus.


- [RAG serverless avec DuckDB](https://colab.research.google.com/drive/1JWhYVpQdWyLILekPxp7x_YNaeCgmnGHr) : Ce notebook réalise un pipeline RAG (Retrieval-Augmented Generation) : il charge les documents sources (fiches produits, FAQ, CGV), les découpe en chunks, génère leurs embeddings avec BGE-M3, puis sauvegarde le tout dans une base vectorielle DuckDB.
