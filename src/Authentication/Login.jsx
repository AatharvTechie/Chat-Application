/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router";
import { AuthContext } from "../contexts/authContext/authContext";

const Login = ({ switchToSignUp, setIsAlreadyLoggedIn }) => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [loginErrors, setLoginErrors] = useState({});

  // Handling input change
  const handleOnChangeDetails = (event) => {
    const { name, value } = event.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear previous error messages when user types
    setLoginErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Validation function
  const validate = () => {
    let errors = {};

    if (!loginData.email.trim()) {
      errors.email = "Email is required!";
    }

    if (!loginData.password.trim()) {
      errors.password = "Password is required!";
    }

    return errors;
  };

  // Handle form submission
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    // Check for validation errors
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setLoginErrors(errors);
      return;
    }

    const isLoggedIn = await login(loginData, navigate);

    if (isLoggedIn) {
      setIsAlreadyLoggedIn(true);
    }
  };

  // Switch to signUp button
  const handleSwitchToSignUp = (e) => {
    e.preventDefault();
    switchToSignUp();
    navigate("/");
  };

  return (
    <div className={styles.login_container}>
      <form onSubmit={handleOnSubmit}>
        <h1 className={styles.loginText}>
          <u>Sign In</u>
        </h1>

        <div className={styles.login_form_fields}>
          {loginErrors.email && (
            <p className={styles.error}>{loginErrors.email}</p>
          )}
          <input
            type="email"
            name="email"
            value={loginData.email}
            placeholder="Email"
            onChange={handleOnChangeDetails}
          />

          {loginErrors.password && (
            <p className={styles.error}>{loginErrors.password}</p>
          )}
          <input
            type="password"
            name="password"
            value={loginData.password}
            placeholder="Password"
            onChange={handleOnChangeDetails}
          />
        </div>

        <div className={styles.login_btn_div}>
          <button type="submit" className={styles.login_btn}>
            Login
          </button>
        </div>

        <div className={styles.not_account}>
          <p>
            <b>Don’t have an account?</b>{" "}
            <button
              type="button"
              onClick={handleSwitchToSignUp}
              className={styles.signUp_btn}
            >
              Sign Up
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
