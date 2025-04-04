import styles from "./ChatList.module.css";
import { useContext, useEffect, useRef } from "react";

// comp
import Header from "./Header/header";
import LeftNavigation from "./Navigation/leftNavigation";
import ChatListOverview from "./chatListOverview/chatListOverview";
import MessageOverview from "./MessageOverview/MessageOverview";
import { NavigationContext } from "../contexts/navContext/navContext";
import { ThemeContext } from "../contexts/ThemeContext/ThemeContext";

import StatusList from "../Status/statusList";

// calls
import CallList from "../calls/call";
import CallPage from "../calls/callPage";

const ChatList = () => {
  const { activeTab } = useContext(NavigationContext);
  const { isDarkMode } = useContext(ThemeContext);

  const chatListRef = useRef(null);

  useEffect(() => {
    if (!chatListRef.current) return; // Avoid null errors

    chatListRef.current.classList.toggle(styles.dark_mode, isDarkMode);
    chatListRef.current.classList.toggle(styles.light_mode, !isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <div ref={chatListRef} className={styles.chatList_overview}>
        <Header />
        <LeftNavigation />
        {activeTab !== "status_icon" && activeTab !== "calls_icon" && (
          <ChatListOverview />
        )}
        {activeTab == "status_icon" && (
          <>
            <StatusList />
          </>
        )}
        {activeTab == "call_icon" && (
          <>
            <CallList />
            <CallPage />
          </>
        )}

        <MessageOverview />
      </div>
    </>
  );
};

export default ChatList;
