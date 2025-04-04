/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import StatusContext from "../statusContext/statusContext";
import { AuthContext } from "../authContext/authContext";

export const ChatContext = createContext({
  usersList: [],
  setUsersList: () => {},
});

export const ChatProvider = function ({ children }) {
  const { getStatus } = useContext(StatusContext);
  const { newUserMobileNumber } = useContext(AuthContext);

  const [usersList, setUsersList] = useState([]);
  const [filteredUsersList, setFilteredUsersList] = useState([]); // ✅ Empty initially
  const [searchInput, setSearchInput] = useState("");
  const [adminCredentials, setAdminCredentials] = useState({});

  useEffect(() => {
    setFilteredUsersList(usersList); // ✅ Update when usersList changes
  }, [usersList]);

  const getUsersList = async function () {
    const accessToken = sessionStorage.getItem("access");
    console.log(
      "Session Storage Access Token:",
      sessionStorage.getItem("access")
    );

    try {
      const response = await axios.get("http://localhost:3001/api/users", {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (response.status === 200) {
        let adminWhatsappChatList = response.data.whatsAppUsers;
        const updatedAdminWhatsappChatList = adminWhatsappChatList.map(
          (user) => ({
            ...user,
            fullname:
              user.fullname.length > 15
                ? user.fullname.slice(0, 15) + "..."
                : user.fullname,
          })
        );

        setUsersList(updatedAdminWhatsappChatList); // ✅ Update both lists
        setFilteredUsersList(updatedAdminWhatsappChatList);
        getStatus(updatedAdminWhatsappChatList);
        return;
      } else {
        console.log("Failed to fetch users:", response.data.status);
      }
    } catch (error) {
      console.error("Error while fetching users list:", error);
    }
  };

  const addNewUser = async function (newUser) {
    const accessToken = sessionStorage.getItem("access");
    try {
      const res = await axios.post(
        "http://localhost:3001/api/users/new-user",
        newUser,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (res.status === 200) {
        const { userId, userFullname, mobile } = res.data;
        if (mobile == newUserMobileNumber) {
          let truncatedName =
            userFullname.length > 15
              ? userFullname.slice(0, 15) + "..."
              : userFullname;

          setUsersList((prevUsers) => {
            const updatedUsers = [
              ...prevUsers,
              { _id: userId, fullname: truncatedName },
            ];
            setFilteredUsersList(updatedUsers); // ✅ Keep both lists in sync
            return updatedUsers;
          });
        }
        return res;
      }
    } catch (error) {
      console.log("Error while adding new user:", error);
    }
  };

  const searchUsers = (inputValue) => {
    const trimmedInput = inputValue.trim(); // ✅ Trim spaces from input

    if (trimmedInput.length === 0) {
      setFilteredUsersList(usersList); // ✅ Show full list on empty search
      return;
    }

    const filterUsers = usersList.filter((user) =>
      user.fullname.toLowerCase().startsWith(trimmedInput.toLowerCase())
    );

    setFilteredUsersList(filterUsers);
  };

  const handleFilteredSearchUsers = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    searchUsers(value); // ✅ Use latest input value
  };

  const getAdminCredentials = async (user) => {
    try {
      setAdminCredentials(user);
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ChatContext.Provider
      value={{
        usersList,
        setUsersList,
        addNewUser,
        getUsersList,
        searchUsers,
        filteredUsersList,
        searchInput,
        handleFilteredSearchUsers,
        adminCredentials,
        getAdminCredentials,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
