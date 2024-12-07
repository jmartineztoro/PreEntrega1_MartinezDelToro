/* eslint-disable react/prop-types */

import { Button, Grid2, Box, Typography, Card } from "@mui/material";
import CounterComponent from "../../components/Counter";

export default function  CartList({product})  {
  return (
    <section
      className="mt-2 store-item bottom-line pb-3" style={{height: '100px '}} >
        <Card style={{padding: '30px'}}>

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
            <CounterComponent product={product}></CounterComponent>
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
            {/* <Typography>{item.code}</Typography>
            {item.note && <Typography sx={{ fontStyle: "italic" }}>({item.note})</Typography>} */}
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
                // onClick={item.handleRemove}
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
    </section>
  );
};


