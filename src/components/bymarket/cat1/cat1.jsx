import React from "react";
import { useAPI_mrkt } from "../mrkt_fetcher";

export default function Cat1() {

    
  const { tikkers } = useAPI_mrkt();

  console.log(tikkers);

  return (
    <ul>
      {tikkers.map(item => (
        <li>{item.ath}</li>
      ))}
    </ul>
  );
}
