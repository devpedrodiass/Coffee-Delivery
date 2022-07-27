import React, { useContext } from "react";
import {
  DeliveryInformationCard,
  DeliveryTimeContainer,
  LocaleContainer,
  OrderConfirmedContainer,
  OrderConfirmedGradientBorder,
  OrderImage,
  PaymentMethodContainer,
  PrimaryTitle,
  SecondarySubTitle,
} from "./styles";

import orderConfirmedImage from "../../assets/orderConfirmedImage.svg";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { paymentMethod } from "../../reducers/coffees/reducer";

export default function OrderConfirmed() {
  const { checkout } = useContext(CoffeeContext);
  const {
    city,
    complement,
    district,
    number,
    paymentMethod,
    postalCode,
    state,
    street,
  } = checkout.deliveryInformation;

  const paymentMethodFormated = formatPaymentMethod(paymentMethod);

  function formatPaymentMethod(paymentMethod: paymentMethod) {
    switch (paymentMethod) {
      case "cash":
        return "Cash";
      case "credit":
        return "Credit Card";
      case "debit":
        return "Debit Card";
      case "none":
        return "At door";
      default:
        return "At door";
    }
  }

  return (
    <OrderConfirmedContainer>
      <header>
        <PrimaryTitle>Wow! confirmed order</PrimaryTitle>
        <SecondarySubTitle>
          Now all you have to do is wait for the coffee to come to you soon
        </SecondarySubTitle>
      </header>

      <footer>
        <OrderConfirmedGradientBorder>
          <DeliveryInformationCard>
            <LocaleContainer>
              <span></span>
              <p>
                Delivery in
                <strong>
                  {" "}
                  {street}, {number}
                </strong>
              </p>
              <span>
                {district} - {city}, {state} - {postalCode}, {complement}
              </span>
            </LocaleContainer>

            <DeliveryTimeContainer>
              <span></span>
              <p>Delivery forecast</p>
              <strong>20 min - 30 min</strong>
            </DeliveryTimeContainer>

            <PaymentMethodContainer>
              <span></span>
              <p>Payment Method</p>
              <strong>{paymentMethodFormated}</strong>
            </PaymentMethodContainer>
          </DeliveryInformationCard>
        </OrderConfirmedGradientBorder>
        <OrderImage src={orderConfirmedImage}></OrderImage>
      </footer>
    </OrderConfirmedContainer>
  );
}
