const { Schema, model } = require('mongoose');

const ConfirmationSchema = new Schema({
    summonerName: {
        type: String,
        unique: true,
        dropDups: true
    },
    thirdPartyCode: String,
    iconId: number
}, {
    timestamps: true,
});

module.exports = model('Msg', ConfirmationSchema);