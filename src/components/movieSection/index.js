import React from 'react';
import {ImageDiv, Image, MovieRoll, MovieRow, MovieArea, Title} from './styles'

export default function MovieSection({title, items}){

  const url = `https://image.tmdb.org/t/p/w300`;
  
  const firstResults = {};
  items.map((item) => (
    firstResults.items = item
  ));
  
  return(
      <MovieRow>
        <Title>{title}</Title>
        <MovieArea>
          <MovieRoll>
            {firstResults.items.results.length > 0 && firstResults.items.results.map((item, key) => (
              <ImageDiv>
                <Image key={key} src={`${url}${item.poster_path}`} />
              </ImageDiv>
            ))}
          </MovieRoll>
        </MovieArea>
      </MovieRow>
  )
}