import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {
    
    const [text, setText] = useState('') //estado del input
    const [amount, setAmount] = useState(0) //estodo del input
    const { addTransaction } = useContext(GlobalContext)



    const onSubmit = e =>{
        e.preventDefault()  //para evitar la recarga de pagina
        
        const newTransaction ={
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount //retorna Integer.
        }

        addTransaction(newTransaction) //addTransaction toma la nueva transaccion y la pasa al context

       
    }

    return (
        <div>
            <h3>New Transaction</h3>
            <form onSubmit={ onSubmit }>
                <div className="form-control">
                    <label htmlFor="text">Set transaction's detail:</label>
                    <input type="text" value={ text } onChange={(e)=> setText(e.target.value)} //onChange actualiza el estado con setText
                    placeholder="Example: Salary..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Set transaction's amount:<br /><br />
                    (For expense use negative "-" // Example: - 20)</label> 
                    <input type="number" value= { amount } onChange={(e)=> setAmount(e.target.value)}
                     placeholder="Enter amount..."/>                   
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}

// Inicio los estados vacios de los inputs, y los actualizo con setState.
// Paso los estoados a los inputs, y con el evento onChange actualizo tomando el valor que tiene el input y lo pongo 
// en la const.