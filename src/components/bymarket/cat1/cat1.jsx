import React, { useState, useEffect } from "react";
import axios from "axios";

import { useAPI_mrkt } from "../mrkt_fetcher";

export default function Cat1() {

  const [category, setCategory] = useState([]);

  const { categories } = useAPI_mrkt();

  //console.log(categories);


  async function fetchCategory(){
    ////////////////////////CATEGORY
    
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=gaming&order=market_cap_desc&per_page=100&page=1&sparkline=false`

    );
    console.log(data);
    setCategory(data);
  }

  
  useEffect(() => {

   fetchCategory();

  }, []);



  return (
    <ul>
      <p>All categories are: {categories.length}</p>
      <p>Gaming category:</p>
      {category.map(item => (
        <p>{item.name +".\n" + "Mark Cap: " + item.market_cap.toLocaleString('en-US')}</p>
        ))}
    </ul>
  );
}
