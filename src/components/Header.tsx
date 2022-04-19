import React from "react";
import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { removeUser } from "../store/authReducer";

type PropTypes = {
  title: string;
};

const Header: FC<PropTypes> = ({ title }) => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state: RootState) => state.authSlice);

  return (
    <nav>
      <div className="nav-wrapper pink darken-3 px1">
        <div className="brand-logo">Personal account application</div>
        <ul className="right hide-on-med-and-down">
          <li>{title}</li>
          {isAuth ? (
            <li>
              <button type="button" onClick={() => dispatch(removeUser())}>
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
