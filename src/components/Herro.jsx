import { useState, useEffect } from "react";
import { Container } from "./Container";
import styled from "@emotion/styled";
import { getRandomFood } from "../service/api";
import { Box } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "@emotion/react";

export const StyledSection = styled.section`
  padding-top: 30px;
  .container {
    border-radius: 20px;
    overflow: hidden;
    transition: 500ms;
  }

  & h1 {
    font-size: 70px;
  }
  & h2 {
    text-shadow: 5px 5px 10px black;
    font-size: 40px;
  }
`;

export const Herro = () => {
  const [food, setFood] = useState(null);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    (async () => {
      try {
        const data = await getRandomFood();
        console.log(data);

        setFood(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [setFood]);
  return (
    <StyledSection>
      {food && (
        <Container
          className="container"
          style={{
            display: "flex",
            border: `5px solid ${theme.glow}`,
            boxShadow: `0px 0px 70px ${theme.glow}`,
          }}
        >
          <Box sx={{ width: "50%", padding: "20px" }}>
            <h1>Food project</h1>
          </Box>
          <Box
            sx={{
              width: "50%",
              backgroundImage: `url(${food.strMealThumb})`,
              height: "400px",
              backgroundSize: "cover",
              padding: "20px",
            }}
          >
            <h2>{food.strMeal}</h2>
          </Box>
        </Container>
      )}
    </StyledSection>
  );
};
