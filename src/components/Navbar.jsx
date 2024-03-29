import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack
      direction = "row"
      justifyContent="space-around"
      sx = {{ gap: {sm : '122px', xs:'40px'},mt:{sm:'32px',xs:'20px'},justifyContent:'none'}}>
      <Link to = "/">
        <img src={Logo} alt = "logo" style = {{width:'48px',height:'48',margin:'0 20px'}} />
      </Link>
      <Stack
        direction = "row"
        gap ="30px"
        fontSize = "24px"
        alignItems="center"
      >
        <Link to= "/" style= {{textDecoration: 'none', color:'#3A1213', borderBottom: '3px solid #FF2323'}}> Home</Link>
        <a href = "#exercises" style = {{textDecoration: "none", color: "#3A1213"}}> Exercises</a>
      </Stack>
    </Stack>
    
  )
}

export default Navbar