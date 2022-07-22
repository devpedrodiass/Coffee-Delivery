import { CaretLeft } from "phosphor-react";
import React from "react";
import AddressForm from "./components/AddressForm";
import ConfirmSection from "./components/ConfirmSection";
import PaymentSection from "./components/PaymentSection";
import { CardsWrapper, CheckoutContainer, ReturnButton } from "./styles";

export default function Checkout() {
  return (
    <>
      <ReturnButton to={"/"}>
        <CaretLeft size={24} weight="bold"></CaretLeft>
        Go back
      </ReturnButton>
      <CheckoutContainer>
        <div>
          <h1>Complete your order</h1>
          <CardsWrapper>
            <AddressForm></AddressForm>
            <PaymentSection></PaymentSection>
          </CardsWrapper>
        </div>
        <div>
          <h1>Selected coffees</h1>
          <ConfirmSection></ConfirmSection>
        </div>
      </CheckoutContainer>
    </>
  );
}
