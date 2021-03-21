import React from 'react';
import { FeaturedMovieSection, HorizontalFeatured, TitleArea, VerticalFeatured} from './styles';

const urlBase = 'https://image.tmdb.org/t/p/original';

export default function FeaturedMovie({item}) {
  return (
    <FeaturedMovieSection url={`${urlBase}${item.backdrop_path}`}>
      <VerticalFeatured>
        <HorizontalFeatured/>
      </VerticalFeatured>   
    </FeaturedMovieSection>
  );
}