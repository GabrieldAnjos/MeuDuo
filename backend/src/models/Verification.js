const { Schema, model } = require('mongoose');

const verificationSchema = new Schema({
    summonerName: {
        type: String,
        required: true
    },
    thirdPartyCode: String,
    iconId: Number,
    confirmed: Boolean,
    confirmed_at: Date
}, {
    timestamps: true,
});

module.exports = model('verification', verificationSchema);