function iconURL(iconID) {
    return `/assets_riot/profileicon/${iconID}.png`
}

function emblemURL(tierName) {

    if (!tierName || tierName === 'Unranked')
        return '/assets_riot/ranked-emblems/Unranked.png'
    else
        return `/assets_riot/ranked-emblems/Emblem_${tierName}.png`
}

export {iconURL, emblemURL}