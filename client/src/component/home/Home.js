import React from 'react'
import banner1 from '../../Image/banner1.jpg'
//import Menu from '../menu/Menu'
import { Container,Box, Grid, styled, Typography,Paper, Stack } from '@mui/material'
import {StyledCard,StyledTypography,StyledWrapper} from '../../style/menu'
import {RoundCard,StyledName,CardBox, MaxContainer} from '../../style/home'
import burger from '../../Image/burger.jpg'
import pizza from '../../Image/pizza.jpg'
import beverges from '../../Image/beverges.jpg'
import pasta from '../../Image/pasta.jpg'
import cake from '../../Image/cake.jpg'
import drinks from '../../Image/drinks.jpg'
import healty from '../../Image/healty.jpg'
import indian from '../../Image/indian.jpg'
import pani from '../../Image/pani.jpg'
import samosa from '../../Image/samosa.jpg'
import sweet from '../../Image/sweet.jpg'
import { Avatar, Link, List, ListItem} from '@mui/material'
import { StyledFooter } from '../../style/home'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import covid3 from '../../Image/covid3.jpg'
import covid2 from '../../Image/covid2.jpg'
import covid from '../../Image/covid.jpg'
import {CardActionArea, CardMedia,CardContent} from '@mui/material'
import { CardRound, GridStyle } from '../../style/menu'
import banner from '../../Image/cake/banner.jpg'
import cake199 from '../../Image/cake/cake199.jpg'
import cake27 from '../../Image/cake/cake27.jpg'
import donut8 from '../../Image/cake/donut8.jpeg'
import cake18 from '../../Image/cake/cake18.jpg'
import cup133 from '../../Image/cake/cup133.jpg'
import dessert1 from '../../Image/cake/dessert1.jpg'
import birthday1 from '../../Image/cake/birthday1.jpg'
import donut4 from '../../Image/cake/donut4.jpg'
import cake30 from '../../Image/cake/cake30.jpg'
import cup5 from '../../Image/cake/cup5.jpg'
import cake25 from '../../Image/cake/cake25.jpg'
import donut from '../../Image/cake/donut.jpg'


function Home() {
  return (
    <Stack>
    <MaxContainer maxWidth='xl' style={{paddingLeft:"0px",paddingRight:"0px"}}> 
      <Box component="div"
      sx={{backgroundImage: `linear-gradient(rgba(149,165,166,0.2),rgba(36,37,42,0.8)),url(${banner}) `,
      width: "100%",
      height: "100vh",
      backgroundPosition: "center",
     backgroundSize: "cover",
     backgroundRepeat:"no-repeat"
    }}
      >
      </Box>
     
      <Container>
      <Grid container direction={"row"} columnSpacing={2} rowSpacing={2} mt={1}>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${donut8})`}}>
            <StyledWrapper>
              <StyledTypography>
                Donut
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${cake199})` }}
          >
            <StyledWrapper>
              <StyledTypography>
                Cake
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${cup133})` }}>
            <StyledWrapper>
              <StyledTypography>
                Cup cake
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${cake18})` }}>
            <StyledWrapper>
              <StyledTypography>
                Dry cake
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
      </Grid>
    
    <Stack container direction={"row"} mt={4} spacing={1} ml={3}
      sx={{ overflow: "auto" }} marginTop='50px'>
      <CardBox>
        <Container>
          <RoundCard sx={{ backgroundImage: `url(${cake})` }} />
          <StyledName>Cake</StyledName>
        </Container>
      </CardBox>
      <CardBox>
        <Container>
          <RoundCard sx={{ backgroundImage: `url(${dessert1})` }} />
          <StyledName>Dessert</StyledName>
        </Container>
      </CardBox>
      <CardBox>
        <Container>
          <RoundCard sx={{ backgroundImage: `url(${birthday1})` }} />
          <StyledName>Birthday</StyledName>
        </Container>
      </CardBox>
      <CardBox>
        <Container>
          <RoundCard sx={{ backgroundImage: `url(${donut4})` }} />
          <StyledName>Donut</StyledName>
        </Container>
      </CardBox>
      <CardBox>
        <Container>
          <RoundCard sx={{ backgroundImage: `url(${cake30})` }} />
          <StyledName>Choclate</StyledName>
        </Container>
      </CardBox>
      <CardBox>
        <Container>
          <RoundCard sx={{ backgroundImage: `url(${cup5})` }} />
          <StyledName>Cup</StyledName>
        </Container>
      </CardBox>
      <CardBox>
        <Container>
          <RoundCard sx={{ backgroundImage: `url(${cake25})` }} />
          <StyledName>Fruit</StyledName>
        </Container>
      </CardBox>
    </Stack>
    </Container>
    <Container>
   <Grid backgroundColor='orange' container display='flex' direction={"row"} columnSpacing={2} rowSpacing={2} marginTop='20px'>
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
            <Link color='#3b5998' href="https://www.linkedin.com/in/rohit-hukkeri/"><FacebookIcon/></Link>
             <Link color='#8a3ab9' margin=' 0px 5px' href='https://www.instagram.com/ro_hit_vh/?hl=en'><InstagramIcon/></Link>
             <Link color='#FF0000' margin=' 0px 5px' href='https://www.youtube.com/' ><YouTubeIcon/></Link>
             <Link color='#00acee'  margin=' 0px 5px' href='https://www.linkedin.com/in/rohit-hukkeri/'><TwitterIcon/></Link>
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

    </MaxContainer>
    </Stack>
  )
}

export default Home