const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')


// @desc GET all users
// @route Get /user
// @access Private

const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find().select('-password').lean()
    if (!users?.length) {
        return res.status(400).json({ message: 'no users found' })
    }
    res.json(users)
})

// @desc    Create new user
// @route   POST /user
// @access  Private
const createNewUser = asyncHandler(async (req, res) => {
    const { username, password, roles } = req.body

    //confirm data
    if (!username || !password || !Array.isArray(roles) || !roles.length) {
        return res.status(400).json({ message: 'all fields are required' })
    }
    // check for duplicates
    const duplicate = await User.findOne({ username }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate username' })
    }

    // hash password
    const hashedPwd = await bcyrpt.hash(password, 10)// salt rounds

    const userObject = { username, "password": hashedPwd, roles }

    //create and store new user
    const user = await User.create(userObject)

    if (user) { // user created
        res.status(201).json({ message: `New user ${username} created` })
    } else {
        res.status(400).json({ message: 'invalide user data received' })
    }

})

// @desc Update a user
// @route  PATCH /user
// @access Private
const updateUser = asyncHandler(async (req, res) => {
    const { id, username, roles, active, password } = req.body

    // confirm data
    if (!id || !username || !Array.isArray(roles) || !roles.length || typeof active !== 'boolean') {
        return res.status(400).json({ message: 'all fields are required' })
    }

    const user = await User.findById(id).exec()

    if (!user) {
        return res.status(400).json({ message: 'user not found' })
    }

    //check for duplicate
    const duplicate = await User.findOne({ username }).lean().exec()
    //allow updates to original user
    if (duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({ message: 'duplicate username' })
    }

    user.username = username
    user.roles = roles
    user.active = active

    if (password) {
        //hash password
        user.password = await bcrypt.hash(password, 10) // salt rounds
    }
    const updatedUser = await user.save()

    res.json({ message: ` ${updatedUser.username} updated` })

})

// @desc Delete a user  - admin action only
// @route  Delete  /user
// @access Private

const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.body
    if (!id) {
        return res.status(400).json({ message: 'user id required' })
    }

    const note = await Note.findOne({ user: id }).lean().exec()

    if (note?.length) {
        return res.status(400).json({ message: 'user has assigned notes' })
    }
    const user = await User.findById(id).exec()

    if (!user) {
        return res.status(400).json({ message: 'user not found' })
    }

    const result = await user.deleteOne()

    const reply = `Usernmae ${result.username} with ID ${result._id} deleted`
    res.json(reply)
})


module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}