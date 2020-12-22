import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={props.description}>
          {props.emoji}
        </span>
        <span>{props.description}</span>
      </dt>
      <dd>{props.explanation}</dd>
    </div>
  );
}

export default Entry;
