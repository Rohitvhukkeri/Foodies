import { Box, List, styled, Toolbar, Typography } from '@mui/material';


    export const StyledToolbar = styled(Toolbar)({
      dispaly: "flex",
      justifyContent: "center",
      alignItems: "center",
    
      
    })
  
    export const MenuBox = styled(Box)({
      display: 'flex',
      gap: 30,
      cursor: 'pointer',
    });
  
    export const MenuItems = [
      { Name: "Home", Link: "/" },
      { Name: "Menu", Link: "/menu" },
      { Name: "About", Link: "/about" },
      { Verify: "Login", Link: "/login" },
      { Verify: "Sign", Link: "/sign" },
    ];


    export const AdminAppBarContainer = styled(Box)(() => ({
      display: "flex",
      flexDirection:"row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "2px 0px",
      fontWeight:"bold",
      position:"fixed",
      top: 0,
      zIndex:99,
      width:"100%",
      background:`linear-gradient(rgba(15, 23, 43, .9), rgba(15, 23, 43, .9))`,
      backgroundColor:"transparent",
      
  }))

  export const AppBarHeader=styled(Typography)(()=>({
    //color:Colors.secondary,
    padding:"4px",
    fontWeight:"bold",
    fontSize:"30px",
    display:"flex",
    flexDirection:"row",
    zIndex:99,
    
}))

export const MyList=styled(List)(({type})=>({
  display: type=== 'row' ? "flex":"block",
  //color:Colors.black,
  padding:"4px",
  fontWeight:"bold",
  fontSize:"20px",
  flexDirection:"row",
  flexGrow:5,
  textDecoration:"none",
  justifyContent:"center",
  alignItems:"center",
  zIndex:99,
  
  
}))

export const AppBarContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection:"row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2px 8px",
  fontWeight:"bold",
  position:"fixed",
  top: 0,
  zIndex:99,
  width:"100%",
  background:`linear-gradient(rgba(15, 23, 43, .9), rgba(15, 23, 43, .9))`,
  backgroundColor:"transparent",
  
}))