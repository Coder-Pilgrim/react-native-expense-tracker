import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpenesOutput";
import { ExpensesContext } from "../store/expenses-context";

function AllExpensesScreen(){
  const  expensesCtx = useContext(ExpensesContext);
  return <ExpensesOutput expensesPeriod="Total" expenses={expensesCtx.expenses} fallBackText="No registered expenses found!" />
}

export default AllExpensesScreen;