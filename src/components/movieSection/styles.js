import styled from 'styled-components';

export const MovieRow = styled.div`
  margin-bottom: 30px;
`;

export const MovieArea = styled.div`
  overflow-x: hidden;
  padding-left: 30px;
`;

export const MovieRoll = styled.div`
  width: 9999999px;
`;

export const ImageDiv = styled.div`
  display: inline-block;
  width: 150px;
  cursor: pointer;
`;

export const Title = styled.h2`
  margin: 0px 0px 0px 30px;
`;

export const Image = styled.img`
  width: 100%;
  transform: scale(0.9);
  transition: all ease 0.2s;
  &:hover {
    transform: scale(1.0);
  }
`;

