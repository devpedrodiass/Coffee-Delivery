import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CheckoutContainer = styled.form`
  margin-top: 2.5rem;
  display: flex;
  gap: 2rem;
  width: 100%;
  & > div {
    width: 50%;
    & > h1 {
      margin-bottom: 1rem;
      font-family: 'Baloo 2';
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 130%;
    }
  }
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    & > div {
      width: 100%
    }
  }
`;

export const ReturnButton = styled(NavLink)`
  margin-top: 1.5rem;
  margin-bottom: -1.0rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #fff;
  border: none;
  align-self: flex-start;
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: all 0.2s;
  color: ${props => props.theme['base-text']};
  
  &:hover {
    filter: brightness(0.9)
  }
`

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
