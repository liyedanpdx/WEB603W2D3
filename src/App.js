// import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {ProductData} from "./Products"
import Nav from "./Nav"
import {BrowserRouter as Router} from "react-router-dom";

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      ProductLists: ProductData,
    }
  }
  updateProductLists = (newProductLists) => {
    this.setState({ ProductLists: newProductLists });
  }
  render(){
    return (
      <Router>
        <Nav 
          ProductLists={this.state.ProductLists} 
          updateProductLists={this.updateProductLists}
          />
      </Router>
    )
  }
}

export default App;
