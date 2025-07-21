
const nodemailer = require('nodemailer')
// import dotenv from 'dotenv';
require('dotenv').config();
// dotenv.config();

const { email_service, user, pass } = process.env;

const transporter = nodemailer.createTransport({
  service: email_service,
  auth: {
    user,
    pass,
  },
});

/**
 * 랜덤한 6자리 인증번호 생성 함수
 */
function generateVerificationCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

/**
 * 인증 메일 발송 함수
 * @param {string} toEmail 수신자 이메일 주소
 * @returns {Promise<string>} 전송된 6자리 인증번호
 */
async function sendVerificationEmail(toEmail) {
  const code = generateVerificationCode();

  const mailOptions = {
    from: user,
    to: toEmail,
    subject: '[방구를 뿌우우웅~]에서 인증번호를 보냈습니다',
    text: `당신의 인증번호는 [ ${code} ] 입니다. 3분 이내에 입력해주세요.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('이메일 전송 성공:', toEmail);
    return code;
  } catch (error) {
    console.error('이메일 전송 실패:', error);
    throw error;
  }
}
const test = async() => {
    try{
        await sendVerificationEmail('holove0118@gmail.com')
    }
    catch(e){
        console.log(e)
    }
}
// test()