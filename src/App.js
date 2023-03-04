import "./App.css";

import React from "react";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

import Counter from "./components/Counter";
import counterReducer from "./reducers/counterReducer";

import Display from "./components/Display";

const store = createStore(counterReducer); //this will create the redux store

function App() {
  return (
    <div>
      <Provider store={store}>
        <Counter />
        <Display />
      </Provider>
    </div>
  );
}

export default App;
