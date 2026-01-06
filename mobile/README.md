# Food Recipes Mobile App

React Native mobile application with Expo for managing cooking recipes.

## Tech Stack

- **React Native** with **Expo**
- **TypeScript**
- **React Navigation** (Native Stack + Bottom Tabs)
- **React Query (TanStack Query)** for data management
- **React Hook Form** for forms
- **MMKV** for local storage

## Installation

```bash
# Install dependencies
yarn install

# Start the application
yarn start
```

## Project Structure

```
mobile/
├── src/
│   ├── screens/          # Screens (template instances)
│   ├── services/          # API services and cache
│   ├── store/            # Global state (Context API)
│   ├── navigation/       # Navigation configuration
│   ├── hooks/            # Custom hooks
│   ├── utils/            # Utilities
│   ├── types/            # TypeScript types
│   └── App.tsx           # Entry point
├── assets/               # Static resources
└── package.json
```

## Available Scripts

- `yarn start` : Start Expo development server
- `yarn android` : Run on Android
- `yarn ios` : Run on iOS
- `yarn web` : Run on web
- `yarn build` : Production build
- `yarn test` : Run tests
- `yarn lint` : Lint code
