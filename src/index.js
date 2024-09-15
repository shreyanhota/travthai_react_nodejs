import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router> {/* Wrap App component with Router */}
    <App />
  </Router>
);