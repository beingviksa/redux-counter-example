import { INCREASE, DECREASE, RESET } from "./actions";

const defaultState = {
  count: 77,
  name: "bob",
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + 1 };
    case DECREASE:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
}
