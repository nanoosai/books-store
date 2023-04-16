import React, { useState } from "react";
import {AppBar,Tabs,Tab, Toolbar, Typography} from "@mui/material"
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NavLink} from 'react-router-dom'

const Header = () =>{
    const [value,setValue]= useState()
    return <div>
   
    <AppBar sx={{backgroundColor:"#232f3d"}} position="sticky">
    <Toolbar>
    <NavLink to='/' style={{color:'white'}}>
    <Typography><LibraryBooksIcon/></Typography>
    </NavLink>
    <Tabs 
    sx={{ml:"auto"}}
    textColor="inherit"
     indicatorColor="secondary"
     value={value}
      onChange={(e,val)=>setValue(val)}>
    <Tab LinkComponent={NavLink} to="/add" label="Add product"/>
    <Tab LinkComponent={NavLink} to="/books" label="Books"/>
    <Tab LinkComponent={NavLink} to="/about" label="About us"/>
    </Tabs>
    </Toolbar>
    </AppBar>
   
    </div>
};
export default Header