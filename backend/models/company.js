const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const company = new Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        phone: {
            type: String,
        },
        location:String,
    }, {
    timestamps: true
}
)