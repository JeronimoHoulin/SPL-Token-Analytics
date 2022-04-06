import React from "react";
import { useAPI_mrkt } from "../mrkt_fetcher";

export default function Cat1() {

    
  const { category } = useAPI_mrkt();

  console.log(category);


  return (
    <div>
      {category.map(item => (
        <p>{item.name +".\n" + "Mark Cap: " + item.market_cap.toLocaleString('en-US')}</p>
      ))}
    </div>
  );
}
