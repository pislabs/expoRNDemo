import { MD3LightTheme as DefaultTheme, useTheme } from "react-native-paper";

export const theme = {
  ...DefaultTheme,

  // Specify a custom property
  custom: "property",

  // Specify a custom property in nested object
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
    brandPrimary: "#cccccc",
    brandSecondary: "red",
  },
};

export type AppTheme = typeof theme;

export const useAppTheme = () => useTheme<AppTheme>();
