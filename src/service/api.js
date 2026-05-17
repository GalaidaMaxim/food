import axios from "axios";

export const getRandomFood = async () => {
  const data = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/random.php",
  );
  return data.data.meals[0];
};

export const getMealById = async (id) => {
  const data = await axios.get(
    `https:www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );
  return data.data.meals[0];
};

export const getMeadlByName = async (name) => {
  const data = await axios.get(
    `https:www.themealdb.com/api/json/v1/1/search.php?s=${name}`,
  );
  return data.data.meals;
};

export const getIngidients = async () => {
  const data = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/list.php?i=list",
  );
  return data.data.meals;
};
