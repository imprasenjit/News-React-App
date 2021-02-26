import React, { useState, Fragment,useEffect, memo } from "react";
import { getStory } from "./api/hnapi";
import { mapTime } from "./getTime";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import userProfile from './userProfile'

export const Rows = memo(function Rows({ searchText, storyIdU }) {
  const [story, setStory] = useState({});
  //console.log(searchText);
  let search = new RegExp(searchText, "i");
  useEffect(() => {
    getStory(storyIdU).then((data) => data && setStory(data));
  }, []);
 
  return story && search.test(story.title) ? (  
      <tr>
        <td>
          {" "}
          <a target="_blank" rel="noreferrer" href={story.url}>
            {story.title}
          </a>
        </td>
        <td> {story.score}</td>
        <td>
          <Link to={`/user/${story.by}`}>{story.by}</Link>
        </td>
        <td> {mapTime(story.time)} Ago</td>
      </tr>   
    
  ) : null;
});
