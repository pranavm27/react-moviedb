import React from "react";

const Poster = (props) => {
    const { image } = props;

    return (
        <div className="container">
            { 
                image && (
                    <img 
                        src = { `https://image.tmdb.org/t/p/original/${ image }` } 
                        alt = "no poster"
                        className="img-thumbnail"/>
                )
            }
            
        </div>
    );
  
}

export default Poster;
