import "./logAnExpense.css";

const LogAnExpense = ({ isOpen, setIsOpen }) => {
  // const showModal = () => {
  //   setIsModalOpen(true);
  // };

  const handleOk = () => {
    setIsOpen(false);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="modal" style={{ display: isOpen ? "block" : "none" }}>
        <div className="container">
          <h3>ADD AN EXPENSE</h3>
          <div className="form-controller">
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" min={0} placeholder="In rupee" />
          </div>
          <div className="form-controller">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              max={40}
              placeholder="Maximum 40 characters"
            />
          </div>
          <div className="form-controller">
            <label htmlFor="category">Category</label>
            <select name="category" id="category">
              <option>Select Category</option>
              <option value="entertainment">Entertainment</option>
              <option value="food-and-drink">Food And Drink</option>
              <option value="recharge">Recharge</option>
            </select>
          </div>
          <div className="buttons">
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleOk}>Add</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogAnExpense;
