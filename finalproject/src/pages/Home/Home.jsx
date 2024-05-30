import React from 'react'
import HomeSection from './components/HomeSection/HomeSection'
import men from '../../assets/images/men.png';
import women from '../../assets/images/women.png';
import electronics from '../../assets/images/electronics.png';
import jewelery from '../../assets/images/jewelery.png';

const Home = () => {
    return (
        <div className="home-field d-flex flex-column">
            <HomeSection img={men} title="Cotton Jacket"
                content="Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors."
                bg={false} reverse={false} button="More men clothing" />
            <HomeSection img={women} title="Short Sleeve Moisture"
                content="100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away."
                bg={true} reverse={true} button="More women clothing" />
            <HomeSection img={electronics} title="External Hard Drive"
                content="Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty"
                bg={false} reverse={false} button="More electronics" />
            <HomeSection img={jewelery} title="White Gold Plated Princess"
                content="Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day..."
                bg={true} reverse={true} button="More jewelery" />
        </div>
    )
}

export default Home;