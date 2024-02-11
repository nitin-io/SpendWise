const initState = {
  financialGoals: [
    {
      id: "goal_id",
      title: "Save for vacation",
      targetAmount: 1000.0,
      currentAmount: 500.0,
      progress: 50,
      deadline: "2024-06-30",
    },
  ],
};

const statsReducer = (state = initState, action) => {
  return state;
};

export default statsReducer;
