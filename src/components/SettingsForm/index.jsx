import React, { useState } from "react";

const SettingsForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [databaseUrl, setDatabaseUrl] = useState("");
  const [openaiToken, setOpenaiToken] = useState("");

  const handleSave = () => {
    // Do something with the form data here
    console.log(username, password, databaseUrl, openaiToken);
  };

  const handleCancel = () => {
    // Reset the form data here
    setUsername("");
    setPassword("");
    setDatabaseUrl("");
    setOpenaiToken("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Settings</h1>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ marginBottom: "10px", padding: "5px" }}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: "10px", padding: "5px" }}
        />
        <label>Database URL:</label>
        <input
          type="text"
          value={databaseUrl}
          onChange={(e) => setDatabaseUrl(e.target.value)}
          style={{ marginBottom: "10px", padding: "5px" }}
        />
        <label>OpenAI Token:</label>
        <input
          type="text"
          value={openaiToken}
          onChange={(e) => setOpenaiToken(e.target.value)}
          style={{ marginBottom: "10px", padding: "5px" }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <button onClick={handleSave} style={{ marginRight: "10px", padding: "5px 10px" }}>
          Save
        </button>
        <button onClick={handleCancel} style={{ padding: "5px 10px" }}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SettingsForm;