const express = require('express');
const router = express.Router()
router.post('/test', async(req, res) => {
    try{
        const {type, type2} = req.query
		const {data} = req.body
		console.log(type, type2, data)
        return res.status(200).send({message:'다인'})
    }
    catch(e){
        console.log(e)
    }
})
router.get('/test2', async(req, res) => {
    try{
        console.log(123)
        return res.status(200).send({message:'success'})
    }
    catch(e){
        console.log(e)
    }
})
router.get('/test3', async(req, res) => {
    try{
        console.log(123)
        return res.status(200).send({message:'success'})
    }
    catch(e){
        console.log(e)
    }
})
module.exports = router;