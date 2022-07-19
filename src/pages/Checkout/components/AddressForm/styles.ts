import styled from "styled-components";

export const AddressFormContainer = styled.div`
  background: ${props => props.theme['base-card']};
  border-radius: 0.375rem;
  padding: 2.5rem;
`;

export const FormSection = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & > div {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
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
`;