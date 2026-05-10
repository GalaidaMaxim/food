import { Container } from "./Container";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const Link = styled.a`
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  font-weight: 700;
`;

export const Header = () => {
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
          }}
        >
          <Link href="/">Home</Link>
          <Link href="/">Food</Link>
          <Link href="/">Categories</Link>
        </Box>
      </Container>
    </header>
  );
};
