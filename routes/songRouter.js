const { Router } = require('express')
const { getAllSongs, createSongs, updateSongs, deleteSongs, updateSongsProgress } = require('../service/songService.js')
const authorizationMiddleware = require('../middleware/authorization-middleware.js')

const songRouter = Router ()

songRouter.get('/', authorizationMiddleware, getAllSongs)
songRouter.post('/',authorizationMiddleware, createSongs)
songRouter.put('/:id', authorizationMiddleware, updateSongs)
songRouter.patch('/:id', authorizationMiddleware, updateSongsProgress)
songRouter.delete('/:id', authorizationMiddleware, deleteSongs)

module.exports = songRouter