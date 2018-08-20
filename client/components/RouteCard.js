import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from 'react-router-dom'
class RouteCard extends Component {
    constructor() {
        super();

    }
    render(props) {

        return (
            <div className="col-md-4 col-sm-6 mb-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Id {this.props.detalles.id}</h5>
                        <div className="card-text">
                            <p>
                                arrival_time: {this.props.detalles.arrival_time}
                            </p>
                            <p>
                                company_name: {this.props.detalles.company_name}
                            </p>
                            <p>
                                departure_time: {this.props.detalles.departure_time}
                            </p>
                            <p>
                                destination_id: {this.props.detalles.destination_id}
                            </p>
                            <p>
                                origin_id: {this.props.detalles.origin_id}
                            </p>
                        </div>
                        <a href="#" className="card-link" onClick={this.props.onClick}>Eliminar</a>
                    </div>
                </div>
            </div >
        );
    }
}
export default RouteCard;
