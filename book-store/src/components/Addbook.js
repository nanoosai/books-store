import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { FormLabel, TextField,Box, Button , Checkbox, FormControlLabel} from '@mui/material'




const Addbook = () => {
  const history = useNavigate()
  const [inputs, setInputs] = useState({
    name:'',
    author:'',
    description:'',
    price:'',
    image:''
  })

  const [checked, setChecked]= useState(false)

  const handleChange=(e) =>{
    setInputs((prevState) =>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }

const sendRequest=async()=>{
   await axios.post('http://localhost:5000/books',{
    name:String(inputs.name),
    author:String(inputs.author),
    description:String(inputs.description),
    price:Number(inputs.price),
    image:String(inputs.image),
    available:Boolean(checked)
  }).then(res=>res.data);
}

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(inputs,checked);
    sendRequest().then(()=>history('/books'))

   }

  return (
    <form  onSubmit= {handleSubmit}>
    <Box display='flex' flexDirection='column' justifyContent={"center"} maxWidth={700} alignContent={"center"}
    alignSelf= 'center' marginLeft={"auto"} marginRight='auto' marginTop={10}>
    <FormLabel>Name</FormLabel>  
    <TextField margin='normal' fullWidth varient= 'outlined'
     name='name' value={inputs.name} onChange={handleChange}/>
    <FormLabel>Author</FormLabel>  
    <TextField margin='normal' fullWidth varient= 'outlined' 
     name='author' value={inputs.author} onChange={handleChange}/>
    <FormLabel>Description</FormLabel>  
    <TextField margin='normal' fullWidth varient= 'outlined'
     name='description' value={inputs.description} onChange={handleChange}/>
    <FormLabel>Price</FormLabel>  
    <TextField type='number' margin='normal' fullWidth varient= 'outlined'
     name='price' value={inputs.price} onChange={handleChange}/>
    <FormLabel>Image</FormLabel>  
    <TextField  margin='normal' fullWidth varient= 'outlined'
     name='image' value={inputs.image} onChange={handleChange}/>
   <FormControlLabel control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)} />} label="Available" />
    <Button varient="contained" type='submit' >Addbook</Button>
    </Box>
    </form>
  )
}

export default Addbook

