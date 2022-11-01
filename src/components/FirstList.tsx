import { connect, useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import Additemtolist from '../redux/List1/FirstListAction'
import initStateType from '../Types'
import axios from 'axios'


function FirstList() {
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
  
  const state=useSelector((state:initStateType)=>state.items)
  const dispatch=useDispatch()
 
  return (

    <>
    

   { state.map((item)=><li>{item.id}</li>)}
 
     <button onClick={() => { dispatch(Additemtolist({ id: 0, title: "ff" })) } }></button>
     
     </>
  
    

  )
}

export default  FirstList