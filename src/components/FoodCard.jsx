import styled from "@emotion/styled";

const Card = styled.div`
  border: 2px solid gold;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: none;
  transition-duration: 200ms;
  & .image {
    height: 80%;
    background-image: url(${({ image }) => image});
    background-size: cover;
  }
  & p {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    background-color: #241807;
    font-size: 28px;
    text-transform: capitalize;
  }
  &:hover {
    box-shadow: 0px 0px 20px gold;
  }
`;

export const FoodCard = ({ food }) => {
  return (
    <Card image={food.strMealThumb}>
      <div className="image"></div>
      <p>{food.strMeal}</p>
    </Card>
  );
};
