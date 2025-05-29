# Autom Project

This is a Next.js project with TypeScript and comprehensive testing setup.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

This project is configured with Jest and React Testing Library for unit testing.

### Available Test Commands

- `npm test` - Run all tests once
- `npm run test:watch` - Run tests in watch mode (re-runs when files change)
- `npm run test:coverage` - Run tests with coverage report

### Test Structure

Tests are located in the `__tests__` directory and follow these conventions:

- Component tests: `__tests__/ComponentName.test.tsx`
- Utility function tests: `__tests__/utils.test.ts`
- Page tests: `__tests__/page.test.tsx`

### Testing Tools Included

- **Jest**: JavaScript testing framework
- **React Testing Library**: Simple and complete testing utilities for React components
- **@testing-library/jest-dom**: Custom Jest matchers for DOM elements
- **@testing-library/user-event**: Fire events the same way the user does

### Writing Tests

Example test structure:

```typescript
import { render, screen } from '@testing-library/react'
import MyComponent from '../components/MyComponent'

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />)
    expect(screen.getByText('Expected Text')).toBeInTheDocument()
  })
})
```

## Project Structure

```
├── app/                 # Next.js app directory
├── __tests__/          # Test files
├── types/              # TypeScript type definitions
├── jest.config.js      # Jest configuration
├── jest.setup.ts       # Jest setup file
└── package.json        # Dependencies and scripts
```

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Jest
- React Testing Library
