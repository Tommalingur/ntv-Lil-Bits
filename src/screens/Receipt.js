import ".././App.css";
import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LinkButton } from "../components/Components";

const ReceiptGrid = styled.div`
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

const ReceiptContentGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-area: content;
  grid-template-areas:
    "carousel carousel carousel carousel order order"
    "f-order f-order f-order info info info";
`;

const CarouselBox = styled.div`
  border: 4px solid var(--clr-secondary);
  grid-area: carousel;
`;
const OrderBox = styled.div`
  border: 4px solid var(--clr-secondary);
  grid-area: order;
`;
const FindOrderBox = styled.div`
  border: 4px solid var(--clr-secondary);
  grid-area: f-order;
`;
const InfoBox = styled.div`
  border: 4px solid var(--clr-secondary);
  grid-area: info;
`;

function Receipt() {
  return (
    <ReceiptGrid>
      <Header />
      <ReceiptContentGrid>
        <CarouselBox></CarouselBox>
        <OrderBox>
          <h2>Book a table</h2>
          <p>Here you can book a table for up to 10 people.</p>
          <p>All you have to do is get here and enjoy!</p>
          <Link to="/">
            <LinkButton>Book a table!</LinkButton>
          </Link>
        </OrderBox>
        <FindOrderBox></FindOrderBox>
        <InfoBox></InfoBox>
      </ReceiptContentGrid>
    </ReceiptGrid>
  );
}

export default Receipt;
