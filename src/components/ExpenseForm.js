import React, { Component } from 'react'
import './ExpenseForm.css';
import { IoIosSend } from "react-icons/io";

export class ExpenseForm extends Component {
  render() {
    return (
      <form>
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
                    placeholder="예) 렌트비"
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
                    placeholder="예) 100"
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
}

export default ExpenseForm