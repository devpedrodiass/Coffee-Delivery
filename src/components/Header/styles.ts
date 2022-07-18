import styled from 'styled-components';

export const HeaderContainer = styled.header`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;
export const BaseButton = styled.button`
  border-radius: 6px;
  border: 0;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  line-height: 130%;
  &:last-child {
    margin-left: 1rem;
  }
`;

export const LocaleButton = styled(BaseButton)`
  margin-left: auto;
  background: ${props => props.theme['purple-light']};
  color: ${props => props.theme['purple-dark']};
  svg {
    color: ${props => props.theme['purple']};
    margin-right: 0.25rem;
  }
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["purple-dark"]}
  }
  `;

export const CheckoutButton = styled(BaseButton)`
  position: relative;
  background: ${props => props.theme['yellow-light']};
  svg {
    color: ${props => props.theme['yellow-dark']};
  }
  `;

export const NotificationCounter = styled.span`
  width: 20px;
  height: 20px;
  position: absolute;
  top: -7px;
  right: -7px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme['yellow-dark']};
  color: ${props => props.theme['white']};
`
