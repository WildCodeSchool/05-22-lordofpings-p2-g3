import './Home.css'
import Header from '../components/templates/Header'
import Main from '../components/templates/Main'
import Footer from '../components/templates/Footer'



import ComposantUn from '../components/ComposantUn'
import ComposantDeux from '../components/ComposantDeux'


const Home = () => {
  

    return(

        <>
            <Header className="header"/>
            <Main className="main">
               
               <ComposantUn/>
               <ComposantDeux/>
               
            </Main >
            <Footer className="footer"/>
        </>
    )
}

export default Home