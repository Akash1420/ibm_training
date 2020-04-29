import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ViewEmployee from './ViewEmployees';
import AddEmployee from './AddEmployee';

function App() {
  return (
    

      <Router>
      <div>
        <nav>
          <ul>
            
            <li>
              <Link to="/view">View Employees</Link>
            </li>
            <li>
              <Link to="/add">Add Employees</Link>
            </li>
          </ul>
        </nav>

        
        <Switch>
          <Route path="/view">
            <ViewEmployee />
          </Route>
          <Route path="/add">
            <AddEmployee />
          </Route>
          
        </Switch>
      </div>
    </Router>
  
  );
}

function View() {
  return <ViewEmployee/>;
}

function Add() {
  return <AddEmployee/>;
}



export default App;
