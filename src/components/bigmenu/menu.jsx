import React from 'react'
import { fallDown as Menu } from 'react-burger-menu';
import './bigmenu.css'

export default function Bigmenu() {
  console.log("ashei")
  return (
    <Menu>
      <p>GAME</p>
      <p>DEFI</p>
      <p>MEME</p>
      <p>METAVERSE</p>

    </Menu>
  );
};