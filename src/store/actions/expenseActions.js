// Action Creators

export const logAnExpense = (expense) => {
  return { type: "LOG_AN_EXPENSE", expense };
};

export const logCredits = (credit) => {
  return { type: "LOG_CREDIT", credit };
};
