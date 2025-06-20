/**
 * src/styles/chakra.ts
 *
 * Author Ben Siebert <hello@ben-siebert.de>
 * Copyright: Copyright © Ben Siebert. All rights reserved.
 * License: Project License
 * Created At: 16.06.25
 */

import { extendTheme, theme as baseTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const colors = {
  brand: {
    50: "#ebf5ff",
    100: "#d0e2ff",
    200: "#a6c8ff",
    300: "#78a9ff",
    400: "#4589ff",
    500: "#3B82F6",
    600: "#1d4ed8",
    700: "#1e40af",
    800: "#1e3a8a",
    900: "#172554",
  },
  background: {
    // A clean dark gradient for the portfolio background
    gradient: "linear(to-br, #1A202C, #2D3748)",
  },
};

const fonts = {
  heading: `'Inter', ${baseTheme.fonts?.heading}`,
  body: `'Inter', ${baseTheme.fonts?.body}`,
};

const components = {
  Button: {
    baseStyle: {
      rounded: "2xl",
      fontWeight: "semibold",
    },
    variants: {
      solid: (props: any) => ({
        bg: mode("brand.500", "brand.500")(props),
        color: "white",
        _hover: {
          bg: "brand.400",
          boxShadow: "md",
        },
        _active: {
          bg: "brand.600",
        },
      }),
      danger: {
        bg: "red.500",
        color: "white",
        _hover: {
          bg: "red.400",
          boxShadow: "md",
        },
        _active: {
          bg: "red.600",
        },
      },
    },
  },
  Input: {
    variants: {
      filled: {
        field: {
          bg: "rgba(255, 255, 255, 0.05)",
          _hover: { bg: "rgba(255, 255, 255, 0.08)" },
          _focus: {
            bg: "rgba(255, 255, 255, 0.08)",
            borderColor: "brand.500",
            backdropFilter: "blur(5px)",
          },
          rounded: "2xl",
        },
      },
    },
  },
  Textarea: {
    variants: {
      filled: {
        bg: "rgba(255, 255, 255, 0.05)",
        _hover: { bg: "rgba(255, 255, 255, 0.08)" },
        _focus: {
          bg: "rgba(255, 255, 255, 0.08)",
          borderColor: "brand.500",
          backdropFilter: "blur(5px)",
        },
        rounded: "2xl",
      },
    },
  },
  Tabs: {
    baseStyle: {
      tab: {
        rounded: "2xl",
        _selected: {
          bg: "brand.500",
          color: "white",
          border: "none",
        },
      },
    },
    variants: {
      softRounded: {
        tab: {
          _selected: {
            bg: "brand.500",
            color: "white",
          },
        },
      },
    },
  },
  Modal: {
    baseStyle: {
      dialog: {
        rounded: "2xl",
        bg: "rgba(30, 41, 59, 0.85)", // Semi-transparent dark background for a glass effect
        backdropFilter: "blur(10px)",
        boxShadow: "lg",
      },
    },
  },
  Card: {
    baseStyle: {
      container: {
        rounded: "2xl",
        bg: "rgba(255, 255, 255, 0.07)", // Very subtle light overlay
        backdropFilter: "saturate(180%) blur(20px)",
        boxShadow: "lg",
        border: "1px solid rgba(255, 255, 255, 0.125)",
      },
    },
  },
  Menu: {
    baseStyle: {
      list: {
        bg: "rgba(30, 41, 59, 0.85)",
        backdropFilter: "blur(10px)",
        rounded: "2xl",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "lg",
      },
    },
  },
  Tooltip: {
    baseStyle: {
      bg: "gray.700",
      color: "white",
      fontSize: "sm",
      px: 3,
      py: 2,
      rounded: "md",
    },
  },
};

const styles = {
  global: () => ({
    body: {
      bgGradient: colors.background.gradient,
      color: "white",
      fontFamily: "body",
      minHeight: "100vh",
      bgAttachment: "fixed",
      // Optional: enhanced font smoothing for a cleaner look
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
    },
  }),
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors,
  fonts,
  styles,
  components,
  radii: {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  shadows: {
    outline: "0 0 0 3px rgba(59, 130, 246, 0.6)",
  },
});

export default theme;
