# Backend - Food Recipe Application

Backend API pour l'application de recettes de cuisine.

## Stack technique

- **NestJS** avec **Fastify** comme adaptateur HTTP
- **TypeScript**
- **Drizzle ORM** pour la gestion de la base de données
- **PostgreSQL** comme base de données
- **SWC** pour la compilation

## Installation

```bash
# Installer les dépendances avec Yarn 4
yarn install
```

## Configuration

Copier `.env.example` vers `.env` et configurer les variables d'environnement :

```env
DATABASE_URL=postgresql://user:password@localhost:5432/food2
PORT=3000
```

## Développement

```bash
# Démarrer en mode développement
yarn start:dev

# Build
yarn build

# Linter
yarn lint
```

## Structure

```
backend/
├── src/
│   ├── recipes/         # Module recettes
│   ├── tags/            # Module tags
│   ├── ingredients/     # Module ingrédients
│   ├── common/          # Guards, interceptors, decorators
│   ├── db/              # Service Drizzle et schémas
│   └── main.ts          # Point d'entrée
├── drizzle/             # Migrations Drizzle
└── package.json
```
