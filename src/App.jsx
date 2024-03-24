import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Cooks from "./components/Cooks/Cooks";
import Foods from "./components/Foods/Foods";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cooking, setCooking] = useState([]);
  const [cooks, setCooks] = useState([]);
  const handleAddToCook = (food) => {
    if (!cooks.find((r) => r.recipe_id === food.recipe_id)) {
      setCooks([...cooks, food]);
    } else {
      toast.warn("already exists !");
    }
  };
  const handleAddToCooking = (cook) => {
    const newCooking = [...cooking, cook];
    setCooking(newCooking);
  };

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Recipes></Recipes>
      <div className="flex w-[1320px] mx-auto mt-20 gap-6">
        <Foods handleAddToCook={handleAddToCook}></Foods>
        <Cooks
          cooks={cooks}
          handleAddToCooking={handleAddToCooking}
          cooking={cooking}
        ></Cooks>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
