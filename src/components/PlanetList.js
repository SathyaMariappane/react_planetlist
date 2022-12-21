import React from 'react';
import Planet from "./Planet.css";
function PlanetList()
{
    const planetnames=['Mars','Venus','Jupiter','Earth','Saturn','Neptune'];
    return(
        <div>
            {
                planetnames.map(planet => <table><tr><td>{planet}</td></tr></table>)
            }
        </div>
    )
}
export default PlanetList 