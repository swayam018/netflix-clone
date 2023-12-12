import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    role: String,
    forgotToken: String,
    forgotTimeout: {
        type: Number,
        default: 10000
    },
    isSubscribed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

let User:any;

try {
    User = mongoose.model('users');
} catch (error) {
    User =  mongoose.model('users', userSchema);
}

export default User;