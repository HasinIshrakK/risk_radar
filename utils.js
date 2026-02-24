// detect high amount transactions
export const detectHighAmount = (transactions, threshold = 50000) => {
  return transactions.filter((tx) => tx.amount > threshold);
};

// dynamic threshold example
export const detectHighAmountDynamic = (transactions) => {
  const amounts = transactions.map((tx) => tx.amount);
  const mean = amounts.reduce((a, b) => a + b, 0) / amounts.length;
  const stdDev = Math.sqrt(
    amounts.reduce((sum, a) => sum + Math.pow(a - mean, 2), 0) / amounts.length,
  );
  const threshold = mean + 3 * stdDev;
  return transactions.filter((tx) => tx.amount > threshold);
};
