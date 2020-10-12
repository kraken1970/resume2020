import React from "react";
import Header from "components/Header/Header";
import Projects from 'components/Projects/Projects'
import Contacts from 'components/Conatcts/Contacts'
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App;
