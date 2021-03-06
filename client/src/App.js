import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import List from "./pages/List";
import GlobalStyles from "./GlobalStyles";
import Compare from "./pages/Compare";
import Profile from "./pages/Profile";
import Archive from "./pages/Archive";

function App() {
  const [groceryList, setGroceryList] = useState({});
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/list/:id/compare">
            <Compare groceryList={groceryList} />
          </Route>
          <Route path="/home/:id">
            <List
              onGroceryListChange={(groceryList) => setGroceryList(groceryList)}
            />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/archive">
            <Archive />
          </Route>
          <Route exact path="/">
            <Welcome />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
