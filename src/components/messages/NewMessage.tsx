import React from "react";
import {useSelector} from "react-redux";
import dayjs from "dayjs";

import {ChatMessage} from "../../redux/ChatTypes";
import {selectChatMessages} from "../../redux/middleware/MiddleWare";

const NewMessage = () => {
  const chatMessages: ChatMessage[] = useSelector(selectChatMessages);

  return (
    <div>
      <div className="new-message">New Message</div>
      <div>
        {chatMessages.map((newMessage) => (
          <div key={newMessage.id}>
            {newMessage.is_new ? (
              <div className="under-message-block">
              <img
                className="message-avatar"
                src={newMessage.user.avatar}
                alt="Avatar"
              />
              <strong className="message-name">
                {newMessage.user.name} {newMessage.user.surname}
              </strong>
              <div className="message-text">
                {newMessage.message}
                <sup className="message-time">
                  {dayjs.unix(newMessage.created_at).format('HH:mm')}
                </sup>
              </div>
            </div>) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewMessage;
