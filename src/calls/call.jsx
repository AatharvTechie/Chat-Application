// import { useState } from "react";
import styles from "./call.module.css";
// import axios from "axios";

// react icons
// import { FaSearch, FaPhoneAlt, FaVideo, FaEllipsisV } from "react-icons/fa";
const Call = () => {
  // const [callsList, setCallList] = useState([]);

  // const callsUserList = async function () {
  //   try {
  //     const res = await axios.get("http://localhost:3001/api/users/calls");

  //     if (res.status === 200) {
  //       setCallList(res.data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // callsUserList();

  return (
    <div className={styles.call_container}>
      {/* Top Bar */}
      <div className={styles.call_top_bar}>
        <h2>Calls</h2>
        <div className="call_top_bar_icons">
          {/* <FaSearch />
          <FaEllipsisV /> */}
        </div>
      </div>

      {/* Call List */}
      <div className={styles.call_list}>
        {/* {callsList.map((call, index) => (
          <div key={index} className={`call_item ${call.type}`}>
            <div className={styles.call_profile}></div>
            <div>
              <h4>{call.name}</h4>
              <p>{call.time}</p>
            </div>
            <div className={styles.call_actions}>
              <FaPhoneAlt className={styles.call_icon} />
              <FaVideo className={styles.video_icon} />
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Call;
