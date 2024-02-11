import React from "react";
import Layout from "../../Layout";
import TransactionCard from "../../components/TransactionCard";
import { useSelector } from "react-redux";

const BillsAndPayments = () => {
  const { transactions } = useSelector((state) => state.expense);
  console.log(transactions);

  return (
    <Layout>
      <div className="payment-records" style={{ backgroundColor: "#0b0b0b" }}>
        <h2>Your Bills And Payments</h2>
        {transactions
          .filter(
            ({ transactionType, category }) =>
              transactionType !== "credit" && category === "Utilities"
          )
          .map(({ id, date, amount, description }) => (
            <TransactionCard
              key={id}
              title={description}
              timestamp={date}
              amount={amount}
            />
          ))}
      </div>
    </Layout>
  );
};

export default BillsAndPayments;
