const User = require('../models/User');

module.exports = {
    async store(req, res) {   
        const userId  = req.userId;   
        const { invocadorId } = req.params; 

        const loggedUser = await User.findById(userId);
        const targetUser = await User.findById(invocadorId);

        if(!targetUser){
            return res.status(400).json({ error: 'User not exist '});  
        }

        loggedUser.dislikes.push(targetUser._id);

        await loggedUser.save();        
        

        return res.json(loggedUser);
    }
};