import React from "react";
import AddressForm from "./components/AddressForm";
import ConfirmSection from "./components/ConfirmSection";
import PaymentSection from "./components/PaymentSection";
import { CheckoutContainer } from "./styles";

export default function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h1>Complete your order</h1>
        <AddressForm></AddressForm>
        <PaymentSection></PaymentSection>
      </div>
      <div>
        <h1>Selected coffees</h1>
        <ConfirmSection></ConfirmSection>
      </div>
    </CheckoutContainer>
  );
}
