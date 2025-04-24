import React from 'react';
import Homesec2 from '../_components/home/homesec2';
import Biography from '../_components/home/biosec';
import Poetrysec from '../_components/home/poetrysec';
import Poetry2sec from '../_components/home/poetry2sec';
import Eventsec from '../_components/home/eventsec';
import Artbottom from '../_components/art/page';
import Slider from '../_components/home/slider';


export default function Homee() {
  return (
    <div>
        <Homesec2 />
        <Slider />
        <Biography />
        <Poetrysec />
        <Poetry2sec />
        <Eventsec />
        <Artbottom />
    </div>
  )
}
