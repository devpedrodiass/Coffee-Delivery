import React from "react";
import { Divider } from "../../styles";
import SelectedCoffeeItem from "../SelectedCoffeeItem";
import { SelectedCoffeeListContainer } from "./styles";

export default function SelectedCoffeeList() {
  return (
    <SelectedCoffeeListContainer>
      <SelectedCoffeeItem></SelectedCoffeeItem>
      <Divider></Divider>
      <SelectedCoffeeItem></SelectedCoffeeItem>
      <Divider></Divider>
      <SelectedCoffeeItem></SelectedCoffeeItem>
      <Divider></Divider>
      <SelectedCoffeeItem></SelectedCoffeeItem>
    </SelectedCoffeeListContainer>
  );
}
