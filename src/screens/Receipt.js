import ".././App.css";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LinkButton } from "../components/Components";

const ReceiptGrid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 1.5fr 1.5fr 1fr;
  grid-template-rows: 0.5fr 0.1fr 3fr 0.5fr;
  grid-template-areas:
    "nav nav nav nav"
    ". . . ."
    ". content content . "
    ". . . .";
`;

const ReceiptContentGrid = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(5 1fr);
  grid-template-rows: 0.5fr 4.5fr;
  grid-area: content;
  grid-template-areas:
    ". . order . ."
    ". receipt receipt receipt .";
`;

const ReceiptBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 4fr;
  border: 4px solid var(--clr-secondary);
  color: var(--clr-secondary);
  grid-area: receipt;
  grid-template-areas: "text text" "receipt receipt" "receipt receipt" "receipt receipt";
`;
const OrderBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: order;
`;
const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: text;
  border-bottom: 4px solid var(--clr-secondary);
`;
const FoodBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  font-size: 0.8rem;
  grid-area: receipt;
`;
const DishBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  grid-area: food;
`;
const Food = styled.div`
  justify-self: center;
`;
const Price = styled.div`
  justify-self: center;
  text-align: center;
`;
const DrinkBox = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  grid-area: drink;
`;

function Receipt() {
  const [food, setFood] = useState([]);
  const [drinks, setDrink] = useState([]);
  const [dishPrice, setDishPrice] = useState([]);
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState(null);

  useEffect(() => {
    const food = JSON.parse(localStorage.getItem("Dishes"));
    const dishPrice = localStorage.getItem("DishPrice");
    const drinks = JSON.parse(localStorage.getItem("Drink"));
    const date = localStorage.getItem("Date");
    const email = JSON.parse(localStorage.getItem("email"));
    const guests = JSON.parse(localStorage.getItem("Guests"));
    if ((food, drinks, dishPrice)) {
      setFood(food);
      setDrink(drinks);
      setDishPrice(dishPrice);
      setDate(date);
      setEmail(email);
      setGuests(guests);
    }
  }, []);

  let drinksList = Object.entries(drinks);

  let drinkPrice = drinksList.filter((element, index) => {
    return index % 2 === 1;
  });
  let drinksPriceSum = drinkPrice.reduce(function (prev, current) {
    return prev + +current[1];
  }, 0);
  let totalPrice = drinksPriceSum + parseInt(dishPrice);

  let dateString = date.substring(0, 24);

  return (
    <ReceiptGrid>
      <Header />
      <ReceiptContentGrid>
        <OrderBox>
          <Link to="/">
            <LinkButton>Return home</LinkButton>
          </Link>
        </OrderBox>
        <ReceiptBox>
          <TextBox>Receipt for order</TextBox>
          <FoodBox>
            <h2>Chosen dish:</h2>
            <DishBox>
              <Food>{food}</Food>
              <Price>{dishPrice}</Price>
            </DishBox>
            <h2>Chosen drinks:</h2>
            {drinksList.map((drink) => (
              <DrinkBox key={drink[0]}>{drink[1]}</DrinkBox>
            ))}
            <h2>Total Price: {totalPrice}$</h2>
            <h3>Guests: {guests}</h3>
            <h3>Date: {dateString}</h3>
            <h3>Email: {email}</h3>
          </FoodBox>
        </ReceiptBox>
      </ReceiptContentGrid>
    </ReceiptGrid>
  );
}

export default Receipt;
