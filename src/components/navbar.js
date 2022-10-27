import logo from '../pictures/airbnb-logo.png'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {FiGlobe} from 'react-icons/fi';
import {HiMenu} from 'react-icons/hi';
import {MdAccountCircle} from'react-icons/md'
import '../styles/midsection.css'


export default function ButtonAppBar() {
  return (
    <Box className='navbar' sx={{ flexGrow: 1}}>
      <AppBar position="static"  elevation={0} sx={{ bgcolor: "#fff"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
          <img src={logo} alt="brand" height={30} />
          </Typography>
          <Button  sx={{ bgcolor: "#FFF",color:"black", textTransform: 'none'}}>Become Host</Button>
          <Button><FiGlobe size={20} color="#222222"/></Button> 

          <Button style={{ borderColor: '#f1f1f1', borderRadius: '30px'}}  variant="outlined">
            <HiMenu size={20}  color="#595959"/> &nbsp;
            <MdAccountCircle size={30}  color="#717171"/>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    
  );
}