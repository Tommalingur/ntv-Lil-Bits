import React, { useState, useEffect } from "react";
import axios from "axios";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 600px;
  box-sizing: border-box;
  padding-top: 2rem;
  overflow-y: scroll;
`;
const Loading = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;
const DrinkCard = styled.button`
  width: 75%;
  background-color: var(--clr-primary);
  border: 4px solid var(--clr-secondary);
  color: var(--clr-secondary);
  font-family: "Morille";
  padding: 2rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  &:hover {
    color: var(--clr-alert);
  }
  ${(props) =>
    props.selected &&
    css`
      background-color: var(--clr-primary);
      color: #c16757;
      border: 3px solid var(--clr-alert);
      &:hover {
        background-color: var(--clr-secondary);
        color: red;
      }
    `}
`;
const DrinkImg = styled.div`
  display: flex;
  justify-self: center;
  align-items: center;
`;
const Image = styled.div`
  display: flex;
  justify-self: center;
  align-items: center;
`;

const DrinkName = styled.div`
  font-size: 2rem;
  font-weight: 0.5rem;
  padding-bottom: 0.5rem;
`;
const DrinkPercentage = styled.div`
  font-size: 1rem;
`;
const DrinkPairing = styled.div`
  font-size: 0.8rem;
`;
const Description = styled.div`
  font-size: 0.6rem;
`;
const DrinkApi = () => {
  const [dataSet, setDataSet] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const getDrinks = async () => {
    const result = await axios.get("https://api.punkapi.com/v2/beers");
    setDrinks(result.data);
  };

  useEffect(() => {
    getDrinks();
  }, []);

  if (drinks.length === 0) {
    return (
      <Wrapper>
        <Loading>Loading...</Loading>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {drinks.map((drink) => (
        <DrinkCard
          key={drink.id}
          selected={dataSet.includes(drink.id)}
          onClick={() => {
            setDataSet([...dataSet, drink.id]);
          }}
        >
          {console.log(dataSet)}
          <DrinkImg>
            <Image src={drink.image_url} />
          </DrinkImg>
          <DrinkName>{drink.name}</DrinkName>
          <DrinkPercentage>Alc: {drink.abv} %</DrinkPercentage>
          <Description>{drink.description}</Description>
          <DrinkPairing>Good with: {drink.food_pairing}</DrinkPairing>
        </DrinkCard>
      ))}
    </Wrapper>
  );
};

export default DrinkApi;
