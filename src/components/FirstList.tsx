import { connect, useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import Additemtolist from '../redux/List1/FirstListAction'
import initStateType from '../Types'
import axios from 'axios'
import List from './List'


function FirstList() {
  const state=useSelector((state:initStateType)=>state.items)
  const dispatch=useDispatch()
 
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

    <>
         <><ul>{post && post.map((p)=>
        <div onClick={() => { dispatch(Additemtolist({ id: 0, title: p.title })) } }>{p.title}</div>
    )}</ul></>

   { state.map((item)=><li>{item.title}</li>)}
 
     <button ></button>
     
     </>
  
    

  )
}

export default  FirstList