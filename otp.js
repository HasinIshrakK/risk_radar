import axios from "axios";

export const sendAlert = async (userId, amount) => {
    console.log(`🚨 Alert! User ${userId} sent ${amount}`);
  try {
    const response = await axios.post("/api/send-alert", {
      userId,
      amount,
    });
    return response.data;
  } catch (error) {
    console.error("Alert send failed:", error);
  }
};
