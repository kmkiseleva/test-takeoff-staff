import React, { useState } from "react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { TContact } from "../store/contactsReducer";
import { editUser, removeUser } from "../store/contactsReducer";

type PropTypes = {
  item: TContact;
};

const Contact: FC<PropTypes> = ({ item }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const [name, setName] = useState(item.name);
  const [surname, setSurname] = useState(item.surname);
  const [number, setNumber] = useState(item.number);

  const resetForm = () => {
    setName("");
    setSurname("");
    setNumber("");
  };

  const onEditHandler = (e: any): void => {
    e.preventDefault();
    dispatch(
      editUser({
        id: item.id,
        name,
        surname,
        number,
      })
    );
    resetForm();
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <div className="add-user-form">
          <label htmlFor="title" className="active">
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            id="name"
          />
          <label htmlFor="title" className="active">
            Surname
          </label>
          <input
            onChange={(e) => setSurname(e.target.value)}
            value={surname}
            type="text"
            id="surname"
          />
          <label htmlFor="title" className="active">
            Number
          </label>
          <input
            onChange={(e) => setNumber(e.target.value)}
            value={number}
            type="text"
            id="number"
            placeholder="+79995554433"
          />
          <button
            className="btn waves-effect waves-light pink darken-3 right"
            type="submit"
            onClick={(e) => onEditHandler(e)}
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      )}
      <div className="col s12 contact">
        <div className="card horizontal">
          <div className="card-stacked">
            <div className="card-content">
              <p>
                {item.name} {item.surname}
              </p>
              <p>{item.number}</p>
            </div>
          </div>
          <div className="card-icon">
            <button type="button" onClick={() => setVisible(!visible)}>
              <i className="small material-icons">edit</i>
            </button>
            <button type="button" onClick={() => dispatch(removeUser(item.id))}>
              <i className="small material-icons">delete_forever</i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
