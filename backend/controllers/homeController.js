exports.getHome=(req,res,next)=>{
    // res.redirect("/");
    console.log("Hey");
    return res.json({
        message:"Done"
    });

    // res.render('./form',{
    //     path:'/form'
    // });
}