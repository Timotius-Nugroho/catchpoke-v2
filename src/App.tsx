import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Detail from './pages/Detail';
import MyPoke from './pages/MyPoke';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/detail" component={Detail}/>
          <Route path="/my-poke" component={MyPoke} />
          <Route path="/" component={Home}/>
        </Switch>
       </Router>
    </div>
  );
}

export default App;
