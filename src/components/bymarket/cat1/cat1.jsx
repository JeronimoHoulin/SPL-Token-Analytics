import React from "react";
import { useAPI_mrkt } from "../mrkt_fetcher";

export default function Cat1() {

    
  const { categories } = useAPI_mrkt();

  console.log(categories);

  return (
    <ul>
      {categories.map(item => (
        <li>{item.market_cap}</li>
      ))}
    </ul>
  );
}
