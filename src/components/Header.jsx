import { Container } from "./Container";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { ThemeContext } from "@emotion/react";
import { useContext } from "react";

const Link = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 700;
`;

export const Header = () => {
  const context = useContext(ThemeContext);
  console.log(context.theme.backgroud);

  return (
    <header>
      <Container>
        <Box
          sx={{
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            backgroundColor: `#${context.theme.backgroud}`,
            transitionDuration: "500ms",
          }}
        >
          <Link
            style={{
              color: `#${context.theme.text}`,
              transitionDuration: "500ms",
            }}
            href="/"
          >
            Home
          </Link>
          <Link
            style={{
              color: `#${context.theme.text}`,
              transitionDuration: "500ms",
            }}
            href="/"
          >
            Food
          </Link>
          <Link
            style={{
              color: `#${context.theme.text}`,
              transitionDuration: "500ms",
            }}
            href="/"
          >
            Categories
          </Link>
          <button onClick={context.setLight}>setLight</button>
          <button onClick={context.setDark}>setDark</button>
        </Box>
      </Container>
    </header>
  );
};
