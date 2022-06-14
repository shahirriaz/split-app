import { createTheme } from "@mui/material";
import { palette } from "@mui/system";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1A1728",
    },
    secondary: {
      main: "#01A289",
      light: "#FFFFF",
    },
    text: {
      primary: "#FFFFFF",
    },
  },
  typography: {
    h1: {
      fontWeight: 500,
      fontSize: "25px",
      color: "#FFFFFF",
      letterSpacing: "2px",
    },
    h2: {
      fontWeight: 500,
      fontSize: "20px",
      color: "#FFFFFF",
      letterSpacing: "1px",
    },
    h3: {
      fontWeight: 400,
      fontSize: "18px",
      color: "#FFFFFF",
      letterSpacing: "1px",
    },
    h4: {
      fontWeight: 400,
      fontSize: "16px",
      color: "#FFFFFF",
      letterSpacing: "1px",
      textDecoration: "underline",
    },
  },
});
