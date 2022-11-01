import axios from 'axios';
import React, { FC, useEffect, useState } from 'react'

const List:FC = () => {
    
  interface post{
    id:number,
    title:string
  }

  const[post,setpost]=useState<post[]>([]);

useEffect(() => {
  axios.get('https://dummyjson.com/products').then((response) => {
    console.log(response.data.products)
     setpost(response.data.products);
  }
);
}, []);
  
  return (

    <><ul>{post && post.map((p)=>
        <div>{p.title}</div>
    )}</ul></>



  )
}

export default List