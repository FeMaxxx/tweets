import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div``;

export const WrapContainer = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`;

export const Select = styled.select`
  cursor: pointer;
  margin-right: 20px;
  height: 50px;

  width: 200px;
  padding: 10px;
  border-radius: 10px;
  background-color: #6b4db2;
  color: #ebd8ff;

  font-family: "Montserrat";
  font-size: 18px;

  transition: background-color 200ms ease-out;

  &:hover,
  &:focus {
    background-color: #321180;
  }
`;

export const BackBtn = styled(NavLink)`
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 50px;
  border-radius: 10px;
  background-color: #6b4db2;
  color: #ebd8ff;

  font-family: "Montserrat";
  font-size: 18px;

  transition: background-color 200ms ease-out;

  &:hover,
  &:focus {
    background-color: #321180;
  }
`;
