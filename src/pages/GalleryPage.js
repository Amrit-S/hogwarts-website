import React, { Component } from "react";

import Navbar from "../components/Navbar";

/**
 * TO DO! Recommended Features: 
 *      - Make a gallery page of photos similar to the masonery structure of Google Images 
 *      - Images should be enlargeable (via click), but I shouldn't be able to right click on any of them 
 *      - Page should be responsive to different sizes (i.e. mobile & desktop adaptable)
 */
class GalleryPage extends Component {

    render() {
        return (
            <div>
                <Navbar/>
                <div style={{marginTop:"10%", textAlign: "center"}}>
                    Implement Gallery Here
                </div>
            </div>
        );
    }
}

export default GalleryPage;