import React, { ReactNode } from "react";
import { useStateValue } from "../ScreenProvider/ScreenProvider";

interface Props {
  children: ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }) => {
  const [{ step }, _] = useStateValue();

  const childArray = React.Children.toArray(children);
  const currentStep = childArray[step];
  return <>{currentStep}</>;
};

export default Wrapper;
