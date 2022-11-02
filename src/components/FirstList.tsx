import { connect, useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import initStateType from '../Types'
import axios from 'axios'

import { Box, Button, ButtonBase, Card, CardActions, CardContent, Typography } from '@mui/material'
import { Additemtolist,RemoveAllItemtolist,Removeitemtolist } from '../redux/List1/FirstListAction'


function FirstList() {
  const state=useSelector((state:initStateType)=>state.items)
  const dispatch=useDispatch()
 
  interface post{
    id:number,
    title:string
  }

  const[post,setpost]=useState<post[]>([]);
  const[product,setProduct]=useState<post[]>([])
useEffect(() => {
  axios.get('https://dummyjson.com/products').then((response) => {
    console.log(response.data.products)
     setProduct(response.data.products);
  }
);
}, []);

useEffect(() => {
  axios.get('https://dummyjson.com/posts').then((response) => {
    console.log(response.data.posts)
     setpost(response.data.posts);
  }
);
}, []);
const[searchText,setsearchText]=useState('')
const handelsearch=(e:any)=>{

}
const filterlist=post.filter(
  ({id,title})=>
  {
    title.toLowerCase().includes(searchText.toLowerCase())
  }
);
 
  return (

    <div className=''>

    <input  onChange={({ target }) => setsearchText(target.value)}></input>

    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 3fr)' }}>

      <ul>{post && post.map((p)=>
          
   <Card sx={{ minWidth: 275,marginTop:6 }}>
     <ButtonBase onClick={() => { dispatch(Additemtolist({ id: 0, title: p.title })) }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {p.title}
        </Typography>

      </CardContent>
      </ButtonBase>
    </Card>
    )}
    </ul>

     <ul>{product && product.map((p)=>
           <Card sx={{ minWidth: 100,marginTop:6 }}>
           <ButtonBase onClick={() => { dispatch(Additemtolist({ id: 0, title: p.title })) }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
               Click here
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {p.title}
              </Typography>
      
            </CardContent>
            </ButtonBase>
          </Card>)}
        </ul>
 

   <ul> { state.map((item)=><Card sx={{ minWidth: 100,marginTop:6 , bgcolor:'primary.main'}}>
           <ButtonBase onClick={() => { dispatch(Removeitemtolist({ id: 0, title: item.title })) }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
               Click here
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {item.title}
              </Typography>
      
            </CardContent>
            </ButtonBase>
          </Card>)}</ul> 

        
</Box>
<Button onClick={() => { dispatch(RemoveAllItemtolist()) }}>
 Clear All
</Button>
        


<ul>
{ 
filterlist.map((title)=>
<li key={title.title}>
  {title.title}

</li>) }
</ul>


 
     
     </div>
  
    

  )
}

export default  FirstList

