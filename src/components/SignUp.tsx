import React from "react";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { setUser } from "../store/authReducer";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const dispatch = useDispatch();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error);
  };

  return <Form title="Register" handleClick={handleRegister} />;
};

export default SignUp;
