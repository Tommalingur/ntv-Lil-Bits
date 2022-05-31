import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: grey;
`;
const Card = styled.div`
  width: 75%;
  background-color: #282c34;
  color: #09d3ac;
  padding: 2rem;
  margin-bottom: 0.5rem;
`;

const Dishes = () => {
  const [dish, setDish] = useState([]);
  const getDish = async () => {
    const result = await axios(
      "https://themealdb.com/api/json/v1/1/random.php"
    );
    setDish(result.data);
    console.log(result.data);
  };
  useEffect(() => {
    getDish();
  }, []);

  if (dish.length === 0) {
    return (
      <Wrapper>
        <Card>Loading...</Card>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {dish.map((dish) => (
        <Card>{dish}</Card>
      ))}
    </Wrapper>
  );
};

export default Dishes;
