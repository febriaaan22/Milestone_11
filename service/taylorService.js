const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')
const {JWT_SIGN}  = require("../config/jwt.js")
console.log(JWT_SIGN,'login page')

const validRoles = ['songwriter', 'producer']

const register = async (req, res) => {
    const { username, password, role } = req.body;
try {
    const usernameValue = username.trim('');
    if (password.length < 13) {
        return false;
    }
    const alphanumericRegex = /[0-9a-zA-Z]/;
    if (!alphanumericRegex.test(password)) {
        return false;
    }
    if (usernameValue === ' ' || usernameValue === null) {
        res.status(200).json({
            message: 'Username cant be blank'
        });
    }
    if (!validRoles.includes(role)){
        throw new Error('Invalid role')
    }
    const taylor = await req.db.collection('electriclady').findOne({ username })
    if (taylor) {
        throw new Error('Username already exist')
    }

    const hashedPassword = await bcrypt.hash(password, 13)

    const newTaylor = await req.db.collection('electriclady').insertOne({ username, password: hashedPassword, role })
    res.status(200).json({
        message: 'User successfully registered',
        data: newTaylor
    })
} catch (error){
    res.status (401).json({ error: error.message})
    }
}

const login = async (req, res) => {
    const { username, password } = req.body
    
    const user = await req.db.collection('electriclady').findOne({ username })

    const isPasswordCorrect = await bcrypt.compare(password, user.password)

    if(user) {
        if (isPasswordCorrect) {
            const token = jwt.sign({ username: user.username, id: user._id, role: user.role}, JWT_SIGN)
            res.status(200).json({
                message: 'User successfully logged in',
                data: token
            })
        } else {
            res.status(401).json({ error: 'Password is incorrect' })
        }
    } else {
        res.status(401).json({ error: 'User not found'})
    }
}

module.exports = {
    register,
    login
}