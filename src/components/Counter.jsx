/* eslint-disable react/prop-types */
import {  useState } from 'react';


// eslint-disable-next-line react/prop-types
export default function CounterComponent({ product}) {

   
 // eslint-disable-next-line no-unused-vars
 const [count,setContador] = useState(1);

 
  const handleClickInc = () => {
    if (product.quantity < 10) {
      setContador(product.quantity + 1);
     
    }
  };

  const handleClickDec = () => {
    if (product.quantity > 1) {
      setContador(product.quantity - 1);
    
      
    }
  };

  return (
    <>
     <h4>In Stock: {product.stock}</h4>
     
<br/>
     <button onClick={handleClickDec} className="btn-counter ">
        -
      </button>
      <span style={{padding: 40}}>{product.quantity}</span>
      <button onClick={handleClickInc} className="btn-counter">
        +
      </button>
    </>
  );
}

