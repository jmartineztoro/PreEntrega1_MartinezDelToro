/* eslint-disable react/prop-types */
import { Button, Grid2, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { sendOrder } from "../../firebase";
import { CartContext } from "../../context/CartContext";

const CartTotal = ({product}) => {


    const [orderId, setOrderId] = useState(null);
    const[,clear] = useContext(CartContext)
  const handleClick = () => {
    const newOrder = {
        
      buyer: {
        email: 'johndoe@gmail.com',
        name: 'John Doe',
        phone: '+5491167778888',
      },
      date: new Date(),
      items: [
        {
          id: 1,
          title: 'red vase',
          price: 24.00,
        },
        {
          id: 2,
          title: 'red cup',
          price: 24.00,
        },
      ],
      total: 48.00,
    };

    sendOrder(newOrder).then((id) => setOrderId(id));
    clear();
console.log(orderId)
  };
  return (
    <section className="store-item mt-2">
      <Grid2 container direction="column" spacing={2}>
        {/* Temporary Amount and Shipping */}
        <Grid2 item>
          <Grid2 container justifyContent="space-between" alignItems="center">
            <Typography variant="body1">Total amount</Typography>
            <Typography variant="body1">
              {product.reduce((sum, item) => {
  return sum + (item.price * item.quantity);
}, 0)
}
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
