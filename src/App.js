import "./App.css";
import Header from "./components/Header";
import LeftBody from "./components/LeftBody";
import CenterBody from "./components/CenterBody";
import RightBody from "./components/RightBody";
import Footer from "./components/Footer";
import { Box, Stack } from "@mui/material";
import Create from "./components/Create";

function App() {
  return (
    <Box>
      <Header />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <LeftBody />
        <CenterBody />
        <RightBody />
      </Stack>
      <Create />
      <Footer />
    </Box>
  );
}

export default App;
