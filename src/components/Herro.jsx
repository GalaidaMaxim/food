import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Container } from "./Container";
import { getRandomFood } from "../service/api";

const StyledSection = styled.section`
  & .container {
    display: flex;
  }
  & h1 {
    font-size: 90px;
    text-shadow: 0px 0px 40px white;
  }
  & h2 {
    text-shadow: 2px 2px 5px black;
    font-size: 40px;
  }
`;

export const Herro = () => {
  const [food, setFood] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getRandomFood();
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
        <Box
          sx={{
            width: "50%",
            padding: "20px",
          }}
        >
          <h1>Food Project</h1>
        </Box>
        <Box
          sx={{
            width: "50%",
            backgroundImage: `url("${food?.strMealThumb}")`,
            height: "400px",
            padding: "20px",
            backgroundSize: "cover",
          }}
        >
          <h2>{food?.strMeal}</h2>
        </Box>
      </Container>
    </StyledSection>
  );
};
