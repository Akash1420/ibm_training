import React from 'react';

// @Input

function Card(props){
    return (
        
        <div className="card" style={{width: "18rem",backgroundColor:"magenta"}}>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <h3 className="card-text"> {props.hours} : {props.minutes} : {props.seconds}</h3>
          
        </div>
      </div>

    );
}

export default Card;