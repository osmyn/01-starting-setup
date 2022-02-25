import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
  return (
    <div className="expense">
      {props.expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </div>
  );
}

export default ExpenseList;
