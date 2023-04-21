const { Router } = require('express');
const PostModel = require('../Models/post.model');
const postRouter = Router();

postRouter.get('/get', async (req, res) => {
    let { page = 1, limit = 20, username } = req.query;

    try {
        if (username) {
            let posts = await PostModel.find({ username: { $regex: `${username}`, $options: "six" } });
            res.status(200).send(posts);
        } else if (page) {
            if (Number(page) === 1) {
                let posts = await PostModel.find().skip(0).limit(+limit);
                res.status(200).send(posts);
            } else {
                let s = Number(page) * Number(limit) - Number(limit);
                let posts = await PostModel.find().skip(s).limit(+limit);
                res.status(200).send(posts);
            }
        } else {
            let posts = await PostModel.find();
            res.status(200).send(posts);
        }
    } catch (err) {
        res.status(404).send({ Error: err.message });
    }
});

postRouter.post('/post', async (req, res) => {
    const payload = req.body;
    var posts = await PostModel.find();
    try {
        if (posts.length > 0) {
            res.status(201).send({ msg: 'Already stored posts in Database' });
        } else {
            await PostModel.insertMany(payload);
            res.status(201).send({ msg: 'Successfully stored posts in Database' });
        }
    } catch (err) {
        res.status(404).send({ Error: err.message });
    }
});

module.exports = { postRouter };