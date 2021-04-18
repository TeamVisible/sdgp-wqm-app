import React,{useState} from 'react'
import DropdoqnSidebar from '../components/SidebarCompo';
import NavigationBar from '../components/Navigation';
import Team from '../components/TeamSection';
import Services from '../components/Services';
import Discover from '../components/DiscoverWQ';
import Footer from '../components/Footer';

const Home = () => {

    const[isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen);
    };

    return (
        <>
            <DropdoqnSidebar isOpen={isOpen} toggle={toggle}/>
            <NavigationBar toggle={toggle}/>
            <Team/>
            <Services/>
            <Discover/>
            <Footer/>
        </>
    )
}

export default Home
