const User = require('../models/User');
const kayn = require('../services/kayn_api')
const bcrypt= require('bcryptjs');
const axios = require('axios');

module.exports = {

    async show(req, res){
        const user  = req.userId;   

        const user_obj = await User.findById(user);
        
        if(!user_obj)
            return res.status(404).json({error: 'User not exist '})

        console.log(user_obj);
        return res.json(user_obj);
        
    },

    async index(req, res){
        const user  = req.userId;

        const user_obj = await User.findById(user);

        if (!user_obj)
            return res.status(404).json({ error: 'User not exist ' })

        const users = await User.find({
            $and: [
                { _id: { $ne: user_obj } },
                { _id: { $nin: user_obj.likes } },
                { _id: { $nin: user_obj.dislikes } },
            ],
        })
        return res.json(users);
    },


    async store(req, res) {
        const { username, summonerName, password, email, instagram, age, champion, champion2, champion3, route, route2 } = req.body;

        const userExists = await User.findOne({ username });

        if (userExists) {
            console.log('User already exists');
            return res.json(userExists);
        }

        //Riot API

        const { id, name, profileIconId, summonerLevel } = await kayn.Summoner.by.name(summonerName);
        const league = await kayn.League.Entries.by.summonerID(id);

        league.map(({queueType,tier,rank}) => ({queueType,tier,rank}));

        //Instagram Api

        const response = await axios.get(`https://www.instagram.com/${instagram}/?__a=1`);
        const { profile_pic_url, username: userInstagram } = response.data.graphql.user;
        const hash = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            password: hash,
            email,
            summonerName: name,
            profileIconId,
            summonerLevel,
            champion,
            champion2,
            champion3,
            route,
            route2,
            league,
            avatarInstagram: profile_pic_url,
            userInstagram,
            age,

        })


        return res.json(user);
    },

    async update(req, res) {
      
        const { username, summonerName, email, instagram, age, route, route2, champion, champion2, champion3 } = req.body;

        const userExists = await User.findOne({ 
            $and: [
                { username },
                { _id: { $ne: req.userId } },
            ],
        });

        if (userExists) {
            console.log('User already exists');
            return res.json(userExists);
        }

        //Riot API

        const { id, name, profileIconId, summonerLevel } = await kayn.Summoner.by.name(summonerName);
        const league = await kayn.League.Entries.by.summonerID(id);

        league.map(({queueType,tier,rank}) => ({queueType,tier,rank}));

        //Instagram Api

        const response = await axios.get(`https://www.instagram.com/${instagram}/?__a=1`);
        const { profile_pic_url, username: userInstagram } = response.data.graphql.user;
        

        const user = await User.findByIdAndUpdate(req.userId, {
            username,
            email,
            summonerName: name,
            profileIconId,
            summonerLevel,
            route,
            route2, 
            champion,
            champion2,
            champion3,
            league,
            avatarInstagram: profile_pic_url,
            userInstagram,
            age,
        }, {useFindAndModify: false});

        return res.json(user);
    }
};