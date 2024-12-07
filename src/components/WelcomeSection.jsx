

import { Grid2, Typography, Button } from '@mui/material';

const WelcomeSection = () => {
  return (
    <section style={{width: "100%",height: "80vh", backgroundImage: `url("src/images/ceramic_bg_2.png")`,
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",     
        
             }}>
           
        
           <Grid2 container  alignItems="center"   justifyContent="start">
      <Grid2 item xs={12} sm={6}>
       <section style={{
      margin: 120, 
      textAlign: 'start', 
      background: 'transparent', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      height: '100%',
    }}>
          <Typography variant="h3" style={{maxWidth: '400px',}}>Choose from a variety of custom-made ceramics</Typography>
          <br/>
          
          <Button className='btn-primary' style={{width: '300px', height: '40px',zIndex:0, border: 0, borderRadius: 8,fontSize: 16 }} variant='contained'  href="#contained-buttons" > Shop Now</Button>
        </section>
      </Grid2>
     
    </Grid2>
             </section>
             
   
  );
};

export default WelcomeSection;
