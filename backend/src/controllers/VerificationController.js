const Verification = require('../models/Verification');
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
        const summonerName = req.body.summonerName.toLowerCase();

        if (!summonerName)
            return res.status(400).json({ error: 'Name not provided' });

        let profileIconId;
        try {
            ({ profileIconId } = await kayn.Summoner.by.name(summonerName));
        } catch (e) {
            return res.status(404).json({ error: 'Riot API Error', kaynError: e });
        }
        let iconId = 0;
        if (profileIconId == 0)
            iconId = 1;

        const thirdPartyCode = `MD${generateCode(4)}`;

        let data = await Verification.findOne({ summonerName })
        if (!data)
            data = await Verification.create(
                {
                    summonerName,
                    thirdPartyCode,
                    iconId
                });
        else
        {
            data.thirdPartyCode = thirdPartyCode;
            data.iconId = iconId;
            await data.save()
        }

        return res.json(data)
    },

    async checkCode(req, res) {
        const summonerName = req.body.summonerName.toLowerCase();

        if (!summonerName)
            return res.status(400).json({
                verified: false,
                error: 'Name not provided'
            });

        let summonerCode;

        try {
            const summoner = await kayn.Summoner.by.name(summonerName);
            if (!summoner)
                return res.status(404).json({
                    verified: false,
                    error: 'Summoner not found'
                });
            const code = await kayn.ThirdPartyCode.by.summonerID(summoner.id)
            if (!code)
                return res.status(404).json({
                    verified: false,
                    error: 'Third party code not found'
                });
            summonerCode = code;

        } catch (e) {
            return res.status(404).json({
                verified: false,
                error: 'Riot API Error', kaynError: e
            });
        }

        const data = await Verification.findOne({ summonerName }).select('thirdPartyCode')
        if (!data) {
            return res.status(404).json({ error: 'verification Code not generated yet' });
        }
        if (data.thirdPartyCode == summonerCode)
            return res.json({ verified: true })
        else
            return res.json({ verified: false })
    },

    async checkIcon(req, res) {
        const summonerName = req.body.summonerName.toLowerCase();

        if (!summonerName)
            return res.status(400).json({
                verified: false,
                error: 'Name not provided'
            });

        let summonerIconId;
        try {
            const summoner = await kayn.Summoner.by.name(summonerName);
            if (!summoner)
                return res.status(404).json({
                    verified: false,
                    error: 'Summoner not found'
                });
            summonerIconId = summoner.profileIconId;

        } catch (e) {
            return res.status(404).json({
                verified: false,
                error: 'Riot API Error', kaynError: e
            });
        }

        const data = await Verification.findOne({ summonerName }).select('iconId')
        console.log(data)
        if (!data) {
            return res.status(404).json({ error: 'verification not generated yet' });
        }
        if (data.iconId == summonerIconId)
            return res.json({ verified: true })
        else
            return res.json({ verified: false })
    }
};