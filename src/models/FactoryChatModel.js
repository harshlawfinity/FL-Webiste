import mongoose from "mongoose";

const FactoryChatMessageSchema = new mongoose.Schema(
  {
    messageId: { type: String, required: true },
    senderType: { type: String, default: "system" },
    senderName: { type: String, default: "" },
    senderId: { type: String, default: "" },
    type: { type: String, default: "msg" },
    msg: { type: String, required: true },
    time: { type: Date, required: true },
  },
  { _id: false }
);

const FactoryChatSchema = new mongoose.Schema(
  {
    chatId: { type: String, required: true, unique: true, index: true },
    propertyId: { type: String, default: "" },
    propertyName: { type: String, default: "" },
    visitorName: { type: String, default: "" },
    visitorCity: { type: String, default: "" },
    visitorCountry: { type: String, default: "" },
    messages: { type: [FactoryChatMessageSchema], default: [] },
    messageCount: { type: Number, default: 0 },
    status: { type: String, enum: ["active", "closed"], default: "active" },
    startedAt: { type: Date },
    endedAt: { type: Date },
    endedReason: { type: String, default: "" },
    lastMessageAt: { type: Date },
    eventIds: { type: [String], default: [] },
  },
  {
    timestamps: true,
    collection: "factory_tawk_chat_sessions",
  }
);

FactoryChatSchema.index({ "messages.messageId": 1 });

const FactoryChatModel =
  mongoose.models.FactoryChatModel ||
  mongoose.model("FactoryChatModel", FactoryChatSchema);

export default FactoryChatModel;
