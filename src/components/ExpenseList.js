// import React, { Component } from 'react'
import React from 'react'
import './ExpenseList.css';

import ExpenseItem from './ExpenseItem';
import { MdDelete } from "react-icons/md";

// export class ExpenseList extends Component {
const ExpenseList = ({ handleDelete, expenses, handleEdit, clearItems}) => {
    // console.log(this.props.initialExpenses)
    return (
      <React.Fragment>
        <ul className='list'>
            {/* Expense List*/}
            {/* <ExpenseItem /> */}
            {expenses.map(expense => {
                return (
                    <ExpenseItem 
                    expense={expense}
                    key={expense.id}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    />
                )
            })}
        </ul>
          {expenses.length > 0 && (
          <button className='btn' onClick={clearItems}>
              목록 지우기
              <MdDelete className='btn-icon'/>
          </button>
          )}
      </React.Fragment>
    )
}

export default ExpenseList
