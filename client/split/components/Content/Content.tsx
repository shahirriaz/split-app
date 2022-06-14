import styled from "@emotion/styled";
import { Button, Container, Grid } from "@mui/material";
import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Content: React.FC = ({ children }) => {
  const Main = styled("main")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: "1.1rem",
    minHeight: "100%",
  }));

  return (
    <Main>
      <Container maxWidth="xs">{children}</Container>
    </Main>
  );
};

export default Content;
