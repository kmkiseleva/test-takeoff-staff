import React from "react";
import Form from "../components/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../store/authReducer";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

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
        nav("/contacts");
      })
      .catch((e) => {
        alert("Incorrect email or password. Try again");
      });
  };

  return <Form title="Login" handleClick={handleLogin} />;
};

export default Login;
