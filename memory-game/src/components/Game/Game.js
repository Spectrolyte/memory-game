import React, { Component } from 'react';
import gifs from "../../utils/API.js"

// create component that will render images

class Images extends Component {
    // image state contains array of links that will serve as src attrs
    state = {
        images: gifs
    }

    // render images upon load of page
    componentDidMount() {
        
    }

    displayImages = () => {
        let imgTags = this.state.images.map((image) => {
            return <img src={image} height="200"/>
        });

        return imgTags;
    }

    // shuffle and re-render images upon clicking an image

    render () {
        return (
            <div>
                {this.displayImages()}
            </div>
        )
    }
}

export default Images;