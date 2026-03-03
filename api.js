// api.js

const BASE_URL = "http://localhost:3000";

// Fetch all transactions from backend
export const fetchTransactions = async () => {
  const res = await fetch(`${BASE_URL}/high-amount`);
  return res.json();
};

