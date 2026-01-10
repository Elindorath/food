# @food/design-system

Design system for the food recipe application, built with React Native and supporting React Native Web.

## Installation

```bash
yarn install
```

## Development

### Type Checking

```bash
yarn type-check
```

### Linting

```bash
yarn lint
```

### Storybook

Start Storybook development server:

```bash
yarn storybook
```

Build Storybook for production:

```bash
yarn build-storybook
```

Storybook will be available at `http://localhost:6006` when running the dev server.

## Structure

The design system follows Atomic Design principles:

- **Atoms**: Basic building blocks (Button, Text, Input, etc.)
- **Molecules**: Simple combinations of atoms (Card, FormField, SearchBar, etc.)
- **Organisms**: Complex components (RecipeCard, Header, FormSection, etc.)
- **Templates**: Page-level layouts (RecipeListTemplate, RecipeDetailTemplate, etc.)

## Usage

Import components from the design system:

```typescript
import { Button, Text, View, RecipeCard } from '@food/design-system';
```

## Design Tokens

The design system includes:

- **Colors**: Primary, secondary, semantic colors with dark mode support
- **Typography**: Font sizes, weights, line heights, and variants
- **Spacing**: Consistent spacing scale
- **Shadows**: Elevation shadows for depth

## Themes

The design system supports light and dark themes. Import themes:

```typescript
import { lightTheme, darkTheme } from '@food/design-system';
```
