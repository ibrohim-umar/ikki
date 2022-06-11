import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route,Routes}  from 'react-router-dom'
import App from './App';
import Login from './components/Login';
import Women from './components/Women';


ReactDOM.render(
   <Router>
     <Routes>
       <Route   path='/'   element={<App />} />
       <Route   path='/women'   element={<Women />} />
       <Route   path='/login'   element={<Login />} />
     </Routes>
   </Router>
    
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

