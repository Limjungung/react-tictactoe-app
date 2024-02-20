
// import { Component } from "react";
import { useState } from "react";
import "./App.css";
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";

// class App extends Component {
const App = () => {
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState(0);
  const [expenses, setExpenses] = useState(
      [
        { id: 1, charge: "렌트비", amount: 2000 },
        { id: 2, charge: "교통비", amount: 500 },
        { id: 3, charge: "식비", amount: 1200 },
      ]
  )
  const [alert, setAlert] = useState({show: false})
  const [id, setId] = useState('');
  const [edit, setEdit] = useState(false);
  const handleCharge = (e) => {
    setCharge(e.target.value);
  }

  const handleAmount = (e) => {
    // console.log(e.target.value);
    // console.log(typeof e.target.value);
    setAmount(e.target.valueAsNumber);
  }

  const handleSubmit = (e) => {
    // refresh 기본 동작임 - 막아야함
    e.preventDefault();
    console.log('submit 버튼 클릭');

    if(charge !== "" && amount > 0) {
      if(edit) {
        const newExpenses = expenses.map(item => {
          return item.id === id ? {...item, charge, amount} : item;
        });
        setExpenses(newExpenses);
        setEdit(false);
        handleAlert({ type: "success", text: "아이템이 수정되었습니다."});
      } else {
        const newExpense = { id : crypto.randomUUID(), charge : charge, amount : amount};
        const newExpenses = [...expenses, newExpense];
        setExpenses(newExpenses);
      }
      setCharge("");
      setAmount(0);
      handleAlert({type: "success", text: "아이템이 생성되었습니다."});
    } else {
      console.log('error');
      handleAlert({
        type: "danger",
        text: "charge는 빈 값일 수 없으며 amount는 0보다 커야 합니다."
      })
    }
  }

  const handleDelete = (id) => {
    const newExpenses = expenses.filter(expense => expense.id !== id)
    console.log(newExpenses);
    //setter 이용(useState을 사용하는 경우)
    setExpenses(newExpenses);
    // this.setState({expenses: newExpenses});
    handleAlert({type : "danger", text: "아이템이 삭제되었습니다."});
  }

  const handleAlert = ({type, text}) => {
    setAlert({show: true, type, text});
    setTimeout(() => {
      setAlert({ show: false});
    }, 7000);
  }

  const handleEdit = id => {
    const expense = expenses.find(item => item.id === id);
    const {charge, amount} = expense;
    setId(id);
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
  }

    return(
      <main className="main-container">
        {alert.show ? <Alert type={alert.type} text={alert.text} /> : null}
        <h1>예산 계산기</h1>
        <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem'}}>
          { /* Expense Form */} 
          <ExpenseForm
            handleCharge={handleCharge}
            charge={charge}
            handleAmount={handleAmount}
            amount={amount}
            handleSubmit = {handleSubmit}
            edit={edit}
            />
        </div>

        <div style={{ width: '100%', backgroundColor: 'white', padding: '1rem'}}>
          { /* Expense Form */} 
          <ExpenseList 
            initialExpenses={expenses}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
        <div style={{ display:'flex', justifyContent: 'end', marginTop:'1rem'}}>
          <p style={{ fontSize: '2rem'}}>
            총지출:
            <span>
              {
                  expenses.reduce((acc, curr) => {
                    return (acc += curr.amount);
                  }, 0)}
              원
            </span>
          </p>
        </div>
      </main>
    )
}

export default App;