import React, { useContext, useState, useEffect, createContext } from "react";
import { fallDown as Menu } from 'react-burger-menu';
import './bigmenu.css'

import Checkbox from '@material-ui/core/Checkbox'
import Box from '@material-ui/core/Box'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';


const MENUContext = createContext();

export function Bigmenu({children}) {

  // checked ALTERNATIVE
  const [checkedAlt, setCheckedAlt] = React.useState(false);
  // checked categories in Alternative
  const [checkedAltCategories, setCheckedAltCategories] = React.useState([false, false, false, false]);
  // checked filters in Alternative
  const [checkedAltFilters, setCheckedAltFilters] = React.useState([false, false, false, false]);




  // checked MARKET
  const [checkedMrkt, setCheckedMrkt] = React.useState(false);
  // checked categories in Market
  const [checkedMrktCategories, setCheckedMrktCategories] = React.useState([false, false, false, false]);
  // checked filters in Market
  const [checkedMrktFilters, setCheckedMrktFilters] = React.useState([false, false, false, false]);






  //Alternative parent checkbox
  function handleChangeAlt(event) {
    if(!checkedMrkt){
      setCheckedAltCategories([false, false, false, false]);
      setCheckedAlt(!checkedAlt);
      console.log("You checked: ALTERNATIVE!")
    }else{
      console.log("Uncheck market!")
      setCheckedMrktCategories([false, false, false, false]);
      setCheckedMrkt(!checkedMrkt);
      setCheckedAlt(!checkedAlt);
    }

  }
  //Alternative Categs checked
  const handleChangeAltCat0 = (event) => {
    if(checkedAlt === true){
      setCheckedAltCategories([event.target.checked, false, false, false]);
      console.log("You checked: CATEG DEFI!")
    }else{console.log("Change to ALT categ!")}
  };
  const handleChangeAltCat1 = (event) => {
    if(checkedAlt === true){
      setCheckedAltCategories([false, event.target.checked, false, false]);
      console.log("You checked: CATEG Gamefi!")
    }else{console.log("Change to ALT categ!")}

  };
  const handleChangeAltCat2 = (event) => {
    if(checkedAlt === true){
      setCheckedAltCategories([false, false, event.target.checked, false]);
      console.log("You checked: CATEG META!")
    }else{console.log("Change to ALT categ!")}

  };
  const handleChangeAltCat3 = (event) => {
    if(checkedAlt === true){
      setCheckedAltCategories([false, false, false, event.target.checked]);
      console.log("You checked: CATEG MEME!")
    }else{console.log("Change to ALT categ!")}
  };



    //Alternative Filters checked
    const handleChangeAltFilt0 = (event) => {
      if(checkedAlt === true){
        setCheckedAltFilters([event.target.checked, false, false, false]);
        console.log("You checked: FILTER TWITTER!")
      }else{console.log("Change to ALT filter!")}
    };
    const handleChangeAltFilt1 = (event) => {
      if(checkedAlt === true){
        setCheckedAltFilters([false, event.target.checked, false, false]);
        console.log("You checked: FILTER DICORD!")
      }else{console.log("Change to ALT filter!")}
  
    };
    const handleChangeAltFilt2 = (event) => {
      if(checkedAlt === true){
        setCheckedAltFilters([false, false, event.target.checked, false]);
        console.log("You checked: FILTER COMMUNITY!")
      }else{console.log("Change to ALT filter!")}
  
    };
    const handleChangeAltFilt3 = (event) => {
      if(checkedAlt === true){
        setCheckedAltFilters([false, false, false, event.target.checked]);
        console.log("You checked: FILTER HYPE!")
      }else{console.log("Change to ALT filter!")}
    };










  //Market parent checkbox
  function handleChangeMrkt(event) {
    if(!checkedAlt){
      setCheckedMrktCategories([false, false, false, false]);
      setCheckedMrkt(!checkedMrkt);
      console.log("You checked: MARKET!")
    }else{
      console.log("Uncheck alternative!")
      setCheckedAltCategories([false, false, false, false]);
      setCheckedAlt(!checkedAlt);
      setCheckedMrkt(!checkedMrkt);
    }

  }
  //Market Categs checked
  const handleChangeMrktCat0 = (event) => {
    if(checkedMrkt === true){
      setCheckedMrktCategories([event.target.checked, false, false, false]);
      console.log("You checked: CATEG GAMEFI!")
    }else{console.log("Change to MRLT data!")}
  };
  const handleChangeMrktCat1 = (event) => {
    if(checkedMrkt === true){
      setCheckedMrktCategories([false, event.target.checked, false, false]);
      console.log("You checked: CATEG DEFI!")
    }else{console.log("Change to MRKT data!")}

  };
  const handleChangeMrktCat2 = (event) => {
    if(checkedMrkt === true){
      setCheckedMrktCategories([false, false, event.target.checked, false]);
      console.log("You checked: CATEG CROSSCHAIN!")
    }else{console.log("Change to MRKT data!")}

  };
  const handleChangeMrktCat3 = (event) => {
    if(checkedMrkt === true){
      setCheckedMrktCategories([false, false, false, event.target.checked]);
      console.log("You checked: CATEG WALLETS!")
    }else{console.log("Change to Mrkt data!")}

  };


  //Market Filters checked
  const handleChangeMrktFilt0 = (event) => {
    if(checkedMrkt === true){
      setCheckedMrktFilters([event.target.checked, false, false, false]);
      console.log("You checked: FILTER MARKETCAP!")
    }else{console.log("Change to ALT filter!")}
  };
  const handleChangeMrktFilt1= (event) => {
    if(checkedMrkt === true){
      setCheckedMrktFilters([false, event.target.checked, false, false]);
      console.log("You checked: FILTER VOLUME!")
    }else{console.log("Change to ALT filter!")}

  };
  const handleChangeMrktFilt2 = (event) => {
    if(checkedMrkt === true){
      setCheckedMrktFilters([false, false, event.target.checked, false]);
      console.log("You checked: FILTER PRICE7D!")
    }else{console.log("Change to ALT filter!")}

  };
  const handleChangeMrktFilt3 = (event) => {
    if(checkedMrkt === true){
      setCheckedMrktFilters([false, false, false, event.target.checked]);
            console.log("You checked: FILTER PRICE12HR!")
    }else{console.log("Change to ALT filter!")}
  };





  let categsAlt = ""
  if(checkedAlt === true){
    categsAlt = (
      <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <p className="guidescss">Choose a category:</p>
        <FormControlLabel
          label="Defi"
          control={<Checkbox checked={checkedAltCategories[0]} onChange={handleChangeAltCat0} />}
        />
        <FormControlLabel
          label="Gamefi"
          control={<Checkbox checked={checkedAltCategories[1]} onChange={handleChangeAltCat1} />}
        />
        <FormControlLabel
          label="Metaverse"
          control={<Checkbox checked={checkedAltCategories[2]} onChange={handleChangeAltCat2} />}
        />
        <FormControlLabel
          label="Meme"
          control={<Checkbox checked={checkedAltCategories[3]} onChange={handleChangeAltCat3} />}
        />
      </Box>
    );
  }

  let categsMrkt = ""
  if(checkedMrkt === true){
     categsMrkt = (
      <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <p className="guidescss">Choose a category:</p>
        <FormControlLabel
          label="GameFi"
          control={<Checkbox checked={checkedMrktCategories[0]} onChange={handleChangeMrktCat0} />}
        />
        <FormControlLabel
          label="DeFi"
          control={<Checkbox checked={checkedMrktCategories[1]} onChange={handleChangeMrktCat1} />}
        />
        <FormControlLabel
          label="Cross-Chain"
          control={<Checkbox checked={checkedMrktCategories[2]} onChange={handleChangeMrktCat2} />}
        />
        <FormControlLabel
          label="Wallets ..."
          control={<Checkbox checked={checkedMrktCategories[3]} onChange={handleChangeMrktCat3} />}
        />
      </Box>
    );
  }

  let filtersAlt = ""
  //DEFI
  if(checkedAltCategories.some((value)=> { return (value === true); })){
    filtersAlt = (
      <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <p className="guidescss">Choose a filter:</p>
        <FormControlLabel
          label="Twitter followers"
          control={<Checkbox checked={checkedAltFilters[0]} onChange={handleChangeAltFilt0} />}
        />
        <FormControlLabel
          label="Discord members"
          control={<Checkbox checked={checkedAltFilters[1]} onChange={handleChangeAltFilt1} />}
        />
        <FormControlLabel
          label="Community interactions"
          control={<Checkbox checked={checkedAltFilters[2]} onChange={handleChangeAltFilt2} />}
        />
        <FormControlLabel
          label="Hype (SolanaPrime metric)"
          control={<Checkbox checked={checkedAltFilters[3]} onChange={handleChangeAltFilt3} />}
        />
      </Box>
    );
  }

  let filtersMrkt = ""
  //DEFI
  if(checkedMrktCategories.some((value)=> { return (value === true); })){
    filtersMrkt = (
      <Box sx={{ display: 'flex', flexDirection: 'column'}}>
        <p className="guidescss">Choose a filter:</p>
        <FormControlLabel
          label="Market cap"
          control={<Checkbox checked={checkedMrktFilters[0]} onChange={handleChangeMrktFilt0} />}
        />
        <FormControlLabel
          label="Volume"
          control={<Checkbox checked={checkedMrktFilters[1]} onChange={handleChangeMrktFilt1} />}
        />
        <FormControlLabel
          label="Price (7d)"
          control={<Checkbox checked={checkedMrktFilters[2]} onChange={handleChangeMrktFilt2} />}
        />
        <FormControlLabel
          label="price (12hrs)"
          control={<Checkbox checked={checkedMrktFilters[3]} onChange={handleChangeMrktFilt3} />}
        />
      </Box>
    );
  }

  return (
    <div>
      <Menu>

      <FormGroup className="Anashi">

        <FormControlLabel
          label="Alternative"
          control={
            <Checkbox
              checked={checkedAlt}
              onChange={handleChangeAlt}
            />
          }
        />
        <div className="categsAlt">
        {categsAlt}
        </div>
        <div className="filtersAlt">
        {filtersAlt}
        </div>


        <FormControlLabel
          label="Market"
          control={
            <Checkbox
              checked={checkedMrkt}
              onChange={handleChangeMrkt}
            />
          }
        />

        <div className="categsMrkt">
        {categsMrkt}
        </div>
        <div className="filtersMrkt">
        {filtersMrkt}
        </div>

      </FormGroup>

      </Menu>

      
      <MENUContext.Provider
      value={{
        checkedAlt,
        checkedAltCategories,
        checkedMrkt,
        checkedMrktCategories
      }}
      >

      {children}
      </MENUContext.Provider>


    </div>
  );
};


export function useAPI_menu() {
  const context = useContext(MENUContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}