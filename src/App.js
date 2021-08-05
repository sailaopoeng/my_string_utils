import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavLink from './components/NavLink';
import Home from './components/Home';
import JsonToString from './components/JsonToString';
import StringToJson from './components/StringToJson';
import JsonToUrlparams from './components/JsonToUrlparams';
import UrlparamsToJson from './components/UrlparamsToJson';

function App() {
  return (
    <Router>
      <div className="App container mt-5">
        <NavLink />
        <Switch>
          <Route path={process.env.PUBLIC_URL + "/"} exact><Home /></Route>
          <Route path={process.env.PUBLIC_URL + "/json_to_string"} ><JsonToString /></Route>
          <Route path={process.env.PUBLIC_URL + "/string_to_json"} ><StringToJson /></Route>
          <Route path={process.env.PUBLIC_URL + "/json_to_urlparams"} ><JsonToUrlparams /></Route>
          <Route path={process.env.PUBLIC_URL + "/urlparams_to_json"} ><UrlparamsToJson /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
