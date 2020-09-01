import React from "react";
import "./App.css";
import Page from "./pages/Page";

function App() {
  return (
    <div className="App">
      <Page
        onLogin={() => console.log("login")}
        onLogout={() => console.log("logout")}
        onCreateAccount={() => console.log("create account")}
      />
      <a href="/storybook">To Storybook</a>
    </div>
  );
}

export default App;
