import React, { Component } from "react";
import axios from 'axios';
class NewRoute extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            origin_id: '',
            destination_id: '',
            departure_time: '',
            arrival_time: '',
            company_name: '',
            showMessage: false,
            success: false,
            msg: ''

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        axios.post('/routes', {
            id: this.state.id,
            origin_id: this.state.origin_id,
            destination_id: this.state.destination_id,
            departure_time: this.state.departure_time,
            arrival_time: this.state.arrival_time,
            company_name: this.state.company_name
        }).then(response => {


            if (response.data.message != undefined) {
                this.setState({
                    showMessage: true,
                    success: false,
                    msg: response.data.message
                })
            } else {

                this.setState({
                    id: '',
                    origin_id: '',
                    destination_id: '',
                    departure_time: '',
                    arrival_time: '',
                    company_name: '',
                    showMessage: true,
                    success: true,
                    msg: 'Ruta creada correctamente'
                })
            }

        })
            .catch(function (error) {
                console.log(error);
            })
    }
    render() {



        const showMessage = this.state.showMessage;
        const success = this.state.success;
        const msg = this.state.msg;
        let result;


        if (showMessage && success) {
            result = <div className="alert alert-success" role="alert">
                {msg}
            </div>
        }
        if (showMessage && !success) {
            result = <div className="alert alert-danger" role="alert">
                {msg}
            </div>
        }

        return (
            <div>
                <h4 className="text-center">Crear nueva ruta</h4>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <form>
                            <div className="form-group">
                                <label>id</label>
                                <input type="input" name="id" className="form-control" placeholder="Enter id" value={this.state.id} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label>origin_id</label>
                                <input type="input" name="origin_id" className="form-control" placeholder="Enter origin_id" value={this.state.origin_id} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label>destination_id</label>
                                <input type="input" name="destination_id" className="form-control" placeholder="Enter destination_id" value={this.state.destination_id} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label>departure_time</label>
                                <input type="input" name="departure_time" className="form-control" placeholder="Enter departure_time" value={this.state.departure_time} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label>arrival_time</label>
                                <input type="input" name="arrival_time" className="form-control" placeholder="Enter arrival_time" value={this.state.arrival_time} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label>company_name</label>
                                <input type="input" name="company_name" className="form-control" placeholder="Enter company_name" value={this.state.company_name} onChange={this.handleChange} />
                            </div>

                            <button type="button" onClick={this.handleSubmit} className="btn btn-primary">Crear ruta</button>
                        </form>
                        {result}
                    </div>
                </div>
            </div>
        );
    }
}
export default NewRoute;