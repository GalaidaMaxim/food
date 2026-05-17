import { Box } from "@mui/material";
import { Header } from "../components/Header";
import { Herro } from "../components/Herro";
import { MealList } from "../components/MealList";

export const Main = () => {
  return (
    <Box>
      <Header />
      <main>
        <Herro />
        <MealList />
      </main>
    </Box>
  );
};
