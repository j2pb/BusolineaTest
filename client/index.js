'use strict'

import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from 'axios'

import './style'
import App from "./components/App";

axios.defaults.baseURL = 'https://0sysjslkra.execute-api.us-east-1.amazonaws.com/test';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['x-api-key'] = 'Yrk3AZ1yOT7PIBbWJNrkB541cLBnff5w6cSZH9qr';

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;