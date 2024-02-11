import "./transactionCard.css";

const TransactionCard = ({ title, timestamp, amount, type }) => {
  const dateTimeStr = new Date(timestamp);
  const dateStr = dateTimeStr.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const indianRupee = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  const amountColor = {
    color: type === "credit" ? "#A1EEBD" : "#FF6868",
  };

  return (
    <div className="transaction-card">
      <div>
        <h3>{title}</h3>
        <span className="date-time">{dateStr}</span>
      </div>
      <span className="amount" style={amountColor}>
        {type === "credit" ? "+" : "-"} {indianRupee.format(amount)}
      </span>
    </div>
  );
};

export default TransactionCard;
