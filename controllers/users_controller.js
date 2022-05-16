const nodemailer=require("../mailers/new_mail");

module.exports.usercontroller=function(req,res){
    return res.render('user_profile');
}

module.exports.createdcomment=function(req,res){
    if(req.xhr){
        nodemailer.newMailSender("it is working");
        return res.status(200).json({
            data: {
                post: "It is ok"
            },
            message: "Comment is created"
        });
    }

    return res.redirect("/");
}