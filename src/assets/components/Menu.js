import styled from "styled-components";
import Colors from "../Colors";
import { RiHomeLine, RiSearch2Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import { FadeInFromRight, FadeOutToRight } from "../Animations";

const MenuEl = styled.div`
  max-width: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.7rem 2rem;
  background-color: #fff;
  border-radius: 50px;
  width: 100%;
  margin: 0 2rem;
  font-size: 1.3rem;
`;
const Item = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => (p.active ? Colors.Gray : "")};
  transition: background-color 0.5s;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  overflow: hidden;
  cursor: pointer;

  :hover {
    background-color: ${Colors.Gray};
  }

  & > svg {
    font-size: 2rem;
  }

  & > span {
    opacity: ${(p) => (p.active ? 1 : 0)};
    display: ${(p) => (p.active ? "block" : "none")};
    animation: ${(p) => (p.active ? FadeInFromRight : FadeOutToRight)} 1s;
  }
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 1.1rem;
`;

export default function Menu() {
  const [Current, SetCurrent] = useState("home");
  return (
    <MenuEl>
      <Item
        active={Current === "home"}
        onClick={() => {
          if (Current !== "home") SetCurrent("home");
        }}
      >
        <RiHomeLine />
        <Title>Home</Title>
      </Item>
      <Item
        active={Current === "search"}
        onClick={() => {
          if (Current !== "search") SetCurrent("search");
        }}
      >
        <RiSearch2Line />
        <Title>Home</Title>
      </Item>
      <Item
        active={Current === "profile"}
        onClick={() => {
          if (Current !== "profile") SetCurrent("profile");
        }}
      >
        <AiOutlineUser />
        <Title>Home</Title>
      </Item>
    </MenuEl>
  );
}
