import { Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Link, Paper, TextField, Typography } from '@mui/material'
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
 function Login () {

  const [value, setValue] =useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const email = useRef();
  const password = useRef();

  // navigate is use for navigate page after login
  const navigate = useNavigate();
  const submitHandler = async (e) => {
 
    e.preventDefault();
    const user = {
      email: email.current.value,
      password: password.current.value,
    }
    
    try {
      // axios is send(push) data front end to backend
      await axios.post(`/api/v1/auth/login`, user).then(res =>{
        toast.success("user login successfully")
        localStorage.setItem('loginToken', true);
        navigate('/')
        window.location.reload();
      })
    } catch (error) {
      toast.error(error.response.data.msg)
    }
  }

  const readValue=(e)=>{
    e.preventDefault();
    const readData = {
      email: email.current.value,
      password: password.current.value,
    }
     console.log("data",readData);
  }
  return (
    <StyledPaper>
     <Grid  sx={{fontFamily: 'Kalam, cursive'}}>
      <PaperStyle elevation={20}>
      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display:'flex',justifyContent: 'center'}}>
        <Tabs value={value}  onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Login" {...a11yProps(0)}  />
          <Tab label="Sign up" {...a11yProps(1)}  />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Grid align= 'center'>
        <Typography>Login</Typography>
        </Grid>
        <Box component='form' autoComplete='off' onSubmit={submitHandler} >
        <TextField inputRef={email} onChange={readValue} variant='standard'sx={{margin:"8px 0px"}} label='Email' type='email' placeholder='Enter email id' fullWidth required/>
        <TextField inputRef={password} onChange={readValue} variant='standard' label='Password' placeholder='Enter password' type='password' fullWidth required/>
        <FormControlLabel control={<Checkbox name='checked' color='primary' />} label="Remember me" />
        <Button type='submit' variant='contained' color='primary' fullWidth>Login</Button>
        </Box>
        <Typography>
          <Link href='#'>Forgot password?</Link>
        </Typography>
        <Typography>Do you have an account ?
          <Link href='/sign'>
            Sign up 
          </Link>
        </Typography>
      </TabPanel>
    </Box>  
      </PaperStyle>
     </Grid>
    </StyledPaper>

  )
}

export default Login
