import React from "react";
import { exampleImg } from "../lib/constant";

const BookListComponent = ({
  el: { id, book, author, description, slug, image },
}) => {
  return (
    <div className=" border  flex flex-col shadow-lg">
      <img className=" h-2/5 object-cover mb-1" src={image} />
      <div className="flex flex-col gap-0.5 px-2 pb-5">
        <h1 className=" text-lg font-bold font-sans">{book}</h1>
        <h2 className=" text-base font-semibold text-gray-500">{author}</h2>

        <p className=" text-base font-medium text-gray-700 line-clamp-3 ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BookListComponent;
