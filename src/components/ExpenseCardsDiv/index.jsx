import React from "react";
import ExpenseCategoryCard from "../ExpenseCategoryCard";
import { useSelector } from "react-redux";

const ExpenseCardsDiv = () => {
  const { categories } = useSelector((state) => state.expense);
  return (
    <div className="expense-cards">
      {categories
        .filter(({ expense }) => expense !== 0)
        .map((cat) => (
          <ExpenseCategoryCard title={cat.name} totalExpense={cat.expense} />
        ))}
    </div>
  );
};

export default ExpenseCardsDiv;
