// api.js

const BASE_URL = "http://localhost:3000";

// Fetch all transactions from backend
export const fetchTransactions = async () => {
  const res = await fetch(`${BASE_URL}/high-amount`);
  return res.json();
};

// Detect high amount
export const detectHighAmount = (transactions, threshold) => {
  return transactions.filter((tx) => tx.amount > threshold);
};

export const detectHighAmountDynamic = (transactions) => {
  const average =
    transactions.reduce((sum, tx) => sum + tx.amount, 0) /
    transactions.length;

  const threshold = average * 1.5;

  return transactions.filter((tx) => tx.amount > threshold);
};