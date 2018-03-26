import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./HomePage";
import TwitterFeed from "./TwitterFeed";
import TacosFeed from "./TacosFeed";
import TacoDetail from "./TacoDetail";
import SpecialTacoPage from "./SpecialTacoPage";
import NavLinks from "./NavLinks";

const MyApp = () => {
  return (
    <div>
      <NavLinks />
      <Route path="/" exact component={HomePage} />
      <Route path="/Twitter" exact component={TwitterFeed} />
      <Route path="/Tacos" exact component={TacosFeed} />
      <Route path="/Tacos/:id" exact component={TacoDetail} />
      <Route path="/Tacos/special" exact component={SpecialTacoPage} />
    </div>
  );
};

export default MyApp;
