---
inclusion: always
---

# Project Structure

## Directory Organization

```
app/
├── (auth)/
│   └── login/
│       └── page.tsx
├── (main)/
│   ├── dashboard/
│   │   └── page.tsx
│   ├── reports/
│   │   └── page.tsx
│   ├── chat/
│   │   └── page.tsx
│   └── settings/
│       └── page.tsx
├── globals.css
├── layout.tsx
└── page.tsx

components/
├── ui/
│   ├── Card.tsx
│   ├── DataTable.tsx
│   ├── Sidebar.tsx
│   └── index.ts (barrel file)
├── charts/
│   ├── LineChart.tsx
│   ├── BarChart.tsx
│   └── index.ts
└── layout/
    ├── Header.tsx
    └── Navigation.tsx

lib/
├── utils.ts
├── api.ts
└── constants.ts

hooks/
├── useUsers.ts
├── useTheme.ts
└── useLocalStorage.ts

types/
├── user.ts
├── chart.ts
└── index.ts

styles/
└── globals.css
```

## Naming Conventions

- **Components**: PascalCase (UserCard.tsx)
- **Hooks**: camelCase with 'use' prefix (useUsers.ts)
- **Utilities**: camelCase (formatDate.ts)
- **Types**: PascalCase interfaces (User, ChartData)
- **Constants**: UPPER_SNAKE_CASE

## Import Organization

```typescript
// External libraries
import React from "react";
import { Button } from "@mui/material";

// Internal components
import { Card } from "@/components/ui";
import { useUsers } from "@/hooks/useUsers";

// Types
import type { User } from "@/types";
```

## Barrel Files

Create index.ts files in component directories:

```typescript
// components/ui/index.ts
export { Card } from "./Card";
export { DataTable } from "./DataTable";
export { Sidebar } from "./Sidebar";
```
