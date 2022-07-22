import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme['base-card']};
  border-radius: 0.357rem 2.25rem;
  width: 256px;
  height: 370px;
  padding: 1.5rem;
`

export const CategoriesContainer = styled.div`
  margin-top: 0.75rem;
  display: flex;
  gap: 0.5rem;
`

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  font-weight: 700;
  font-size: 0.6rem;
  line-height: 130%;
  background: ${props => props.theme['yellow-light']};
  color: ${props => props.theme['yellow-dark']};
  border-radius: 100px;
  text-transform: uppercase;
`
export const CoffeeName = styled.h1`
  margin-top: 1rem;
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 130%;
  color: ${props => props.theme['base-subtitle']};
`
export const CoffeeDescription = styled.p`
  margin-top: 0.5rem;
  text-align: center;
  font-size: 0.875rem;
  line-height: 130%;
  color: ${props => props.theme['base-label']};
`
export const Actions = styled.div`
  margin-top: 2.0625rem;
  display: flex;
  align-items: center;
  width: 100%;
`
export const CoffeePrice = styled.div`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 130%;
  margin-right: auto;

  & > span {
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-weight: 300;
    line-height: 130%;
  }
`
export const AmountSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${props => props.theme['base-button']};
  padding: 0.5rem;
  border-radius: 6px;
  margin-right: 0.5rem

`
export const AmountCounter = styled.p`
  color: ${props => props.theme['base-title']};
  font-size: 1rem;
  line-height: 130%;
`

export const AmountButton = styled.button`
  background: transparent;
  font-weight: bold;
  border: 0;
  color: ${props => props.theme['purple']};
  padding: 0.1rem;
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["purple-dark"]}
  }
`

export const CartButton = styled.button`
  border: 0;
  background: ${props => props.theme['purple-dark']};
  color: ${props => props.theme['white']};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.2s;
  
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["purple"]}
  }
  
  &:hover{
    background: ${props => props.theme['purple']};

  }
`