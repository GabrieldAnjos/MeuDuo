const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    email: {
        type: String,
        required: true,
    },
    summonerName: {
        type: String,
        required: true,
    },
    profileIconId: Number,
    summonerLevel: Number,
    league: [
        {
            queueType: String,
            tier: String,
            rank: String,
        }
    ],
    userInstagram: String,
    avatarInstagram: String,
    idade: {
        type: Number,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    matches: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    messages: {
        type: [{
            type: Schema.Types.ObjectId,
            ref: 'Msg'
        }],
        select: false
    }

}, {
    timestamps: true,
});

module.exports = model('User', UserSchema);