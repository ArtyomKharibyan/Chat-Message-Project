import React from "react";
import { useSelector } from "react-redux";

import { userTitle as selectUserTitle } from "../../redux/middleware/MiddleWare"; // Rename the imported selector
import { ReactComponent as Chat } from "../images/Chat.svg";

const Header = () => {
  const userTitle = useSelector(selectUserTitle);

  return (
    <div className="header2">
      <p className="text-2">
        <Chat className="chat-icon" /> <strong>{userTitle}</strong>
      </p>
    </div>
  );
};

export default Header;
