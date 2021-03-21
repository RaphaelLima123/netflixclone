import styled from 'styled-components';

export const FeaturedMovieSection= styled.section`
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.url});
`;

export const TitleArea = styled.div``;

export const MovieDescription = styled.div``;

export const MovieInfo = styled.div``;

export const MovieRated = styled.div``;

export const MovieYear = styled.div``;

export const MovieSeasons = styled.div``;

export const ButtonArea = styled.div``;

export const ButtonWatch = styled.button`
  cursor: pointer;
`;

export const ButtonSave = styled.button`
  cursor: pointer;
`;

export const MovieGenres = styled.div``;

export const VerticalFeatured = styled.div`
  height: inherit;
  width: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);
`;

export const HorizontalFeatured = styled.div`
  height: inherit;
  width: inherit;
  background: linear-gradient(to right, #111 30%, transparent 70%);
`;