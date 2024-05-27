import Button from "@mui/material/Button";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { ThreeDRotation } from "@mui/icons-material";
import { AccessAlarm } from "@mui/icons-material";
import styled from "@emotion/styled/macro";
import { blue, green, red } from "@mui/material/colors";
import { Box, Stack, Typography } from "@mui/material";

const Test = () => {
  return (
    <div>
      <Button>Hello world</Button>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="string">String</Button>

      <Button size="large" variant="text">
        Text
      </Button>
      <Button size="medium" variant="contained">
        Contained
      </Button>
      <Button size="small" variant="outlined">
        Outlined
      </Button>
      <Button fullWidth variant="string">
        String
      </Button>

      <Button variant="text" startIcon={<AcUnitIcon />}>
        Text
      </Button>
      <Button variant="contained" endIcon={<AccessTimeIcon />}>
        Contained
      </Button>
      <Button variant="outlined" startIcon={<AccessAlarm />}>
        Outlined
      </Button>
      <Button variant="string" endIcon={<ThreeDRotation />}>
        String
      </Button>
      <Button
        sx={{
          backgroundColor: "gray",
          color: "white",
          margin: 10,
          "&:hover": {
            backgroundColor: "black",
          },
        }}
      >
        Custom Style
      </Button>
      <Button
        disabled
        sx={{
          "&:disabled": {
            backgroundColor: "white",
            color: "black",
            cursor: "not-allowed",
          },
        }}
      >
        Custom Style
      </Button>
      <CustomButton>CustomButton</CustomButton>
      <Typography variant="h2" gutterBottom>
        This is Heading 2
      </Typography>
      <CustomThemeButton>CustomThemeButton</CustomThemeButton>

      <Root>
        <Typography>down(md) : red</Typography>
        <Typography>up(md) : blue</Typography>
        <Typography>down(lg) : yellow</Typography>
      </Root>

      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
      </Stack>
      <br />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Box
          flex={1}
          p={2}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
        <Box
          flex={2}
          p={2}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
        <Box
          flex={3}
          p={2}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
      </Stack>
      <br />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Box
          flex={1}
          p={2}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
        <Box
          flex={2}
          p={2}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            display: { xs: "none", md: "block" },
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
        <Box
          flex={3}
          p={2}
          sx={{
            width: 300,
            height: 300,
            backgroundColor: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
      </Stack>
    </div>
  );
};

const CustomThemeButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
}));

const CustomButton = styled(Button)({
  backgroundColor: "gray",
  color: "white",
  margin: 10,
  "&:hover": {
    backgroundColor: "black",
  },
});

const Root = styled(`div`)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    backgroundColor: red[500],
  },
  [theme.breakpoints.up("md")]: {
    backgroundColor: blue[500],
  },
  [theme.breakpoints.up("lg")]: {
    backgroundColor: green[500],
  },
}));

export default Test;
