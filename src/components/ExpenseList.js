// import React, { Component } from 'react'
import React from 'react'
import './ExpenseList.css';

import ExpenseItem from './ExpenseItem';
import { MdDelete } from "react-icons/md";

// export class ExpenseList extends Component {
const ExpenseList = (props) => {
    // console.log(this.props.initialExpenses)
    return (
      <React.Fragment>
        <ul className='list'>
            {/* Expense List*/}
            {/* <ExpenseItem /> */}
            {props.initialExpenses.map(expense => {
                return (
                    <ExpenseItem 
                    expense={expense}
                    key={expense.id}
                    handleDelete={props.handleDelete}
                    />
                )
            })}
        </ul>
        <button className='btn'>
            목록 지우기
            <MdDelete className='btn-icon'/>
        </button>
      </React.Fragment>
    )
}

export default ExpenseList
