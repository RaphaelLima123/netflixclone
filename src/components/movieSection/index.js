import React from 'react';

export default function MovieSection({title, items}){

  const url = `https://image.tmdb.org/t/p/w300`;

  return(
      <div>
        <h2>{title}</h2>
        <h3>{console.log("Aqui", title, items)}</h3>
        <div className="movieListArea">
          {items.length > 0 && items.map((item, key) => (
            <img src={`${url}${item.poster_path}`} key={key}/>
          ))}
        </div>
      </div>

  )
}