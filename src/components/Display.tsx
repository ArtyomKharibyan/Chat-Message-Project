import React, { useEffect, useState } from "react";

import ChatItemList from "./chat/ChatItemList";
import Header from "./header/Header";
import { ReactComponent as ChatText } from "./images/Chats 72px.svg";
import Input from "./messages/Input";
import MessageDisplay from "./messages/MessageDisplay";

const Display = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth >= 699);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth >= 699);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isSmallScreen ? (
        <div className="row">
          <ChatItemList />
          <div className="container">
            <Header />
            <MessageDisplay />
            <Input />
          </div>
        </div>
      ) : (
        <ChatText className={isSmallScreen ? "full-screen" : ""} />
      )}
    </div>
  );
};

export default Display;
