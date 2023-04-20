const { Router } = require('express');
const PostModel = require('../Models/post.model');
const postRouter = Router();

postRouter.get('/get', async (req, res) => {

});

postRouter.post('/post', async (req, res) => {
    const payload = req.body;
    console.log(payload);
    try {
        await PostModel.insertMany(payload);
        res.status(201).send({ msg: 'Successfully stored in Database' });
    } catch (err) {
        res.status(404).send({ Error: err.message });
    }
});

module.exports = { postRouter };