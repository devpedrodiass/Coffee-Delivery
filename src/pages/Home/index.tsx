import React from "react";
import { CoffeeList } from "./components/CoffeeList";
import {
  Badge,
  BadgesContainer,
  BrandSection,
  BrandTexts,
  HomeContainer,
} from "./styles";

import brandImage from "../../assets/brandImage.svg";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export default function Home() {
  return (
    <HomeContainer>
      <BrandSection>
        <BrandTexts>
          <h1>Find the perfect coffee for any time of day</h1>
          <p>
            With Coffee Delivery you get your coffee wherever you are, anytime
          </p>
          <BadgesContainer>
            <Badge badgeColor="yellow-dark">
              <span>
                <ShoppingCart size={16}></ShoppingCart>
              </span>
              Simple and secure purchase
            </Badge>
            <Badge badgeColor="gray">
              <span>
                <Package size={16}></Package>
              </span>
              Packaging keeps the coffee intact
            </Badge>
            <Badge badgeColor="yellow">
              <span>
                <Timer size={16}></Timer>
              </span>
              Fast and tracked delivery
            </Badge>
            <Badge badgeColor="purple">
              <span>
                <Coffee size={16}></Coffee>
              </span>
              Coffee arrives fresh to you
            </Badge>
          </BadgesContainer>
        </BrandTexts>
        <img src={brandImage} alt="Coffee with a yellow background" />
      </BrandSection>
      <CoffeeList></CoffeeList>
    </HomeContainer>
  );
}
