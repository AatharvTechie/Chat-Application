/* eslint-disable react/prop-types */
import styles from "./activeChatWindow.module.css";
import { IoCallOutline } from "react-icons/io5";
import { IoVideocam } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";

import { IoSearchSharp } from "react-icons/io5";
// import MessageOverview from "./MessageOverview";

const ActiveChat = ({ user }) => {
  return (
    <div className={styles.activeChat_list_container}>
      <div className={styles.top_nav}>
        <div className={styles.top_left_nav}>
          <img src={user?.profile_pic || " "} className={styles.profilePic} />
          <span className={styles.contact_name}>
            {user?.fullname || "Username"}
          </span>
        </div>
        <div className={styles.top_right_nav}>
          <button>
            <IoCallOutline />
          </button>
          <button>
            <IoVideocam />
          </button>
          <button>
            <IoSearchSharp />
          </button>
        </div>
      </div>

      <div className={styles.message_body}>
        <div className={`${styles.chat_bubble} ${styles.received}`}>
          Hey! How are you?
        </div>
        <div className={`${styles.chat_bubble} ${styles.sent}`}>
          I am good! What about you?
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footer_left}>
          <BsEmojiSmile className={styles.emoji} />
          <input
            type="text"
            className={styles.input_box}
            placeholder={`Let's start chat with ${user?.fullname}`}
          />
        </div>
      </div>
    </div>
  );
};

export default ActiveChat;
