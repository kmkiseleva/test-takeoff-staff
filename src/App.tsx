import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import "./App.scss";
import Header from "./components/Header";
import Login from "./components/Login";
import Contacts from "./components/Contacts";

const App = () => {
  const { isAuth } = useSelector((state: RootState) => state.authSlice);

  return (
    <>
      <Header title={isAuth ? "Contacts" : "Login"} />
      <div className="container">{isAuth ? <Contacts /> : <Login />}</div>
    </>
  );
};

export default App;
