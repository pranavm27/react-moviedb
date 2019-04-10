import React, { Component } from 'react';

class Search extends Component {

    handleChange = (e) => {
        e.preventDefault();
        this.props.handleOnChange(e.target.value);
    }

    handleClick = (id) => {
        this.props.handleOnClick(id);
    }

    render() {
        const { results } = this.props;
        

        const movieList = results ? results.map((result, index) => {
            return (
                    index !== 0  ? 
                    (<li 
                        className="list-group-item" 
                        key={ index }
                        onClick={ () => this.handleClick(result.id) }>{ result.original_title }</li>) : 
                    (<li 
                        className="list-group-item active" 
                        key={ index }
                        onClick={ () => this.handleClick(result.id) }>{ result.original_title }</li>) 
                );
        }) : "Enter Movie Name for searching details.";


        return (
            <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback"></span>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search"
                    onChange= { (e) => this.handleChange(e) }/>

                <ul className="list-group">
                    { movieList }
                </ul>
            </div>
        );
    }
}

export default Search;

