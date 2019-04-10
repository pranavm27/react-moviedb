import React, { Component } from 'react';
import axios from 'axios';
import Search from "./Search";
import Poster from "./Poster";
import Description from "./Description";

class Home extends Component {
    // api key with url
    // https://api.themoviedb.org/3/movie/550?api_key=03479344506d20d9da722cf3d347f8ef

    state = {
        title : "",
        poster : "",
        description : "",
        results : ''
    }

    getMovieByName = async (name) => {
        const base_url = 'https://api.themoviedb.org/3/search/movie';
        const api_key = '03479344506d20d9da722cf3d347f8ef';
        const movie = name;
        const _url = `${ base_url }?api_key=${ api_key }&query=${ movie }`;

        try {
            const movieDetails = await axios.get(_url);
            if(movieDetails.data.results.length === 1) {
                this.setState({
                    title : movieDetails.data.results[0].original_title,
                    poster : movieDetails.data.results[0].poster_path,
                    description : movieDetails.data.results[0].overview,
                    results : ""
                });
            } else {
                if(movieDetails.data.results[0]) {
                    this.setState({
                        title : movieDetails.data.results[0].original_title,
                        poster : movieDetails.data.results[0].poster_path,
                        description : movieDetails.data.results[0].overview,
                        results : movieDetails.data.results
                    });
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    getMovieById = async (id) => {
        const base_url = 'https://api.themoviedb.org/3/movie';
        const api_key = '03479344506d20d9da722cf3d347f8ef';
        const movie = id;
        const _url = `${ base_url }/${ movie }?api_key=${ api_key }&query=${ movie }`;

        try {
            const movieDetails = await axios.get(_url);
            this.setState({
                title : movieDetails.data.original_title,
                poster : movieDetails.data.poster_path,
                description : movieDetails.data.overview,
                results : ""
            });
        } catch (error) {
            console.log(error);
        }
        
        
    }

    handleOnChange = (name) => {
        this.getMovieByName(name);
    }

    handleOnClick = (id) => {
        this.getMovieById(id);
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <Search 
                            title = { this.state.title }
                            results = { this.state.results }
                            handleOnChange = { (name) => this.handleOnChange(name) }
                            handleOnClick = { (id) => this.handleOnClick(id) }/>
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
