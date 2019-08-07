const Dev = require('../models/Dev');

let store = async function (req, res) {
    //header para autenticação
    const { devId } = req.params;
    const { userId } = req.headers;

    const loggedDev = await userId.findById(userId);
    const targetDev = await Dev.findById(devId);

    if(!targetDev){
        return res.status(400).json({error: 'Dev does not exists'})
    }

    if(targetDev.likes.includes(loggedDev._id)){
        console.log('Deu match!');
    }

    loggedDev.likes.push(targetDev._id);

    await loggedDev.save();
}

module.exports = {
    store
}