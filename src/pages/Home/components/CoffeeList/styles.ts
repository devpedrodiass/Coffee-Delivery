import styled from 'styled-components';

export const CoffeeListContainer = styled.div`
display: flex;
flex-direction: column;
`;

export const CoffeeCardListSection = styled.section`
  display: grid;
  /* grid-template-columns: repeat(4, 1fr); */
  gap: 2.5rem;
  
  @media (min-width: 2080px) {
    grid-template-columns: repeat(6, 1fr) ;
  }
  @media (max-width: 2080px) {
    grid-template-columns: repeat(6, 1fr) ;
  }
  @media (max-width: 1979px) {
    grid-template-columns: repeat(5, 1fr) ;
  }
  @media (max-width: 1850px) {
    grid-template-columns: repeat(4, 1fr) ;
  }
  @media (max-width: 1560px) {
    grid-template-columns: repeat(3, 1fr) ;
    place-items: center;
  }
  @media (max-width: 1110px) {
    grid-template-columns: repeat(2, 1fr) ;
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr) ;
  }
 
  
  
`;

export const CoffeeListTitle = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 2rem;
  line-height: 130%;
  color: ${props => props.theme['base-subtitle']};
  margin-bottom: 1rem;
`;
