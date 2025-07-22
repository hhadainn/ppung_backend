const {collection} = require('../services/db')
const {ObjectId} = require('mongodb')
const emailSerivce= require('../email_sender/sendMail')
const sendEmail = async(email) =>{
    const code = generateVerificationCode()
    const coll = await collection('email_verify')
    const find = await coll.findOne({email:email,verify:false})
    if (find) return 'exist'
    const doc = {
        email:email,
        code:code,
        verify:false,
        created_at:new Date()
    }
    await coll.insertOne(doc)
    await emailSerivce.sendVerificationEmail(email,code)

    return 'success'
    
}

const checkCode = async(code, email) =>{
    const coll = await collection('email_verify')
    const find = await coll.findOne({email: email, code:code,verify:false})
    if (find) {
        await coll.updateOne({email: email, code: code, verify:false}, {$set:{verify:true}})
        return 'success'
    }
    else return 'fail'
}

/**
 * 랜덤한 6자리 인증번호 생성 함수
 */
function generateVerificationCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

const createUser = async(email,password, name) => {
    const coll = await collection('user')
    const find = await coll.findOne({email:email, password:password, removed_at:null})
    if (find) return 'exist'
    else {
        const doc= {
            email:email,
            password:password,
            name:name,
            created_at: new Date(),
            updated_at: new Date(),
            removed_at: null
        }
        await coll.insertOne(doc)
        return 'success'
    }
}

const login = async(email,password) => {
    const coll = await collection('user')
    const find = await coll.findOne({email:email, password:password, removed_at:null})
    if (find) return 'success'
    else return 'fail'
    }



module.exports = {sendEmail, checkCode,createUser, login}