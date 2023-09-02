import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';

import { ChatMessage } from '../../redux/ChatTypes';
import {
  fetchChatMessages,
  selectChatMessages,
  selectCountUnread,
  userId,
} from '../../redux/middleware/MiddleWare';

import MessageDate from './MessageDate';
import NewMessage from './NewMessage';
import ReadedMessage from './ReadedMessage';

const MessagesDisplay = () => {
  const dispatch = useDispatch();
  const chatMessages: ChatMessage[] = useSelector(selectChatMessages);
  const countUnread = useSelector(selectCountUnread);

  const messageId = useSelector(userId);

  const containerRef = useRef<HTMLDivElement | null>(null);

  let lastRenderedDate: string | null = null;

  useEffect(() => {
    if (messageId) {
      dispatch(fetchChatMessages(messageId) as never);
    }
  }, [messageId, dispatch]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [containerRef]);

  return (
    <div className="messages-container" ref={containerRef}>
      {chatMessages?.map((message, index) => {
        const messageDate = dayjs.unix(message.created_at);
        const previousMessageDate = index > 0 ? dayjs.unix(chatMessages[index - 1].created_at) : null;

        const isNewDayMessage =
          messageDate.hour() >= 0 &&
          (previousMessageDate === null || messageDate.date() !== previousMessageDate.date());

        let messageDateComponent = null;

        if (isNewDayMessage) {
          const formattedDate = messageDate.format('DD.MM.YYYY');

          if (formattedDate !== lastRenderedDate) {
            lastRenderedDate = formattedDate;
            messageDateComponent = <MessageDate date={formattedDate} />;
          }
        }

        const messageKey = `message-${message.id}`

        return (
          <div key = {messageKey}>
            <div className = "message-date">
              {messageDateComponent}
            </div>
          <div
            key={message.id}
            className={message.user.you ? 'my-message' : 'under-message-block'}
            role="button"
            tabIndex={0}
          >
            {message.user.you ? (
              <div className="my-message">
                <div className="message-my-text">
                  {message.message}
                  <sup className="message-time">
                    {messageDate.format('HH:mm')}
                    <ReadedMessage />
                  </sup>
                </div>
              </div>
            ) : (
              <div>
                {!message.is_new ? (
                  <div className="under-message-block">
                    <img
                      className="message-avatar"
                      src={message.user.avatar}
                      alt="Avatar"
                    />
                    <strong className="message-name">
                      {message.user.name} {message.user.surname}
                    </strong>
                    <div className="message-text">
                      {message.message}
                      <sup className="message-time">
                        {messageDate.format('HH:mm')}
                      </sup>
                    </div>
                  </div>
                ) : null}
              </div>
            )}
          </div>
          </div>
        );
      })}
      <div>
        {countUnread !== 0 ? <NewMessage /> : null}
      </div>
    </div>
  );
};

export default MessagesDisplay;
