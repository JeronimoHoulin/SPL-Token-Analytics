import React from "react";
import "./App.css";

import { ALTContextProvider } from "./components/byalternative/alt_fetcher";
import Games from "./components/byalternative/game/game_tokens";

import { MRKTContextProvider } from "./components/bymarket/mrkt_fetcher";
import Cat1 from "./components/bymarket/cat1/cat1";



export default function App() {

  return (

    <div className="App">

      <h1>Welcome to SolanaPrime's SPL Token Analytics Dashboard!</h1>

      <MRKTContextProvider>
        <div className="Games">
          <h1>Hello Cat1 token community!</h1>
          <Cat1 />
        </div>
      </MRKTContextProvider>


      <ALTContextProvider>
        <div className="Games">
          <h1>Hello Game token community!</h1>
          <Games />
        </div>
      </ALTContextProvider>


    </div>


  );
}
