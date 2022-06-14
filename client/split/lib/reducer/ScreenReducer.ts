export const initialState = {
  step: 0,
};

interface State {
  step: number;
}

interface Actions {
  type: string;
}

const ScreenReducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "NEXT":
      return {
        ...state,
        step: state.step + 1,
      };
    case "BACK":
      return {
        ...state,
        step: state.step - 1,
      };

    default:
      break;
  }
};

export default ScreenReducer;
