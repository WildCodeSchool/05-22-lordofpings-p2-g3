import './Home.css'
import Header from '../components/templates/Header'
import Main from '../components/templates/Main'
import Footer from '../components/templates/Footer'



import ComposantUn from '../components/StreetMap'
import StreetMap from '../components/StreetMap'


const Home = () => {
  

    return(

        <>
            <Header className="header"/>
            <Main className="main">
               
               <StreetMap/>
               {/* <ComposantDeux/> */}
               
            </Main >
            <Footer className="footer"/>
        </>
    )
}

export default Home