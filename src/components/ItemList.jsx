
import {useEffect,useState} from 'react';
import Item from './Item.jsx';
import './styles/ItemList.scss';
import { getProducts } from '../firebase.js';
export default function ItemList() {


  const [Items, setMyitems] = useState([]);
  useEffect(() => {
    
    getProducts().then((Items) => setMyitems(Items));
 }, []);

  // const [Items, setItems] = useState([]);

  // useEffect(() => {
  //   promise.then((respuesta) => {
  //     setItems(respuesta);
  //   });

  // }, []);
  return (
    <>
      <section className="item-list">
        {Items.map(Items=> 
    

    <Item  Items={Items} key={Items.id} />
        
        
        )}
        </section>
    </>
  );
}