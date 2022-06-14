/* eslint-disable react/jsx-key */
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import WorkoutType from "../WorkoutType/WorkoutType";

interface WorkoutType {
  name: string;
  info: string;
}

const SelectWorkoutType: React.FC = () => {
  const [workoutType, setWorkoutType] = useState([]);
  const q = query(collection(db, "workoutType"));

  useEffect(() => {
    const getWorkoutType = async () => {
      const data: any = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setWorkoutType(data);
    };

    getWorkoutType();
  }, []);

  return (
    <>
      <Stack spacing={2}>
        <Typography gutterBottom variant="h1">
          Select WorkoutType
        </Typography>

        {workoutType.map((type: WorkoutType) => (
          <WorkoutType name={type.name} info={type.info} />
        ))}
      </Stack>
    </>
  );
};

export default SelectWorkoutType;
