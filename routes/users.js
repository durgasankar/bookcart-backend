const express = require('express');
const router = express.Router();
router.get('/durga', async (req, res) => {
    console.log('request: ', req)
    res.status(200).send('Sahi Raste p ja rahe ho bete');
    // const { error } = validate(req.body);
    // if (error) return res.status(400).send(error.details[0].message);

    // let user = await User.findOne({ email: req.body.email });
    // if (user) return res.status(400).send('User already registered.');

    // user = new User(_.pick(req.body, ['name', 'email', 'password']));
    // const salt = await bcrypt.genSalt(10);
    // user.password = await bcrypt.hash(user.password, salt);
    // await user.save();

    // const token = user.generateAuthToken();
    // res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email']));
});

module.exports = router;
