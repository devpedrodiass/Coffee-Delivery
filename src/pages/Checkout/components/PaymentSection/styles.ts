import styled, { css } from 'styled-components';

export const PaymentSectionContainer = styled.div`
  background: ${props => props.theme['base-card']};
  border-radius: 0.375rem;
  padding: 2.5rem;
`;

export const PaymentHeader = styled.header`
  display: flex;
  flex-direction: column;
  & > div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }

  & > div > svg {
    color: ${props => props.theme['purple']};
  }

  & > div > h1 {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${props => props.theme['base-subtitle']};
  }

  & > p {
    margin-left: 2rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;  
    color: ${props => props.theme['base-text']};
  }
`;

export const PaymentMethods = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 0.75rem;
  @media (max-width: 600px) {
    flex-direction: column;
  }
  & > button {
    width: 100%
  }
`;

interface PaymentTypeButtonProps {
  isSelected: boolean
}

export const PaymentTypeButton = styled.button<PaymentTypeButtonProps>`
  width: 33%;
  padding: 1rem;
  gap: 0.75rem;
  height: 3.1875rem;
  background: ${props => props.theme['base-button']};
  border: 0;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  & > svg {
    color: ${props => props.theme['purple']};
  }
  
  & > span {
    font-size: 0.75rem;
    line-height: 160%;
    text-transform: uppercase;
    color: ${props => props.theme['base-text']};
  }
  
  &:hover {
    color: ${props => props.theme['base-hover']};
  }
  
  ${props => props.isSelected ? css`
  background: ${props => props.theme['purple-light']};
  border: 1px solid ${props => props.theme['purple']};
  ` : ''}

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["purple"]}
  }
`;