
import React from "react";
import './style/App.css'
import { Provider } from "react-redux";
import store from "./redux/store";
import FirstList from "./components/FirstList";
export default function App() {
  return (
    <Provider store={store}>

  <FirstList/>

</Provider>
  );
};


