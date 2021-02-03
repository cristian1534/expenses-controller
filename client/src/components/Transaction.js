  
import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format'; //es el formato del monto, para que no aparezca con punto sino con coma.

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext); // icono de borrado.

  const sign = transaction.amount < 0 ? '-' : '+'; //positivo o negativo del monto para el color rojo o verde

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}> 
      {transaction.text} <span>{sign}${numberWithCommas(Math.abs(transaction.amount))}</span><button onClick={() => deleteTransaction(transaction._id)} className="delete-btn">x</button>
    </li>
  )
}
 // aca uso Math.abs() para que el monto siempre sea positivo y pueda usar { sign }
 //<li></li> toma el ternario para ver el color que le corresponde, verde o rojo.
 //la accion de "delete" viene del global state, global provider.