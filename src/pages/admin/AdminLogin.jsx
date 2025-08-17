
import React ,{useState} from "react";
import {Container,Paper,Typography,TextField,Button,Stack,Avatar,IconButton,Chip} from "@mui/material";
import {CameraAlt as  CameraAltIcon} from "@mui/icons-material";
import {VisuallyHiddenInput} from "../../components/styles/StyledComponents"
import { useFileHandler, useInputValidation,useStrongPassword } from "6pp";
import { usernameValidator} from "../../utils/validators"


const isAdmin=true;
const AdminLogin = () => {
   const secretKey= useInputValidation("");
   const submitHandler = (e) => {
     e.preventdefault();
     console.log("submit")
   }

   if (isAdmin) return <Navigate to="/admin/dashboard"/>
    
    return (
    <Container component={"main"} maxWidth="xs"
   sx={{
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
   }}
   >
      <Paper elevation={9} sx={{
         padding:6,
         display:"flex",
         flexDirection:"column",
         alignItems:"center",
      }}>

         
         <Typography variant="h5">Admin Login</Typography>
         
         <form style={{
            width: "100%",
            marginTop:"1rem",
         }}
         onSubmit={submitHandler}
         >


         

         <TextField  
         required 
         fullWidth label="Password" 
         type="password"
         margin="normal" 
         variant="outlined"
         value={secretKey.value}
         onChange={secretKey.changeHandler}
         />



         <Button  
         sx={{marginTop:"1rem"}} 
         fullWidth
         variant="contained"
         color="primary"
         type="submit"
         >
            
              Login
           
         </Button>
         </form>

        

         
         

           
      </Paper>
   </Container>
  )
}

export default AdminLogin
