import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext); // traigo las transactiones.

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2); //con 2 decimales

  return (
    <>
      <h4>Current Balance</h4>
    <h1>${numberWithCommas(total)}</h1>
    </>
  )
}

//aca uso reduce para calcular el total de las transacciones, las muestro con coma en la "const total"