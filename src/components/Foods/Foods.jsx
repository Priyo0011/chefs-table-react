import { useEffect, useState } from "react";
import Food from "../Food/Food";
import PropTypes from "prop-types";

const Foods = ({ handleAddToCook }) => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("foods.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <div className="w-[782px]">
      <div className="grid grid-cols-2 gap-6">
        {foods.map((food) => (
          <Food
            key={food.recipe_id}
            food={food}
            handleAddToCook={handleAddToCook}
          ></Food>
        ))}
      </div>
    </div>
  );
};
Foods.propTypes = {
  handleAddToCook: PropTypes.func,
};
export default Foods;
