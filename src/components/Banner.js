import React from 'react'
import "../style/banner.css"
 import  banner from "../img/pexels-cottonbro-5185159.jpg"

 function Banner() {
  return (
    <div className='container'>
      
         < img src={banner}></img>
        <div className='textContainer'>
        <h1>فروشگاه اینترنتی</h1>
        <p>فروش اینترنتی موبایل در فروشگاه اینترنتی کالاتیک
فروشگاه اینترنتی<br></br> موبایل، تبلت، لپ تاپ و لوازم جانبی با ارزانترین قیمت در بازار
فروش آنلاین<br/> انواع گوشی های موبایل از تمامی برندها با بهترین قیمت</p>
        </div>
    </div>
  )
}
export default Banner;
