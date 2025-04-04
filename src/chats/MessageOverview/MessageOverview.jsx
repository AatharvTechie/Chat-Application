/* eslint-disable react/prop-types */
import DefaultOverview from "../DefaultOverview/DefaultOverview";
import ActiveChat from "../activeChat/activeChatWindow";

const MessageOverview = ({ activeContact }) => {
  return (
    <>
      {activeContact ? (
        <ActiveChat user={activeContact} />
      ) : (
        <DefaultOverview />
      )}
    </>
  );
};
export default MessageOverview;
