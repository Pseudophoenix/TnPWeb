exports.getHome=(req,res,next)=>{
    // res.redirect("/");
    console.log("Hey");
    return res.json({
        message:"Where"
    });

    // res.render('./form',{
    //     path:'/form'
    // });
}