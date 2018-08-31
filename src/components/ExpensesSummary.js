import React from  'react';
import {connect} from 'react-redux';
import numeral from 'numeral';

const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? "expense" : "expenses" ;
    const expensesTotalamount = numeral(expensesTotal/100).format('$0,0.00');
    <div>
        <h1>Viewing {expenseCount} {expenseWord} totalling {expensesTotalamount}</h1>
    </div>
};

export default ExpensesSummary;
