import { Box } from "@mui/material";
import React from "react";

const LeftBody = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: { xs: "none", md: "block" },
        backgroundColor: "primary.main",
      }}
    >
      LeftBody
    </Box>
  );
};

export default LeftBody;
