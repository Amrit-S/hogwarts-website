import React, { Component } from "react";

import '../css/ClickableImages.css'

class ClickableImages extends Component {

    render() {
        return (
            <div className="container">
                <img src={this.props.img} class="image" alt=""/>
                <div class="overlay" style={{background: this.props.bg}}>
                    <div class="inner-text">
                        {this.props.label}
                    </div>
                </div>
            </div>
        );
    }
}

export default ClickableImages;