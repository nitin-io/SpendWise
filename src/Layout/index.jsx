import React from "react";
import Navbar from "../components/Navbar";
import "./layout.css";
import Sidebar from "../components/Sidebar";
import NavigationBtn from "../components/NavigationBtn";
import TransactionCard from "../components/TransactionCard";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const { transactions } = useSelector((state) => state.expense);

  return (
    <div className="layout">
      <Navbar />
      <Sidebar side="left">
        <NavigationBtn path="/" title="DASHBOARD" active={true} />
        <NavigationBtn path="/bills-and-payments" title="BILLS & PAYMENTS" />
        <NavigationBtn path="/expenses" title="EXPENSES" />
        <NavigationBtn path="/stats" title="MY STATS" />
      </Sidebar>
      {children}
      <Sidebar side="right">
        <h2>YOUR TRANSACTION HISTORY</h2>
        {transactions.map(
          ({ id, description, amount, date, transactionType }) => (
            <TransactionCard
              title={description}
              amount={amount}
              timestamp={date}
              type={transactionType}
            />
          )
        )}
      </Sidebar>
    </div>
  );
};

export default Layout;
