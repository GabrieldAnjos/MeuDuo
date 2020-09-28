function iconURL(iconID) {
    return `/assets_riot/profileicon/${iconID}.png`
}

function emblemURL(tierName) {

    if (!tierName || tierName === 'Unranked')
        return '/assets_riot/ranked-emblems/Unranked.png'
    else
        return `/assets_riot/ranked-emblems/Emblem_${tierName}.png`
}

function championURL(championName) {
    return `/assets_riot/champion/${championName}.png`
}

function championLowURL(championName) {
    return `/assets_riot/champion_low/${championName}.png`
}

function routeURL(routeName) {
    return `/assets_riot/routesLane/${routeName}.png`
}


export {iconURL, emblemURL, routeURL, championURL}