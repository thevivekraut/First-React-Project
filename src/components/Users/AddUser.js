import React, { useState } from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredCollegeName, setenteredCollegeName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Both Fields Are Required!",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Above 1 year Age Is Valid Only...",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredCollegeName, enteredAge);
    setEnteredUsername("");
    setenteredCollegeName("");
    setEnteredAge("");
  };

  const usernameChanegeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const collegeNameChangeHandler = (event) => {
    setenteredCollegeName(event.target.value);
  };

  const ageChanegeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChanegeHandler}
          />

          <label htmlFor="collegeName">College Name</label>
          <input
            id="collegeName"
            type="text"
            value={enteredCollegeName}
            onChange={collegeNameChangeHandler}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChanegeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
