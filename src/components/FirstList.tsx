import { connect, useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import initStateType from '../Types'
import axios from 'axios'

import { AppBar, Box, Button, ButtonBase, Card, CardActions, CardContent, IconButton, List, Toolbar, Typography } from '@mui/material'
import { Additemtolist,RemoveAllItemtolist,Removeitemtolist } from '../redux/List1/FirstListAction'
import { title } from 'process'
import { wrap } from 'module'


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


 
  return (

    <div className=''>

<Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          
        </Toolbar>
      </AppBar>
    </Box>

    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>

    <List style={{maxHeight: '300', overflowY: 'auto'}} >{post && post.map((p)=>
          
   <Card sx={{ minWidth: 275,marginTop:3 }} key={p.title}>
     <ButtonBase onClick={() => { dispatch(Additemtolist({ id:p.id, title: p.title })) }}>
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
    </List>

     <ul>{product && product.map((p)=>
           <Card sx={{ minWidth: 100,marginTop:3}} key={`index-${p.id}`}>
           <ButtonBase onClick={() => { dispatch(Additemtolist({ id:p.id, title: p.title })) }}>
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
 

  <ul style={{flexDirection: 'row', flexWrap: 'wrap' }}> { state.map((item)=><Card sx={{  height:40 ,marginTop:6 , bgcolor:'primary.main',borderRadius: '20%'}}>
           <ButtonBase onClick={() => { dispatch(Removeitemtolist({ id:item.id , title: item.title })) }}>
            <CardContent>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {item.title}
              </Typography>
      
            </CardContent>
            </ButtonBase>
          </Card>)}
          </ul>
        
</Box>
<Button sx={{bgcolor:'primary.main', minWidth:'100%' ,color:'text.secondary'}} onClick={() => { dispatch(RemoveAllItemtolist()) }}>
 Clear All
</Button>
        






 
     
     </div>
  
    

  )
}

export default  FirstList

