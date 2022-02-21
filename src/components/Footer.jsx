import * as React from 'react';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


export default function Footer() {
  return (
   
       <footer className='footer'>
         <Container maxWidth="lg">
         <Grid container >
           <Grid items xs="12" lg="4">
             <h2>Text Block</h2>
             <p>
              Text Block
              Add any content element into this footer section via Visual Composer. Also you can change sizes, colors, background image of all footer sections.

              Goodbuy unconvenient widget-oriented content of footer areas! Customize your footer as any other page section!</p>
           </Grid>
           <Grid items xs="12" lg="4">
             <h2>Recent Posts</h2>
             <p>
              Text Block
              Add any content element into this footer section via Visual Composer. Also you can change sizes, colors, background image of all footer sections.

              Goodbuy unconvenient widget-oriented content of footer areas! Customize your footer as any other page section!</p>
           </Grid>
           <Grid items xs="12" lg="4">
             <h2>Contacts</h2>
             <a href='#'>info@example.com</a>
             <a href="#">+321 123 4567</a>
             <a href="#">1600 Amphitheatre Pkwy Mountain View, CA 94043, United States</a>
           </Grid>
         </Grid>
         </Container>
       </footer>
      
  );
}
 