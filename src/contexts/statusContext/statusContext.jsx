/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import { useState } from "react";

export const StatusContext = createContext();

export const StatusProvider = function ({ children }) {
  const [statusList, setStatusList] = useState(null);

  const getStatus = async (usersList) => {
    try {
      // const statusResponse = await fetch(
      //   "http://localhost:3001/api/users/status",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({ usersList }),
      //   }
      // );
      // const { statusUsers } = await statusResponse.json();
      // const filteredUsers = usersList.some((user) => {
      //   let fullname = user.fullname.toLowerCase();

      //   // Find matching statusUser whose view is active
      //   return statusList.filter((status) => {
      //     status.fullname.toLowerCase() === fullname.toLowerCase() &&
      //       statusUsers.view === true;
      //     setView(true);
      //     statusUsers.status = "active";
      //   });
      // });

      setStatusList(usersList);
      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <StatusContext.Provider
        value={{
          statusList,
          setStatusList,
          getStatus,
        }}
      >
        {children}
      </StatusContext.Provider>
    </>
  );
};

export default StatusContext;
