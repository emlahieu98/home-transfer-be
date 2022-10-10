const nodemailer = require('nodemailer')
const moment = require('moment')
require('dotenv').config()

exports.adminSendMail = (phoneNumber) => {
    let transporter = nodemailer.createTransport({
        // config mail server
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.MAIL_ADDRESS,
            pass: process.env.MAIL_PASSWORD_APP,
        },
        tls: {
            rejectUnauthorized: false,
        },
    })
    let content = ''
    content += `
        <div style="padding: 10px; background-color: #003375">
            <div style="padding: 10px; background-color: white;">
                <h4 style="color: #0085ff">Alo alo, có số điện thoại ${phoneNumber} cần tư vấn vào lúc ${moment().format(
        'HH:mm DD/MM/YYYY'
    )}</h4>
                <span style="color: black">Gọi ngay đi</span>
            </div>
        </div>
    `
    let mainOptions = {
        // thiết lập đối tượng, nội dung gửi mail
        from: 'ADMIN HỆ THỐNG',
        to: process.env.EMAIL,
        subject: 'Cần tư vấn dịnh vụ chuyển nhà trọn gói',
        text: 'Your text is here',
        html: content,
    }
    transporter.sendMail(mainOptions, function (err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log('Gửi mail thành công')
        }
    })
}
