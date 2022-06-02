import ".././App.css";
import logo from "../assets/images/logo.png";
import { MenuButton } from "./Components";
import styled from "styled-components";

const NavBar = styled.div`
  display: grid;
  background-color: var(--clr-secondary);
  grid-area: nav;
  grid-template-columns: repeat(8, 1fr);
  grid-template-areas: "logo logo button button button button . .";
  border-bottom: 4px solid var(--clr-alert);
`;

const LogoDiv = styled.div`
  justify-self: center;
  align-self: center;
  grid-area: logo;
`;
const ButtonDiv = styled.div`
  justify-self: center;
  align-self: center;
  grid-area: button;
`;
const Logo = styled.img.attrs({ src: logo })`
  height: 100px;
`;

function Header() {
  let isHomeSelected = false;
  let isDishSelected = false;
  let isDrinkSelected = false;
  let isOrderSelected = false;
  if (window.location.pathname === "/") {
    isHomeSelected = true;
  } else {
    isHomeSelected = false;
  }
  if (window.location.pathname === "/Dish") {
    isDishSelected = true;
  } else {
    isDishSelected = false;
  }
  if (window.location.pathname === "/Drink") {
    isDrinkSelected = true;
  } else {
    isDrinkSelected = false;
  }
  if (window.location.pathname === "/Order") {
    isOrderSelected = true;
  } else {
    isOrderSelected = false;
  }
  return (
    <NavBar>
      <LogoDiv>
        <Logo></Logo>
      </LogoDiv>
      <ButtonDiv>
        <MenuButton selected={isHomeSelected}>Home</MenuButton>
        <MenuButton selected={isDishSelected}>Dishes</MenuButton>
        <MenuButton selected={isDrinkSelected}>Drinks</MenuButton>
        <MenuButton selected={isOrderSelected}>Order</MenuButton>
      </ButtonDiv>
    </NavBar>
  );
}

export default Header;
