import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import axios from 'axios'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            routes: []
        }
        let config = {
            headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-api-key': 'Yrk3AZ1yOT7PIBbWJNrkB541cLBnff5w6cSZH9qr'
            }
        }
        axios.get('https://0sysjslkra.execute-api.us-east-1.amazonaws.com/test/routes', config)
            .then(response => this.setState({ routes: response }))
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {

        return (
            <div>
                <h1>Home</h1>
            </div>
        );
    }
}
export default Home;