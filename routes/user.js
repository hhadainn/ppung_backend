const express = require('express');
const router = express.Router()
router.get('/test', async(req, res) => {
    try{
        console.log(123)
        return res.status(200).send({message:'success'})
    }
    catch(e){
        console.log(e)
    }
})
module.exports = router;