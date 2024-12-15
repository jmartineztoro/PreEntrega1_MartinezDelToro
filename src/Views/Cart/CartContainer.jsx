import {   Grid2, Typography } from "@mui/material";

import "../../components/styles/Checkout.scss";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";



const CartWidget = () =>{
    const [cartProducts] = useContext(CartContext);
return(
<>
<Typography variant="h4" sx={{ textAlign: 'center', my: 4 }}> Shopping Cart </Typography>
<Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }} style={{padding: '50px'}}>
  <Grid2 size={10} sm={12} >
  <section className="mt-2 store-item bottom-line pb-3" style={{height: '100px '}} >
  {cartProducts.map(products=> 
    

    <CartList  product={products} key={products.id}  />
    
        
        
        )}
</section>
  </Grid2>
  <Grid2 size={6}  >
    <CartTotal product={ cartProducts}>

        </CartTotal>
  </Grid2>
</Grid2>

</>
)

}
export default CartWidget;