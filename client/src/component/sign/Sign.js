import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import React,{useRef,useState} from 'react'
import { StyledPaper,PaperStyle } from '../../style/login'
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'

function TabPanel(props) {

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
 
  function Register() {
    const regname = useRef();
    const regemail = useRef();
    const regmobile = useRef();
    const regpassword = useRef();

    const navigate = useNavigate();
    const submitHandler = async (e) => {
        e.preventDefault();
        const user = {
          name: regname.current.value,
          email: regemail.current.value,
          mobile: regmobile.current.value,
          password: regpassword.current.value,
        }
        try {
          await axios.post(`/api/v1/auth/register`, user).then(res =>{
            toast.success("user registered successfully")
            navigate("/")
          }).catch(err => toast.error(err.response.data.msg));
          
        } catch (error) {
          toast.error(error.response.data.msg)
        }
       
    }

    const readValue=(e)=>{
      e.preventDefault();
      const readData = {
          name: regname.current.value,
          email: regemail.current.value,
          mobile: regmobile.current.value,
          password: regpassword.current.value,
      }
      console.log("data",readData);
  } 
  
  return (
    <StyledPaper>
     <Grid  sx={{fontFamily: 'Kalam, cursive'}}>
      <PaperStyle elevation={20}>
      <Box sx={{ width: '100%' }}>
       <Box sx={{ borderBottom: 1, borderColor: 'divider', display:'flex',justifyContent: 'center'}}>
      </Box> 
       <Grid align= 'center'>
        <Typography>Sign in</Typography>
        </Grid>
        <Container>
        <Box component='form' autoComplete='off' onSubmit={submitHandler}>
        <TextField inputRef={regname} onChange={readValue} type='name' variant='standard' label='Username' sx={{margin:"8px 0px"}} placeholder='Enter username' fullWidth required/>
        <TextField inputRef={regemail} onChange={readValue} variant='standard' label='Email' type='email' placeholder='Enter email id' fullWidth required/>
        <TextField inputRef={regpassword} onChange={readValue} variant='standard' label='Password' placeholder='Enter password' type='password' fullWidth required/>
        <TextField inputRef={regmobile} onChange={readValue} variant='standard' label='Mobile' placeholder='Mobile number' type='number' fullWidth required/>
        <Button sx={{ marginTop: '30px'}} type='submit' variant='contained' color='primary' fullWidth>Sign up</Button>
        </Box>
        </Container>
    </Box>  
      </PaperStyle>
     </Grid>
    </StyledPaper>

  )
}

export default Register