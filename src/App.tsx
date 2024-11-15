// src/App.tsx
import React from "react";
import Timeline from "./components/Timeline";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Activity Timeline</h1>
      <Timeline />
    </div>
  );
};

export default App;
