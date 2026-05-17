import { useState, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { Container } from "./Container";
import styled from "@emotion/styled";
import { getMeadlByName } from "../service/api";
import { FoodCard } from "./FoodCard";

const StyledSection = styled.section`
  .container {
    padding-top: 60px;
  }

  & .list {
    padding-left: 20px;
    padding-right: 20px;

    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: 30px;
  }
`;

export const MealList = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getMeadlByName("");
        setFood(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <StyledSection>
      <Container className="container">
        <div className="list">
          {food.map((item) => (
            <FoodCard food={item} key={item.idMeal} />
          ))}
        </div>
      </Container>
    </StyledSection>
  );
};
