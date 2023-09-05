import React from "react";

import ChatItemList from "./chat/ChatItemList";
import Header from "./header/Header";
 import { ReactComponent as Text } from "./images/Chats 72px.svg";
import Input from "./messages/Input";
import MessageDisplay from "./messages/MessageDisplay";

const Display = () => (
        <div className="row">
          <div className = "Text">
          <Text />
          </div>
          <ChatItemList />
          <div className="container">
            <Header />
            <MessageDisplay />
            <Input />
          </div>
        </div>
  );

export default Display;
