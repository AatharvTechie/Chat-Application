// import styles from "./callPage.module.css";
// import { IoCallOutline } from "react-icons/io5";
// import { MdMissedVideoCall } from "react-icons/md";

const CallPage = () => {
  return (
    <>
      <div className="call-container">
        <div className="call-header">Incoming Call</div>
        <div className="caller-info">John Doe</div>
        <div className="button-container">
          <button>Accept</button>
          <button className="end-call">Decline</button>
        </div>
        <div className="footer">Powered by Your App</div>
      </div>
    </>
  );
};

export default CallPage;
