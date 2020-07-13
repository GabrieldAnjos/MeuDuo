const User = require('../models/User');

module.exports = {
    async store(req, res) {

        const userId = req.userId;
        const { invocadorId } = req.params;

        const loggedUser = await User.findById(userId);
        const targetUser = await User.findById(invocadorId);

        if (!targetUser) {
            return res.status(400).json({ error: 'User not exist ' });
        }

        if (targetUser.likes.includes(loggedUser._id)) {


            loggedUser.matches.push(targetUser._id);
            targetUser.matches.push(loggedUser._id);

            await targetUser.save();

            const loggedSocket = req.connectedUsers[userId];
            const targetSocket = req.connectedUsers[invocadorId];

            if (loggedSocket) {
                req.io.to(loggedSocket).emit('match', targetUser);
            }

            if (targetSocket) {
                req.io.to(targetSocket).emit('match', loggedUser);
            }

        }


        loggedUser.likes.push(targetUser._id);
        await loggedUser.save();


        return res.json(loggedUser);
    }
};