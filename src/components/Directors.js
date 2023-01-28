import React from "react";
import { directors } from "../data";

function Directors() {
  const direct = directors.map((director,index)=>{
    return <div key={director+index}>
            <h2>Name: {director.name}</h2>
            <h4>Movies</h4>
            <ul>
            {director.movies.map((list,index)=>{
              return<li key={list+index}>{list}</li>
            })}
            </ul>
          </div>
  })
  return(
    <div>
      <h1>Directors Page</h1>
      {direct}
    </div>
  )
}

export default Directors;

