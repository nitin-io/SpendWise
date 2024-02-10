import React from "react";
import ExpenseCategoryCard from "../ExpenseCategoryCard";

const ExpenseCardsDiv = () => {
  return (
    <div className="expense-cards">
      <ExpenseCategoryCard title="Shopping" totalExpense={12500} />
      <ExpenseCategoryCard title="Food And Drinks" totalExpense={4000} />
      <ExpenseCategoryCard title="Bill And Payments" totalExpense={2000} />
      <ExpenseCategoryCard title="Entertainment" totalExpense={3000} />
      <ExpenseCategoryCard title="Entertainment" totalExpense={3000} />
      <ExpenseCategoryCard title="Entertainment" totalExpense={3000} />
      <ExpenseCategoryCard title="Entertainment" totalExpense={3000} />
    </div>
  );
};

export default ExpenseCardsDiv;
