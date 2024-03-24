import PropTypes from "prop-types";
import { IoMdTime } from "react-icons/io";
import { PiFireSimple } from "react-icons/pi";

const Food = ({ food, handleAddToCook }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = food;
  return (
    <div className="border-2 p-6 rounded-2xl">
      <img
        className="h-[200px] w-[331px] rounded-xl text-center"
        src={recipe_image}
        alt=""
      />
      <h1 className="text-xl font-semibold mt-4">{recipe_name}</h1>
      <p className="text-[#878787] font-light mt-3 mb-4">{short_description}</p>
      <hr />
      <div className="mb-4">
        <h2 className="font-bold mt-4 mb-4">
          Ingredients : {ingredients.length}
        </h2>
        <ul>
          {ingredients.map((ing) => (
            <li
              key={ing.recipe_id}
              className="text-[#878787] font-light list-disc ml-6 mb-2"
            >
              {ing}
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div className="flex justify-between font-light mt-4">
        <p className="flex gap-2">
          <IoMdTime className="mt-1"></IoMdTime>
          {preparing_time}
        </p>
        <p className="flex gap-2">
          <PiFireSimple className="mt-1"></PiFireSimple>
          {calories}
        </p>
      </div>
      <button
        onClick={() => handleAddToCook(food)}
        className="bg-[#0BE58A] p-4 px-6 rounded-full font-bold mt-8"
      >
        Want to Cook
      </button>
    </div>
  );
};

Food.propTypes = {
  food: PropTypes.object.isRequired,
  handleAddToCook: PropTypes.func,
};
export default Food;
