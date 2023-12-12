import mongoose from "mongoose"

export const connects = async () => {
    mongoose.connect('mongodb://localhost:27017/netflix-clone').then((respon) => {
        console.log("Mongoose connected");
    }).catch((error) => {
        console.log("mongodb error: " + error);
    })
}