import React, { useEffect, useState } from 'react';
import './ChampionSelector.css';
import championsInfo from '../assets/champion.json'

/**
 * @typedef {[{name:String,imageURL:String}]} ChampionList
 * @returns {ChampionList}
 */
function getChampList() {
    const champPairList = Object.entries(championsInfo.data)
    return champPairList.map(
        ([key, data]) => ({ name: data.name, imageURL: `assets_riot/champion_low/${data.image.full}`, show: true })
    )
}
const plainChampList = getChampList()

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
export default function ChampionSelector({ searchingName, onSelection, setPredictedName }) {

    const [sortedChampList, setSortedChampList] = useState(plainChampList)

    function handleClickChampion(champ) {
        console.log(champ)
        if (onSelection) {
            try {
                onSelection(champ.name)
            }
            catch (error) {
                console.error("Erro callback invalido" + error)
            }
        }
    }

    function highlightChampions() {
        searchingName = searchingName || ''

        //Queremos que só os nomes relacionados a busca tenham destaque...
        const maped = plainChampList.map(({ name, imageURL, show }) => ({
            name, imageURL,
            show: name.toLowerCase().startsWith(searchingName.toLowerCase())
        }))

        //...então eles devem aparecer primeiro
        setSortedChampList(maped.sort((c1, c2) => (c1.show ? -1 : 1) - (c2.show ? -1 : 1)))

        if (setPredictedName) {
            try {
                //A melhor predição é chutar o primeiro da lista
                setPredictedName(sortedChampList[0])
            } catch (error) {
                console.error("Erro callback invalido" + error)
            }
        }
    }
    useEffect(highlightChampions, [searchingName])

    return (
        <div className="champ-conteiner">
            <ul>
                {sortedChampList.map((champ) => (
                    <li key={champ.name}>
                        <div onClick={() => handleClickChampion(champ)}>
                            <img
                                className={champ.show ? "show" : "hide"}
                                src={champ.imageURL}
                                alt={champ.name}
                                title={champ.name} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )

}