import PropTypes from "prop-types";
import { useState } from "react";

const Cook = ({ cook, handleAddToCooking }) => {
  const { recipe_name, preparing_time, calories } = cook;
  const [isVisible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(false);
  };

  return (
    <div className="flex justify-evenly m-4 items-center">
      {isVisible && (
        <td
          onClick={handleClick}
          className=" grid grid-cols-4 border items-center border-x-2 px-4 py-2 text-[#878787] "
        >
          <p>{recipe_name}</p>
          <p>{preparing_time}</p>
          <p className="mr-2">{calories}</p>
          <button
            onClick={() => handleAddToCooking(cook)}
            className="bg-[#0BE58A] rounded-full text-sm font-bold text-black p-2"
          >
            Preparing
          </button>
        </td>
      )}
    </div>
  );
};
Cook.propTypes = {
  cook: PropTypes.object.isRequired,
  handleAddToCooking: PropTypes.func,
};
export default Cook;
