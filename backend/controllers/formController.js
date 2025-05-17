const Student=require('../models/student');
exports.postForm = async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        const allowedUpdates = ['rollNumber', 'name', 'instMail','department','fatherName','motherName','dob','bloodGroup','category','address','mobile','alternateEmail','skype','linkedin','github','tenthBoard','tenthMarks','twelfthMarks','twelfthBoard','jeeYear','jeeScore']; // Whitelist safe fields
        const updates = {};
        console.log(req.body);
        // Only copy allowed fields from req.body
        for (const key in req.body) {
            if (allowedUpdates.includes(key)) {
                updates[key] = req.body[key];
                console.log(updates[key]);
            }
        }
        console.log(updates);
        // Update user using spread operator
        Student.findByIdAndUpdate(
            req.user.id,
            { ...updates },
            { new: true } // Return the updated user
        ).then(updatedUser=>{
            console.log(updatedUser);
            return res.status(200).json({ 
                msg: "User updated successfully",
                user: updatedUser 
            });
        }).catch(err=>console.log(err));


    } catch (error) {
        console.error("Error updating user:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
// exports.postForm = async (req, res, next) => {
//     try {
//         // Assuming you have user authentication and the user is available in req.user
//         if (!req.user) {
//             return res.status(401).json({ error: "Unauthorized" });
//         }

//         const userId = req.user.id; // Or whatever your user identifier is
//         const formData = req.body;

//         // Here you would save the data to your database
//         // Example with Mongoose (if using MongoDB):
//         const user = await Student.findById(userId);
//         user.formData = formData;
//         await user.save();

//         // Or create a new document in a forms collection:
//         // const newForm = new Form({
//         //     userId: userId,
//         //     data: formData
//         // });
//         // await newForm.save();

//         console.log(`Data saved for user ${userId}:`, formData);
        
//         return res.status(200).json({ 
//             msg: "Data saved successfully",
//             data: formData
//         });
//     } catch (error) {
//         console.error("Error saving form data:", error);
//         return res.status(500).json({ error: "Internal server error" });
//     }
// };

// exports.postForm=(req,res,next)=>{
//     // create token;
//     console.log(req.body);
//     // create unique id; 
//     return res.status(200).json({msg:"Verified"});
// }
// module.exports=postForm;