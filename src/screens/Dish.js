import ".././App.css";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LinkButton } from "../components/Components";
import DishApi from "../components/DishApi";

const DishGrid = styled.div`
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

const DishContentGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-area: content;
  grid-template-areas:
    "dish dish dish dish next next"
    "dish dish dish dish . .";
`;

const DishBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid var(--clr-secondary);
  color: var(--clr-secondary);
  grid-area: dish;
`;
const NextBox = styled.div`
  border: 4px solid var(--clr-secondary);
  color: var(--clr-secondary);
  grid-area: next;
`;

function Dish() {
  return (
    <DishGrid>
      <Header />
      <DishContentGrid>
        <DishBox>
          <DishApi />
        </DishBox>
        <NextBox>
          <h2>Select dish</h2>
          <p>Select the dish you want from here.</p>
          <p>Then check out our wide selection of drinks.</p>
          <Link to="/Drink">
            <LinkButton>Book a table!</LinkButton>
          </Link>
        </NextBox>
      </DishContentGrid>
    </DishGrid>
  );
}

export default Dish;
