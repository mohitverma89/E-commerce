import { Routes } from "./routes";
import { NavBar } from "./Layout/index";
import themeSystem from "./shared/themes/themeSystem";
import { ThemeProvider } from "@mui/material";
import { Box } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={themeSystem}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "92vh",
        }}
      >
        <NavBar />
        <Box sx={{ flexGrow: 1 }}>
          <Routes />
        </Box>
        <Box
          sx={{
            flexShrink: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80px",
            backgroundColor: "#f5f5f5",
            borderTop: "1px solid #ddd",
          }}
        >
          <span>
            &copy; {new Date().getFullYear()} Code Gama. All rights
            reserved.
          </span>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
