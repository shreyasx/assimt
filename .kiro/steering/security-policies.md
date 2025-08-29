---
inclusion: manual
---

# Security Policies

## Data Security

- No API keys or secrets in repository
- Use environment variables for configuration
- Validate all external API responses
- Sanitize user inputs

## External API Calls

```typescript
// Safe API calling pattern
const fetchExternalData = async (url: string) => {
  try {
    // Validate URL
    const validUrl = new URL(url);
    if (!validUrl.protocol.startsWith("http")) {
      throw new Error("Invalid protocol");
    }

    const response = await fetch(validUrl.toString(), {
      headers: {
        "Content-Type": "application/json",
      },
      // Add timeout
      signal: AbortSignal.timeout(5000),
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};
```

## Accessibility as Security

- Proper focus management prevents confusion
- Screen reader support ensures inclusive access
- Keyboard navigation prevents mouse-only barriers
- High contrast supports visual accessibility

## Performance Budgets

- Initial bundle: <500KB
- Route chunks: <200KB
- Images: WebP format, lazy loading
- Fonts: Preload critical fonts only

## Content Security

- Escape user-generated content
- Use TypeScript for type safety
- Implement proper error boundaries
- Log security-relevant events
