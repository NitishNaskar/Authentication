const nodemailer=require("nodemailer");
const ejs=require("ejs");
const path= require("path");

let transporter = nodemailer.createTransport({
  service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "sansayani093", // generated ethereal user
      pass: "Nitish#973459", // generated ethereal password
    },
});

let renderTemplate=(data,relativePath)=>{
  let mailHTML;
  ejs.render(
    path.join(__dirname,"../views/mailers",relativePath),
    data,
    function(err,template){
      if(err){
        console.log("Error in render ");
        return;
      }
      mailHTML=template;
    });

  return mailHTML;
}

module.exports={
  transporter: transporter,
  renderTemplate: renderTemplate
}