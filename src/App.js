import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import NoMatch from './component/NoMatch/NoMatch';
import FriendDetail from './component/FriendDetail/FriendDetail';


function App() {
  return (
    <div>
     <Router>
      <Switch>
      <Route path="/home">
       <Home></Home>
       </Route>

       <Route exact path="/">
       <Home></Home>
       </Route>

       <Route path="/friend/:friendID">
        <FriendDetail></FriendDetail>
       </Route>

       <Route path="/*">
       <NoMatch></NoMatch>
       </Route>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
