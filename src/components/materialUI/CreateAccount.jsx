import React from "react";
import "./createAccount.style.css";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Alert from "@mui/material/Alert";

const CreateAccount = () => {
  const isPassowrd = true;
  let psw;
  let cnfPws;

  const [password, setPassowrd] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const onChangePasswordHadler = (e) => {
    const { passwordValue } = e.target.value;

    setPassowrd(passwordValue);
    console.log(passwordValue, " password");
  };

  const onChangeConfirmPasswordHandler = (e) => {
    const { confirmPasswordValue } = e.target.value;

    setConfirmPassword(confirmPasswordValue);
    console.log(confirmPassword, " confirm password");
  };

  const onClickHandler = () => {
    if (password !== confirmPassword) {
      return (
        <Alert severity="error">This is an error alert — check it out!</Alert>
      );
    } else {
      return (
        <Alert severity="success">
          This is a success alert — check it out!
        </Alert>
      );
    }
  };

  return (
    <div className="container">
      <h1> Create Account</h1>
      <TextField id="filled-basic" label="First name" variant="outlined" />
      <TextField id="filled-basic" label="Last name" variant="outlined" />
      <TextField id="filled-basic" label="Email address" variant="outlined" />
      <TextField
        id="filled-basic"
        label="Password"
        variant="outlined"
        value={password}
        onChange={onChangePasswordHadler}
      />
      <TextField
        id="filled-basic"
        label="Confirm password"
        variant="outlined"
        value={confirmPassword}
        onChange={onChangeConfirmPasswordHandler}
      />

      {/* {open === true && <p>{`Grade of the student is ${grade}`}</p>} */}
      {/* {psw === cnfPws && (
        <Alert severity="success">
          This is a success alert — check it out!
        </Alert>
      )} */}

      <Button variant="contained" onClick={onClickHandler}>
        Create Account
      </Button>
    </div>
  );
};

export default CreateAccount;
