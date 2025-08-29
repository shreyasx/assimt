---
inclusion: fileMatch
fileMatchPattern: "**/*.{test,spec}.*"
---

# Testing Standards

## Testing Approach

- **Unit Tests**: Components, hooks, utilities
- **Integration Tests**: Page-level functionality
- **Accessibility Tests**: Screen reader compatibility
- **Visual Tests**: Component rendering

## React Testing Library Patterns

```typescript
// Component testing
import { render, screen, fireEvent } from "@testing-library/react";
import { UserCard } from "./UserCard";

describe("UserCard", () => {
	const mockUser = {
		id: 1,
		name: "John Doe",
		email: "john@example.com",
	};

	it("displays user information", () => {
		render(<UserCard user={mockUser} />);

		expect(screen.getByText("John Doe")).toBeInTheDocument();
		expect(screen.getByText("john@example.com")).toBeInTheDocument();
	});

	it("calls onEdit when edit button is clicked", () => {
		const onEdit = jest.fn();
		render(<UserCard user={mockUser} onEdit={onEdit} />);

		fireEvent.click(screen.getByRole("button", { name: /edit/i }));
		expect(onEdit).toHaveBeenCalledWith(mockUser);
	});
});
```

## Table Testing

```typescript
// Test search functionality
it("filters users by search term", async () => {
	render(<UsersTable users={mockUsers} />);

	const searchInput = screen.getByRole("textbox", { name: /search/i });
	fireEvent.change(searchInput, { target: { value: "john" } });

	await waitFor(() => {
		expect(screen.getByText("John Doe")).toBeInTheDocument();
		expect(screen.queryByText("Jane Smith")).not.toBeInTheDocument();
	});
});
```

## Chart Testing

```typescript
// Test chart rendering
it("renders chart with correct data", () => {
	const mockData = [
		{ label: "Jan", value: 100 },
		{ label: "Feb", value: 150 },
	];

	render(<LineChart data={mockData} />);

	// Test canvas or SVG elements
	expect(screen.getByRole("img", { name: /chart/i })).toBeInTheDocument();
});
```

## Coverage Goals

- Components: 80% minimum
- Utilities: 90% minimum
- Critical paths: 100%
