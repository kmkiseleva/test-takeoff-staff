import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import Contact from "../components/Contact";
import { addUser } from "../store/contactsReducer";

const Contacts = () => {
  const dispatch = useDispatch();

  const { items } = useSelector((state: RootState) => state.contactsSlice);
  const [visible, setVisible] = useState(false);
  const [searchInputVisible, setSearchInputVisible] = useState(false);

  const [filter, setFilter] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [number, setNumber] = useState("");

  const resetForm = () => {
    setName("");
    setSurname("");
    setNumber("");
  };

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setFilter(filter);
    }
  };

  const onSubmitDataHandler = (e: any): void => {
    e.preventDefault();
    if (name && surname && number) {
      dispatch(
        addUser({
          name,
          surname,
          number,
        })
      );
      resetForm();
    } else {
      alert("Enter data...");
    }
  };

  return (
    <>
      <div className="contacts-search-add-bar">
        <div className="search-user">
          Search
          <button
            type="button"
            onClick={() => setSearchInputVisible(!searchInputVisible)}
          >
            <i className="small material-icons">search</i>
          </button>
          {searchInputVisible && (
            <input
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
              type="text"
              id="filter"
              onKeyPress={keyPressHandler}
            />
          )}
        </div>
        <div className="add-user">
          Add user
          <button type="button" onClick={() => setVisible(!visible)}>
            <i className="small material-icons">add_circle_outline</i>
          </button>
        </div>
      </div>

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
            onClick={(e) => onSubmitDataHandler(e)}
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
      )}
      <div className="contacts">
        {!filter && items.map((item) => <Contact item={item} key={item.id} />)}
        {filter &&
          items
            .filter(
              (item) =>
                item.name.toLowerCase().includes(filter.toLowerCase()) ||
                item.surname.toLowerCase().includes(filter.toLowerCase()) ||
                item.number.toLowerCase().includes(filter.toLowerCase())
            )
            .map((item) => <Contact item={item} key={item.id} />)}
      </div>
    </>
  );
};

export default Contacts;
