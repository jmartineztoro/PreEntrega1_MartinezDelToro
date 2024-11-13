//import ItemDetailContainer from "../../components/ItemDetailContainer";
import WelcomeSection from "../../components/WelcomeSection";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const HomeContainer  = () => {
    return (
        <>
            <WelcomeSection />
        <ItemListContainer text='Featured'/>
        </>
    )

}


export default HomeContainer;