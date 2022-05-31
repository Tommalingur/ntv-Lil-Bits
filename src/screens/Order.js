import ".././App.css";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { InputField, GuestFunction, Calendar } from "../components/Components";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LinkButton } from "../components/Components";

const OrderGrid = styled.div`
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

const OrderContentGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  border: 4px solid var(--clr-secondary);
  color: var(--clr-secondary);
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-area: content;
  grid-template-areas:
    "head head"
    "calendar g-text"
    "calendar guest"
    ". input"
    "time next";
`;
const CalendarBox = styled.div`
  display: grid;
  color: var(--clr-secondary);
  grid-area: calendar;
  align-self: center;
`;
const TimeBox = styled.div`
  display: grid;
  color: var(--clr-secondary);
  grid-area: time;
  align-self: center;
`;
const GuestTextBox = styled.div`
  display: grid;
  color: var(--clr-secondary);
  grid-area: g-text;
  align-self: center;
`;
const GuestNumberBox = styled.div`
  color: var(--clr-secondary);
  grid-area: guest;
  align-items: center;
`;
const HeaderBox = styled.div`
  display: grid;
  color: var(--clr-secondary);
  grid-area: head;
  align-self: center;
`;
const InputBox = styled.div`
  display: grid;
  color: var(--clr-secondary);
  grid-area: input;
`;
const NextBox = styled.div`
  display: grid;
  color: var(--clr-secondary);
  grid-area: next;
  align-self: center;
`;

function Order() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const verifyEmail = () => {
    const regEx = /[a-zA-Z0-9.%+-]+@[a-z0-9]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
      setMessage("Email is valid");
    } else if (!regEx.test(email) && email !== "") {
      setMessage("Email is not valid");
    } else {
      setMessage("");
    }
  };
  return (
    <OrderGrid>
      <Header />
      <OrderContentGrid>
        <HeaderBox>
          <h2>Just a few last things</h2>
        </HeaderBox>
        <CalendarBox>
          <h2>Please select a date.</h2>
          <Calendar />
        </CalendarBox>
        <TimeBox></TimeBox>
        <GuestTextBox>
          <h2>Please select number of guests</h2>
        </GuestTextBox>
        <GuestNumberBox>
          <GuestFunction />
        </GuestNumberBox>
        <InputBox>
          <h2>Please enter your email info</h2>
          <InputField
            placeholder="please enter a valid email"
            type="email"
            value={email}
            onChange={handleChange}
          />
        </InputBox>
        <NextBox>
          <Link to="/Receipt">
            <LinkButton onClick={verifyEmail}>Finish order</LinkButton>
          </Link>
        </NextBox>
      </OrderContentGrid>
    </OrderGrid>
  );
}

export default Order;
