import styled from 'styled-components';

export const FeaturedMovieSection= styled.section`
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.url});
`;

export const TitleArea = styled.div`
  font-size: 60px;
  font-weight: bold;
`;

export const MovieDescription = styled.div`
  margin-top: 15px;
  font-size: 20px;
  color: #999;
  max-width: 40%;
`;

export const MovieInfo = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
`;

export const MovieRated = styled.div`
  display: inline-block;
  color: #46d369;
  margin-right: 15px;
`;

export const MovieYear = styled.div`
  display: inline-block;
  margin-right: 15px;
`;

export const MovieSeasons = styled.div`
  display: inline-block;
  margin-right: 15px;
`;

export const ButtonArea = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  margin-right: 15px;
`;

export const ButtonWatch = styled.a`
  cursor: pointer;
  background-color: #fff;
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 10px;
  color: #000;
  opacity: 1;
  &:hover {
    opacity: 0.7;
  }
  transition: all ease 0.4s;
`;

export const ButtonSave = styled.a`
  cursor: pointer;
  background-color: #333;
  display: inline-block;
  font-size: 20px;
  font-weight: bold;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 10px;
  color: #fff;
  opacity: 1;
  &:hover {
    opacity: 0.7;
  }
  transition: all ease 0.4s;
`;

export const MovieGenres = styled.div`
  margin-top: 15px;
  font-size: 18px;
  color: #fff;
`;

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