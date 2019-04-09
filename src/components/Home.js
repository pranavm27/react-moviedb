import React, { Component } from 'react';
import axios from 'axios';
import Search from "./Search";
import Poster from "./Poster";
import Description from "./Description";

class Home extends Component {
    // api key with url
    // https://api.themoviedb.org/3/movie/550?api_key=03479344506d20d9da722cf3d347f8ef

    state = {
        title : "The Wolf of Wall Street",
        poster : "",
        description : "",
    }

    getMovie = async (name) => {
        const base_url = 'https://api.themoviedb.org/3/search/movie';
        const api_key = '03479344506d20d9da722cf3d347f8ef';
        const movie = name;
        const movieDetails = await axios.get(`${ base_url }?api_key=${ api_key }&query=${ movie }`);
        
        if(movieDetails.data.results[0]) {
            this.setState({
                title : movieDetails.data.results[0].original_title,
                poster : movieDetails.data.results[0].poster_path,
                description : movieDetails.data.results[0].overview
            });
        }
    }

    handleOnChange = (name) => {
        this.setState({
            title : name
        })
        this.getMovie(name);
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <Search 
                            title = { this.state.title }
                            handleOnChange = { (name) => this.handleOnChange(name) }/>
                    </div>
                </div>

                <div className="row  mt-5">
                    <div className="col-md-6">
                        <Poster 
                            image = { this.state.poster }/>
                    </div>
                    <div className="col-md-6">
                        <Description 
                            title = { this.state.title }
                            description = { this.state.description }/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
