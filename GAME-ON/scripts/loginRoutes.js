//email validator
const express = require("express");
const router = express.Router();
const User = require("./User");
router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ contact }).then(user => {
        //user check
        if (!user) {
            errors.contact = "User not found";
            return res.status(404).json(errors);
        }

        //user match
        const payload = { id: user.id, contact: user.contact }; // jwt payload
        console.log("payload", payload);
        return res;

    });

});
//register user
router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    //validation check
    if (!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            errors.email = "Email already exists...";
            return res, status(400).json(errors);
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            if (err) throw err;
            newUser
                .save()
                .then(user => res.json(user))
                .catch(err => console.log(err));

        }
    });
});

module.exports = router;
