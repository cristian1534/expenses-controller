import React from 'react'
import { Header } from '../components/Header';
import { IncomeExpenses } from '../components/IncomeExpenses';
import { TransactionList } from '../components/TransactionList';

export const History = () => {
    return (
        <div>
            <Header />
            <IncomeExpenses />
            <TransactionList />
        </div>
    )
}
