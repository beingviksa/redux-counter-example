import React from "react";
import Counter from "./Counter";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

// reducers
import countReducer from "./countReducer";
import productReducer from "./productReducer";
import modalReducer from "./modalReducer";
import Modal from "./Modal";
import Products from "./Products";

const middleware = [thunk];

const store = createStore(
  combineReducers({
    countState: countReducer,
    modalState: modalReducer,
    productState: productReducer,
  }),
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const App = () => {
  return (
    <Provider store={store}>
      <Counter name="vikram singh" />
      <Modal />
      <Products />
    </Provider>
  );
};

export default App;
