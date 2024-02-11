import "./App.css";
import BillsAndPayments from "./pages/BillsAndPayments";
import Expenses from "./pages/Expenses";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Stats from "./pages/Stats";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bills-and-payments" element={<BillsAndPayments />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
