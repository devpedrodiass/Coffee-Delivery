import { useContext, useState } from "react";
import {
  Actions,
  AmountButton,
  AmountCounter,
  AmountSelector,
  CartButton,
  CategoriesContainer,
  Category,
  CoffeeCardContainer,
  CoffeeDescription,
  CoffeeName,
  CoffeePrice,
} from "./styles";

import { Minus, Plus, ShoppingCart } from "phosphor-react";
import coffeEx from "../../../../assets/CoffeeEx.svg";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";
import { toast } from "react-toastify";

interface CoffeeCardProps {
  coffeeId: string;
  name: string;
  description: string;
  price: number;
  amount: number;
  categories: string[];
  image: string;
}

export function CoffeeCard({
  amount,
  description,
  coffeeId,
  name,
  price,
  categories,
  image,
}: CoffeeCardProps) {
  const { addCoffeeToCheckout, checkout } = useContext(CoffeeContext);
  const [selectedAmount, setSelectedAmount] = useState(() => amount);

  function handleAddCoffeeToCheckout() {
    const oldCoffee = {
      amount,
      description,
      id: coffeeId,
      name,
      price,
      categories,
      image,
    };
    const newCoffee = { ...oldCoffee, amount: selectedAmount };
    addCoffeeToCheckout(newCoffee);
    toast.success(`${name} successfully added to your cart !`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
    setSelectedAmount(0);
  }

  return (
    <CoffeeCardContainer>
      <img src={image} alt="" />
      <CategoriesContainer>
        {categories.map((category, index) => (
          <Category key={`${category}-${index}`}>{category}</Category>
        ))}
      </CategoriesContainer>
      <CoffeeName>{name}</CoffeeName>
      <CoffeeDescription>{description}</CoffeeDescription>
      <Actions>
        <CoffeePrice>
          <span>$</span> {price}
        </CoffeePrice>
        <AmountSelector>
          <AmountButton
            onClick={() =>
              setSelectedAmount((oldState) =>
                oldState === 0 ? 0 : oldState - 1
              )
            }
          >
            <Minus size={12} weight="bold"></Minus>
          </AmountButton>
          <AmountCounter>{selectedAmount}</AmountCounter>
          <AmountButton
            onClick={() => setSelectedAmount((oldState) => oldState + 1)}
          >
            <Plus size={12} weight="bold"></Plus>
          </AmountButton>
        </AmountSelector>
        <CartButton
          disabled={!selectedAmount}
          onClick={() => handleAddCoffeeToCheckout()}
        >
          <ShoppingCart size={22}></ShoppingCart>
        </CartButton>
      </Actions>
    </CoffeeCardContainer>
  );
}
