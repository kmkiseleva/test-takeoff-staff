import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Login from "./pages/Login";
import Contacts from "./pages/Contacts";

const App = () => {
  const { isAuth } = useSelector((state: RootState) => state.authSlice);

  return (
    <>
      <Header title={isAuth ? "Contacts" : "Login"} />
      <div className="container">
        <Routes>
          <Route path="contacts" element={<Contacts />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
