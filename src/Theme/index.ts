import { createTheme, Theme } from "@mui/material/styles";

export const darkTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0a0f23",
      paper: "#030614",
    },
    primary: {
      light: "#ecedf1",
      main: "#606d88",
      dark: "#586580",
    },
    secondary: {
      light: "#fde8ef",
      main: "#ec407a",
      dark: "#ea3a72",
    },
    success: {
      light: "#e3f8e8",
      main: "#17c13e",
      dark: "#14bb38",
    },
    error: {
      light: "#e48784",
      main: "#d9534f",
      dark: "#d54c48",
    },
    warning: {
      light: "#fdf5ea",
      main: "#f0ad4e",
      dark: "#ec9c3d",
    },
    text: {
      primary: "#e4e8f7",
      secondary: "#d5d9e9",
      disabled: "#d8ddf0",
    },
    grey: {
      50: "#070e13",
      100: "#12172f",
      200: "#ecedf1",
      300: "#b0b6c4",
      400: "#606d88",
      500: "#586580",
      600: "#44506b",
      700: "#fde8ef",
      800: "#ec407a",
      900: "#ea3a72",
    },
  },
});

export default darkTheme;
