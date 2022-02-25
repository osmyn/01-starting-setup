import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function ExpenseList(props) {
  return (
    <div className="expenses">
      {props?.expenses?.map((item) => (
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
