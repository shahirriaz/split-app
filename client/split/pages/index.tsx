import type { NextPage } from "next";
import SelectWorkoutType from "../components/SelectWorkoutType/SelectWorkoutType";
import SelectWorkoutSplit from "../components/SelectWorkoutSplit/SelectWorkoutSplit";
import Wrapper from "../components/Wrapper/Wrapper";
import AddExcercises from "../components/AddExcercises/AddExcercises";
import StrengthTest from "../components/StrengthTest/StrengthTest";
import Content from "../components/Content/Content";
import ButtonAppBar from "../components/Appbar/Appbar";
import Footer from "../components/Footer/Footer";
import ScreenProvider from "../components/ScreenProvider/ScreenProvider";
import ScreenReducer, { initialState } from "../lib/reducer/ScreenReducer";

const Home: NextPage = () => {
  return (
    <div>
      <ButtonAppBar />
      <ScreenProvider initialState={initialState} reducer={ScreenReducer}>
        <Content>
          <Wrapper>
            <SelectWorkoutType />
            <SelectWorkoutSplit />
            <AddExcercises />
            <StrengthTest />
          </Wrapper>
        </Content>
        <Footer />
      </ScreenProvider>
    </div>
  );
};

export default Home;
