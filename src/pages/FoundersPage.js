import React, { Component } from "react";

import Navbar from "../components/Navbar";

/**
 * TO DO! Recommended Features: 
 *      - Photo and relevent life history of each of the 4 founders + their houses  
 *      - Try to incorporate the colors of each house/main items of the founders somehow/somewhere on the page
 *      - All images on the website should not be right-clickable (I suggest making a component that does this)
 *      - Page should be responsive to different sizes (i.e. mobile & desktop adaptable)
 */
class FoundersPage extends Component {

    render() {
        return (
            <div>
                <Navbar/>
                <div style={{marginTop:"10%", textAlign: "center"}}>
                    Implement Founders Here
                </div>
            </div>
        );
    }
}

export default FoundersPage;