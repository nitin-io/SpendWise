import Layout from "../../Layout";
import expenses from "../../expense-data";
import TransactionCard from "../../components/TransactionCard";

const Stats = () => {
  return (
    <Layout>
      <div className="payment-records">
        <h2>Your Stats</h2>
        {expenses.map(({ id, date, amount, description }) => (
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

export default Stats;
