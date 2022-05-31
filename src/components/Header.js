import ".././App.css";
import logo from "../assets/images/logo.png";
import { MenuButton } from "./Components";
import styled, { css } from "styled-components";

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
  return (
    <NavBar>
      <LogoDiv>
        <Logo></Logo>
      </LogoDiv>
      <ButtonDiv>
        <MenuButton selected>Home</MenuButton>
        <MenuButton>Dishes</MenuButton>
        <MenuButton>Drinks</MenuButton>
        <MenuButton>Order</MenuButton>
      </ButtonDiv>
    </NavBar>
  );
}

export default Header;
