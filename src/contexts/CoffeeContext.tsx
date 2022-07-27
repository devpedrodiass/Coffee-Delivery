import { createContext, ReactNode, useEffect, useReducer } from "react";
import {
  addCoffeeToCheckoutAction,
  addDeliveryInformationAction,
  addOrRemoveAmountFromSelectedCoffeeAction,
  RemoveCoffeeFromCheckoutAction,
} from "../reducers/coffees/actions";
import {
  Checkout,
  Coffee,
  coffeeReducer,
  DeliveryInformation,
} from "../reducers/coffees/reducer";

export type AmountTypeAction = "ADD" | "REMOVE";

interface CoffeeContextType {
  coffees: Coffee[];
  checkout: Checkout;
  addCoffeeToCheckout: (selectedCoffee: Coffee) => void;
  removeCoffeeFromCheckout: (selectedCoffeeId: string) => void;
  addOrRemoveAmountFromSelectedCoffee: (
    type: AmountTypeAction,
    selectedCoffeeId: string
  ) => void;
  submitDeliveryInformation: (
    newDeliveryInformation: DeliveryInformation
  ) => void;
}

const initialCoffeeListState = [
  {
    id: "1",
    image: "@src/assets/coffeeImages/traditional.svg",
    name: "Traditional Express",
    description: "Traditional coffee made with hot water and ground beans",
    categories: ["Traditional"],
    price: 9.9,
    amount: 0,
  },
  {
    id: "2",
    name: "America Express",
    image: "@src/assets/coffeeImages/american.svg",
    description: "Diluted espresso, less intense than traditional",
    categories: ["Traditional"],
    price: 9.9,
    amount: 0,
  },
  {
    id: "3",
    name: "Creamy Express",
    image: "@src/assets/coffeeImages/creamy.svg",
    description: "Traditional espresso with creamy foam",
    categories: ["Traditional"],
    price: 9.9,
    amount: 0,
  },
  {
    id: "4",
    name: "Cold Express",
    image: "@src/assets/coffeeImages/cold.svg",
    description: "Drink prepared with espresso coffee and ice cubes",
    categories: ["Traditional", "Cold"],
    price: 9.9,
    amount: 0,
  },
  {
    id: "5",
    name: "Coffee with Milk",
    image: "@src/assets/coffeeImages/withMilk.svg",
    description: "Half and half traditional espresso with steamed milk",
    categories: ["Traditional", "With Milk"],
    price: 10.9,
    amount: 0,
  },
  {
    id: "6",
    name: "Latte",
    image: "@src/assets/coffeeImages/latte.svg",
    description: "A shot of espresso with twice the milk and creamy foam",
    categories: ["Traditional", "With Milk"],
    price: 12.9,
    amount: 0,
  },
  {
    id: "7",
    name: "Capuccino",
    image: "@src/assets/coffeeImages/capuccino.svg",
    description:
      "Cinnamon drink made from equal doses of coffee, milk and foam",
    categories: ["Traditional", "With Milk"],
    price: 12.9,
    amount: 0,
  },
];

const initialCheckoutState: Checkout = {
  selectedCoffee: [],
  deliveryInformation: {
    city: "",
    complement: "",
    district: "",
    number: 0,
    paymentMethod: "none",
    postalCode: 0,
    state: "",
    street: "",
  },
};

export const CoffeeContext = createContext({} as CoffeeContextType);

interface CoffeesContextProviderProps {
  children: ReactNode;
}

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(
    coffeeReducer,
    {
      coffees: initialCoffeeListState,
      checkout: initialCheckoutState,
    },
    () => {
      const storedStateAsJSON = localStorage.getItem(
        "@coffee-deliver:coffee-state-1.0.0"
      );
      if (storedStateAsJSON && storedStateAsJSON.length > 0)
        return JSON.parse(storedStateAsJSON);
      return {
        coffees: initialCoffeeListState,
        checkout: initialCheckoutState,
      };
    }
  );
  const { checkout, coffees } = coffeesState;

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeesState);
    localStorage.setItem("@coffee-deliver:coffee-state-1.0.0", stateJSON);
  }, [coffeesState]);

  function addCoffeeToCheckout({
    description,
    id,
    name,
    price,
    amount,
    categories,
    image,
  }: Coffee) {
    const selectedCoffee: Coffee = {
      image,
      categories,
      id,
      description,
      name,
      price,
      amount,
    };
    dispatch(addCoffeeToCheckoutAction(selectedCoffee));
    console.log(checkout);
  }

  function removeCoffeeFromCheckout(selectedCoffeeId: string) {
    dispatch(RemoveCoffeeFromCheckoutAction(selectedCoffeeId));
  }

  function addOrRemoveAmountFromSelectedCoffee(
    type: AmountTypeAction,
    selectedCoffeeId: string
  ) {
    dispatch(addOrRemoveAmountFromSelectedCoffeeAction(type, selectedCoffeeId));
  }

  function submitDeliveryInformation(
    newDeliveryInformation: DeliveryInformation
  ) {
    dispatch(addDeliveryInformationAction(newDeliveryInformation));
  }

  return (
    <CoffeeContext.Provider
      value={{
        checkout,
        coffees,
        removeCoffeeFromCheckout,
        addOrRemoveAmountFromSelectedCoffee,
        addCoffeeToCheckout,
        submitDeliveryInformation,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
