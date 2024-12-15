import '../../components/styles/ItemDetailContainer.scss';
import {getItems} from '../../asyncMock';
import { useState,useEffect, useContext } from 'react';

import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';

import { CartContext } from '../../context/CartContext';


export default function ItemDetailContainer(){



    const {itemId} = useParams();
      const [item, setItems] = useState({});
      const [,addItem] = useContext(CartContext)
      const [quantity, setContador] = useState(1);
      
      useEffect(() => {
        setItems(getItems(itemId));
        
      }, [itemId]);
 
      const handleClickInc = () => {
        if (quantity < item.stock) {
          setContador(quantity + 1);
   
        }
      };
    
      const handleClickDec = () => {
        if (quantity > 1) {
          setContador(quantity - 1);
        
        }
      };
      
      const handleCartCount = () => {

     if(quantity > 0 && item){
         addItem(item,quantity);
         // ToastAlert
         //setqu(1)
 
     
 }


    
      };
      //  const addToCart = (quantity) =>{
       
        
      //  }

    return(
    <>
    <section className="itemDetailsContainer">

    <div className="DetailsContainer">
  <article>
  <img src={item.imgUrl}  style={{width:"100% ", paddingTop:"20px", paddingBottom:"20px"}} />
  </article>
  <article>
 <h1>{item.title}</h1>
 <br/>
 <p>{item.description}</p>
 <br/>
 <br/>
 <h2>{item.price}</h2>

<br/>
<h4>In Stock: {item.stock}</h4>
     
     <br/>
          <button onClick={handleClickDec} className="btn-counter ">
             -
           </button>
           <span style={{padding: 40}}>{quantity}</span>
           <button onClick={handleClickInc} className="btn-counter">
             +
           </button>
<br/>
<Button onClick={handleCartCount} className='btn-primary' style={{marginTop: '40px',width: '200px', height: '40px', border: 0, borderRadius: 8,fontSize: 16 }} variant='contained'  href="#contained-buttons" > Add to Cart</Button>
    </article>
    </div>

    </section>
    
    
    </>)
}

