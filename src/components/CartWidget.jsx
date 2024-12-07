
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import './styles/CartWidget.scss';




// eslint-disable-next-line react/prop-types
const CartWidget = ({ItemCount}) => {

 
 

    return (
      <>
       <ShoppingCartIcon className="cartIcon" /> 
      {ItemCount > 0 && (
  <Badge
    badgeContent={ItemCount}
    color="error"
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
  />
)}
      </>
    
);

}

export default CartWidget;

