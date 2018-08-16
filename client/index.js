'use strict'

import React, { Component } from "react";
import ReactDOM from "react-dom";

import './style'
//import FormContainer from "./js/components/container/FormContainer";
import App from "./components/App";

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;