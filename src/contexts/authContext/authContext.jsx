/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import axios from "axios";
import { ChatContext } from "../chatContext/chatContext";

export const AuthContext = createContext({
  loginUser: {},
  setLoginUser: () => {},
  logoutUser: {},
  setLogoutUser: () => {},
});

export const AuthProvider = function ({ children }) {
  // profile photo hover and active state

  // authentication and user's list states
  const [loginUser, setLoginUser] = useState(null);
  const { getUsersList } = useContext(ChatContext);
  const { getAdminCredentials } = useContext(ChatContext);

  const [profileActive, setProfileActive] = useState(false);
  const [profileHover, setProfileHover] = useState(false);

  const [currProfilePhoto, setCurrentProfilePhoto] = useState("");
  const [profilePhotoPath, setProfilePhotoPath] = useState("");
  const [userMobileNumber, setUserMobileNumber] = useState("");

  const [formData, setFormData] = useState({
    profile_photo: "",
    fullname: "",
    gender: "",
    dob: "",
    email: "",
    mobile: "",
    password: "",
    role: "user",
  });
  // const [view, setView] = useState(false);

  const [newUserMobileNumber, setNewUserMobileNumber] = useState("");

  const signup = async function (signupData, navigate) {
    const updatedSignupData = {
      ...signupData,
      profilePhotoPath,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/register-page",
        updatedSignupData,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { mobile, profilePhoto } = response.data.newUser;
      localStorage.setItem("profilePhoto", profilePhoto);

      // If response is OK
      if (response.status >= 200 && response.status <= 300) {
        setUserMobileNumber(mobile); // store contact for finding the correct user to get their files
        setCurrentProfilePhoto(profilePhoto);
        setNewUserMobileNumber(mobile); // state store the New user contact when add to chatList
        navigate("/login");
      } else {
        console.log(response.error);
      }
    } catch (err) {
      console.log("Signup error: ", err);
    }
  };

  const login = async (loginData, navigate) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/login-page",
        loginData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.data.accessToken) {
        alert("Something went wrong. Please try again.");
        return; // Stop execution
      }

      if (response.status === 200) {
        sessionStorage.removeItem("access");
        sessionStorage.setItem("access", response.data.accessToken);

        // update access token with latest access token
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.accessToken}`;
        setLoginUser(response.data.email);
        getUsersList();
        getAdminCredentials(response.data.user); // for profile section icon
        navigate("/chatList");
        return true;
      }
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);

      if (error.response?.status === 400) {
        alert("Wrong email entered");
      } else if (error.response?.status === 401) {
        alert("Wrong password entered");
      } else {
        alert("Something went wrong. Please try again.");
      }
      return false;
    }
  };

  const logout = async function (navigate) {
    const accessToken = sessionStorage.getItem("access");
    try {
      const res = await axios.post("http://localhost:3001/api/auth/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (res.status === 200) {
        console.log(res.msg);
        navigate("/login");
      } else {
        console.log(res.error);
      }
    } catch (error) {
      console.log("Logout error", error);
    }
  };

  const validateMobile = (mobile) => {
    // Ensure mobile contains only digits and is exactly 10 characters long
    const mobileFormat = /^[0-9]{10}$/;

    if (!mobileFormat.test(mobile)) {
      alert(
        "Mobile number must be exactly 10 digits and contain only numbers."
      );
      return false;
    }

    return true;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._$+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{10,}$/;

    if (!passwordRegex.test(password)) {
      alert("Please enter a valid password");
      return false;
    }
    return true;
  };

  const validate_dob = (dob) => {
    const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dobRegex.test(dob)) {
      alert("Invalid DOB format. Please use YYYY-MM-DD.");
      return false;
    }

    const [year, month, day] = dob.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    if (
      date.getFullYear() !== year ||
      date.getMonth() + 1 !== month ||
      date.getDate() !== day
    ) {
      alert("Invalid date. Please check your input.");
      return false;
    }
    return true;
  };

  const handleOnChange = async (e) => {
    const { name, value } = e.target;
    if (name == "mobile") {
      const numericValue = value.replace(/\D/g, "");
      if (numericValue.length > 10) return;
      setFormData({ ...formData, [name]: numericValue });
    } else if (name == "profile_photo") {
      const file = e.target.files[0];
      if (!file) return;

      const fileExtension = file.type;
      const allowedExtension = [
        "image/jpg",
        "image/jpeg",
        "image/png",
        "image/svg",
      ];

      if (allowedExtension.includes(fileExtension)) {
        const profilePhotoURL = URL.createObjectURL(file); // generate image URL to visible image on
        console.log(profilePhotoURL);

        const uploadData = new FormData();
        uploadData.append("profile_photo", file);
        try {
          const profileImageResponse = await axios.post(
            "http://localhost:3001/upload",
            uploadData,
            { userMobileNumber },
            {
              headers: { "Content-Type": "multipart/form-data" },
            }
          );
          console.log(profileImageResponse);
          const ActualProfilePhotoPath =
            profileImageResponse.data.ActualProfilePhotoPath;

          if (ActualProfilePhotoPath) {
            setProfilePhotoPath(ActualProfilePhotoPath);
            setCurrentProfilePhoto(ActualProfilePhotoPath);
            setProfileActive(true);
          }

          //  get photo path from system
          const profilePath = e.target.value;
          setProfilePhotoPath(profilePath);
          setFormData({ ...formData, profile_photo: file });
        } catch (error) {
          return error;
        }
        return;
      } else {
        alert("Profile photo must be in JPG, JPEG, PNG, or SVG format.");
        return;
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        loginUser,
        signup,
        logout,
        newUserMobileNumber,
        validateMobile,
        validateEmail,
        validate_dob,
        validatePassword,
        handleOnChange,
        userMobileNumber,
        currProfilePhoto,
        setCurrentProfilePhoto,
        profilePhotoPath,
        formData,
        setFormData,
        profileActive,
        setProfileActive,
        profileHover,
        setProfileHover,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
