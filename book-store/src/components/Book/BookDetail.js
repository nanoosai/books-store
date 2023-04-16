import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, FormLabel, TextField, FormControlLabel, Button, Checkbox } from '@mui/material'

const BookDetail = () => {
  const [inputs, setInputs]= useState({})
    const id = useParams().id;
    const [checked, setChecked]= useState(false)
    const history =useNavigate()
   // console.log(id)
    useEffect(()=>{
        const fetchHandler =async() =>{
            await axios
            .get(`https://bookstore-jlhl.onrender.com/books/${id}`)
            .then((res)=>res.data)
            .then((data)=>setInputs(data.book))
         };
        fetchHandler().then((data)=>setInputs(data.book))
    },[id])

    
    const sendRequest=async()=>{
      await axios.put(`https://bookstore-jlhl.onrender.com/books/${id}`,{
       name:String(inputs.name),
       author:String(inputs.author),
       description:String(inputs.description),
       price:Number(inputs.price),
       image:String(inputs.image),
       available:Boolean(checked)
     }).then(res=>res.data);
   }

      const handleSubmit=(e)=>{
        e.preventDefault();
        sendRequest().then(()=>history('/books'))
      }
      const handleChange=(e)=>{
        setInputs((prevState) =>({
          ...prevState,
          [e.target.name]:e.target.value
        }))
      }

  return (
    <div>
   { inputs &&( <form  onSubmit= {handleSubmit}>
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
    <Button varient="contained" type='submit' >Update book</Button>
    </Box>
    </form>)}
    </div>
  )
}

export default BookDetail
