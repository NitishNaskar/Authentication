const nodemailer=require("../config/mail_sending");

exports.newMailSender=(message)=>{
    console.log("New Message is sended");

    nodemailer.transporter.sendMail({
        from: "sansayani093@gmail.com",
        to: "nitishnaskar.cont1@gmail.com, sansayani093@gmail.com",
        subject: "Hello , New Mail Send By Node.js", 
        text: "Hello world?", 
        html: "<b>Hello world?</b>",
    },(err,info)=>{
        if(err){
            console.log("Thre Have some error to send the mail",err);
            return;
        }

        console.log("The maill sended success fuly",info);
    });
}
