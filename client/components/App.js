import React, { Component } from "react";
import Input from "../components/presentational/Input";
import Home from "../components/Home"
import About from "../components/About"
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
class App extends Component {
    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    render() {

        return (
            <div className="container">
                <Router>
                    <div>
                        <ul className="nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                        </ul>
                        <hr />
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                    </div>
                </Router>
            </div>
        );
    }
}
export default App;