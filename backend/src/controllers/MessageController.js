const User = require('../models/User');
const Msg = require('../models/Msg');

module.exports = {

    async show(req, res) {
        const user = req.userId;
        const user_obj = await User.findById(user);
        const { friendId } = req.body;
        const allChat = user_obj.messages.filter(m => m.owner == friendId)
        return res.json(allChat)
    },

    async index(req, res) {
        const { friendId } = req.params;
        console.log("message index:" + friendId);
        const { messages:msg_list } = await User.findById(req.userId).select('messages');
        //console.log('Id do usuario:', invocadorId)
        console.log(msg_list);

        try {

            let messages;

            if (friendId)
                messages = await Msg.find({
                    $and: [
                        { _id: { $in: msg_list } },
                        {
                            $or: [
                                { "sender": friendId },
                                { "receiver": friendId }
                            ]
                        }
                    ]
                })
            else
                messages= await Msg.find({
                    _id: { $in: msg_list }
                })


            return res.json(messages);
        }
        catch (e) {
            return res.status(404).json({ msg: 'User do not exist ', e })
        }
    },

    async store(req, res) {
        const senderId = req.userId;

        const { text, receiverId } = req.body;

        const receiver = await User.findById(receiverId).select('+message');
        if (!receiver)
            return res.status(404).json({ error: 'Receiver dont exist ' })

        const sender = await User.findById(senderId);
        if (!sender)
            return res.status(404).json({ error: 'Sender dont exist ' })

        const new_msg = await Msg.create({
            text,
            sender: senderId,
            receiver: receiverId,
            read: false
        })
        receiver.messages.push(new_msg)
        sender.messages.push(new_msg)
        receiver.save()
        // const new_receiver = receiver.save()
        // new_msg = new_receiver.messages[length - 1]
        sender.save()

        const senderSocket = req.connectedUsers[senderId];
        const receiverSocket = req.connectedUsers[receiverId];

        if (senderSocket) {
            req.io.to(senderSocket).emit('msg_new', new_msg);
        }

        if (receiverSocket) {
            req.io.to(receiverSocket).emit('msg_new', new_msg);
        }

        return res.json(new_msg);
    }
};