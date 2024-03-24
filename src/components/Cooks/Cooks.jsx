import PropTypes from "prop-types";
import Cook from "../Cook/Cook";
import Cookings from "../Cookings/Cookings";

const Cooks = ({ cooks, handleAddToCooking, cooking }) => {
  return (
    <div className=" w-[514px]">
      <div className="border-2 rounded-2xl p-2">
        <div>
          <h1 className="text-2xl font-bold text-center mt-4 mb-4">
            Want to cook: {cooks.length}
          </h1>
          <hr />
          <div className="flex gap-12 mt-4">
            <p className="ml-6">Name</p>
            <p className="ml-8">Time</p>
            <p className="ml-4">Calories</p>
          </div>
          {cooks.map((cook) => (
            <Cook
              key={cook.recipe_id}
              handleAddToCooking={handleAddToCooking}
              cook={cook}
            ></Cook>
          ))}
        </div>
        <div>
          <h1 className="text-2xl font-bold text-center m-4">
            Currently cooking: {cooking.length}
          </h1>
          <hr />
          <div className="flex gap-20 mt-4">
            <p className="ml-8">Name</p>
            <p className="ml-8">Time</p>
            <p className="ml-8">Calories</p>
          </div>
          {cooking.map((cookings) => (
            <Cookings key={cookings.recipe_id} cookings={cookings}></Cookings>
          ))}
        </div>
      </div>
    </div>
  );
};
Cooks.propTypes = {
  cooks: PropTypes.array,
  handleAddToCooking: PropTypes.func,
  cooking: PropTypes.fun,
};
export default Cooks;
