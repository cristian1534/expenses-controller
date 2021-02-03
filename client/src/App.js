import React from 'react';
import { Home } from './components/Home';
import { History } from './components/History';
import { GlobalProvider } from './context/GlobalState';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';


function App() {
  return ( 
    //para permitir el acceso de context
    <GlobalProvider>
        <div className="container">
          <Router>
            <ul>
              <li><Link to="/" id="link">Home</Link></li>
              <li><Link to="/history" id="link">Transactions History</Link></li>
            </ul>
            <Switch>
              <Route path="/" exact component= { Home } />
              <Route path="/history" exact component= { History }/>
            </Switch>
            
          </Router>     
        </div>
    </GlobalProvider>
  );
}
export default App;
