import { blue, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: red[500],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 650,
      md: 950,
      lg: 1250,
      xl: 1500,
    },
  },
});
