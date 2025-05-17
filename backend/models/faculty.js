const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const faculty = new Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        phone: {
            type: String,
        }
    }, {
    timestamps: true
}
)
module.exports = faculty;
