import React from 'react';
import Header from './Header'
import Title from '../shared/Title';
import {Grid} from '@mui/material';
const AppLayout =(WrappedComponent)=>{
    return (props)=>{
        return(
            <>
            <Title />
            <Header />

            <Grid container height={"calc(100vh-4rem)"}>
            <Grid item sm={4} md={3} sx={{
                display:{xs:"none",sm:"block"}
            }} height={"100%"} >hheeyyy</Grid>


            <Grid item xs={12} sm={8} md={9} lg={9} height={"100%"} ><WrappedComponent {...props}/></Grid>
            </Grid>
            
             
            
             </>
        );
           
        
    };
};

export default AppLayout;