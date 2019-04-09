import React, { Component } from 'react';

class Search extends Component {

    componentDidMount() {
        this.props.handleOnChange(this.props.title);
    }

    handleChange = (e) => {
        e.preventDefault();
        this.props.handleOnChange(e.target.value);
    }

    render() {
        return (
            <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback"></span>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search"
                    onChange= { (e) => this.handleChange(e) }/>
            </div>
        );
    }
}

export default Search;

