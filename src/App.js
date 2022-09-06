import React from "react";
import "./App.css";

import { Bigmenu } from "./components/bigmenu/menu";

import { ALTContextProvider } from "./components/byalternative/alt_fetcher";
import Games from "./components/byalternative/game/game_tokens";
import Defi from "./components/byalternative/defi/defi_tokens";

import { MRKTContextProvider } from "./components/bymarket/mrkt_fetcher";
import Cat1 from "./components/bymarket/cat1/cat1";



export default function App() {

  return (

    <div className="App">

      <Bigmenu>

        <h1 className="header1">Welcome to our SPL Token Analytics Dashboard!</h1>

        <MRKTContextProvider>
          <div className="Games">
            <Cat1 />
          </div>
        </MRKTContextProvider>


        <ALTContextProvider>
          <div className="Games">
            <Games />
            <Defi />
          </div>
        </ALTContextProvider>

      </Bigmenu>


    </div>


  );
}
