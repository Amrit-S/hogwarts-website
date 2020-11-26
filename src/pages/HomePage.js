import React, { Component } from "react";
import VideoLooper from 'react-video-looper';
import hogwartsTourVideo from '../media/Hogwarts_Tour.mp4'

import '../css/HomePage.css'

import Navbar from "../components/Navbar";
import ClickableImages from "../components/ClickableImages";

import potterHouses from "../media/houses.png"
import quidditch from "../media/quidditch.jpeg";
import potions from "../media/class.jpeg";
import dances from "../media/dances.jpeg";

/**
 * Main/Default page of the website. 
 * 
 * Includes a looping video on the physical outlook of Hogwarts. Also includes dummy features on Hogwarts breakdown
 * as a school: Selection, Student Life, Academics, and School Events. 
 * 
 * 
 * If you have time, try to make extensions to this page (i.e. Google Calender embedding for school events, some sort of
 * carousel that mocks school annoucements, making dummy photos clickable, etc.)
 * 
 */

class HomePage extends Component {

    render() {

        return (
            <div className="pageContainer">
                <Navbar/>
                <VideoLooper source={hogwartsTourVideo} start={1.31} end={45.48} speed={2}/>
                {/* welcome Banner on video displaying Hogwart's motto */}
                <div className="welcomeText">
                    <h5>
                        Draco Dormiens Nunquam Titillandus
                    </h5>
                    <h>
                        No applications needed! Automatic acceptance via owl posts
                    </h>
                </div>
                {/* Circular images below showcasing main features of Hogwarts */}
                <div className="featureImages">
                    <ClickableImages img={potterHouses} label="Selection" bg="green"/>
                    <ClickableImages img={quidditch} label="Student Life"/>
                    <ClickableImages img={potions} label="Classes" bg="#6c1927"/>
                    <ClickableImages img={dances} label="School Events" bg="#b8860b"/>
                </div>
                
            </div>
        );
    }
}

export default HomePage;