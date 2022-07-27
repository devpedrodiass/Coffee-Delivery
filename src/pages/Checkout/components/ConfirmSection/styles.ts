import styled from 'styled-components';

export const ConfirmSectionContainer = styled.div`
  padding: 2.5rem;
  gap: 1.5rem;
  border-radius: 0.375rem 2.75rem;
  background: ${props => props.theme['base-card']};
  display: flex;
  flex-direction: column;
`;

export const Divider = styled.div`
  height: 1px;
  background:  ${props => props.theme['base-button']};
`;

export const ConfirmAmountSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  & > p {
    display: flex;
    justify-content: space-between;
  }
  & > :not(:last-child) {
    font-size: 0.875rem;
    line-height: 130%;
    color:  ${props => props.theme['base-text']};
  }
  & > :last-child {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    color:  ${props => props.theme['base-subtitle']};
  }
`;

export const ConfirmButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  gap: 0.25rem;
  height: 2.875rem;
  border: none;

  background: ${props => props.theme['yellow']};
  border-radius: 0.375rem;
  
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 160%;
  color: ${props => props.theme['white']};
  font-stretch: 100;
  text-transform: uppercase;

  transition: all 0.2s;

  &:disabled {
    cursor: not-allowed;
    filter: brightness(0.9);
  }
  
  &:hover {
    background: ${props => props.theme['yellow-dark']};
  }
`;
