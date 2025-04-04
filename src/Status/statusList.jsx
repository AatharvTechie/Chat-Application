import { useContext } from "react";
import styles from "./statusList.module.css";
import { FaSearch, FaEllipsisV, FaPlus } from "react-icons/fa";
import StatusContext from "../contexts/statusContext/statusContext";

const StatusList = () => {
  const { statusList, currProfilePhoto } = useContext(StatusContext);

  return (
    <div className={styles.status_container}>
      {/* Top Bar */}
      <div className={styles.status_top_bar}>
        <h2>Status</h2>
        <div className={styles.status_top_bar_icons}>
          <FaSearch />
          <FaEllipsisV />
        </div>
      </div>

      {/* My Status */}
      <div className={styles.my_status}>
        <div className={styles.status_profile}>
          <input type="file" className={styles.hidden_input} />
        </div>
        <div>
          <h4>My Status</h4>
          <p>Tap to add status update</p>
        </div>
      </div>

      {/* Recent Updates */}
      <h3 className={styles.status_heading}>Recent Updates</h3>
      <div className={styles.status_list}>
        {statusList.map((status, index) => (
          <div key={index} className={styles.status_item}>
            <div className={styles.status_profile}>
              <label htmlFor="profile"></label>
              <div htmlFor={"profile"} className={styles.hidden_input}>
                {currProfilePhoto}
              </div>
            </div>
            <div>
              <h4>{status.fullname}</h4>
              <p>Just now</p>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Status Button */}
      <button className={styles.add_status}>
        <FaPlus />
      </button>
    </div>
  );
};

export default StatusList;
