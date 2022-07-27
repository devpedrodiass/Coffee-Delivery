import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SelectedCoffeeListContainer = styled.div`
  width: 100%;
`;

export const EmptyListMessage = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column ;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  color: ${props => props.theme['base-text']};
`

export const NavigateToHomeButton = styled(Link)`
  font-size: 1rem;
  padding: 0.25rem 0.5rem;
  color: ${props => props.theme['base-subtitle']};
  border-radius: 0.375rem;

  transition: all 0.2s;

  &:hover {
    background: ${props => props.theme['base-hover']};
  }
`