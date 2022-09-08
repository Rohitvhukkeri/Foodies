import React from 'react'
import { Box, Container, Grid, styled, Typography,Paper } from '@mui/material'
import bg11 from '../Image/bg11.jpg'
import roll from '../Image/roll.jpg'
import donut22 from '../Image/cake/donut22.jpg'
import bg12 from '../Image/cake/bg12.jpg'
export const StyledCard = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center',
    backgroundSize: "cover",
    cursor: 'pointer',
    [theme.breakpoints.up("md")]: {
      height: 400,
    },
    [theme.breakpoints.down("md")]: {
      height: 200,
    },
    "&:hover": {
      opacity: 0.8,
      boxSizing: "borderBox",
      zIndex: 1,
      transition: `all 0.45s ease`,
    },
  }));

export const StyledTypography = styled(Typography)({
    textAlign: "center",
    color: "black",
    background: "orange",
    fontSize: 20,
  });

export  const StyledWrapper = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      paddingTop: "140%",
    },
    [theme.breakpoints.down("md")]: {
      paddingTop: "40%",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "80%",
    },
    width: "80%",

}))

export const StyledPaper = styled(Paper)({
  height: '35vh',
  backgroundImage: `linear-gradient(rgba(15,23,43,0.3),rgba(15,23,43,0.9)),url(${bg12})`,
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  marginTop: '55px',
  borderRadius: '3%'
})

export const CardRound = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  backgroundRepeat: "no-repeat",
  backgroundPosition: 'center',
  backgroundSize: "cover",
  borderRadius: '100%',
  overflow: 'hidden',
  width: '300px',
  cursor: 'pointer',
  [theme.breakpoints.up("md")]: {
    height: 300,
  },
  [theme.breakpoints.down("md")]: {
    height: 300,
  },
  "&:hover": {
    opacity: 0.8,
    boxSizing: "borderBox",
    zIndex: 1,
    transition: `all 0.45s ease`,

  },
}));

export const GridStyle= styled(Grid)(({
  display:'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'


}))

