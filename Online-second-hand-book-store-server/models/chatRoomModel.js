const mongoose = require("mongoose");

const chatRoomSchema = new mongoose.Schema({
  chatroomid: {
    type: String,
    required: [true, "Please provide a name!"],
  },
  messages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Message",
    required: true
  }]
});

const ChatRoom = mongoose.model("ChatRoom", chatRoomSchema);

module.exports = ChatRoom;
