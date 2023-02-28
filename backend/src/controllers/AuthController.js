const User = require('../models/User');
const bcrypt= require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {

    async store(req, res) {
        const { username, password,  } = req.body;
        //const userAll = await User.find();

        
        const user = await User.findOne({ email: "leticialo@gmail.com" });
        //console.log(userAzyzzyyyyyll);
        //console.log(user);
        console.log(User);
        console.log(user);
        

        //user = {"_id":{"$oid":"5f095feab6cf4a3574174acc"},"likes":[],"dislikes":[],"username":"rafael","password":"$2a$10$emHT2RcEhJUQge9R5Hy2ruYZw6Munzg3GAHKHCZpyIE8fhEX53Tzy","email":"rafael@gortamcic","summonerName":"Rafael","profileIconId":{"$numberInt":"508"},"summonerLevel":{"$numberInt":"33"},"league":[],"avatarInstagram":"https://instagram.fmea2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/42678347_298708407408014_2059947971079831552_n.jpg?_nc_ht=instagram.fmea2-1.fna.fbcdn.net&_nc_ohc=Y1gAWHIE4xQAX-vAW_G&oh=f396e588884514e1d4f62b6a36566d34&oe=5F339AF6","userInstagram":"rafael_lopes_anjos","idade":{"$numberInt":"25"},"createdAt":{"$date":{"$numberLong":"1594449898999"}},"updatedAt":{"$date":{"$numberLong":"1594449898999"}},"__v":{"$numberInt":"0"}};

        if (!user) {
            console.log("Usere3 not found");
            return res.status(400).send({ error: 'Userr4 not found' });     
        }
        
        

        const token = jwt.sign({ userId: user._id}, process.env.SECRET_HASH, {
            expiresIn: 86400,
        });

        const { _id } = user;
        res.json({ token , _id });
           
         
    },

    async show(req, res) {
        res.json(true);
           
    },

};