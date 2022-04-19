import React from "react";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { setUser } from "../store/authReducer";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        dispatch(
          setUser({
            email: user.email,
            token: user.refreshToken,
            id: user.uid,
          })
        );
      })
      .catch((e) => {
        console.log(e.message);
        alert("Incorrect email or password. Try again");
      });
  };

  return <Form title="Login" handleClick={handleLogin} />;
};

export default Login;
