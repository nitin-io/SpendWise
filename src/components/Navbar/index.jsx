import { useState } from "react";
import "./navbar.css";
import { IoMenu } from "react-icons/io5";
import LogAnExpense from "../../pages/LogAnExpense";
import LogCredit from "../../pages/LogCredit";

const Navbar = () => {
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
  const [isCreditModalOpen, setIsCreditModalOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <IoMenu className="nav-menu-icon" />
        <div className="nav-title">SPENDWISE</div>
        <ul className="nav-list">
          <li>
            <button
              className="nav-button"
              onClick={() => setIsCreditModalOpen(true)}
            >
              LOG CREDITS
            </button>
          </li>
          <li>
            <button
              className="nav-button"
              onClick={() => setIsExpenseModalOpen(true)}
            >
              LOG AN EXPENSE
            </button>
          </li>
        </ul>
      </nav>

      <LogAnExpense
        isOpen={isExpenseModalOpen}
        setIsOpen={setIsExpenseModalOpen}
      />
      <LogCredit isOpen={isCreditModalOpen} setIsOpen={setIsCreditModalOpen} />
    </>
  );
};

export default Navbar;
