import { CgProfile } from "react-icons/cg";

const Header = () => {
    return (
        <div className="flex justify-between items-center mt-8 w-[1320px] mx-auto mb-12">
            <div>
                <h1 className="text-4xl font-bold">Recipe Calories</h1>
            </div>
            <div className="flex gap-8 text-gray-600 text-xl font-semibold">
                <p>Home</p>
                <p>Recipes</p>
                <p>About</p>
                <p>Search</p>
            </div>
            <div className="flex gap-4">
                <input className="border-2 p-3 rounded-full" type="search" name="" id=""placeholder="search" />
                <div className="text-4xl p-2 bg-[#0BE58A] rounded-full">
                    <CgProfile></CgProfile>
                </div>
            </div>
        </div>
    );
};

export default Header;