import { promise } from '../asyncMock.js';
import {useEffect,useState} from 'react';
import Item from './Item.jsx';
import './styles/ItemList.scss';
export default function ItemList() {
  const [Items, setItems] = useState([]);

  useEffect(() => {
    promise.then((respuesta) => {
      setItems(respuesta);
    });
  }, []);

  

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