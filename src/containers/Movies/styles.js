import styled from 'styled-components'

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  justify-content: center;
`

export const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  img {
    width: 200px;
    height: auto;
    border-radius: 15px;
    transition: transform 0.3s;
  }

  img:hover {
    transform: scale(1.05);
  }

  h3 {
    margin-top: 10px;
    color: #fff;
    text-align: center;
  }
`
