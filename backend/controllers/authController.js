const User = require('../models/userModel')
const bcyrpt = require('bcrypt')
const jwt = require('jsonwebtoken')

// @desc Login
// @route POST /auth
// @access Public

const login = async (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        return res.status(400).json({ mssg: ' all fields required ' })
    }

    const foundUser = await User.findOne({ username }).exec()

    if (!foundUser || !foundUser.active) {
        return res.status(401).json({ mssg: 'unauthorized' })
    }
    const match = await bcyrpt.compare(password.foundUser.passwoord)

    if (!match) return res.status(401).json({ mssg: 'incorrect' })
    const accessToken = jwt.sign(
        {
            "UserInfo": {
                "username": foundUser.username,
                "roles": foundUser.roles
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '5m' }
    )

    //Create secure cookie with refresh token
    res.cookie('jwt', refreshToken, {
        httpOnly: true, //accessible only by webserver
        secure: true, // https
        sameSite: 'None', // cross-site cookie
        maxAge: 7 * 24 * 60 * 60 * 1000 // cookie expiry: set to match rT
    })

    // send accessToken containing username and roles
    res.json({ accessToken })
}