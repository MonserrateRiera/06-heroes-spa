import React from "react";

import { getHeroesByPublisher } from "../helpers";

export const HeroList = ({ publisher }) => {
    console.log(publisher);
    const heroes = getHeroesByPublisher( publisher );
  return (
    <ul>
        {heroes.map(heroe => {
            return <li key={heroe.id}>{ JSON.stringify(heroe) }</li>
        })}
    </ul>
  )
};
