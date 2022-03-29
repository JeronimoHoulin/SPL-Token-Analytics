import React from "react";
import "./App.css";

import { APIContextProvider } from "./components/fetcher";
import Games from "./components/byalternative/game/game_tokens";

export default function App() {
  return (
    <APIContextProvider>
      <div className="App">
        <h1>Welcome to SolanaPrime's SPL Token Analytics Dashboard!</h1>
        <Games />
      </div>
    </APIContextProvider>
  );
}
