import React from "react";

const Poster = (props) => {
    return (
        <div className="container">
            { 
                props.image && (
                    <img 
                        src = { `https://image.tmdb.org/t/p/original/${props.image}` } 
                        alt = "no poster"
                        className="img-thumbnail"/>
                )
            }
            
        </div>
    );
  
}

export default Poster;
