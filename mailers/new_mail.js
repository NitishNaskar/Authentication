const nodemailer=require("../config/mail_sending");

exports.newMailSender=(message)=>{
    console.log("New Message is sended");
    nodemailer.transporter.sendMail({
        from: "sansayani093@gmail.com",
        to: "sansayani093@gmail.com",
        subject: "Hello , New Mail Send By Node.js",  
        html: "<div><h1>This A Node.js Sending Email</h1><p><%= message%></p></div>",
    },(err,info)=>{
        if(err){
            console.log("Thre Have some error to send the mail",err);
            return;
        }

        console.log("The maill sended success fuly",info);
    });
}
