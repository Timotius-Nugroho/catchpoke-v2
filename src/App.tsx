import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Detail from './pages/Detail';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/detail" component={Detail}/>
          <Route path="/" component={Home}/>
        </Switch>
       </Router>
    </div>
  );
}

export default App;
