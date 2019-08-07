const axios = require('axios');
const Dev = require('../models/Dev');

let store = async function(req, res) {
    const { username } = req.body;

    const userExists = await Dev.findOne({user: username});

    if(userExists){
        return res.json(userExists);
    }

    const response = await axios.get(`https://api.github.com/users/${username}`);

    const {name, bio, avatar_url} = response.data;

    let dev = await Dev.create({
        name, 
        user: username, 
        bio,
        avatar: avatar_url
    })
    //response.data SEMPRE quando usa-se o axios
    return res.json({ok: dev});
}

let index = async function(req, res) {
    const { user } = req.headers;

    const loggedUser = await Dev.findById(user);

    const users = await Dev.find({
        $and: [
            { _id: { $ne: user } },
            { _id: { $nin: loggedUser.likes } },
            { _id: { $nin: loggedUser.dislikes } }
        ]
    });
};

module.exports = {
    store,
    index
};