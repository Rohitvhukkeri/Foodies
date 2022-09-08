import React from 'react'
import { BackgroundPaper } from '../../style/about'
import { Box, Container } from '@mui/system'
import {CardActionArea, CardMedia, Grid, Typography,CardContent,ListItem,Link,List} from '@mui/material'
import covidsafty from '../../Image/covidsafty.jpg'
import pizza from '../../Image/pizza.jpg'
import Card from '../../style/about'
import { CardRound, GridStyle } from '../../style/menu'
import covid3 from '../../Image/covid3.jpg'
import covid2 from '../../Image/covid2.jpg'
import covid from '../../Image/covid.jpg'
import { StyledFooter } from '../../style/home'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';



function About() {
  return (
    <>
   <BackgroundPaper>
    <Typography variant='h3' sx={{fontFamily: 'Kalam, cursive'}}>About</Typography>
   </BackgroundPaper>
   <Container>
   <Grid container display='flex' direction={"row"} columnSpacing={2} rowSpacing={2} marginTop='20px' >
            <GridStyle item md={6} xs={12} lg={4}>
              <CardRound sx={{backgroundImage: `url(${covid3})`}}/>
              <Typography textAlign='center' variant='h5' marginTop='10px' >Safe and Hygienic Packaging</Typography>
              <Box sx={{ display:'flex', justifyContent: 'center'}}>
              </Box>
            </GridStyle>
            <GridStyle item md={6} xs={12} lg={4}>
              <CardRound sx={{backgroundImage: `url(${covid2})`}}/>
              <Typography textAlign='center' variant='h5' marginTop='10px' >Delivery Partner Safety Checks</Typography>
              <Box sx={{ display:'flex', justifyContent: 'center'}}>
              </Box>
            </GridStyle>
            <GridStyle item md={6} xs={12} lg={4}>
              <CardRound sx={{backgroundImage: `url(${covid})`}}/>
              <Typography textAlign='center' variant='h5' marginTop='10px' >Contactless Delivery</Typography>
              <Box sx={{ display:'flex', justifyContent: 'center'}}>
              </Box>
            </GridStyle>
            </Grid>
            </Container>
            <StyledFooter>
       <Container>
     <Grid container spacing={1} p={2}>
      <Grid item md={3}   color="Black">
        <Typography marked="left" >About  </Typography>
        <Typography color={'gray'} marginTop='20px'>Foodies deliver fun fast tasty food that make you happy,fullfill your comfort food cravings.Main motive is quick deliver for busy people 24 X 7. </Typography>
        <Typography marked="left" marginTop='20px' >Social links  </Typography>
        <List>
          <ListItem >
            <Link  href="https://www.linkedin.com/in/rohit-hukkeri/"><FacebookIcon/></Link>
             <Link margin=' 0px 5px' href='https://www.instagram.com/ro_hit_vh/?hl=en'><InstagramIcon/></Link>
             <Link margin=' 0px 5px' href='https://www.youtube.com/' ><YouTubeIcon/></Link>
             <Link  margin=' 0px 5px' href='https://www.linkedin.com/in/rohit-hukkeri/'><TwitterIcon/></Link>
        </ListItem>
        </List>
      </Grid>
      <Grid item md={3} color="Black">
        <Typography marked="left" >Company</Typography>
        <Typography color={'gray'} marginTop='20px'></Typography>
      </Grid>
      <Grid item md={3}   color="Black">
        <Typography marked="left" >Quick links</Typography>
        <Typography color={'gray'} marginTop='20px' sx={{display: 'flex',flexDirection: 'column'}} ><Link href='' sx={{textDecoration:'none',color:'gray' }}>Home</Link><Link href='' sx={{textDecoration:'none',color:'gray' }}>Menu</Link>
        <Link href='' sx={{textDecoration:'none',color:'gray' }}>About</Link>
        <Link href='' sx={{textDecoration:'none',color:'gray' }}>Login</Link></Typography>
      </Grid>
      <Grid item md={3}   color="Black">
        <Typography marked="left" >Contact info</Typography>
        <Typography color={'gray'} marginTop='20px'><LocationOnIcon/><Link sx={{textDecoration:'none',color:'gray' }} href='https://www.google.com/maps/place/Sadalga,+Karnataka/@16.5525577,74.5249629,15z/data=!3m1!4b1!4m5!3m4!1s0x3bc0e65a54736dd1:0xd272356298dc9441!8m2!3d16.5533172!4d74.5316807'>Sadalga post,Chikodi tq,Belgavi dist,Karnataka,India 591239</Link></Typography>
        <Typography color={'gray'} marginTop='20px'><CallIcon/><Link sx={{textDecoration:'none',color:'gray' }}>+91 8660216900</Link></Typography>
        <Typography color={'gray'} marginTop='20px'><EmailIcon/><Link sx={{textDecoration:'none',color:'gray' }} href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbgsbNHKCVZskhprcRHNhsmWLxhGKFrfCNZRKqFjmXqSvzdqgMKLljFmtFrmjqMMtwTnGX'>rohithukkeri19@gmail.com</Link></Typography>
      </Grid>
    </Grid>
    </Container>
    <Box margin='0px 30px'>
      <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
        </Box>
        </Box>
   </StyledFooter>

  
  
   </>
  )
}

export default About