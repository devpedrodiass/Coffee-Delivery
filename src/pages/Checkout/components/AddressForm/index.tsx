import { MapPinLine } from "phosphor-react";
import React from "react";
import { AddressFormContainer, FormSection, InputForm } from "./styles";

export default function AddressForm() {
  return (
    <AddressFormContainer>
      <header>
        <MapPinLine size={22}></MapPinLine>
        <h1>Delivery address</h1>
        <p>Enter the address where you want to receive your order</p>
      </header>
      <FormSection>
        <InputForm placeholder="Postal Code" width="33%"></InputForm>
        <InputForm placeholder="Street" width="100%"></InputForm>
        <div>
          <InputForm placeholder="Number" width="33%"></InputForm>
          <InputForm placeholder="Complement" width="67%"></InputForm>
        </div>
        <div>
          <InputForm placeholder="District" width="33%"></InputForm>
          <InputForm placeholder="City" width="33%"></InputForm>
          <InputForm placeholder="State" width="33%"></InputForm>
        </div>
      </FormSection>
    </AddressFormContainer>
  );
}
