import React, { Component } from 'react';
import gifs from "../../utils/API.js"

// create component that will render images

class Images extends Component {
    // state contains array of links that will serve as src attrs and user score
    state = {
        images: gifs,
        score: 0
    }

    componentDidMount () {
        // console.log(this.state.images[0].image);
    }

    // render images upon load of page
    displayImages = () => {
        let imgTags = this.state.images.map((element) => {
            return <img key={element.id} src={element.image} height="200" width="220" onClick={() => this.shuffleImages(element.id)} clicked="" alt="pusheen-gif" />
        });

        return imgTags;
    }

    // shuffle and re-render images upon clicking an image
    shuffleImages = (id) => {
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

            // check if image already clicked
            this.isClicked(id);

            // re-render images
            this.displayImages();        
    }

    // checks if image was already clicked
    isClicked = (id) => {
        // iterate through images, find image based on id, check clicked prop
        let clickedImage = this.state.images.filter((element) => {
            return element.id === id
        });
        console.log(clickedImage);
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