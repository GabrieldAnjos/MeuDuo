import React, { useEffect, useState } from 'react';
import './RouteSelector.css';

import central from '../assets/menu-circular/central.png';
import top from '../assets/menu-circular/top.png';
import jungle from '../assets/menu-circular/jungle.png';
import mid from '../assets/menu-circular/mid.png';
import bot from '../assets/menu-circular/bot.png';
import suporte from '../assets/menu-circular/suporte.png';

/**
 * @typedef {[{name:String,imageURL:String}]} ChampionList
 * @returns {ChampionList}
 */

/**
 * @callback SelectionCallback
   @param {string} champ
 */

/**
* @callback PredictionCallback
* @param {string} predictedName
*/

/**
 * @param {{searchingName:string,
    onSelection:SelectionCallback,
    setPredictedName:PredictionCallback
    }} props 
 */
export default function RouteSelector({ onSelection }) {

    function handleClickRoute(route) {
        
        console.log(route)
        if (onSelection) {
            try {
                onSelection(route)
            }
            catch (error) {
                console.error("Erro callback invalido" + error)
            }
        }
    }

    return (
        <div className="route-container">
            <nav>
                    <input type="checkbox" id="check" value="central"  onChange={e => handleClickRoute(e.target.value)}/>
                    <label id="central" htmlFor="check" name="route"><img src={central} /></label>
                    <input type="radio" id="top" name="route" value="top" onChange={e => handleClickRoute(e.target.value)}/>
                    <label id="top1" htmlFor="top" name="route"><img className="link" id="link_01" src={top} alt="" /></label>
                    <input type="radio" id="jungle" name="route" value="jungle" onChange={e => handleClickRoute(e.target.value)}/>
                    <label id="jungle1" htmlFor="jungle"><img className="link" id="link_02" src={jungle} alt="" /></label>
                    <input type="radio" id="mid" name="route" value="mid" onChange={e => handleClickRoute(e.target.value)}/>
                    <label id="mid1" htmlFor="mid"><img className="link" id="link_03" src={mid} alt="" /></label>
                    <input type="radio" id="bot" name="route" value="bot" onChange={e => handleClickRoute(e.target.value)}/>
                    <label id="bot1" htmlFor="bot"><img className="link" id="link_04" src={bot} alt="" /></label>
                    <input type="radio" id="suporte" name="route" value="suporte" onChange={e => handleClickRoute(e.target.value)}/>
                    <label id="suporte1" htmlFor="suporte" name="route"><img  className="link" id="link_05" src={suporte} alt="" /></label>
                </nav>
        </div>
    );

}