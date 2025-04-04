import { FaWhatsapp } from "react-icons/fa";
import styles from "./DefaultOverview.module.css";
const DefaultOverview = () => {
  return (
    <>
      <div className={styles.chatList_message_overview}>
        <div className={styles.chat_not_open}>
          <span>
            <FaWhatsapp />
          </span>
          <h2>WhatsApp for Windows</h2>
          <p>Send and receive messages with your friends</p>
          <p>Your chats are end-to-end encrypted</p>
        </div>
      </div>
    </>
  );
};

export default DefaultOverview;
