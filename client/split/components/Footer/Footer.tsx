import { Box, Button } from "@mui/material";
import React from "react";
import { nextBtnStyles } from "../../styles/constants/styles";
import { useStateValue } from "../ScreenProvider/ScreenProvider";

function Footer() {
  const [{ step }, dispatch] = useStateValue();

  return (
    <div
      style={{
        bottom: "0",
        position: "absolute",
        width: "100%",
        display: "flex",
        justifyContent: step > 0 ? "center" : "center",
        padding: "1.5rem",
        backgroundColor: "#2E2944",
        zIndex: "1",
      }}
    >
      {step > 0 && (
        <div style={{ width: "40%" }}>
          <Button
            onClick={() => dispatch({ type: "BACK" })}
            sx={nextBtnStyles}
            variant="contained"
            fullWidth
            color="secondary"
          >
            Tilbake
          </Button>
        </div>
      )}
      <div style={{ width: step > 0 ? "60%" : "100%" }}>
        <Button
          onClick={() => dispatch({ type: "NEXT" })}
          sx={nextBtnStyles}
          style={{ marginLeft: step > 0 ? "12px" : "0px" }}
          variant="contained"
          fullWidth
          color="secondary"
        >
          Neste
        </Button>
      </div>
    </div>
  );
}

export default Footer;
