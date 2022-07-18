import React from "react";
import { CoffeeCard } from "../CoffeeCard";
import {
  CoffeeCardListSection,
  CoffeeListContainer,
  CoffeeListTitle,
} from "./styles";

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <CoffeeListTitle>Our Coffees</CoffeeListTitle>
      <CoffeeCardListSection>
        <CoffeeCard></CoffeeCard>
        <CoffeeCard></CoffeeCard>
        <CoffeeCard></CoffeeCard>
        <CoffeeCard></CoffeeCard>
        <CoffeeCard></CoffeeCard>
        <CoffeeCard></CoffeeCard>
        <CoffeeCard></CoffeeCard>
        <CoffeeCard></CoffeeCard>
        <CoffeeCard></CoffeeCard>
        <CoffeeCard></CoffeeCard>
        <CoffeeCard></CoffeeCard>
        <CoffeeCard></CoffeeCard>
        <CoffeeCard></CoffeeCard>
        <CoffeeCard></CoffeeCard>
        <CoffeeCard></CoffeeCard>
        <CoffeeCard></CoffeeCard>
      </CoffeeCardListSection>
    </CoffeeListContainer>
  );
}
