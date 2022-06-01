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
  grid-template-rows: 1fr 2fr 2fr;
  border: 4px solid var(--clr-secondary);
  color: var(--clr-secondary);
  grid-area: receipt;
  grid-template-areas: "text text" "food drink" "food drink";
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
`;
const DishBox = styled.div`
  display: inline-block;
  text-align: left;
  justify-content: column;
  grid-area: food;
`;
const Food = styled.div``;
const Price = styled.div``;
const DrinkBox = styled.div`
  display: inline-block;
  text-align: left;
  grid-area: drink;
`;

function Receipt() {
  const [food, setFood] = useState([]);
  const [drinks, setDrink] = useState([]);
  const [dishPrice, setDishPrice] = useState([]);

  useEffect(() => {
    const food = JSON.parse(localStorage.getItem("Dishes"));
    const dishPrice = localStorage.getItem("DishPrice");
    const drinks = JSON.parse(localStorage.getItem("Drink"));
    if ((food, drinks, dishPrice)) {
      setFood(food);
      setDrink(drinks);
      setDishPrice(dishPrice);
    }
  }, []);
  console.log(drinks);
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
            {drinks.map((drink) => (
              <DrinkBox key={drink.id}>{drink}</DrinkBox>
            ))}
          </FoodBox>
        </ReceiptBox>
      </ReceiptContentGrid>
    </ReceiptGrid>
  );
}

export default Receipt;
