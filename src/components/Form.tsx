import React, { useState } from "react";
import { FC } from "react";

type PropTypes = {
  title: string;
  handleClick: (email: string, pass: string) => void;
};

const Form: FC<PropTypes> = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const onSubmitHandler = (e: any): void => {
    e.preventDefault();
    handleClick(email, pass);
  };

  return (
    <>
      <form>
        <div>
          <div className="input-field col s8">
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="validate"
              required
            />
            <label htmlFor="email">{email ? "" : "Email"}</label>
          </div>
        </div>
        <div>
          <div className="input-field col s8">
            <input
              id="password"
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="validate"
              required
            />
            <label htmlFor="password">{pass ? "" : "Password"}</label>
          </div>
        </div>
        <button
          className="btn waves-effect waves-light pink darken-3 right"
          type="submit"
          onClick={(e) => onSubmitHandler(e)}
        >
          {title}
          <i className="material-icons right">send</i>
        </button>
      </form>
    </>
  );
};

export default Form;
