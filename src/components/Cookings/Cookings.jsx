import PropTypes from "prop-types";

const Cookings = ({ cookings }) => {
  const { recipe_name, preparing_time, calories } = cookings;
  return (
    <div>
      <div className="flex justify-evenly m-4 items-center">
        <td className=" grid grid-cols-3 border items-center border-x-2 px-4 py-2 text-[#878787] ">
          <p>{recipe_name}</p>
          <p>{preparing_time}</p>
          <p>{calories}</p>
        </td>
      </div>
    </div>
  );
};
Cookings.propTypes = {
  cookings: PropTypes.object,
};
export default Cookings;
