import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BestsellerSec from '../components/Bestseller';
import Section from '../components/Section';
import RegionSec from '../components/Region';
import AllProducts from './AllProd';

const Home = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Hero />
            <BestsellerSec title='Bestsellers of the Season'/>
            <RegionSec title='Discover by Region'/>
            <Section title='Explore our Finest'/>
            <AllProducts title="All Products"/>
        </div>
    )
}

export default Home