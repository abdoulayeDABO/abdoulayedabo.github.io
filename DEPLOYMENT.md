# Configuration GitHub Pages pour Hugo

## Étapes à suivre sur GitHub :

1. **Allez sur** : https://github.com/abdoulayeDABO/abdoulayedabo.github.io/settings/pages

2. **Dans "Build and deployment"** :
   - Source : Sélectionnez **"GitHub Actions"** (pas "Deploy from a branch")

3. **Sauvegardez** et attendez quelques minutes

4. **Vérifiez le déploiement** : https://github.com/abdoulayeDABO/abdoulayedabo.github.io/actions

## En cas d'erreur de permissions

Si le workflow échoue avec une erreur de permissions :

1. Allez sur : https://github.com/abdoulayeDABO/abdoulayedabo.github.io/settings/actions
2. Dans "Workflow permissions", sélectionnez **"Read and write permissions"**
3. Cochez **"Allow GitHub Actions to create and approve pull requests"**
4. Sauvegardez et relancez le workflow

## Tester localement

Pour tester avant de déployer :
```bash
cd /home/mdialloc19/Bureau/Abdoulaye/web/perso
hugo server -D
```

Puis ouvrez : http://localhost:1313

## Générer le site en production

```bash
hugo --minify
```

Le site sera généré dans le dossier `public/` (qui est ignoré par git via .gitignore)
