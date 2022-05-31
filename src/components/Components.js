import React, { useState } from "react";
import styled, { css } from "styled-components";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import ".././App.css";

export const MenuButton = styled.button`
  height: 50px;
  width: 130px;
  background-color: var(--clr-alert);
  color: var(--clr-primary);
  border: 3px solid var(--clr-primary);
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 20px;
  font-family: Morille;
  cursor: pointer;
  &:hover {
    background-color: var(--clr-hover);
  }

  ${(props) =>
    props.selected &&
    css`
      background-color: var(--clr-primary);
      color: #c16757;
      border: 3px solid var(--clr-alert);
      &:hover {
        background-color: var(--clr-primary);
      }
    `}
`;

export const LinkButton = styled.button`
  background-color: var(--clr-alert);
  color: var(--clr-primary);
  height: 50px;
  width: 200px;
  font-family: Morille;
  border: 3px solid var(--clr-secondary);
  border-radius: 20px;
  align-self: center;
  justify-self: center;
  cursor: pointer;
  &:hover {
    background-color: var(--clr-hover);
  }
`;

export const InputField = styled.input`
  border: 3px solid var(--clr-secondary);
  border-radius: 20px;
  height: 20px;
  width: 300px;
  align-self: center;
  justify-self: center;
`;
const GuestBox = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const GuestButton = styled.button`
  color: var(--clr-alert);
  background-color: var(--clr-primary);
  border: none;
  align-self: center;
  justify-self: center;
  font-family: Morille;
  cursor: pointer;
  &:hover {
    background-color: var(--clr-hover);
  }
`;

export const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  return (
    <DatePicker
      value={selectedDay}
      onChange={setSelectedDay}
      inputPlaceholder="Select a day"
      shouldHighlightWeekends
    />
  );
};

export function GuestFunction() {
  let [count, setCount] = useState(1);

  function incrementCount() {
    if (count == 10) {
      setCount(count(10));
    } else {
      count = count + 1;
      setCount(count);
    }
  }
  function decrementCount() {
    if (count == 1) {
      setCount(count(1));
    } else {
      count = count - 1;
      setCount(count);
    }
  }
  return (
    <GuestBox>
      <GuestButton onClick={decrementCount}>
        <FaArrowCircleLeft size={42} />
      </GuestButton>
      <h1>{count}</h1>
      <GuestButton onClick={incrementCount}>
        <FaArrowCircleRight size={42} />
      </GuestButton>
    </GuestBox>
  );
}

export function CarouselFunction() {
  let [count, setCount] = useState(1);

  function incrementCount() {
    if (count == 10) {
      setCount(count(10));
    } else {
      count = count + 1;
      setCount(count);
    }
  }
  function decrementCount() {
    if (count == 1) {
      setCount(count(1));
    } else {
      count = count - 1;
      setCount(count);
    }
  }
  return (
    <GuestBox>
      <GuestButton onClick={decrementCount}>
        <FaArrowCircleLeft size={42} />
      </GuestButton>
      <h1>{count}</h1>
      <GuestButton onClick={incrementCount}>
        <FaArrowCircleRight size={42} />
      </GuestButton>
    </GuestBox>
  );
}
