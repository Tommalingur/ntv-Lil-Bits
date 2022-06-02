import ".././App.css";
import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LinkButton } from "../components/Components";
import DrinkApi from "../components/DrinkApi";

const DrinkGrid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 1.5fr 1.5fr 1fr;
  grid-template-rows: 0.5fr 0.5fr 2.5fr 0.5fr;
  grid-template-areas:
    "nav nav nav nav"
    ". . . ."
    ". content content . "
    ". . . .";
`;

const DrinkContentGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-area: content;
  grid-template-areas:
    "drink drink drink drink next next"
    "drink drink drink drink . .";
`;

const OrderBox = styled.div`
  color: var(--clr-secondary);
  grid-area: drink;
`;
const NextBox = styled.div`
  border: 4px solid var(--clr-secondary);
  color: var(--clr-secondary);
  grid-area: next;
`;

function Drink() {
  return (
    <DrinkGrid>
      <Header />
      <DrinkContentGrid>
        <OrderBox>
          <DrinkApi />
        </OrderBox>
        <NextBox>
          <h2>Select drink</h2>
          <p>Select the drink you want from here.</p>
          <p>Then check out our wide selection of drinks.</p>
          <Link to="/Order">
            <LinkButton disabled={false}>Book a table!</LinkButton>
          </Link>
        </NextBox>
      </DrinkContentGrid>
    </DrinkGrid>
  );
}

export default Drink;
