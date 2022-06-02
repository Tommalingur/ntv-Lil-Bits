import ".././App.css";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import DemoCarousel from "../components/Carousel";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { InputField, LinkButton } from "../components/Components";
import axios from "axios";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaAt } from "react-icons/fa";

const HomeGrid = styled.div`
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

const HomeContentGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  height: 10vh;
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
  color: var(--clr-secondary);
`;
const OrderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 10px;
  border: 4px solid var(--clr-secondary);
  grid-area: order;
  color: var(--clr-secondary);
`;
const FindOrderBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 4px solid var(--clr-secondary);
  padding-bottom: 10px;
  grid-area: f-order;
  color: var(--clr-secondary);
`;
const InfoBox = styled.div`
  border: 4px solid var(--clr-secondary);
  grid-area: info;
  color: var(--clr-secondary);
`;
const BoxHeader = styled.div`
  grid-area: boxheader;
`;
const InfoContent = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "one two three"
    "four four four";
`;
const InfoOne = styled.div`
  grid-area: one;
`;

const InfoTwo = styled.div`
  grid-area: two;
`;
const InfoThree = styled.div`
  grid-area: three;
`;
const InfoFour = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-self: center;
  grid-area: four;
`;

function Home() {
  const [email, setEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const DishPrice = 50.0;
  const DrinkPrice = 10;
  const [dataSet, setDataSet] = useState([]);
  const [drinks, setDrinks] = useState([]);
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

  {
    localStorage.setItem("DishPrice", DishPrice);
  }

  const handleChange = (e) => {
    setEmail(e.target.value);
    verifyEmail();
    localStorage.setItem("Dishes", JSON.stringify(dishes.strMeal));
    localStorage.setItem("Guests", 2);
    localStorage.setItem("Date", "Mon Aug 08 2022 17:00");
  };

  const getDrinks = async () => {
    const result = await axios.get("https://api.punkapi.com/v2/beers");
    setDrinks(result.data[0]);
  };
  const getData = () => {
    setDataSet([drinks.name, DrinkPrice]);
  };
  useEffect(() => {
    getDrinks();
  }, []);
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {}, [email]);
  localStorage.setItem("email", JSON.stringify(email));
  const verifyEmail = () => {
    const regEx = /[a-zA-Z0-9.%+-]+@[a-z0-9]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };
  localStorage.setItem("Drink", JSON.stringify(dataSet));

  return (
    <HomeGrid>
      <Header />
      <HomeContentGrid>
        <CarouselBox>
          <DemoCarousel />
        </CarouselBox>
        <OrderBox>
          <h2>Book a table</h2>
          <p>Here you can book a table for up to 10 people.</p>
          <p>All you have to do is get here and enjoy!</p>
          <Link to="/Dish">
            <LinkButton>Book a table!</LinkButton>
          </Link>
        </OrderBox>
        <FindOrderBox>
          <h2>Find your order</h2>
          <p>Enter your email to find and change your order</p>
          {dishes.map((dish) => (
            <div key={dish.idMeal}>
              <InputField
                key={dish.idMeal}
                placeholder="please enter a valid email"
                type="email"
                value={email}
                onChange={handleChange}
              ></InputField>
              {localStorage.setItem("Dishes", JSON.stringify(dish.strMeal))}
            </div>
          ))}
          <Link to={"/Receipt"}>
            <LinkButton disabled={isDisabled}>Find order</LinkButton>
          </Link>
        </FindOrderBox>
        <InfoBox>
          <BoxHeader>
            <h2>Information</h2>
          </BoxHeader>
          <InfoContent>
            <InfoOne>
              <FaHome size={42} />
              <p>Funnyroad 26</p>
            </InfoOne>
            <InfoTwo>
              <FaPhoneAlt size={42} />
              <p>+365-54868748</p>
            </InfoTwo>
            <InfoThree>
              <FaAt size={42} />
              <p>Email@email.com</p>
            </InfoThree>

            <InfoFour>
              <FaFacebookF size={28} />
              <FaTwitter size={28} />
              <FaInstagram size={28} />
              <FaYoutube size={28} />
              <FaSnapchatGhost size={28} />
            </InfoFour>
          </InfoContent>
        </InfoBox>
      </HomeContentGrid>
    </HomeGrid>
  );
}

export default Home;
