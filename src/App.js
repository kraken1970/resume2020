import React from "react";
import Routes from "routes";
import { BrowserRouter as Router } from "react-router-dom";
import TopNav from "components/TopNav/TopNav.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <TopNav />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
