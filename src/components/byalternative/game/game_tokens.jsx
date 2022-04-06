import React from "react";
import { useAPI_alt } from "../alt_fetcher";

export default function Games() {


  const { tokens } = useAPI_alt();

  console.log(tokens);

  let game_tokens = []

  const token_300 = tokens.slice(-500);

  for(let i=0; i<token_300.length; i++){

      //////////////////////////////////////////////////
      const regex_game = [/utili/, /game/, /p2e/, /play/, /p2e/];
      const tags_game = token_300[i].tags;
      //let matchin = regex_game.some(rx => rx.test(tags));
      //console.log(matchin);
  
      if(regex_game.some(rx => rx.test(tags_game))===true && token_300[i].extensions ){
          
          game_tokens.push({
              ID:i,
              Address:token_300[i].address,
              Name: token_300[i].name,
              Symbol: token_300[i].symbol,
              Tags: token_300[i].tags,
              logo: token_300[i].logoURI,
              Extensions:token_300[i].extensions,
              Timestamp: "Loading...",
              Category: "Game"
            })
      }

  }

  return (
    <div>
      <h1>Hello Alternative Game token community!</h1>
      {game_tokens.map(item => (
        <p>Name: {item.Name} // Symbol: {item.Symbol} === Get ALT data</p>
      ))}
    </div>
  );
}
