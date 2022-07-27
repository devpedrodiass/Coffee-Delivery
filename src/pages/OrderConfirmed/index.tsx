import React from "react";
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

export default function OrderConfirmed() {
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
                Entrega em
                <strong> Rua João Daniel Martinelli, 102</strong>
              </p>
              <span>Farrapos - Porto Alegre, RS</span>
            </LocaleContainer>

            <DeliveryTimeContainer>
              <span></span>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min </strong>
            </DeliveryTimeContainer>

            <PaymentMethodContainer>
              <span></span>
              <p>Pagamento na entrega</p>
              <strong>Cartão de Crédito</strong>
            </PaymentMethodContainer>
          </DeliveryInformationCard>
        </OrderConfirmedGradientBorder>
        <OrderImage src={orderConfirmedImage}></OrderImage>
      </footer>
    </OrderConfirmedContainer>
  );
}
