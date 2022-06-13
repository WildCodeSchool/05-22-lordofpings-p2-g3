import './Home.css'
import Header from '../components/templates/Header'
import Main from '../components/templates/Main'
import Footer from '../components/templates/Footer'



import ComposantUn from '../components/StreetMap'
import StreetMap from '../components/StreetMap'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'


const Home = () => {
  

    return(

        <>
            <Header className="header"/>
            <Main className="main">
               <Section1/>
               <Section2/>
               {/* <StreetMap/> */}
             
               
            </Main >
            <Footer className="footer"/>
        </>
    )
}

export default Home