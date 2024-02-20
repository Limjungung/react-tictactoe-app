// import React, { Component } from 'react'
import React from 'react'
import './ExpenseForm.css';

import { IoIosSend } from "react-icons/io";

// Class형 : export class ExpenseForm extends Component {
const ExpenseForm = ({handleCharge, charge, handleAmount, amount, handleSubmit}) => {
    return (
      <form onSubmit={handleSubmit}>
        <div className='form-center'>
            <div className='form-group'>
                <label htmlFor='charge'>
                    지출 항목
                </label>
                <input 
                    type='text' 
                    className='form-control'
                    id='charge'
                    name='charge'
                    value={charge}
                    placeholder="예) 렌트비"
                    onChange={handleCharge}
                >
                </input>
            </div>
            <div className='form-group'>
            <label htmlFor='amount'>
                    비용
                </label>
                <input 
                    type='number' 
                    className='form-control'
                    id='amount'
                    name='amount'
                    value={amount}
                    placeholder="예) 100"
                    onChange={handleAmount}
                >
                </input>
            </div>
        </div>
        <button type='submit' className='btn'>
            제출
            <IoIosSend className='btn-icon'/>
        </button>
      </form>
    )
}

export default ExpenseForm
