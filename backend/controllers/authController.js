const Student = require('../models/student');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
// const { use } = require('react');
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    });
};

exports.register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name } = req.body;
    const initpassword = req.body.password;
    const instMail = req.body.email;
    if (!instMail || !initpassword)
        return res.status(200).json({ msg: "instMail and password are required" });
    try {
        let user = await Student.findOne({ instMail });
        if (user) {
            return res.status(400).json({ msg: "User already exists" });
        }
        let password = await bcrypt.hash(initpassword, 10);
        user = new Student({ name, instMail, password });
        // console.log(encpassword);
        await user.save();

        const token = generateToken(user._id);

        res.status(201).json({
            _id: user._id,
            name: user.name,
            instMail: user.instMail,
            token
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Server error");
    }
};

exports.login = async (req, res) => {
    const instMail=req.body.email;
    const {  password } = req.body;
    if (!instMail || !password)
        return res.status(200).json({ msg: "instMail and password are required" });
    try {
        const user = await Student.findOne({ instMail: instMail });
        if (!user) {
            return res.status(400).json({ msg: "Invalid credential" });
        }

        console.log(password);
        user.comparePassword("password")
            .then(isMatch => {
                // --------alternate approach of using async/await----------- 
                // const isMatch = await user.comparePassword("password");
                // console.log(isMatch);
                if (!isMatch) {
                    return res.status(400).json({ msg: "Invaid credentials" });
                }

                const token = generateToken(user._id);
                res.json({
                    _id: user._id,
                    name: user.name,
                    instMail: user.instMail,
                    token
                });
            })
            .catch(err => console.log(err));

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error in Login");
    }
};
exports.getMe = async (req, res) => {
    try {
        const user = await Student.findById(req.user.id).select('-password');
        res.json(user);
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
};
exports.logout = async (req, res) => {

}