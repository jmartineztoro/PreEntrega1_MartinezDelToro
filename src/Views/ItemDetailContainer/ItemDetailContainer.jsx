import '../../components/styles/ItemDetailContainer.scss';
import {getItems} from '../../asyncMock';
import { useState,useEffect } from 'react';

import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';


const ItemDetailContainer = () =>{

    const {itemId} = useParams();
      const [item, setItems] = useState({});
    
       useEffect(() => {
         setItems(getItems(itemId));
         
       }, [itemId]);


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
 <h2>{item.price}</h2>
<br/>
<Button className='btn-primary' style={{width: '200px', height: '40px',zIndex:0, border: 0, borderRadius: 8,fontSize: 16 }} variant='contained'  href="#contained-buttons" > Buy Now</Button>
    </article>
    </div>




    </section>
    
    
    </>)
}

export default ItemDetailContainer;