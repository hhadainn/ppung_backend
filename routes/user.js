const express = require('express');
const userService= require('../services/user')
const router = express.Router()
router.post('/verify/email', async(req, res) => {
    try{
        const {email} = req.body
        const result= await userService.sendEmail(email)
		return res.status(200).send({message:result})
    }
    catch(e){
        console.log(e)
    }
})

router.post('/check/email', async(req, res) => {
    try{
        const {code, email} = req.body
        const result= await userService.checkCode(code, email)
		return res.status(200).send({message:result})
    }
    catch(e){
        console.log(e)
    }
})

router.put('/create', async(req, res) => {
    try{
        const {email,password, name} = req.body
        const result= await userService.createUser(email,password,name)
		return res.status(200).send({message:result})
    }
    catch(e){
        console.log(e)
    }
})

router.post('/login', async(req, res) => {
    try{
        const {email,password} = req.body
        const result= await userService.login(email,password)
		return res.status(200).send({message:result})
    }
    catch(e){
        console.log(e)
    }
})

module.exports = router;