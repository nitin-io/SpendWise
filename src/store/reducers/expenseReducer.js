const initState = {
  categories: [
    { name: "Food & Drinks", expense: 1000, color: "#FF6868" },
    { name: "Transport", expense: 0, color: "#99BC85" },
    { name: "Entertainment", expense: 500, color: "#FFBB64" },
    { name: "Groceries", expense: 1500, color: "#80BCBD" },
    { name: "Utilities", expense: 5500, color: "#D0A2F7" },
    { name: "Healthcare", expense: 0, color: "#00A9FF" },
    { name: "Shopping", expense: 0, color: "#F875AA" },
    { name: "Other", expense: 0, color: "#FFF6F6" },
  ],
  transactions: [
    {
      id: 1,
      date: "2024-02-10",
      category: "Food",
      description: "Lunch at a local restaurant",
      amount: 225.5,
      transactionType: "debit",
    },
    {
      id: 235,
      amount: 2000,
      description: "Received Refund",
      transactionType: "credit",
    },
    {
      id: 2,
      date: "2024-02-09",
      category: "Transportation",
      description: "Uber ride to work",
      amount: 615.75,
      transactionType: "debit",
    },
    {
      id: 3,
      date: "2024-02-08",
      category: "Entertainment",
      description: "Movie tickets for 'Spider-Man: No Way Home'",
      amount: 430,
      transactionType: "debit",
    },
    {
      id: 4,
      date: "2024-02-07",
      category: "Groceries",
      description: "Weekly grocery shopping at supermarket",
      amount: 580.2,
      transactionType: "debit",
    },
    {
      id: 5,
      date: "2024-02-06",
      category: "Utilities",
      description: "Electricity bill payment",
      amount: 1200,
      transactionType: "debit",
    },
    {
      id: 6,
      date: "2024-02-05",
      category: "Dining Out",
      description: "Dinner with friends at a fancy restaurant",
      amount: 510.75,
      transactionType: "debit",
    },
  ],
};

const expenseReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOG_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, { ...action.transaction }],
      };

    default:
      break;
  }
  return state;
};

export default expenseReducer;
