import React, { Component } from 'react'
import "../style/Card.css"


 class Card extends Component {
     render() {
      const {image,name,price}=this.props;
    return (
      <div className='Container'>

          <img src={image} alt="ایفون ایکس"/>
          <h3 >{name}</h3>
          <p>{price}</p>

      </div>
    )
  }
}
export default Card;