import React, { useState } from "react";
import { useAPI_alt } from "../alt_fetcher";
import { useAPI_menu } from "../../bigmenu/menu";
import { useEffect } from "react";
import '../../table.css';

const parse = require('html-react-parser');

export default function Games() {

  const [tablex, setTablex] =useState('');

  const { 
    checkedAltCategories,
    checkedAlt,
    checkedAltFilters
  } = useAPI_menu();

  const { tokens } = useAPI_alt();

  //console.log(tokens);
  //console.log(checkedAltCategories);
  //console.log(checkedAlt);
  //console.log(checkedAltFilters)

  let game_tokens = [];

  const token_300 = tokens.slice(-500);
  for(let i=0; i<token_300.length; i++){
    //////////////////////////////////////////////////
    const regex_game = [/utili/, /game/, /p2e/, /play/, /p2e/];
    const tags_game = token_300[i].tags;

    if(regex_game.some(rx => rx.test(tags_game))===true && token_300[i].extensions){
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


  ////////////////////////////////////////BY CATEGORY
  //Twitter
  useEffect(() =>{

    let table = ""

    if(checkedAltFilters[0]){
      //console.log("IN TWITTER!")
      game_tokens.map(item => {
        if(item.Extensions.twitter){
          //console.log(`<img src=${item.logo} width="34" height="35"></img>`)
          table += `
          <tr>
            <td><img src=${item.logo} width="34" height="35"></img></td>
            <td style ="text-align:left">${item.Symbol}</td>
            <td style ="text-align:left">${item.Name}</td>
            <td style ="text-align:left">${item.Tags}</td>
            <td style ="text-align:left"><a target="_blank" style="text-decoration: none; color:black;" 
            href="${item.Extensions.twitter}">&#128037; </a></td>
          </tr>`;
          setTablex(table);
        }
      })

    //Discord
    } else if(checkedAltFilters[1]){
      console.log("IN Discord!")
      game_tokens.map(item => {
        if(item.Extensions.discord){
          //console.log(`<img src=${item.logo} width="34" height="35"></img>`)
          table += `
          <tr>
            <td><img src=${item.logo} width="34" height="35"></img></td>
            <td style ="text-align:left">${item.Symbol}</td>
            <td style ="text-align:left">${item.Name}</td>
            <td style ="text-align:left">${item.Tags}</td>
            <td style ="text-align:left"><a target="_blank" style="text-decoration: none; color:black;" 
            href="${item.Extensions.discord}">&#128483; </a></td>
          </tr>`;
          setTablex(table);
        }
      })
    }

  }, [checkedAltFilters])



  //Game
  if(checkedAltCategories[1] === true){
    return (
      <div>
        <h1>Recently minted Game tokens!</h1>
        <table className="recap" >
          <tbody>
            <tr className="header">
              <th>PNG</th>
              <th>Symbol</th>
              <th>Name</th>
              <th>Tags</th>
              <th>Socials</th>
            </tr>

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
