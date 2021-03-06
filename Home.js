import React from "react"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import Services from "../components/Services"
import { Link } from 'react-router-dom'
import FeaturedRooms from '../components/FeaturedRooms'
import Button from '../components/StyledHero'
import SimpleButton from "../components/StyledHero";
export default function Home() {
    return(
    <>
        <Hero hero="defaultHero">
        <Banner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
            <Link to="/rooms" className="btn-primary">
                Our rooms
            </Link>
        </Banner>
        </Hero>
            <Services />
            <FeaturedRooms />
            
        </>
    )
}

