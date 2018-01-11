import React, { Component } from 'react';
import gifs from "../../utils/API.js"

// create component that will render images

class Images extends Component {
    // image state contains array of links that will serve as src attrs
    state = {
        images: gifs
    }

    // render images upon load of page
    displayImages = () => {
        let imgTags = this.state.images.map((image) => {
            return <img src={image} height="200" onClick={this.shuffleImages} />
        });

        return imgTags;
    }

    // shuffle and re-render images upon clicking an image
    shuffleImages = () => {
            let images = this.state.images;
            let numImages = this.state.images.length;
            let temp;
            let index;
        
            // While there are elements in the array
            while (numImages > 0) {
        // Pick a random index
                index = Math.floor(Math.random() * numImages);
        // Decrease numImages by 1
                numImages--;
        // And swap the last element with it
                temp = images[numImages];
                images[numImages] = images[index];
                images[index] = temp;
            }

            //change state to newly shuffled images
            this.setState({images: images});

            // re-render images
            this.displayImages();        
    }

    render () {
        return (
            <div>
                {this.displayImages()}
            </div>
        )
    }
}

export default Images;