import React from 'react';

export default function MovieSection({title, items}){

  const url = `https://image.tmdb.org/t/p/w300`;
  
  const firstResults = {};
  items.map((item) => (
    firstResults.items = item
  ));
  
  return(
      <div>
        <h1>{title}</h1>
        {/* {<h3>{console.log("Aqui", title, secondResult)}</h3>} */}
        <div className="movieListArea">
          {firstResults.items.results.length > 0 && firstResults.items.results.map((item, key) => (
            <img src={`${url}${item.poster_path}`} key={key}/>
          ))}
        </div>
      </div>

  )
}