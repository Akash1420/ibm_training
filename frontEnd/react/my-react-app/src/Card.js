import React from 'react';

// @Input

function Card(props){
    return (
        
        <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text"> {props.hours} : {props.minutes} : {props.seconds}</p>
          
        </div>
      </div>

    );
}

export default Card;