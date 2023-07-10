import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
function Write() {
  const [value, setValue] = useState("");
  const categories = ["science", "technology", "cinema", "design"];

  return (
    <div className=" flex justify-center">
      <div className="flex w-[1024px] gap-10 ">
        <div className="   flex-[5] flex flex-col gap-5 overflow-hidden">
          <input
            type="text"
            placeholder="title"
            className="w-full border-[1px] p-1 border-gray-300"
          />
          <div className="h-[300px] overflow-auto">

          <ReactQuill theme="snow" className="h-4/5 border-none " value={value} onChange={setValue} />
          </div>
        </div>
        <div className="flex flex-[2] flex-col gap-5">
          <div className="item  flex flex-col gap-2">
            <h1 className="font-semibold text-[20px]">Publish</h1>
            <span>
              <b>Status:</b> Draft
            </span> 
            <span>
              <b>Visisbility:</b> Public
            </span>
            <label htmlFor="fileImage" className="cursor-pointer underline">
              Uplaod Image
            </label>
            <input
              type="file"
              id="fileImage"
              style={{
                display: "none",
              }}
            />
            <div className="flex justify-between">
              <button className="text-blue-300 border-[1px] p-1 border-blue-600">Save as draft</button>
              <button className="text-blue-300 border-[1px] border-blue-600 p-1">Update</button>
            </div>
          </div>
          <div className="item">
            <h1 className="font-semibold text-[20px]">Category</h1>
            {categories.map((category, indx) => {
              return (
                <div key={category} className="flex items-center gap-1 ml-3">
                  <input
                    type="radio"
                    name="category"
                    value={category}
                    id={category}
                  />
                  <label htmlFor={category}>{category}</label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
