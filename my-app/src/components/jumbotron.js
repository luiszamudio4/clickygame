import React from "react";
import "../styles/Jumbotron.css";

function Jumbotron(props) {
    return (
<div className="jumbotron jumbotron-fluid" id="jumbo">
  <div className="container">
    <h1 className="display-4 text-center">Wild Kratts Memory Game</h1>
    <h3 className="text-center">Try to click each image one time.</h3>
    <h3 className="text-center">But watch out, they're on the move!</h3>
  </div>
</div>
    )
}
export default Jumbotron;