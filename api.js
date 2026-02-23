// fetch transactions from API
import axios from "axios";

export const fetchTransactions = async () => {
  try {
    const response = await axios.get("/api/transactions");
    return Array.isArray(response.data.transactions)
      ? response.data.transactions
      : [];
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return [];
  }
};