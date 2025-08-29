---
inclusion: fileMatch
fileMatchPattern: "app/**/*.{tsx,ts}"
---

# UI Standards

## Design System

- **Colors**: High contrast, WCAG AA compliant
- **Spacing**: Tailwind scale (4, 8, 16, 24, 32px)
- **Elevation**: MUI elevation tokens (1, 2, 4, 8)
- **Border Radius**: 8px for cards, 4px for buttons
- **Typography**: MUI typography scale

## Component Patterns

### Card Component

```typescript
interface CardProps {
	children: React.ReactNode;
	className?: string;
	elevation?: number;
}

export const Card: React.FC<CardProps> = ({
	children,
	className = "",
	elevation = 1,
}) => (
	<Paper elevation={elevation} className={`p-6 rounded-lg ${className}`}>
		{children}
	</Paper>
);
```

### Stats Card

```typescript
interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}
```

## Animation Guidelines

- **Duration**: 150-200ms for micro-interactions
- **Easing**: ease-in-out for most transitions
- **Loading**: Skeleton components, not spinners
- **Hover**: Subtle elevation changes (2px translate)

## Accessibility

- Focus indicators on all interactive elements
- ARIA labels for icon buttons
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly text
