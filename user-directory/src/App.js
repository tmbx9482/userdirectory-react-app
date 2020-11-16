import React from "react";
import Main from "./components/MainStart";
import Wrapper from "./components/Wrapper";
import Header from "./components/HeaderStart";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;