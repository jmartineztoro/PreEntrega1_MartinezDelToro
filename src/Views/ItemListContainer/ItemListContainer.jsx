import ItemList from "../../components/ItemList";

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({text}) => {


  
    return(
    <>
    <section style={{height:'100dvh'}} >

  
      <h1 style={{paddingTop: 40}}>{text}</h1>
      
      <ItemList  />  
      </section>
      </>
    )
     }
    
    
    export default ItemListContainer;