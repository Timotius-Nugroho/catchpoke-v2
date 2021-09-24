import React, {useState, useEffect} from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Detail from './pages/Detail';
import MyPoke from './pages/MyPoke';
import { RootContext } from './helpers/Context';

interface MyPokeItem {
  name: string,
  defaultName: string,
  artwork: string
}

interface Action {
  type: string,
  data: {name: string, defaultName: string, artwork: string}
}

const App: React.FC = (): any => {
  const [myPokeList, setMyPokeList] = useState<Array<MyPokeItem>>([]);

  const dispact = (action: Action) => {
    const {type, data} = action
    let newPokeList: Array<MyPokeItem> = []

    if (type === "ADD_POKE") {
      newPokeList = [...myPokeList, data]
    }
    if (type === "REMOVE_POKE") {
      newPokeList = myPokeList.filter((e) => e.name !== data.name)
    }

    localStorage.setItem("mypoke", JSON.stringify(myPokeList));
    return setMyPokeList(newPokeList)
  }

  useEffect(() => {
    const chace = JSON.parse(`${localStorage.getItem("mypoke")}`);
    setMyPokeList(chace ? chace : [])
  }, []);

  return (
    <div className="App">
      <RootContext.Provider value={{myPokeList, dispact}}>
        <Router>
          <Switch>
            <Route path="/detail" component={Detail}/>
            <Route path="/my-poke" component={MyPoke} />
            <Route path="/" component={Home}/>
          </Switch>
        </Router>
       </RootContext.Provider>
    </div>
  );
}

export default App;
