const { Schema, model } = require('mongoose');

const verificationSchema = new Schema({
    summonerName: String,
    thirdPartyCode: String,
    iconId: Number
}, {
    timestamps: true,
});

module.exports = model('verification', verificationSchema);