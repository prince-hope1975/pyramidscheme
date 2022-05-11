import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const List = ({ data }) => {
  return (
    <ListContainer>
      {data &&
        data.map(({ text, link }) => {
          return (
            <ListComponent>
              <Link to={link}>{text}</Link>
            </ListComponent>
          );
        })}
      <ListComponent>dummy data</ListComponent>
      <ListComponent>dummy data</ListComponent>
      <ListComponent>dummy data</ListComponent>
      <ListComponent>dummy data</ListComponent>
    </ListContainer>
  );
};

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ListComponent = styled(Button)`
  padding: 1rem;
  font-size: var(--font-small);
  transform-origin: center;
  
  transition: background 1000ms ease;

`;

export default List;
