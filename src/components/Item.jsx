/* eslint-disable react/prop-types */

import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Item({Items}){

    return(
    <> 
    
    <Link className='item' to={`/item/${Items.id}`}>
    <article>
      <h4>{Items.title} </h4>
      <img src={Items.imgUrl}  style={{width:"180px ", paddingTop:"20px", paddingBottom:"20px"}} />
      <p>{Items.category}</p>
      <p>Price: {Items.price}</p>
      <br/>
      <Button className='btn-primary' style={{width: '200px', height: '40px',zIndex:0, border: 0, borderRadius: 8,fontSize: 16 }} variant='contained'  href="#contained-buttons" >See details </Button>
  
    </article> 
    </Link>
    </> 
    )
    
    }