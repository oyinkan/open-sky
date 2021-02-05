import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import {ProtectedRoute} from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
