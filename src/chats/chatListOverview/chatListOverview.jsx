import styles from "./chatListOverview.module.css";
import { ChatContext } from "../../contexts/chatContext/chatContext";
import { useContext } from "react";
import { useState } from "react";

// icons
import { RiChatNewFill } from "react-icons/ri";
import { IoFilterCircleSharp } from "react-icons/io5";

import MessageOverview from "../MessageOverview/MessageOverview";

const ChatListOverview = () => {
  const {
    addNewUser,
    filteredUsersList,
    searchInput,
    handleFilteredSearchUsers,
  } = useContext(ChatContext);

  const [activeContact, setActiveContact] = useState(null);
  const [hoverContact, setHoverContact] = useState(null);

  const [newContact, setNewContact] = useState({
    _id: "",
    fullname: "",
    phoneNo: "",
  });

  const [showAddBox, setShowAddBox] = useState(false);

  // new contact box
  const addNewContact = async () => {
    if (newContact.fullname.trim() === "" || newContact.phoneNo.trim() === "") {
      return;
    }

    // Create a new user object
    const newUser = { ...newContact };
    const response = await addNewUser(newUser);
    if (response.status === 200) {
      setNewContact({ fullname: "", phoneNo: "" });
      setShowAddBox(false);
      return;
    }
  };

  return (
    <>
      <div className={styles.chatList_box_overview}>
        <div className={styles.chat_top_bar}>
          <h2>Chats</h2>
          <div className={styles.chat_top_bar_icons}>
            <span
              onClick={() => setShowAddBox(true)}
              className={styles.add_contact}
            >
              <RiChatNewFill />
            </span>
            <span>
              <IoFilterCircleSharp />
            </span>
          </div>

          <input
            type="text"
            placeholder="Search your friend..."
            id={styles.search_input}
            value={searchInput}
            onChange={handleFilteredSearchUsers}
          />
        </div>
        {
          <div className={styles.contacts}>
            {filteredUsersList.map((contact) => {
              return (
                <div
                  key={contact._id}
                  onClick={() => setActiveContact(contact)}
                  onMouseEnter={() => setHoverContact(contact._id)}
                  onMouseLeave={() => setHoverContact(null)}
                  className={`${styles.individual_contact_box} 
              ${activeContact?._id === contact._id ? styles.active : ""}  
              ${hoverContact === contact._id ? styles.hover : ""}`}
                >
                  <div className={styles.profile_pic}></div>
                  <li>{contact.fullname}</li>
                </div>
              );
            })}
          </div>
        }
      </div>

      {showAddBox && (
        <div className={styles.new_chat_box}>
          <h3>Add New Contact </h3>
          <input type="hidden" value={newContact._id} />
          <label htmlFor="fullname">First Name</label>
          <input
            type="text"
            placeholder="Full name"
            name="fullname"
            value={newContact.fullname}
            onChange={(e) =>
              setNewContact({ ...newContact, fullname: e.target.value })
            }
          />
          <label htmlFor="mobile_number">Mobile No</label>
          <input
            type="number"
            name="mobile_number"
            placeholder="Mobile No"
            value={newContact.phoneNo}
            onChange={(e) => {
              if (e.target.value.length > 10) {
                return alert("Phone number cannot be more than 10 digits");
              }
              setNewContact({ ...newContact, phoneNo: e.target.value });
            }}
          />
          <button onClick={() => addNewContact()}>Add To Contact</button>
          <button onClick={() => setShowAddBox(false)}>Cancel</button>
        </div>
      )}
      <MessageOverview activeContact={activeContact} />
    </>
  );
};

export default ChatListOverview;
