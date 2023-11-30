# Nom de Votre Projet

## Description

Bienvenue dans my-social-media-backend ! Il s'agit d'une API RESTful développée pour alimenter un réseau social. Cette API offre des fonctionnalités essentielles pour la gestion des utilisateurs, des publications, des commentaires, etc.

## Fonctionnalités Principales

- **Gestion des Utilisateurs :** Création, mise à jour, suppression et récupération des informations des utilisateurs.
- **Publications :** Création, modification, suppression et récupération des publications.
- **Commentaires :** Possibilité de commenter les publications.

## Technologies Utilisées

- **Express.js :** Un framework web minimaliste pour Node.js, idéal pour la création d'API RESTful.
- **MongoDB :** Une base de données NoSQL utilisée pour stocker les informations de manière flexible.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine :

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation

1. Clonez le dépôt : `git clone git@github.com:micael-jerry/my-social-media-backend.git`
2. Accédez au répertoire du projet : `cd my-social-media-backend`
3. Installez les dépendances : `npm install`

## Configuration

1. Créez un fichier `.env` à la racine du projet et configurez les variables d'environnement nécessaires:

- PORT= < port ou l'app va demarrer >
- DATABASE_URL= < url de la base de donnee mongodb >

## Démarrage

1. Lancez l'application : `npm start`
2. Lancez l'application en mode developpement: `npm run dev`
3. L'API sera accessible à l'adresse : `http://localhost:8080` (ou tout autre port que vous avez configuré)

## Endpoints

- **GET /api/user :** Récupère la liste des utilisateurs.
- **GET /api/:id :** Récupère les informations d'un utilisateur spécifique.
- **POST /api/user/register :** Crée un nouvel utilisateur.
- **PUT /api/user/:id :** Met à jour les informations d'un utilisateur.
- **DELETE /api/user/:id :** Supprime un utilisateur.

(Reproduisez ces sections pour les publications, les commentaires, etc.)

## Contributions

Les contributions sont les bienvenues ! Avant de contribuer, assurez-vous de discuter des modifications que vous souhaitez apporter.

## Auteurs

- @micael-jerry

## Licence

Ce projet est sous licence [MIT](LICENSE).
