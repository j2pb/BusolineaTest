import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
class NotFound extends Component {
    constructor() {
        super();
    }
    render() {

        return (
            <div className="">
                <h4 className="text-center">Not Found</h4>
            </div>
        );
    }
}
export default NotFound;