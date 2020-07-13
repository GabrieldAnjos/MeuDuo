const User = require('../models/User');
const bcrypt= require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {

    async show(req, res) {
        const { username, password } = req.body;

        const user = await User.findOne({ username }).select('+password');

        if (!user) {
            console.log("User not found");
            return res.status(400).send({ error: 'User not found' });     
        }
        
        if(!await bcrypt.compare(password, user.password)){
            console.log("Invalid password");
            return res.status(400).send({ error: 'Invalid password' });
        }           
        
        user.password = undefined;

        const token = jwt.sign({ userId: user._id}, process.env.SECRET_HASH, {
            expiresIn: 86400,
        });

        const { _id } = user;
        res.json({ token , _id });
           
         //return res.json({ userExists, token });
    },

};