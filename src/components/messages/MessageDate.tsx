import React from "react";

import { MessageDateProps } from "../../redux/ChatTypes";

const MessageDate: React.FC<MessageDateProps> = ({ date }) => (
    <div className="Date">
      {date}
    </div>
);

export default MessageDate;
