import { useContext, useRef } from "react";
import styles from "./leftNavigation.module.css";

// icons
import { RiExternalLinkLine } from "react-icons/ri";

// components
import { NavigationContext } from "../../contexts/navContext/navContext";
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext";
import { ChatContext } from "../../contexts/chatContext/chatContext";
import { StatusContext } from "../../contexts/statusContext/statusContext";

const LeftNavigation = () => {
  // contexts
  const {
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
  } = useContext(NavigationContext);

  const { adminCredentials } = useContext(ChatContext);
  const { toggleTheme, isDarkMode } = useContext(ThemeContext);
  const { profilePhotoPath } = useContext(StatusContext);
  console.log(profilePhotoPath);

  const modeBall = useRef(null);
  const modeBox = useRef(null);

  // theme changer
  const themeToggle = () => {
    if (isDarkMode) {
      modeBall.current.classList.add(styles.move_right_modeBall);
      modeBall.current.style.backgroundColor = "rgb(15, 230, 30)";
    } else {
      modeBall.current.classList.remove(styles.move_right_modeBall);
      modeBall.current.style.backgroundColor = "rgba(88, 90, 88, 0.792)";
    }
  };

  return (
    <>
      <div className={styles.left_navigation_overview}>
        <div className={styles.left_top_nav}>
          {/* Top navigation */}
          <span>
            {top_nav.map((item) => (
              <span
                key={item.id}
                className={`${styles.nav_icon} ${
                  activeTab === item.id ? styles.active : ""
                } ${hoverTab === item.id ? styles.hover : ""}`}
                onClick={() => {
                  setActiveTab(item.id);
                }}
                onMouseEnter={() => setHoverTab(item.id)}
                onMouseLeave={() => setHoverTab(null)}
              >
                {item.icon}
              </span>
            ))}
          </span>
        </div>

        <div className={styles.left_top_nav}>
          {/* Bottom navigation */}
          <span>
            {bottom_nav.map((item) => (
              <span
                key={item.id}
                className={`${styles.nav_icon} ${
                  activeTab === item.id ? styles.active : ""
                } ${hoverTab === item.id ? styles.hover : ""}`}
                onClick={() => {
                  if (item.id === "profile_icon") {
                    toggleProfileView();
                  }

                  if (item.id === "setting_icon") {
                    toggleSettingsView();
                  }

                  setActiveTab(item.id);
                }}
                onMouseEnter={() => {
                  setHoverTab(item.id);
                }}
                onMouseLeave={() => setHoverTab(null)}
              >
                {item.icon}
              </span>
            ))}
          </span>
        </div>
      </div>
      {/* Profile Box Overlay (Click to Close) */}
      {activeTab === "profile_icon" && showProfileBox && (
        <div className={styles.profile_box_container}>
          {/* Profile Image Box */}
          <div className={styles.profile_image_box}>
            <img src={profilePhotoPath} alt="Profile Picture" />
            <input type="file" src={profilePhotoPath} />
            <p>Upload Profile Picture</p>
          </div>

          {/* User Details */}
          <div className={styles.users_details_box}>
            <input
              type="text"
              placeholder={adminCredentials.fullname}
              readOnly
            />
            <input type="email" placeholder={adminCredentials.email} readOnly />
            <input type="text" placeholder={adminCredentials.gender} readOnly />
          </div>

          {/* Buttons */}
          <div className={styles.buttons_box}>
            <button className={styles.logout_btn}>Logout</button>
            <button className={styles.close_btn} onClick={profileOnClose}>
              Close
            </button>
          </div>
        </div>
      )}
      {activeTab === "setting_icon" && showSettingsBox && (
        <div className={styles.settings_box_container}>
          <h2>Settings</h2>
          <div className={styles.main_box}>
            <div className={styles.mode}>
              <p>{isDarkMode ? "Dark Mode" : "Light Mode"}</p>
              <div
                ref={modeBox}
                className={styles.mode_toggler}
                onClick={() => {
                  toggleTheme();
                  themeToggle();
                }}
              >
                <div ref={modeBall} className={styles.mode_ball}></div>
              </div>
            </div>

            <div className={styles.blocked_chats}>
              <p>Blocked Chats</p>
              <span>
                <RiExternalLinkLine />
              </span>
            </div>

            <div className={styles.favourite_chats}>
              <p>Favourite Chats</p>
              <div>
                <span>
                  <RiExternalLinkLine />
                </span>
              </div>
            </div>
            <button onClick={settingsClose}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default LeftNavigation;
