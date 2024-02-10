import "./home.css";
import Layout from "../../Layout";
import MainContainer from "../../components/MainContainer";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import ExpenseCategoryCard from "../../components/ExpenseCategoryCard";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Home = () => {
  return (
    <Layout>
      <MainContainer>
        <div className="expense-cards">
          <ExpenseCategoryCard title="Shopping" totalExpense={12500} />
          <ExpenseCategoryCard title="Food And Drinks" totalExpense={4000} />
          <ExpenseCategoryCard title="Bill And Payments" totalExpense={2000} />
          <ExpenseCategoryCard title="Entertainment" totalExpense={3000} />
        </div>
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fill: "white" }} />
          <YAxis tick={{ fill: "white" }} />
          <Tooltip contentStyle={{ color: "white" }} />
          <Legend
            iconType="circle"
            iconSize={10}
            layout="horizontal"
            verticalAlign="top"
            align="center"
            wrapperStyle={{ color: "white" }}
          />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </MainContainer>
    </Layout>
  );
};

export default Home;