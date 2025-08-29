import { createTheme } from "@mui/material/styles";

// Design tokens for consistent theming
const designTokens = {
  borderRadius: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  animation: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
    },
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
  },
};

// Create a theme instance with MUI and Tailwind compatibility
export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // Blue 700
      light: "#42a5f5", // Blue 400
      dark: "#1565c0", // Blue 800
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#dc004e", // Pink A400
      light: "#f06292", // Pink 300
      dark: "#c2185b", // Pink 700
      contrastText: "#ffffff",
    },
    error: {
      main: "#d32f2f", // Red 700
      light: "#ef5350", // Red 400
      dark: "#c62828", // Red 800
    },
    warning: {
      main: "#ed6c02", // Orange 700
      light: "#ff9800", // Orange 500
      dark: "#e65100", // Orange 900
    },
    info: {
      main: "#0288d1", // Light Blue 700
      light: "#03a9f4", // Light Blue 500
      dark: "#01579b", // Light Blue 900
    },
    success: {
      main: "#2e7d32", // Green 700
      light: "#4caf50", // Green 500
      dark: "#1b5e20", // Green 900
    },
    background: {
      default: "#fafafa", // Grey 50
      paper: "#ffffff",
    },
    text: {
      primary: "#212121", // Grey 900
      secondary: "#757575", // Grey 600
      disabled: "#bdbdbd", // Grey 400
    },
    divider: "#e0e0e0", // Grey 300
    action: {
      hover: "rgba(0, 0, 0, 0.04)",
      selected: "rgba(0, 0, 0, 0.08)",
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.125rem",
      fontWeight: 300,
      lineHeight: 1.167,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 400,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.167,
    },
    h4: {
      fontSize: "1.125rem",
      fontWeight: 500,
      lineHeight: 1.235,
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.334,
    },
    h6: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.6,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.43,
    },
  },
  shape: {
    borderRadius: designTokens.borderRadius.sm,
  },
  spacing: designTokens.spacing.sm, // 8px base spacing
  components: {
    // Button customization
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: designTokens.borderRadius.sm,
          textTransform: "none",
          fontWeight: 500,
          transition: `all ${designTokens.animation.duration.shortest}ms ${designTokens.animation.easing.easeInOut}`,
          minHeight: 36,
        },
        contained: {
          boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
          "&:hover": {
            boxShadow:
              "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)",
          },
        },
        outlined: {
          borderWidth: 1,
          "&:hover": {
            borderWidth: 1,
          },
        },
      },
    },
    // Card customization
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: designTokens.borderRadius.md,
          boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
          transition: `all ${designTokens.animation.duration.shortest}ms ${designTokens.animation.easing.easeInOut}`,
          "&:hover": {
            boxShadow:
              "0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)",
          },
        },
      },
    },
    // Paper customization
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: designTokens.borderRadius.sm,
        },
        elevation1: {
          boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
        },
      },
    },
    // TextField customization
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: designTokens.borderRadius.sm,
            transition: `border-color ${designTokens.animation.duration.shorter}ms ${designTokens.animation.easing.easeInOut}`,
          },
        },
      },
    },
    // Drawer customization
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRadius: 0,
        },
      },
    },
    // AppBar customization
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
        },
      },
    },
    // Chip customization
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: designTokens.borderRadius.lg,
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

// Dark theme variant
export const darkTheme = createTheme({
  ...theme,
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9", // Blue 300
      light: "#e3f2fd", // Blue 50
      dark: "#42a5f5", // Blue 400
      contrastText: "#000000",
    },
    secondary: {
      main: "#f48fb1", // Pink 200
      light: "#fce4ec", // Pink 50
      dark: "#ec407a", // Pink 400
      contrastText: "#000000",
    },
    error: {
      main: "#f44336", // Red 500
      light: "#e57373", // Red 300
      dark: "#d32f2f", // Red 700
    },
    warning: {
      main: "#ff9800", // Orange 500
      light: "#ffb74d", // Orange 300
      dark: "#f57c00", // Orange 700
    },
    info: {
      main: "#2196f3", // Blue 500
      light: "#64b5f6", // Blue 300
      dark: "#1976d2", // Blue 700
    },
    success: {
      main: "#4caf50", // Green 500
      light: "#81c784", // Green 300
      dark: "#388e3c", // Green 700
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
      disabled: "#666666",
    },
    divider: "#333333",
    action: {
      hover: "rgba(255, 255, 255, 0.08)",
      selected: "rgba(255, 255, 255, 0.12)",
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
    },
  },
});

// Export design tokens for use in components
export { designTokens };

export default theme;
