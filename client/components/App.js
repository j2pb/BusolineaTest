import React, { Component } from "react";
import Routes from "../components/Routes"
import NewRoute from "./NewRoute"
import NotFound from "./NotFound"
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom'

class App extends Component {
    constructor() {
        super();
    }
    render() {

        return (
            <div className="container">
                <Router>
                    <div>
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <NavLink to="/" exact={true} activeClassName="active" className="nav-link">Rutas</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/newroute" activeClassName="active" className="nav-link">Crear nueva ruta</NavLink>
                            </li>
                        </ul>
                        <Switch>
                            <Route exact path="/" component={Routes} />
                            <Route path="/newroute" component={NewRoute} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </Router>
            </div >
        );
    }
}

export default App;