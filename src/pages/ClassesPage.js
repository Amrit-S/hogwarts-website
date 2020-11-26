import React, { Component } from "react";

import Navbar from "../components/Navbar";
/**
 * TO DO! Recommended Features: 
 *      - At least 3 classes listed along with a course description + main instructor  
 *      - Try to make this into a catalogue of sorts with drop down options 
 *      - All images on the website should not be right-clickable (I suggest making a component that does this)
 *      - Page should be responsive to different sizes (i.e. mobile & desktop adaptable)
 */
class ClassesPage extends Component {

    render() {
        return (
            <div>
                <Navbar/>
                <div style={{marginTop:"10%", textAlign: "center"}}>
                    Implement Classes Here
                </div>
            </div>
        );
    }
}

export default ClassesPage;