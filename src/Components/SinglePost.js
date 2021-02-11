import React from 'react';
import Comments from './Comments.js'
import './SinglePost.css';

function SinglePost(props) {

	function capitalizeFirstLetter(string) {
		  return string.charAt(0).toUpperCase() + string.slice(1);
	}

  return (
    <div className="singlePost__container">
       <p className="singlePost__id"><b>Post ID: </b>{props.post.id}</p>
       <h3>{capitalizeFirstLetter(props.post.title)}</h3>
       <p>{capitalizeFirstLetter(props.post.body)}</p>
       <p className = "singlePost__author">Written by: {props.post.author.name}</p>
       <Comments data={props.post.comments}/>
    </div>
  )
}


export default SinglePost;
