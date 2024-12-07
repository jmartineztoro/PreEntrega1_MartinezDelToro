
import { useParams } from "react-router-dom";


export default function CheckOut(){

    
    const {orderId} = useParams();
  
      
   
    return(
<>
<section style={{display: 'flex', flexDirection:'column', justifyContent: 'center'}}>
<h2>Thanks for your purchase</h2><br />
<h3>Your confirmation number is</h3><br />
<h3>{orderId}</h3>
</section>


</>
    )




}
