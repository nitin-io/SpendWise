import "./expenseCategoryCard.css";

const style = {
  fontSize: "1.2rem",
};

const ExpenseCategoryCard = ({ title, totalExpense }) => {
  const indianRupee = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return (
    <span className="expense-card">
      <h3>{title}</h3>
      <div style={style}>{indianRupee.format(totalExpense)}</div>
    </span>
  );
};

export default ExpenseCategoryCard;
