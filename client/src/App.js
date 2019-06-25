import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import routes from "./routes";

const RouteGeneric = (route: any) => (
    <Route
        path={route.path}
        exact={route.exact}
        render={(props: any) => (
            // pass the sub-routes down to keep nesting
            <route.component {...props} routes={route.routes} />
        )}
    />
);

class App extends React.Component {

    render() {
        return (
            <Switch>
                {routes.map((route, i) => <RouteGeneric key={i} {...route} />)}
            </Switch>
        )
    }
}

export default (App);
