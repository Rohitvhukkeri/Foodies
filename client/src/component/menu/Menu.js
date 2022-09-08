import React from 'react';
import { Avatar, Box, Button, CardActionArea, CardActions,Card, CardContent, CardMedia, CircularProgress, Container, Grid, styled, Typography } from '@mui/material'
import burger from '../../Image/burger.jpg'
import beverges from '../../Image/beverges.jpg'
import pizza from '../../Image/pizza.jpg'
import pasta from '../../Image/pasta.jpg'
import {StyledCard,StyledTypography,StyledWrapper,Paper, StyledPaper,CardRound,GridStyle} from '../../style/menu'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import DonutSmallTwoToneIcon from '@mui/icons-material/DonutSmallTwoTone';
import DonutSmallSharpIcon from '@mui/icons-material/DonutSmallSharp';
import CakeSharpIcon from '@mui/icons-material/CakeSharp';
import cake48 from '../../Image/cake/cake48.jpg'
import cake40 from '../../Image/cake/cake40.jpg'
import cake41 from '../../Image/cake/cake41.jpg'
import cake46 from '../../Image/cake/cake46.jpg'
import cake30 from '../../Image/cake/cake30.jpg'
import cake26 from '../../Image/cake/cake26.jpg'
import cake29 from '../../Image/cake/cake29.jpg'
import cake28 from '../../Image/cake/cake28.jpg'
import cake31 from '../../Image/cake/cake31.jpg'
import cake32 from '../../Image/cake/cake32.jpg'
import cup4 from '../../Image/cake/cup4.jpg'
import cup210 from '../../Image/cake/cup210.jpg'
import cup3 from '../../Image/cake/cup3.jpg'
import cupp2 from '../../Image/cake/cupp2.jpg'
import cup6 from '../../Image/cake/cup6.jpg'
import cup21 from '../../Image/cake/cup21.jpg'
import cup244 from '../../Image/cake/cup244.jpg'
import cup13 from '../../Image/cake/cup13.jpg'
import donut14 from '../../Image/cake/donut14.png'
import donut13 from '../../Image/cake/donut13.jpeg'
import donut12 from '../../Image/cake/donut12.jpg'
import donut16 from '../../Image/cake/donut16.jpg'
import donut15 from '../../Image/cake/donut15.jpeg'
import donut17 from '../../Image/cake/donut17.jpg'





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

function Menu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <StyledPaper>
     <Typography variant='h3' sx={{fontFamily: 'Kalam, cursive'}}>
      Menu
     </Typography>
    </StyledPaper>
    <Container>
      <Grid container direction={"row"} columnSpacing={2} rowSpacing={2} mt={1}>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${cake46})`}}>
            <StyledWrapper>
              <StyledTypography>
                Aniversary
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${cake40})` }}>
            <StyledWrapper>
              <StyledTypography>
                Birthday
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${cake41})` }}>
            <StyledWrapper>
              <StyledTypography>
                Choclate
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
        <Grid item md={3} xs={6}>
          <StyledCard sx={{ backgroundImage: `url(${cake48})` }}>
            <StyledWrapper>
              <StyledTypography>
                Fruit
              </StyledTypography>
            </StyledWrapper>
          </StyledCard>
        </Grid>
      </Grid>
      </Container>
      <Grid mt={5} align= "center"  sx={{fontFamily: 'Kalam, cursive'}} >
       
      <Avatar sx={{ backgroundColor: 'transparent',textAlign:"center","&:hover":{transform:"scale(1.1)"
      }}}><DeliveryDiningOutlinedIcon color='warning' fontSize='large'/></Avatar>
      <Typography variant="body1" color= 'gray' sx={{fontFamily: 'Kalam, cursive'}}>Cake is our common ground</Typography>
      <Typography variant="body1" color= 'gray' sx={{fontFamily: 'Kalam, cursive'}}>a universal experiance</Typography>
      <Typography variant='h3' >Cake Collection</Typography>
      
      </Grid>
      <Box mt={5} sx={{ width: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab variant='body2' label="Cake" {...a11yProps(0)} />
          <Tab label="cup cake" {...a11yProps(1)} />
          <Tab label="donut" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Container>
       <Grid container  display='flex' direction={"row"} columnSpacing={2} rowSpacing={2}  >
    <Grid item md='4' xs='6'>
    <Card sx={{ maxWidth: 345 }} elevation={10}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="200"
          image= {cake30}
          backgroundImage='cover'
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Choclate
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' size="small" color="primary">
          Add 
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item md='4' xs='6'>
    <Card sx={{ maxWidth: 345 }} elevation={10}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="200"
          image= {cake26}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Pinapple
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' size="small" color="primary">
          Add 
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item md='4' xs='6'>
    <Card sx={{ maxWidth: 345 }} elevation={10}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="200"
          image= {cake29}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Fruit
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' size="small" color="primary">
          Add 
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item md='4' xs='6'>
    <Card sx={{ maxWidth: 345 }} elevation={10}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="200"
          image= {cake32}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Dryfruit
          </Typography>
          <Typography variant="body2" color="text.secondary">
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' size="small" color="primary">
          Add 
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item md='4' xs='6'>
    <Card sx={{ maxWidth: 345 }} elevation={10}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="200"
          image= {cake28}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Pastre
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' size="small" color="primary">
          Add 
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item md='4' xs='6'>
    <Card sx={{ maxWidth: 345 }} elevation={10}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="200"
          image= {cake31}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Perk
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' size="small" color="primary">
          Add 
        </Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
    </Container>
      </TabPanel>
      <Container>
      <TabPanel value={value} index={1}>
      <Grid container  display='flex' direction={"row"} columnSpacing={2} rowSpacing={2}  >
      <Grid item md='4' xs='6'>
    <Card sx={{ maxWidth: 345 }} elevation={10}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="200"
          image= {cup6}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' size="small" color="primary">
          Add 
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item md='4' xs='6'>
    <Card sx={{ maxWidth: 345 }} elevation={10}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="200"
          image= {cup210}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' size="small" color="primary">
          Add 
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item md='4' xs='6'>
    <Card sx={{ maxWidth: 345 }} elevation={10}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="210"
          image= {cup4}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' size="small" color="primary">
          Add 
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item md='4' xs='6'>
    <Card sx={{ maxWidth: 345 }} elevation={10}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="200"
          image= {cupp2}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' size="small" color="primary">
          Add 
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item md='4' xs='6'>
    <Card sx={{ maxWidth: 345 }} elevation={10}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="200"
          image= {cup244}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' size="small" color="primary">
          Add 
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item md='4' xs='6'>
    <Card sx={{ maxWidth: 345 }} elevation={10}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="200"
          image= {cup13}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' size="small" color="primary">
          Add 
        </Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
      </TabPanel>
      </Container>
      <TabPanel value={value} index={2}>
      <Grid container  display='flex' direction={"row"} columnSpacing={2} rowSpacing={2}  >
      <Grid item md='4' xs='6'>
    <Card sx={{ maxWidth: 345 }} elevation={10}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="200"
          image= {donut14}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' size="small" color="primary">
          Add 
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item md='4' xs='6'>
    <Card sx={{ maxWidth: 345 }} elevation={10}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="200"
          image= {donut13}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' size="small" color="primary">
          Add 
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item md='4' xs='6'>
    <Card sx={{ maxWidth: 345 }} elevation={10}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="200"
          image= {donut12}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' size="small" color="primary">
          Add 
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item md='4' xs='6'>
    <Card sx={{ maxWidth: 345 }} elevation={10}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="200"
          image= {donut15}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' size="small" color="primary">
          Add 
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item md='4' xs='6'>
    <Card sx={{ maxWidth: 345 }} elevation={10}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="200"
          image= {donut16}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' size="small" color="primary">
          Add 
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item md='4' xs='6'>
    <Card sx={{ maxWidth: 345 }} elevation={10}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="200"
          image= {donut17}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' size="small" color="primary">
          Add 
        </Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
      </TabPanel>
    </Box>
    </>
  )
}

export default Menu