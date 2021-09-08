import React from "react";
import HomeScreen from "./components/HomeScreen";
import "antd/dist/antd.css";
import TodayClass from "./Today/TodayClass";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderBar from "./Today/HeaderBar";
import InputData from "./Today/InputData";

const App = () => {
  return (
    <div>
      <div>
        <BrowserRouter>
          <HeaderBar />
          <Switch>
            <Route exact path="/" component={TodayClass} />
            <Route exact path="/input" component={InputData} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
