# Mibde

Bienvunue sur le dépôt du site [mibde.fr](https://mibde.fr) !

Ce site utilise [scss](https://sass-lang.com) pour le style et [vite](https://vitejs.dev/) afin de bundler les fichiers.


## Structure du site

### Style

Le style est construit autour de la convention [BEM](http://getbem.com/) et du [système 7-1](https://gist.github.com/rveitch/84cea9650092119527bc).
## Comment utiliser ce projet

### Avec Docker

Le plus simple pour utiliser ce dépôt est d’installer [docker](https://www.docker.com/) et [docker-compose](https://docs.docker.com/compose/).

Ainsi, vous pouvez lancer ce projet avec la commande :

```docker-compose up --build```

### Avec Node

Sinon, il est possible de l’utiliser directement, avec [Yarn](https://yarnpkg.com/) ou [Npm](https://www.npmjs.com/). Les dépendances sont les suivantes :
* Node.js (>=12.0.0);
* Npm ou Yarn.

Puis, il vous faudrat commencer par installer les dépendances grâces à la commande :
```js
yarn install 
// ou 
npm install
```

Enfin, vous pouvez lancer le projet avec :
```js
yarn dev 
// ou 
npm run dev
```

### En production

Pour lancer ce projet en production, il faut lancer la commande :

`yarn run build`