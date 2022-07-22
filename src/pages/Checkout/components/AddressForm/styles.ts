import styled from "styled-components";

export const AddressFormContainer = styled.div`
  background: ${props => props.theme['base-card']};
  border-radius: 0.375rem;
  padding: 2.5rem;
`;

export const HeaderSection = styled.header`
  display: flex;
  flex-direction: column;
  & > div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }

  & > div > svg {
    color: ${props => props.theme['yellow-dark']};
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
`


export const FormSection = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & > div {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
  }

  @media (max-width: 650px) {
    & > div {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    }
  }
`;

interface InputFormProps {
  width?: string
}

export const InputForm = styled.input<InputFormProps>`
  background: ${props => props.theme['base-input']};
  border-radius: 0.25rem;
  padding: 0.75rem;
  border: 1px solid ${props => props.theme['base-button']};
  &::placeholder {
    color: ${props => props.theme['base-label']};
  }
  width: ${props => props.width};
  transition: all 0.2s;
  @media (max-width: 650px) {
    width: 100%;
  }
`;