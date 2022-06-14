import { Stack, Typography } from "@mui/material";
import { collection, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import WorkoutSplit from "../WorkoutSplit/WorkoutSplit";

const SelectWorkoutSplit: React.FC = () => {
  interface WorkoutSplit {
    name: string;
    info: string;
  }

  const [workoutSplit, setWorkoutSplit] = useState([]);
  const q = query(collection(db, "workoutSplits"));

  useEffect(() => {
    const getWorkoutType = async () => {
      const data: any = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setWorkoutSplit(data);
    };
    getWorkoutType();
  }, []);

  return (
    <>
      <Stack spacing={2}>
        <Typography gutterBottom variant="h1">
          Select Workout split
        </Typography>
        {workoutSplit.map((type: WorkoutSplit) => (
          <WorkoutSplit name={type.name} info={type.info} />
        ))}
      </Stack>
    </>
  );
};

export default SelectWorkoutSplit;
