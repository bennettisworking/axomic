import React from 'react';
import './Comments.css';

function Comments(props) {

    return (
          <div>
          <h4 className="comments__title">Comments</h4>
          <div className="comments__container">
    	    {props.data.slice(0, 2).map((thisComment, ind) => (
              <div>
                <p key={'c_' + ind}>{thisComment.body}</p>
                <p key={'ca_' + ind} className="comments__author">👤 {thisComment.author.name}</p>
              </div>
              ))}
            </div>
        </div>
    )
}
 

export default Comments;
