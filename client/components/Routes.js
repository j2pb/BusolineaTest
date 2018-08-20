import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import axios from 'axios'
import RouteCard from './RouteCard'

class Routes extends Component {
    constructor() {
        super();
        this.state = {
            rutas: []
        }

    }
    componentDidMount() {

        axios.get('/routes')
            .then(response => {
                this.setState({ rutas: response.data.data.routes })
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    deleteRoute(e, data) {
        let conf = confirm(`Desea eliminar la ruta con id ${data.id}?`);
        if (conf == true) {
            axios.delete('/routes/' + data.id)
                .then(response => {
                    const rutas = [...this.state.rutas];
                    rutas.splice(data.index, 1)
                    this.setState({ rutas: rutas })
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }
    render() {
        const routes = this.state.rutas.map((route, index) => {
            return <RouteCard key={route.id} onClick={((e) => this.deleteRoute(e, { id: route.id, index: index }))} detalles={route}></RouteCard>
        })
        return (
            <div>
                <h4 className="text-center">Rutas</h4>
                <div className="row">
                    {routes}
                </div>
            </div>
        );
    }
}
export default Routes;