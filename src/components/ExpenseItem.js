import React, { Component } from 'react'
import "./ExpenseItem.css";
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';

export class ExpenseItem extends Component {
  render() {
    // console.log(this.props.expense);
    return (
        <li className='item'>
            <div className='info'>
                <span className='expense'>{this.props.expense.charge}</span>
                <span className='amount'>{this.props.expense.amount}</span>
            </div>
            <div>
                <button className='edit-btn'><MdEdit /></button>
                <button className='clear-btn' onClick={() => 
                    // console.log(`${this.props.expense.id} clicked`)
                    this.props.handleDelete(this.props.expense.id)
                    }>
                    <MdDelete /></button>
            </div>
        </li>
    )
  }
}

export default ExpenseItem
