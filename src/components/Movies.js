import React from "react";
import { movies } from "../data";

function Movies() {
  const movie = movies.map((movie,index)=>{
    return <div key={movie+index}>
            <h2>Title: {movie.title}</h2>
            <p>Time: {movie.time}</p>
            <h5>Genre</h5>
            <ul>
            {movie.genres.map((list,index)=>{
              return<li key={list+index}>{list}</li>
            })}
            </ul>
          </div>
  })


  return(
    <div>
      <h1>Movies Page</h1>
      {movie}
    </div>
  )
}

export default Movies;




