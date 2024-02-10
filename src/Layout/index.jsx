import React from "react";
import Navbar from "../components/Navbar";
import "./layout.css";
import Sidebar from "../components/Sidebar";
import NavigationBtn from "../components/NavigationBtn";
import TransactionCard from "../components/TransactionCard";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <Sidebar side="left">
        <NavigationBtn path="/" title="DASHBOARD" active={true} />
        <NavigationBtn path="/bill-and-payments" title="BILLS & PAYMENTS" />
        <NavigationBtn path="/expenses" title="EXPENSES" />
        <NavigationBtn path="/stats" title="MY STATS" />
      </Sidebar>
      {children}
      <Sidebar side="right">
        <h2>YOUR TRANSACTION HISTORY</h2>
        <TransactionCard
          title="Recharge Of Jio Mobile"
          amount={150}
          timestamp={Date.now()}
          credited={true}
        />
        <TransactionCard
          title="Received Cashback"
          amount={250}
          timestamp={Date.now()}
          credited={false}
        />
      </Sidebar>
    </div>
  );
};

export default Layout;
