import React from "react";
import { useAPI_mrkt } from "../mrkt_fetcher";

export default function Cat1() {

    
  const { categories } = useAPI_mrkt();

  console.log(categories);

  return (
    <ul>
      {categories.map(item => (
        <p>{item.name +".\n" + "Mark Cap: " + item.market_cap.toLocaleString('en-US')}</p>
        ))}
    </ul>
  );
}
