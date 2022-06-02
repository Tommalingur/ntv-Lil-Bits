import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { LinkButton } from "./Components";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 4fr 1fr;
  width: 100vh;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  grid-template-areas:
    "dish"
    "button";
`;
const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: thumb;
`;
const DishInfo = styled.div`
  display: grid;
  justify-self: stretch;
  align-self: center;
  width: fit-content;
  grid-template-rows: 8fr 2fr 1fr 1fr 1fr;
  grid-area: dish;
  grid-template-areas:
    "thumb"
    "meal"
    "cat"
    "ori"
    "price";
`;
const MealThumb = styled.div`
  display: flex;
  justify-self: center;
  align-items: center;
  grid-area: thumb;
`;
const MealImg = styled.img`
  height: 30vh;
  width: 30vw;
`;
const Meal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  grid-area: meal;
`;
const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: cat;
`;
const Origin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: ori;
`;
const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  grid-area: price;
`;
const DishButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: button;
  padding-bottom: 10px;
`;

const DishApi = () => {
  const DishPrice = 50.0;
  const [dishes, setDishes] = useState([]);
  const getDishes = async () => {
    const result = await axios.get(
      "https://themealdb.com/api/json/v1/1/random.php"
    );
    setDishes(result.data.meals);
  };

  useEffect(() => {
    getDishes();
  }, []);

  if (dishes.length === 0) {
    return (
      <Wrapper>
        <Loading>Loading...</Loading>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {dishes.map((dish) => (
        <DishInfo key={dish.idMeal}>
          <MealThumb>
            <MealImg src={dish.strMealThumb} />
          </MealThumb>
          <Meal>{dish.strMeal}</Meal>
          <Category>{dish.strCategory}</Category>
          <Origin>{dish.strArea}</Origin>
          {localStorage.setItem("Dishes", JSON.stringify(dish.strMeal))}
          <Price>{DishPrice}$</Price>
          {localStorage.setItem("DishPrice", DishPrice)}
        </DishInfo>
      ))}

      <DishButton>
        <LinkButton onClick={() => getDishes(useEffect)}>New Dish</LinkButton>
      </DishButton>
    </Wrapper>
  );
};

export default DishApi;
