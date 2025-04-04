/* eslint-disable react/prop-types */
import styles from "./Signup.module.css";
import { IoCamera } from "react-icons/io5";

import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../contexts/authContext/authContext";

const Signup = function ({ switchToLogin, setAlreadyAccount }) {
  const {
    signup,
    validateMobile,
    validateEmail,
    validate_dob,
    validatePassword,
    profilePhotoPath,
    handleOnChange,
    formData,
    ProfileActive,
    profileHover,
    setProfileHover,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { email, mobile, password, dob } = formData;

    // Validate first
    if (
      !validateEmail(email) ||
      !validatePassword(password) ||
      !validate_dob(dob) ||
      !validateMobile(mobile)
    ) {
      return; // Stop function if validation fails
    }

    setAlreadyAccount(true);
    signup(formData, navigate);
  };

  return (
    <div className={styles.signUpForm}>
      <form onSubmit={handleOnSubmit}>
        <h2 className={styles.signUpText}>
          <u>Sign Up</u>
        </h2>
        <div
          className={`${styles.profile_photo} ${
            ProfileActive ? styles.border_modify : ""
          }`}
        >
          <img src={profilePhotoPath} />
          {profileHover && <IoCamera className={styles.profile_camera} />}
          <input
            type="file"
            name="profile_photo"
            className={styles.profile_input}
            onChange={handleOnChange}
            onMouseEnter={() => setProfileHover(true)}
            onMouseLeave={() => setProfileHover(false)}
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="text"
            id="fullname"
            name="fullname" // Corrected key to match state
            placeholder="Full Name"
            value={formData.fullname}
            onChange={handleOnChange}
            required
            autoComplete
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="text"
            name="gender"
            id="gender"
            placeholder="Gender"
            value={formData.gender}
            onChange={handleOnChange}
            required
            autoComplete
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="date"
            id="dob"
            name="dob" // Corrected key to match state
            placeholder="Date of birth"
            value={formData.dob}
            onChange={handleOnChange}
            required
            autoComplete
          />
        </div>
        <div className={styles.formGroup}>
          <input
            type="email"
            id="email"
            name="email" // Corrected key to match state
            placeholder="Email"
            value={formData.email}
            onChange={handleOnChange}
            required
            autoComplete
          />
          <div className={styles.formGroup}>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleOnChange}
              maxLength="10" // Prevents more than 10 characters
              required
              autoComplete
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <input
            type="password"
            id="password"
            name="password" // Corrected key to match state
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleOnChange}
            required
            autoComplete
          />
        </div>
        <button type="submit" className={styles.register_button}>
          Register
        </button>
        <div className={styles.alreadyRegistered_box}>
          <p className={styles.already_registered_text}>
            Already Registered?{" "}
            <button onClick={switchToLogin} className={styles.login_button}>
              Login
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
