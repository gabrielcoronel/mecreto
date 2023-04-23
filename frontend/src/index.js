import React from "react";
import ReactDOM from "react-dom/client";
import Principal from "./componentes/Principal";
import { blue } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  palette: {
    primary: blue
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Principal />
    </ThemeProvider>
  </React.StrictMode>
);
