---
inclusion: always
---

# Code Conventions

## Component Structure

```typescript
// Good: Functional component with proper typing
interface UserCardProps {
	user: User;
	onEdit?: (user: User) => void;
}

export const UserCard: React.FC<UserCardProps> = ({ user, onEdit }) => {
	const handleEdit = useCallback(() => {
		onEdit?.(user);
	}, [user, onEdit]);

	return (
		<Card>
			<Typography variant="h6">{user.name}</Typography>
			<Typography variant="body2">{user.email}</Typography>
		</Card>
	);
};
```

## Hook Patterns

```typescript
// Custom hook with proper return type
export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      const data = await api.getUsers();
      setUsers(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  return { users, loading, error, refetch: fetchUsers };
};
```

## Error Handling

- Use Error Boundaries for component-level errors
- Implement proper loading and error states
- Provide user-friendly error messages
- Log errors for debugging

## File Naming

- Components: PascalCase.tsx
- Hooks: camelCase.ts with 'use' prefix
- Utilities: camelCase.ts
- Pages: lowercase with hyphens (user-profile)

## Props Naming

- Event handlers: onAction (onClick, onSubmit)
- Boolean props: isActive, hasError, canEdit
- Data props: descriptive names (userData, not data)
