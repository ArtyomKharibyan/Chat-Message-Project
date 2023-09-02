import React, { useRef } from "react";

import { ReactComponent as Regular } from "../images/Regular.svg";
import { ReactComponent as Send } from "../images/Send.svg";

const Input = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleRegularClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="input-block">
      <div
        className="input"
        contentEditable
        suppressContentEditableWarning
        placeholder="Type Message"
      />
      <div className="icons-together">
        <Regular className="regular" onClick={handleRegularClick} />
        <Send className="send" />
      </div>
      <input type="file" ref={fileInputRef} style={{ display: "none" }} />
    </div>
  );
};

export default Input;
