/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

// react Icons
import { LuMessageSquareText } from "react-icons/lu";
import { FaCircleNotch } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { CiBag1 } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { createContext, useState } from "react";

export const NavigationContext = createContext({
  activeTab: " ",
  hoverTab: "",
});

export const NavigationProvider = function ({ children }) {
  const [activeTab, setActiveTab] = useState("message_icon");
  const [hoverTab, setHoverTab] = useState(null);

  const [showProfileBox, setShowProfileBox] = useState(false);
  const [showSettingsBox, setShowSettingsBox] = useState(false);

  // admin data from backend
  // const { adminCredentials } = useContext(ChatContext);

  // Icons array
  const top_nav = [
    { icon: <LuMessageSquareText />, id: "message_icon" },
    { icon: <FaCircleNotch />, id: "status_icon" },
    { icon: <IoCallOutline />, id: "call_icon" },
  ];

  const bottom_nav = [
    { icon: <CiBag1 />, id: "bag_icon" },
    {
      icon: <CgProfile />,
      id: "profile_icon",
    },
    { icon: <IoSettingsOutline />, id: "setting_icon" },
  ];

  const toggleProfileView = () => {
    setShowProfileBox(true);
    setActiveTab((prevTab) =>
      prevTab === "profile_icon" ? "" : "profile_icon"
    );
  };

  const profileOnClose = () => {
    setShowProfileBox(false);
    setActiveTab("");
    return;
  };

  const toggleSettingsView = () => {
    setShowSettingsBox(true);
    setActiveTab((prevTab) =>
      prevTab === "setting_icon" ? "" : "setting_icon"
    );
  };

  const settingsClose = () => {
    setShowSettingsBox(false);
    setActiveTab("");
  };

  return (
    <NavigationContext.Provider
      value={{
        activeTab,
        setActiveTab,
        hoverTab,
        setHoverTab,
        showProfileBox,
        showSettingsBox,
        top_nav,
        bottom_nav,
        toggleProfileView,
        profileOnClose,
        toggleSettingsView,
        settingsClose,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
