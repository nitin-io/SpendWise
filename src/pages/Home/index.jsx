import "./home.css";
import Layout from "../../Layout";
import MainContainer from "../../components/MainContainer";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";
import ExpenseCardsDiv from "../../components/ExpenseCardsDiv";
import { useSelector } from "react-redux";

const Home = () => {
  const { categories } = useSelector((state) => state.expense);

  return (
    <Layout>
      <MainContainer>
        <ExpenseCardsDiv />
        <ResponsiveContainer height="70%">
          <BarChart data={categories.filter(({ expense }) => expense !== 0)}>
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="expense" fill="#99BC85" />
          </BarChart>
        </ResponsiveContainer>
      </MainContainer>
    </Layout>
  );
};

export default Home;
