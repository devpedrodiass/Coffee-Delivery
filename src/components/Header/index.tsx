import { MapPin, ShoppingCart } from "phosphor-react";
import React from "react";
import {
  CheckoutButton,
  HeaderContainer,
  LocaleButton,
  NotificationCounter,
} from "./styles";

import CoffeeLogo from "../../assets/coffeeLogo.svg";

export default function Header() {
  return (
    <HeaderContainer>
      <img src={CoffeeLogo} alt="Coffee Delivery Logo" />
      <LocaleButton>
        <MapPin size={22} weight="fill"></MapPin>
        Lisbon, Portugal
      </LocaleButton>
      <CheckoutButton>
        <ShoppingCart size={22} weight="fill"></ShoppingCart>
        <NotificationCounter>3</NotificationCounter>
      </CheckoutButton>
    </HeaderContainer>
  );
}
