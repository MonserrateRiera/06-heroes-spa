import { heroes } from "../data/heroes";

// export const getHeroesById = ( id ) => heroes.filter( hero => hero.id === id );
export const getHeroesById = ( id ) =>{

    return heroes.find( hero => hero.id ===id );
};