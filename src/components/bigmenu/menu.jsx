import React, {useState, useEffect} from 'react'
import { fallDown as Menu } from 'react-burger-menu';
import './bigmenu.css'

import Checkbox from '@material-ui/core/Checkbox'
import Box from '@material-ui/core/Box'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Bigmenu() {
// checked options in Alternative
  const [checkedAlt, setCheckedAlt] = React.useState([false, false, false, false]);
  const [checkedAlt1, setCheckedAlt1] = React.useState(false);

// checked options in Market
  const [checkedMrkt, setCheckedMrkt] = React.useState([false, false, false, false]);
  const [checkedMrkt1, setCheckedMrkt1] = React.useState(false);

//Alternative parent checkbox
  function handleChangeAlt1(event) {
    if(!checkedMrkt1){
      setCheckedAlt([false, false, false, false]);
      setCheckedAlt1(!checkedAlt1);
    }else{
      console.log("Uncheck market!")
      setCheckedMrkt([false, false, false, false]);
      setCheckedMrkt1(!checkedMrkt1);
      setCheckedAlt1(!checkedAlt1);
    }

  }
//Alternative sub checks
  const handleChangeAlt2 = (event) => {
    if(checkedAlt1 === true){
      setCheckedAlt([event.target.checked, false, false, false]);
    }else{console.log("Change to ALT data!")}
  };
  const handleChangeAlt3 = (event) => {
    if(checkedAlt1 === true){
      setCheckedAlt([false, event.target.checked, false, false]);
    }else{console.log("Change to ALT data!")}

  };
  const handleChangeAlt4 = (event) => {
    if(checkedAlt1 === true){
      setCheckedAlt([false, false, event.target.checked, false]);
    }else{console.log("Change to ALT data!")}

  };
  const handleChangeAlt5 = (event) => {
    if(checkedAlt1 === true){
      setCheckedAlt([false, false, false, event.target.checked]);
    }else{console.log("Change to ALT data!")}
  };





//Market parent checkbox
  function handleChangeMrkt1(event) {
    if(!checkedAlt1){
      setCheckedMrkt([false, false, false, false]);
      setCheckedMrkt1(!checkedMrkt1);
    }else{
      console.log("Uncheck alternative!")
      setCheckedAlt([false, false, false, false]);
      setCheckedAlt1(!checkedAlt1);
      setCheckedMrkt1(!checkedMrkt1);
    }

  }
//Market sub checks
  const handleChangeMrkt2 = (event) => {
    if(checkedMrkt1 === true){
      setCheckedMrkt([event.target.checked, false, false, false]);
    }else{console.log("Change to MRLT data!")}
  };
  const handleChangeMrkt3 = (event) => {
    if(checkedMrkt1 === true){
      setCheckedMrkt([false, event.target.checked, false, false]);
    }else{console.log("Change to MRKT data!")}

  };
  const handleChangeMrkt4 = (event) => {
    if(checkedMrkt1 === true){
      setCheckedMrkt([false, false, event.target.checked, false]);
    }else{console.log("Change to MRKT data!")}

  };
  const handleChangeMrkt5 = (event) => {
    if(checkedMrkt1 === true){
      setCheckedMrkt([false, false, false, event.target.checked]);
    }else{console.log("Change to Mrkt data!")}

  };







//Alternative checkboxes 
  const children1 = (
    <Box sx={{ display: 'flex', flexDirection: 'column'}}>
      <FormControlLabel
        label="Defi"
        control={<Checkbox checked={checkedAlt[0]} onChange={handleChangeAlt2} />}
      />
      <FormControlLabel
        label="Gamefi"
        control={<Checkbox checked={checkedAlt[1]} onChange={handleChangeAlt3} />}
      />
      <FormControlLabel
        label="Metaverse"
        control={<Checkbox checked={checkedAlt[2]} onChange={handleChangeAlt4} />}
      />
      <FormControlLabel
        label="Meme"
        control={<Checkbox checked={checkedAlt[3]} onChange={handleChangeAlt5} />}
      />
    </Box>
  );

//Market checkboxes 
  const children2 = (
    <Box sx={{ display: 'flex', flexDirection: 'column'}}>
      <FormControlLabel
        label="GameFi"
        control={<Checkbox checked={checkedMrkt[0]} onChange={handleChangeMrkt2} />}
      />
      <FormControlLabel
        label="DeFi"
        control={<Checkbox checked={checkedMrkt[1]} onChange={handleChangeMrkt3} />}
      />
      <FormControlLabel
        label="Cross-Chain"
        control={<Checkbox checked={checkedMrkt[2]} onChange={handleChangeMrkt4} />}
      />
      <FormControlLabel
        label="Wallets ..."
        control={<Checkbox checked={checkedMrkt[3]} onChange={handleChangeMrkt5} />}
      />
    </Box>
  );

  return (
    <Menu>

    <FormGroup>
    <FormControlLabel
        label="Alternative"
        control={
          <Checkbox
            checked={checkedAlt1}
            onChange={handleChangeAlt1}
          />
        }
      />

      {children1}

      <FormControlLabel
        label="Market"
        control={
          <Checkbox
            checked={checkedMrkt1}
            onChange={handleChangeMrkt1}
          />
        }
      />

      {children2}

    </FormGroup>

    </Menu>
  );
};