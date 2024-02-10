import React from "react";

const style = {
  fontSize: "1.2rem",
};

const ExpenseCategoryCard = ({ title, totalExpense }) => {
  const indianRupee = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return (
    <div className="expense-card">
      <h3>{title}</h3>
      <div style={style}>{indianRupee.format(totalExpense)}</div>
    </div>
  );
};

export default ExpenseCategoryCard;
