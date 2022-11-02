
import React from "react";

import { Provider } from "react-redux";
import store from "./redux/store";
import FirstList from "./components/FirstList";
import List from "./components/List";
export default function App() {
  return (
    <Provider store={store}>

  <FirstList/>

</Provider>
  );
};


