require ('dotenv').config()

const cors = require('cors')
const express = require ('express')
const databaseMiddleware = require('./middleware/database-middleware.js')
const songRouter = require('./routes/songRouter.js')
const taylorRouter = require('./routes/taylorRouter.js')
const authMiddleware = require('./middleware/authentication-middleware.js')

const app = express()

app.use(cors())
app.use(express.json())
app.use(databaseMiddleware)

app.get('/', (req, res) => {
    res.send('Milestone Week 11')
});

app.use('/taylor', taylorRouter)
app.use('/song', authMiddleware, songRouter)


app.listen(1989, () =>
    console.log('Server is running on port 1989')
)