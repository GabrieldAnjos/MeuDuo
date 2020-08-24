const User = require('../models/User');
const ConfirmationCodes = require('../models/ConfirmationCodes');
const kayn = require('../services/kayn_api')

/**
 * Gera um codigo alpha numerico aleatorio
 */
function generateCode(size) {
    //36 = 26 letras + 10 numeros
    const max = 36 ** size;
    return Math.round((Math.random() * (max - 1))).toString(36);
}

module.exports = {
    async store(req, res) {
        const { summonerName } = req.body;

        if (!summonerName)
            return res.status(400).json({ error: 'Name not provided' });

        const data;
        try {
            data = await kayn.Summoner.by.name(summonerName);
        } catch (e) {
            return res.status(404).json({ error: 'Name not found', kaynError: e });
        }

        const code = `md_${generateCode(4)}`;
        const iconId = 1;
        if (data.profileIconId == 1)
            iconId = 2;

        const data = ConfirmationCodes.save(
        {
            summonerName: name,
            thirdPartyCode: code,
            iconId: iconId
        });

        return res.json(data)
    },

    async checkCode(req, res) {
        const { summonerName } = req.body;

        if (!summonerName)
            return res.status(400).json({ error: 'Name not provided' });

        const data;
        try {
            data = await kayn.Summoner.by.name(summonerName);
        } catch (e) {
            return res.status(404).json({ error: 'Name not found', kaynError: e });
        }
    }
};