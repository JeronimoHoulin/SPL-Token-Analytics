import React, {useState, useEffect} from 'react'
import { fallDown as Menu } from 'react-burger-menu';
import './bigmenu.css'

import Checkbox from '@material-ui/core/Checkbox'
import Box from '@material-ui/core/Box'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Bigmenu() {
  //const [checkedgame, setCheckedGame] = useState(true)
  const [checked, setChecked] = React.useState([false, false, false, false]);
  const [checkedAlt, setCheckedAlt] = React.useState(false);

  //console.log(checked)
  console.log(checkedAlt)


  function handleChange1(event) {
    setChecked([false, false, false, false]);
    setCheckedAlt(!checkedAlt);
  }

  const handleChange2 = (event) => {
    if(checkedAlt === true){
      setChecked([event.target.checked, false, false, false]);
    }else{console.log("Get Alt data!")}
  };
  const handleChange3 = (event) => {
    if(checkedAlt === true){
      setChecked([false, event.target.checked, false, false]);
    }else{console.log("Get Alt data!")}

  };
  const handleChange4 = (event) => {
    if(checkedAlt === true){
      setChecked([false, false, event.target.checked, false]);
    }else{console.log("Get Alt data!")}

  };
  const handleChange5 = (event) => {
    if(checkedAlt === true){
      setChecked([false, false, false, event.target.checked]);
    }else{console.log("Get Alt data!")}

  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column'}}>
      <FormControlLabel
        label="Defi"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Gamefi"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
      <FormControlLabel
        label="Metaverse"
        control={<Checkbox checked={checked[2]} onChange={handleChange4} />}
      />
      <FormControlLabel
        label="Meme"
        control={<Checkbox checked={checked[3]} onChange={handleChange5} />}
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
            checked={checkedAlt}
            onChange={handleChange1}
          />
        }
      />

      {children}

    </FormGroup>

    </Menu>
  );
};