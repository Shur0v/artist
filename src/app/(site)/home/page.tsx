import React from 'react';
import Homesec from '../_components/home/homesec';
import Biography from '../_components/home/biosec';
import Poetrysec from '../_components/home/poetrysec';
import Poetry2sec from '../_components/home/poetry2sec';
import Eventsec from '../_components/home/eventsec';
import Contactsec from '../_components/home/contactsec';
import Artbottom from '../_components/art/page';



export default function Homee() {
  return (
    <div>

        <Homesec />
        <Biography />
        <Poetrysec />
        <Poetry2sec />
        <Eventsec />
        <Artbottom />
        <Contactsec />
    </div>
  )
}
