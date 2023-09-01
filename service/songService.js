const { ObjectId } = require ('mongodb');

const getAllSongs = async (req, res) => {
    try {
        const songs = await req.db.collection('songs').find().toArray()

        res.status(200).json({
            message: 'Song is done and produced',
            data: songs
        })
    } catch (error){
        res.status(401).json({ error: error.message })
    }
}

const createSongs = async (req, res) => {
    const { title, songwriter, producer, studio, mixer, engineer } = req.body

    try{
        const newSong = await req.db.collection('songs').insertOne({
            title,
            songwriter,
            producer,
            mixer,
            engineer,
            studio,
            status:'on process'})
        
            res.status(200).json({
                message: 'Song is done and produced',
                data: newSong
            })
    } catch (error) {
        res.status(401).json({ error: error.message })
    }
}

const updateSongs = async (req, res) => {
    const id = req.params.id
    const {title, songwriter, producer, mixer, studio} = req.body

    const overallUpdate = await req.db.collection('songs').updateOne({ _id: new ObjectId(id) }, { $set: { title, songwriter, producer, mixer, studio}})

    res.status(200).json({
        message: 'Updated',
        data: overallUpdate
    })
}

const updateSongsProgress = async (req, res) => {
    const id = req.params.id
    const { status } = req.body

    const newStatus = await req.db.collection('songs').updateOne({ _id: new ObjectId(id) }, { $set:{status:status}})

    res.status(200).json({
        message: 'Updated',
        data: newStatus
    })
}

const deleteSongs = async (req, res) => {
    const { id }  = req.params;
    const songRemove = await req.db.collection('songs').findOneAndUpdate({ _id: new ObjectId(id) }, {$set: {is_deleted: true}})

res.status(200).json({
    message: 'Deleted',
    data: songRemove
    })
}

module.exports = {
    getAllSongs,
    createSongs,
    updateSongs,
    updateSongsProgress,
    deleteSongs
}