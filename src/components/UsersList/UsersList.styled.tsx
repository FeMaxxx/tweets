import styled from "@emotion/styled";

export const List = styled.div`
  margin-top: 10px;
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;

export const LoadMoreBtn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  font-family: "Montserrat";
  font-size: 20px;
  height: 50px;
  padding: 0 20px;
  border-radius: 10px;
  background-color: #6b4db2;
  color: #ebd8ff;

  transition: background-color 200ms ease-out;

  &:hover {
    background-color: #321180;
  }
`;
