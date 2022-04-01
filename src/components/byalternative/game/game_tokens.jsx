import React from "react";
import { useAPI_alt } from "../alt_fetcher";

export default function Games() {


  const { tokens } = useAPI_alt();

  //console.log(tokens);

  return (
    <ul>
      {tokens.map(item => (
        <li>{item.address}</li>
      ))}
    </ul>
  );
}
