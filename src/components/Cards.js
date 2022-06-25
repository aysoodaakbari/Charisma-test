import React, { Component } from 'react'
import "./Card.js"
import "../style/Cards.css"
import Card from './Card.js';
import iphonex from "../img/iphonex.jpg"

 class Cards extends Component {
    
  render() {
    return (
      <div className='Cards_container'> 
          <Card image = {iphonex} name ="آیفونX" price="17,000,000,000"/>
          <Card image = {iphonex} name ="آیفونX" price="23,000,000,000"/>
          <Card image = {iphonex} name ="آیفونX" price="12,000,000,000"/>
          <Card image = {iphonex} name ="آیفونX" price="45,000,000,000"/>


      </div>
    )
  }
}
export default Cards;