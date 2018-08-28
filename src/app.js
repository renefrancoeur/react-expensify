import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', amount:25000, createdAt: 1000}));
store.dispatch(addExpense({description: 'Gas Bill', amount:12000, createdAt: 3000}));
store.dispatch(addExpense({description: 'Rent', amount:109500, createdAt: 2000}));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
     <AppRouter />
    </Provider>
    
);

ReactDOM.render(jsx, document.getElementById('app'));
