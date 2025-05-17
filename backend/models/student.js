const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
    name: String,
    rollNumber: String,
    branch: String,
    dob: String,
    department:String,
    fatherName:String,
    dob:String,
    bloodGroup:String,
    category:String,
    address:String,
    mobile:String,
    motherName:String,
    password: {
        type: String,
        required: true
    },
    // createdAt: DateTime,
    // updatedAt: DateTime,
    fatherName: String,
    mobile: String,
    instMail: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },// Primary Key,
    alternateEmail: String,
    linkedin: String,
    skype:String,
    github: String,
    tenthBoard:String,
    tenthMarks:String,
    twelfthMarks:String,
    twelfthBoard: String,
    // marks: {
    //     '10': String,
    //     '12': String,
    //     "JEE": String,
    //     "CGPA": String
    // }
    jeeYear:String,
    jeeScore:String,
}, {
    timestamps: true
});
StudentSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();

    } catch (err) {
        next(err);
    }
});
// StudentSchema.methods.comparePassword = async function (candidatePassword) {
//     console.log(`${this.password},${candidatePassword}`);
//     // bcrypt.compare(candidatePassword, this.password).then(function (result) {
//     //     // result == true
//     //     console.log(result);
//     //     return result;
//     // });
//     return await bcrypt.compare(candidatePassword, this.password);
// }
StudentSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt
        .compare(candidatePassword, this.password)
        .then(doMatch => {
            // if (doMatch) {
            //     req.session.isLoggedIn = true;
            //     req.session.user = user;
            //     return req.session.save(err => {
            //         console.log(err);
            //         res.redirect('/');
            //     });
            // }
            // return res.status(422).render('auth/login', {
            //     path: '/login',
            //     pageTitle: 'Login',
            //     errorMessage: 'Invalid email or password.',
            //     oldInput: {
            //         email: email,
            //         password: password
            //     },
            //     validationErrors: []
            // });
            return true;
        })
        .catch(err => {
            console.log(err);
            // res.redirect('/login');
            return false;
        });
};
const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;
