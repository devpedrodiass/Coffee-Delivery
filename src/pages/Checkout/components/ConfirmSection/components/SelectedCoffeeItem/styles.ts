import styled from 'styled-components';

export const SelectedCoffeeItemContainer = styled.div`
  display: flex;
  gap: 1.25rem;
  & > div {
    width: 100%;
  }
  &:first-child {
    padding: 0 0 1.5rem 0.25rem;
  }
  &:not(:first-child), &:last-child {
    padding: 1.5rem 0 0 0.25rem;
  }
  &:not(:last-child) {
    padding: 1.5rem 0 1.5rem 0.25rem;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    & > div {
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items: center;
  }
  }
`;

export const CoffeeImage = styled.img`
  width: 4rem;
  height: 4rem;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const CoffeeTextSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  & > :first-child {
    font-size: 1rem;
    line-height: 130%;
    color: ${props => props.theme['base-subtitle']};
  }

  & > :last-child {
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;
    color: ${props => props.theme['base-text']};
  }
`;

export const CoffeeActionButtons = styled.div`
  margin-top: 0.5rem;
  display: flex;
`;

export const CoffeeRemoveButton = styled.button`
  border: none;
  display: flex;
  gap: 0.25rem;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme['base-button']};
  transition: all 0.2s;
  border-radius: 0.375rem;
  padding: 0px 0.5rem;

  font-size: 12px;
  line-height: 160%;
  text-transform: uppercase;
  
  color: ${props => props.theme['base-text']};
  & > svg {
    color: ${props => props.theme['purple']};
  }
  
  &:hover {
    background: ${props => props.theme['base-hover']};
    
  }
`;
