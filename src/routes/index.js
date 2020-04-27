import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../containers/Home";
import Profile from "../containers/Profile";
import NotFound from "../containers/NotFound";

const appRoutes = [
  { path: "/", exact: true, component: Home },
  { path: "/profile/:username", component: Profile },
  { component: NotFound },
];

const routes = () => {
  return (
    <Switch>
      {appRoutes.map((route, i) => {
        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            render={(props) => <route.component {...props} route={route} />}
          />
        );
      })}
    </Switch>
  );
};

export default routes;
