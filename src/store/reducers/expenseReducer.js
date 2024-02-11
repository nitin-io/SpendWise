const initState = {
  expenseCategories: [
    "Food",
    "Transportation",
    "Entertainment",
    "Groceries",
    "Utilities",
    "Healthcare",
    "Shopping",
  ],
  expenseHistory: [
    {
      id: 1,
      date: "2024-02-10",
      category: "Food",
      description: "Lunch at a local restaurant",
      amount: 225.5,
    },
    {
      id: 2,
      date: "2024-02-09",
      category: "Transportation",
      description: "Uber ride to work",
      amount: 615.75,
    },
    {
      id: 3,
      date: "2024-02-08",
      category: "Entertainment",
      description: "Movie tickets for 'Spider-Man: No Way Home'",
      amount: 430,
    },
    {
      id: 4,
      date: "2024-02-07",
      category: "Groceries",
      description: "Weekly grocery shopping at supermarket",
      amount: 580.2,
    },
    {
      id: 5,
      date: "2024-02-06",
      category: "Utilities",
      description: "Electricity bill payment",
      amount: 1200,
    },
    {
      id: 6,
      date: "2024-02-05",
      category: "Dining Out",
      description: "Dinner with friends at a fancy restaurant",
      amount: 510.75,
    },
  ],
};

const expenseReducer = (state = initState, action) => {
  return state;
};

export default expenseReducer;
