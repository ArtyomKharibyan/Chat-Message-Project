import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';

import { Chat } from '../../redux/ChatTypes';
import {
  fetchChatData,
  getUnreadMessages,
  getUserId,
  getUserTitle,
  selectChatData,
} from '../../redux/middleware/MiddleWare';

const ChatComponent: React.FC = () => {
  const dispatch = useDispatch();
  const chatData = useSelector(selectChatData);
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

  useEffect(() => {
    dispatch(fetchChatData() as never);
  }, [dispatch]);

  const handleChatItemClick = (chat: Chat) => {
    dispatch(getUserId(chat.id));
    dispatch(getUserTitle(chat.title));
    dispatch(getUnreadMessages(chat.count_unread));
    setSelectedChat(chat);
  };

  return (
    <div className="block">
      <div className="chat-item-0">
        <strong className="all-chats">All chats</strong>
      </div>
      <div className="chat-item-messages">
        <div className="chat-container">
          {chatData?.map((chat: Chat) => (
            <div
              key={chat.id}
              className={`chat-block ${selectedChat === chat ? 'selected-chat' : ''}`}
              role="button"
              tabIndex={0}
              onClick={() => handleChatItemClick(chat)}
            >
              <img className="avatar" src={chat.avatar} alt="Avatar" />
              <div className="message-container">
                <strong>{chat.title}</strong>
                <sup className="time">
                  {dayjs.unix(chat.last_message.created_at).format('HH:mm')}
                </sup>
                <p className="chat-text">{chat.last_message.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
