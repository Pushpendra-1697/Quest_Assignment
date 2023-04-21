const { Router } = require('express');
const UserModel = require('../Models/user.model');
const userRouter = Router();

//end points: "/users/get" for get all users;
userRouter.get('/get', async (req, res) => {
    let query = req.query;
    try {
        let users = await UserModel.find(query);
        res.status(200).send(users);
    } catch (err) {
        res.status(404).send({ Error: err.message });
    }
});

//end points: "/users/get/:id" for getting any particular user by id;
userRouter.get('/get/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await UserModel.findOne({ _id: id });
        res.status(200).send({ "msg": `Successfully get User which id is ${id}`, user });
    } catch (err) {
        res.status(404).send({ Error: err.message });
    }
});


//end points: "/users/post" for registering any new user;
userRouter.post('/post', async (req, res) => {
    const payload = req.body;
    try {
        const user = new UserModel(payload);
        await user.save();
        res.status(201).send({ msg: 'Stored in DB', user });
    } catch (err) {
        res.status(404).send({ msg: "Registation failed" });
    }
});


//end points: "/users/delete" for delete particular user by id;
userRouter.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    try {
        let user = await UserModel.findByIdAndDelete({ _id: id });
        res.send(user);
    } catch (err) {
        res.status(404).send({ Error: err.message });
    }
});

module.exports = { userRouter };