import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 0 15px;
  height: 60px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const Button = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  background-color: #6b4db2;
  color: #ebd8ff;
  border: 3px solid #6b4db2;
  border-radius: 10px;

  transition: background-color 200ms ease-out, border 200ms ease-out;

  &.active {
    pointer-events: none;
    border: 3px solid #321180;
  }

  &.active:hover {
    background-color: #6b4db2;
  }

  &:hover {
    background-color: #321180;
    border: 3px solid #321180;
  }
`;

export const Main = styled.main``;
