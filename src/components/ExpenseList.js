import React from  'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
    {
        props.expenses.length === 0 ? (
           <p>No Expenses</p> 
        ):(
            props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense}/>
            })
        )
    }
    </div>
);

const mapStateToProps = (state) => {
    return {
       expenses: getVisibleExpenses(state.expenses, state.filters)
    };
};

// connect(what you want from the store, defined in a variable mapStateToProps)(props you want to dispatch in your export)
export default connect(mapStateToProps)(ExpenseList);

