import mongoose from "mongoose";

const TawkMessageSchema = new mongoose.Schema(
  {
    messageId: { type: String, required: true },
    senderType: { type: String, default: "system" },
    senderName: { type: String, default: "" },
    senderId: { type: String, default: "" },
    type: { type: String, default: "text" },
    msg: { type: String, required: true },
    time: { type: Date, required: true },
    attchs: { type: [mongoose.Schema.Types.Mixed], default: [] },
  },
  { _id: false }
);

const TawkFactoryChatSessionSchema = new mongoose.Schema(
  {
    chatId: { type: String, required: true, unique: true, index: true },
    propertyId: { type: String, default: "" },
    visitorId: { type: String, default: "" },
    visitorName: { type: String, default: "" },
    visitorEmail: { type: String, default: "" },
    status: { type: String, enum: ["active", "closed"], default: "active" },
    startedAt: { type: Date },
    endedAt: { type: Date },
    lastMessageAt: { type: Date },
    messages: { type: [TawkMessageSchema], default: [] },
    messageCount: { type: Number, default: 0 },
    eventIds: { type: [String], default: [] },
  },
  {
    timestamps: true,
    collection: "tawk_chat_sessions",
  }
);

TawkFactoryChatSessionSchema.index({ "messages.messageId": 1 });

const TawkChatSession =
  mongoose.models.TawkFactoryChatSession ||
  mongoose.model("TawkFactoryChatSession", TawkFactoryChatSessionSchema);

export default TawkChatSession;
