import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  padding-top: 100px;
  padding-right: 15px;
  padding-left: 15px;
  margin: 0 auto;
  max-width: 550px;
  width: 100%;
  text-align: center;
`;

export const Title = styled.h1`
  color: #321180;
`;

export const Button = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  height: 40px;
  background-color: #6b4db2;
  color: #fff;
  border: 3px solid #6b4db2;
  border-radius: 10px;

  transition: background-color 200ms ease-out, border 200ms ease-out;

  &:hover {
    background-color: #321180;
    border: 3px solid #321180;
  }
`;
