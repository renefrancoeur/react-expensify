//import getVisibleExpenses from 'expenses';


const selectExpensesTotal = (expenses) => {
    if (expenses.length === 0) {
        return 0;
    } else  {

    var amounts = expenses.map((expense) => expense.amount);
    var total = amounts.reduce( (sum, value)=> {
        return sum+value;
    }, 0);
    return total;
    }
};

export default selectExpensesTotal;