import React from 'react';
import './RouteSelector.css';
//Imagens
import { routeURL } from '../services/publicAssetsApi';

export default function RouteSelector({ onSelection, routeDatas, name }) {

    return (
        <div className="route-container">
            <nav>

                {routeDatas !== 'Nenhuma' ? (
                    <input type="checkbox" id={`check${name}`} name={name}  value="Nenhuma" onChange={e => onSelection(e.target.value)} />
                ) : (
                        <input type="checkbox" id={`check${name}`} name={name} value="Nenhuma" onChange={e => onSelection(e.target.value)} />
                    )}
                <label id="noneRoutes" htmlFor={`check${name}`} ><img id="check_01" src={routeURL('noneRoutes')} alt="Nenhuma" /></label>
                {routeDatas === 'Top' ? (
                    <input type="radio" id={`top${name}`} name={name} defaultChecked value="Top" onChange={e => onSelection(e.target.value)} />
                ) : (
                        <input type="radio" id={`top${name}`} name={name} value="Top" onChange={e => onSelection(e.target.value)} />
                    )}
                <label id="top1" htmlFor={`top${name}`} ><img className="link" id="link_01" src={routeURL('top')} alt="top" /></label>
                {routeDatas === 'Jungle' ? (
                    <input type="radio" id={`jungle${name}`} name={name} defaultChecked value="Jungle" onChange={e => onSelection(e.target.value)} />
                ) : (
                        <input type="radio" id={`jungle${name}`} name={name} value="Jungle" onChange={e => onSelection(e.target.value)} />
                    )}
                <label id="jungle1" htmlFor={`jungle${name}`}><img className="link" id="link_02" src={routeURL('jungle')} alt="jungle" /></label>
                {routeDatas === 'Mid' ? (
                    <input type="radio" id={`mid${name}`} name={name} defaultChecked value="Mid" onChange={e => onSelection(e.target.value)} />
                ) : (
                        <input type="radio" id={`mid${name}`} name={name} value="Mid" onChange={e => onSelection(e.target.value)} />
                    )}
                <label id="mid1" htmlFor={`mid${name}`}><img className="link" id="link_03" src={routeURL('mid')} alt="mid" /></label>
                {routeDatas === 'Bot' ? (
                    <input type="radio" id={`bot${name}`} name={name} defaultChecked value="Bot" onChange={e => onSelection(e.target.value)} />
                ) : (
                        <input type="radio" id={`bot${name}`} name={name} value="Bot" onChange={e => onSelection(e.target.value)} />
                    )}
                <label id="bot1" htmlFor={`bot${name}`}><img className="link" id="link_04" src={routeURL('bot')} alt="bot" /></label>
                {routeDatas === 'Suporte' ? (
                    <input type="radio" id={`suporte${name}`} name={name} defaultChecked value="Suporte" onChange={e => onSelection(e.target.value)} />
                ) : (
                        <input type="radio" id={`suporte${name}`} name={name} value="Suporte" onChange={e => onSelection(e.target.value)} />
                    )}
                <label id="suporte1" htmlFor={`suporte${name}`} ><img className="link" id="link_05" src={routeURL('suporte')} alt="suporte" /></label>
                {routeDatas === 'allRoutes' ? (
                    <input type="radio" id={`allRoutes${name}`} name={name} defaultChecked value="allRoutes" onChange={e => onSelection(e.target.value)} />
                ) : (
                        <input type="radio" id={`allRoutes${name}`} name={name} value="allRoutes" onChange={e => onSelection(e.target.value)} />
                    )}
                <label id="allRoutes1" htmlFor={`allRoutes${name}`} ><img className="link" id="link_06" src={routeURL('allRoutes')} alt="allRoutes" /></label>

            </nav>
            {/* <input
                name="rota"
                placeholder="Todas as Rotas"
                value={routeDatas}
                disabled
            /> */}

        </div>
    );

}