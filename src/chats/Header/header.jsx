import { FaWhatsapp } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { PiResizeBold } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";

import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.chatList_top_overview}>
      <div className={styles.chatList_top_overview_left_side}>
        <FaWhatsapp className={styles.whatsApp_icon} />
        <p>WhatsApp</p>
      </div>
      <div className={styles.chatList_top_overview_right_side}>
        <span>
          <TiMinus className={styles.minimize} />
        </span>
        <span>
          <PiResizeBold className={styles.resize} />
        </span>
        <span>
          <IoMdClose className={styles.close} />
        </span>
      </div>
    </div>
  );
};

export default Header;
