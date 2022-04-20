import React from "react";
import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";
import { removeUser } from "../store/authReducer";

type PropTypes = {
  title: string;
};

const Header: FC<PropTypes> = ({ title }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const { isAuth } = useSelector((state: RootState) => state.authSlice);

  const logOutHandler = () => {
    dispatch(removeUser());
    nav("/");
  };

  return (
    <nav>
      <div className="nav-wrapper pink darken-3 px1">
        <div className="logo">Personal account application</div>
        <ul className="headers">
          <li>{title}</li>
          {isAuth ? (
            <li>
              <button type="button" onClick={logOutHandler}>
                Log out
              </button>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
