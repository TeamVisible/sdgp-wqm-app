import React,{useState} from 'react';
import DropdoqnSidebar from '../components/SidebarCompo';
import NavigationBar from '../components/Navigation';
import Team from '../components/TeamSection';
import Services from '../components/Services';
import Discover from '../components/DiscoverWQ';
import FooterPage from '../components/Footer';
import AboutUs from '../components/AboutUs';
import Starter from './dashboard';


const Home = () => {

    const[isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <DropdoqnSidebar isOpen={isOpen} toggle={toggle}/>
            <NavigationBar toggle={toggle}/>
            <Team/>
            <Services/>
            <Discover/>
            <AboutUs/>
            <FooterPage/>
            <Starter/>
        </div>
    )
}

export default Home
