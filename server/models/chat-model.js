const { Schema, model } = require("mongoose");

const chatSchema = new Schema({ 
    email: { 
        type: String, 
        required: true,
    },
    question: { 
        type: String, 
        required: true,
    }, 
});

 // create a new collections(Model) 
const Chatlog = new model("Chatlog", chatSchema);

module.exports = Chatlog;  