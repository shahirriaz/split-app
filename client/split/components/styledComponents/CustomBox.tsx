import { Box, styled } from "@mui/material";

export const CustomBox = styled(Box)(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "17px",
  flex: "0.9",
  padding: "40px 0px 40px 0px",
  verticalAlign: "center",
  textAlign: "center",
}));
