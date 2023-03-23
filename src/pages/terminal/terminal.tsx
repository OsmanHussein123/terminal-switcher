import { Grid } from '@mui/material';
import React from 'react';
import Command from './command'
import Sidebar from './sidebar'
import Header from './header'
import './terminal.css'
function Terminal() {

    return (
      <div>
        <Header/>
        <Grid container style = {{height:"100vh"}}>
          <Grid xs={10}>
            <Command/>
           </Grid>
          <Grid xs={2}>
            <Sidebar/>
          </Grid>
        </Grid>
      </div>
      
    );
  }
  
  export default Terminal;