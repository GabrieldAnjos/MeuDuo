const User = require('../models/User');
const kayn = require('../services/kayn_api')
const bcrypt = require('bcryptjs');


module.exports = {
    async index(req, res) {
        const user = req.userId;

        const user_obj = await User.findById(user);

        if (!user_obj)
            return res.status(404).json({ error: 'User not exist ' })

        const matches = await User.find({
            _id: {$in: user_obj.matches}
        })

        if (!matches)
            return res.status(404).json({ error: 'Cant find matches ' })

        console.log(matches)

        return res.json(matches);
    }
};