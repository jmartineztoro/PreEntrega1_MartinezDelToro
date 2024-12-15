/* eslint-disable react/prop-types */

import { Button, Grid2, Box, Typography, Card } from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

export default function  CartList({product})  {
  const [count,setCount] = useState(product.quantity);
  const [,,removeItem,updateProduct] = useContext(CartContext);
  const handleClickInc = () => {
    if (count < product.stock) {
      const newQuantity = count + 1;
      setCount(newQuantity);
      updateProduct(product.id, newQuantity);
    }
  };

  const handleClickDec = () => {
    if (count > 1) {
      const newQuantity = count - 1;
      setCount(newQuantity);
      updateProduct(product.id, newQuantity);
    }
  };

  const handleRemove =() =>{

    removeItem(product.id);
  }

  

  return (

        <Card key={product.id} style={{padding: '30px', marginBottom: " 10px"}}>

      <Grid2 container  columns={16} >
        <Grid2 item size={4} style={{padding: '20px'}} >
          <img className="image-store" src={product.imgUrl} />
        </Grid2>
        <Grid2 item size={12}  style={{height: '100px'}}>
          <Box
            sx={{
              mt: 3,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h4">{product.title}</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
               <h4>In Stock: {product.stock}</h4>
     
           <br/>
          <button onClick={handleClickDec} className="btn-counter ">
             -
           </button>
           <span style={{padding: 40}}>{product.quantity}</span>
           <button onClick={handleClickInc} className="btn-counter">
             +
           </button>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 1,
            }}
          >
   
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 1,
            }}
          >
           
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 1,
            }}
          >
            <Typography>Category: {product.category}</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 1,
            }}
          >
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="outlined"
                size="small"
                 onClick={handleRemove}
                startIcon={<i className="fa fa-trash"></i>}
              >
                Remove Item
              </Button>
              
            </Box>
            <Box sx={{ display: "flex" }}>
              <Typography variant="h5">{product.price }</Typography>
            </Box>
          </Box>
        </Grid2>
      </Grid2>

        </Card>
    
  );
};


