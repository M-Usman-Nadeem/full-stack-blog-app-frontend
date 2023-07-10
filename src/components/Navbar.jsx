import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [showDropDown, setShowDropDown] = useState(false);
  const categories = ["science", "technology", "cinema", "design"];
// const context=useContext()
// console.log(context )
  return (
    <div>
      <div className=" py-3 flex justify-between items-center px-10 shadow-md fixed top-0 left-0 right-0 bg-white z-[1000]">
        <Link to="/">
          <div className="logo uppercase">
            <img
              src="https://cdn-icons-png.flaticon.com/512/49/49334.png"
              alt="blog"
              className="w-12 "
            />
          </div>
        </Link>
        <div className="flex gap-4">
          <div className="relative">
            <button
              id="dropdownDefaultButton"
              onClick={() => setShowDropDown(!showDropDown)}
              data-dropdown-toggle="dropdown"
              className="text-white bg-blue-500  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
              type="button"
            >
Category
              <svg
                className="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              id="dropdown"
              className={`z-10 ${
                !showDropDown && "hidden"
              } absolute top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                {categories.map((item, index) => (
                  <Link
                    key={index}
                    to={`/?category=${item}`}
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {item.toUpperCase()}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex gap-2 justify-between items-center">
            <span>Name</span>
            <span>Logout</span>
            <Link to="/write" className="bg-blue-300 p-1 ">
              Write
            </Link>
          </div>
        </div>
      </div>
      <div className="h-28"></div>
    </div>
  );
}

export default Navbar;
