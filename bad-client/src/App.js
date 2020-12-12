import React from 'react'
import {brouserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
    <switch>
    <Route path='/' component={Homepage}/>
    <Route path='Todos' component={Componetent2}/>

    </switch>
    </div>
    </Router>
  );
}
function Componetent1(){
  return(
    <>Component1</>
  );
}

function Componetent2(){
  return(
    <>Component2</>
  );
}


export default App;
