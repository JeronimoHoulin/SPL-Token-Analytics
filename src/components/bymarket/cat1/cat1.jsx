import React, { useState, useEffect } from "react";
import { useAPI_menu } from "../../bigmenu/menu";
import axios from "axios";
import { useAPI_mrkt } from "../mrkt_fetcher";
import '../../table.css';

const parse = require('html-react-parser');


export default function Cat1() {

  const [headerx, setHeaderx] =useState('');
  const [tablex, setTablex] =useState('');

  const [category, setCategory] = useState([]);

    const { 
      checkedMrkt,
      checkedMrktCategories,
      checkedMrktFilters
  } = useAPI_menu();

  const { categories } = useAPI_mrkt();

  async function fetchCategory(){
    ////////////////////////CATEGORY
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=gaming&order=market_cap_desc&per_page=100&page=1&sparkline=false`

    );
    setCategory(data);
  }

  
  useEffect(() => {

   fetchCategory();

  }, []);


  useEffect(() =>{

    let table = ""
    //Markt cap
    if(checkedMrktFilters[0]){
      console.log("IN Mrkt Cap!")
      let header = `   
        <tr className="header">
          <th>PNG</th>
          <th>Symbol</th>
          <th>Name</th>
          <th>Mrkt Price</th>
          <th>Market Cap</th>
        </tr>`;
      setHeaderx(header);
      category.map(item => {
        //console.log(item)
        if(item.market_cap){
          //console.log(`<img src=${item.logo} width="34" height="35"></img>`)
          table += `
          <tr>
            <td><img src=${item.image} width="34" height="35"></img></td>
            <td style ="text-align:left">${item.symbol}</td>
            <td style ="text-align:left">${item.name}</td>
            <td style ="text-align:left">${item.current_price}</td>
            <td style ="text-align:left">${item.market_cap}</td>
          </tr>`;
          setTablex(table);
        }
      })

    //Volume
    }else if(checkedMrktFilters[1]){
      console.log("IN Volume!")
      let header = `   
        <tr className="header">
          <th>PNG</th>
          <th>Symbol</th>
          <th>Name</th>
          <th>Mrkt Price</th>
          <th>Volume</th>
        </tr>`;
      setHeaderx(header);
      category.map(item => {
        //console.log(item)
        if(item.market_cap){
          //console.log(`<img src=${item.logo} width="34" height="35"></img>`)
          table += `
          <tr>
            <td><img src=${item.image} width="34" height="35"></img></td>
            <td style ="text-align:left">${item.symbol}</td>
            <td style ="text-align:left">${item.name}</td>
            <td style ="text-align:left">${item.current_price}</td>
            <td style ="text-align:left">${item.total_volume}</td>
          </tr>`;
          setTablex(table);
        }
      })
      //Price 24hr
      }else if(checkedMrktFilters[2]){
        console.log("IN price!")
        let header = `   
          <tr className="header">
            <th>PNG</th>
            <th>Symbol</th>
            <th>Name</th>
            <th>Mrkt Price</th>
            <th>Price (24hr)</th>
          </tr>`;
        setHeaderx(header);
        category.map(item => {
          //console.log(item)
          if(item.market_cap){
            //console.log(`<img src=${item.logo} width="34" height="35"></img>`)
            table += `
            <tr>
              <td><img src=${item.image} width="34" height="35"></img></td>
              <td style ="text-align:left">${item.symbol}</td>
              <td style ="text-align:left">${item.name}</td>
              <td style ="text-align:left">${item.current_price}</td>
              <td style ="text-align:left">${item.price_change_percentage_24h}%</td>
            </tr>`;
            setTablex(table);
          }
        })
      //Price FDV
      }else if(checkedMrktFilters[3]){
        console.log("IN FDV!")
        let header = `   
          <tr className="header">
            <th>PNG</th>
            <th>Symbol</th>
            <th>Name</th>
            <th>Mrkt Price</th>
            <th>Fully Diluted Val.</th>
          </tr>`;
        setHeaderx(header);
        category.map(item => {
          console.log(item)
          if(item.market_cap){
            //console.log(`<img src=${item.logo} width="34" height="35"></img>`)
            table += `
            <tr>
              <td><img src=${item.image} width="34" height="35"></img></td>
              <td style ="text-align:left">${item.symbol}</td>
              <td style ="text-align:left">${item.name}</td>
              <td style ="text-align:left">${item.current_price}</td>
              <td style ="text-align:left">${item.fully_diluted_valuation}</td>
            </tr>`;
            setTablex(table);
          }
        })
      }


  }, [checkedMrktFilters])

  //Game
  if(checkedMrktCategories[0] === true){
    return (
      <div>
        <h1>All trading Game tokens!</h1>
        <table className="recap" >
          <tbody>

            {parse(headerx)}
            {parse(tablex)}

          </tbody>
        </table>
      </div>
    );
  }else{
    return(
      <div></div>
    );
  }

}
