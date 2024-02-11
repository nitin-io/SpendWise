// Action Creators

export const logAnExpense = (transaction) => {
  return { type: "LOG_TRANSACTION", transaction };
};
export const addCategory = (expense) => {
  return { type: "ADD_CAT", expense };
};
