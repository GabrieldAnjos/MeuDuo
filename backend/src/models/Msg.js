const { Schema, model } = require('mongoose');

const MsgSchema = new Schema({
    text: String,
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    receiver: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    read : Boolean
}, {
    timestamps: true,
});

module.exports = model('Msg', MsgSchema);