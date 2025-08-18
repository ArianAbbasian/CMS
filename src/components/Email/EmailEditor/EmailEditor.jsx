import React, { useState } from "react";
import "./EmailEditor.css";

const EmailEditor = () => {
  const [email, setEmail] = useState({
    to: "",
    subject: "",
    body: ""
  });

  return (
    <div className="email-editor">
      <div className="editor-header">New Message</div>
      <input 
        type="text" 
        placeholder="To" 
        className="email-input"
        value={email.to}
        onChange={(e) => setEmail({...email, to: e.target.value})}
      />
      <input 
        type="text" 
        placeholder="Subject" 
        className="email-input"
        value={email.subject}
        onChange={(e) => setEmail({...email, subject: e.target.value})}
      />
      <textarea 
        placeholder="Compose email..."
        className="email-body"
        value={email.body}
        onChange={(e) => setEmail({...email, body: e.target.value})}
      />
      <div className="editor-actions">
        <button className="send-button">Send</button>
        <button className="attach-button">Attach File</button>
      </div>
    </div>
  );
};

export default EmailEditor;