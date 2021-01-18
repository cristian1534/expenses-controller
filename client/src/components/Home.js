import React from 'react'
import { Header } from '../components/Header';
import { AddTransaction } from './AddTransaction';
import { Balance } from './Balance';


export const Home = () => {
    return (
        <div>
           <Header />
            <Balance />
            <AddTransaction />
        </div>
    )
}
