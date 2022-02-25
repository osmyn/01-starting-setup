import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
function ExpenseList(props) {
  return (
    <Card className="expenses">
      {props?.expenses?.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
}

export default ExpenseList;
