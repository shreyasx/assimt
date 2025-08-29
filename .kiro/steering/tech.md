---
inclusion: always
---

# Technical Standards

## Core Stack

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS + Material UI (MUI)
- **Language**: TypeScript (strict mode)
- **Charts**: Chart.js or Recharts
- **Data Fetching**: SWR or native fetch() with caching
- **Icons**: @mui/icons-material

## Configuration

- Tailwind configured to work with MUI emotion/styled engine
- Absolute imports via tsconfig.json paths
- ESLint + Prettier for code quality
- TypeScript strict mode enabled

## Data Fetching Patterns

```typescript
// Preferred SWR pattern
const { data, error, isLoading } = useSWR("/api/users", fetcher);

// Or fetch with error handling
const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("Failed to fetch");
    return response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
```

## Performance Guidelines

- Use React.memo for expensive components
- Implement loading skeletons
- Debounce search inputs (250ms)
- Virtualize long lists when possible
- Optimize bundle size with dynamic imports
