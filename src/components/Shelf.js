import React, { Component } from "react";
import Books from "./BookCards"
import * as API from "../Api";
export default class Shelf extends Component {
    state = {
        Book:[]
      }
       
       componentDidMount() {
        API.getAllBooks().then((res)=>{
          this.setState({
            Book: res
          })
        }) 
       }
  render() {
    return (
      <div className="shelf">
        <h2 className="shelf-title">{this.props.Category}</h2>
        {/* books components will be here */}
        <Books/>
      </div>
    );
  }
}
