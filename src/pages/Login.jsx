// src/pages/LoginPage.js
import React ,{useState} from "react";
import {Container,Paper,Typography,TextField,Button,Stack,Avatar,IconButton,Chip} from "@mui/material";
import {CameraAlt as  CameraAltIcon} from "@mui/icons-material";
import {VisuallyHiddenInput}from "../components/styles/StyledComponents";
import { useFileHandler, useInputValidation,useStrongPassword } from "6pp";
import { usernameValidator } from "../utils/validators";
const Login=()=>{
  const [isLogin,setIsLogin]=useState(true);
  const [skillList, setSkillList] = useState([]); // For storing user's skills
  const [currentSkill, setCurrentSkill] = useState(""); // Current skill being entered

  const name=useInputValidation("");
  const username=useInputValidation("",usernameValidator);
  
  const password=useStrongPassword();
  const avatar=useFileHandler("single");

  const handleLogin=(e)=>{e.preventDefault();}
  const handleSignUp=(e)=>{e.preventDefault();}
  const handleAddSkill = (e) => {
     e.preventDefault();
     if (currentSkill.trim() && !skillList.includes(currentSkill)) {
      setSkillList([...skillList, currentSkill]); // Add skill to the list
      setCurrentSkill(""); // Clear the input field
    }
 };
 const handleDeleteSkill = (skillToDelete) => {
   setSkillList(skillList.filter((s) => s !== skillToDelete)); // Remove skill from the list
 };



   return (<Container component={"main"} maxWidth="xs"
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

         {isLogin? <>
         <Typography variant="h5">Login</Typography>
         
         <form style={{
            width: "100%",
            marginTop:"1rem",
         }}
         onSubmit={handleLogin}
         >


         <TextField  
         required 
         fullWidth label="Username" 
         margin="normal" 
         variant="outlined"
         value={username.value}
         onChange={username.changeHandler}
         />

         <TextField  
         required 
         fullWidth label="Password" 
         type="password"
         margin="normal" 
         variant="outlined"
         value={password.value}
         onChange={password.changeHandler}
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

         <Typography textAlign={"center"} m={("1rem")}>
            OR
         </Typography>


         <Button  
          fullWidth
          variant="text"
          color="secondary"
          onClick={()=>{setIsLogin(false)}}
         >
            Sign up Instead
            
           
         </Button>

         </form>

        

         
         </>:<>
         <Typography variant="h5">Sign Up</Typography>
         
         <form style={{
            width: "100%",
            marginTop:"1rem",
         }} 
         onSubmit={handleSignUp}
         >
        <Stack  
         position={"relative"} 
         width={"10rem"} 
         margin={"auto"}
         >
            <Avatar  sx={{
               width:"10rem",
               height:"10rem",
               objectFit:"contain",
            }}
            src={avatar.preview}
            />



            <IconButton sx={{
               position: "absolute",
               bottom:"0",
               right:"0",
               color:"white",
               bgcolor:"rgba(0,0,0,0.5)",
               ":hover":{
                  bgcolor:"rgba(0,0,0,0.7)",
               }
               
            }} 
            component="label"
            >
              
              <CameraAltIcon />
              <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} ></VisuallyHiddenInput>
              
            </IconButton>
         </Stack>
         {
            avatar.error&&
            <Typography  
            m={"1rem"}
            width={fit-content}
            display={"block"}
            color="error" 
            variant="caption"
            >
               {avatar.error}
            </Typography>
         }

      <TextField  
         required 
         fullWidth 
         label="Name" 
         margin="normal" 
         variant="outlined"
         value={name.value}
         onChange={name.changeHandler}/> 

      <TextField  
         required 
         fullWidth 
         label="Username" 
         margin="normal" 
         variant="outlined"
         
         value={username.value}
         onChange={username.changeHandler}
         />

         {
            username.error&&<Typography color="error" variant="caption">
               {username.error}
            </Typography>
         }

      <TextField  
         required 
         fullWidth 
         label="Add a Skill" 
         margin="normal" 
         variant="outlined"
         value={currentSkill}
         onChange={(e) => setCurrentSkill(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleAddSkill(e);
          }
        }}
         />

         <Stack direction="row" spacing={1} flexWrap="wrap" mt={1}>
                {skillList.map((s, index) => (
                  <Chip
                    key={index}
                    label={s}
                    onDelete={() => handleDeleteSkill(s)}
                    color="primary"
                  />
                ))}
              </Stack>

         <TextField  
         required 
         fullWidth 
         label="Password" 
         type="password"
         margin="normal" 
         variant="outlined"
         value={password.value}
         onChange={password.changeHandler}
         />

{
            password.error&&<Typography color="error" variant="caption">
               {password.error}
            </Typography>
         }

      <Button  
         sx={{marginTop:"1rem"}} 
         fullWidth
         variant="contained"
          color="primary"
           type="submit"
           >
            
            Sign Up
           
      </Button>

           <Typography textAlign={"center"} m={("1rem")}>
            OR
            </Typography>


           <Button  
          fullWidth
          variant="text"
          color="secondary"
           onClick={()=>{setIsLogin(true)}}
           >
            Log In Instead
            
           
           </Button>
         </form>

        

         
         </> }
      </Paper>
   </Container>)
}

export default Login;