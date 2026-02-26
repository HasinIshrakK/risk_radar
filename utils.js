// Detect high amount
export const detectHighAmount = (transactions, fixedAmount) => {
  return transactions.filter((tx) => tx.amount > fixedAmount);
};

