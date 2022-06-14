import { Typography } from "@mui/material";
import React from "react";
import { CustomBox } from "../styledComponents/CustomBox";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

interface Props {
  name: string;
  info: string;
}

const WorkoutType: React.FC<Props> = ({ name, info }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{ flex: "0.1", marginRight: "16px" }}>
        <RadioButtonUncheckedIcon fontSize="large" color="secondary" />
      </div>
      <CustomBox>
        <Typography variant="h2">{name}</Typography>
        <Typography variant="h4">What is this</Typography>
      </CustomBox>
    </div>
  );
};

export default WorkoutType;
