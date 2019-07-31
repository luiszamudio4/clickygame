import React from "react";
import "../styles/Card.css";

// This component takes in props as an argument and returns whatever the props are defined as in App.js.
const Card = props => (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} id={props.id}
                    // This onClick function is triggered when the image is clicked. It basically
                    // calls the shuffleArt method which has a paramenter of the id of the image.
                    onClick={() => props.shuffleCharacters(props.id)}
                />
            </div>
        </div>
  );
  
  export default Card;