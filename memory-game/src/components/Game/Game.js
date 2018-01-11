import React, { Component } from 'react';
import gifs from "../../utils/API.js"
import "./Game.css";

// create component that will render images

class Images extends Component {
    // state contains array of links that will serve as src attrs and user score
    state = {
        images: gifs,
        score: 0,
        highScore: 0
    }

    imgStyles = {
        width: "220px",
        maxWidth: "100%",
        height: "200px",
        maxHeight: "auto"
    }

    // render images upon load of page
    displayImages = () => {
        let imgTags = this.state.images.map((element) => {
            return <div className="col s3"><img className="gif" style={this.imgStyles} key={element.id} src={element.image} onClick={() => this.shuffleImages(element.id)} clicked="" alt="pusheen-gif" /></div>
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

        // if image was clicked, check against high score then reset current score to 0
            // reset all clicked props to false
        // else, change clicked to true and increment score
        if (clickedImage[0].clicked) {
            if (this.state.score > this.state.highScore) {
                this.setState({highScore: this.state.score});
            }
            this.setState({score: 0});
            this.state.images.forEach((element) => {
                return element.clicked = false;
            });
        }
        else {
            clickedImage[0].clicked = true;
            this.setState({score: this.state.score + 1});
        }
    }

    render () {
        return (
            <div>
                <div className="row center-align">
                    <h4>Current Score: {this.state.score} <img id="paw-icon" alt="paw-icon" src="https://cdn0.iconfinder.com/data/icons/free-android-icons-animals/24/cat_track-24.png" /> High Score: {this.state.highScore}</h4>
                </div>
                <div className="row center-align">
                    {this.displayImages()}
                </div>
            </div>
        )
    }
}

export default Images;