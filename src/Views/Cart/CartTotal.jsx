/* eslint-disable react/prop-types */
import { Button, Grid2, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { sendOrder } from "../../firebase";
import { CartContext } from "../../context/CartContext";

const CartTotal = ({product}) => {


    const [orderId, setOrderId] = useState(null);
    const[,,,,clear] = useContext(CartContext)


    const total = product.reduce((sum, item) => {
     
      const price = parseFloat(item.price.replace('$', ''));
      const quantity = item.quantity || 0;
      return sum + (isNaN(price) ? 0 : price * quantity);
    }, 0).toFixed(2);

  const handleClick = () => {
    const newOrder = {
        
      buyer: {
        email: 'johndoe@gmail.com',
        name: 'John Doe',
        phone: '+5491167778888',
      },
      date: new Date(),
      items: product.map(product => ({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: product.quantity,
      })),
      total: total,
    };

    sendOrder(newOrder).then((id) => setOrderId(id));
    console.log(orderId)
    clear();
  };
  return (
    <section className="store-item mt-2">
      <Grid2 container direction="column" spacing={2}>
        {/* Temporary Amount and Shipping */}
        <Grid2 item>
          <Grid2 container justifyContent="space-between" alignItems="center">
            <Typography variant="body1">Total amount</Typography>
            <Typography variant="body1">
           {'$ ' + total}
            </Typography>
          </Grid2>
        </Grid2>

        <Grid2 item>
          <Grid2 container justifyContent="space-between" alignItems="center">
            <Typography variant="body1">Shipping</Typography>
            <Typography variant="body1">Free</Typography>
          </Grid2>
        </Grid2>

        {/* Divider line */}
        <Grid2 item>
          <div className="bottom-line"></div>
        </Grid2>

        {/* Total Amount */}
       

        {/* Go to Checkout Button */}
        <Grid2 item>
        <NavLink to={'/checkout/'+orderId}>
          <Button onClick={handleClick} fullWidth variant="contained" style={{background: '#333333'}} size="large">
            Checkout
          </Button>
        
        </NavLink>
        
        </Grid2>
      </Grid2>
    </section>
  );
};

export default CartTotal;
