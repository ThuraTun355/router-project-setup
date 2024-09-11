import React, { useContext } from "react";
import useFetch from "../hook/useFetch";
import { GetBookData } from "../service/book.service";
import { BookListComponent } from "../components";
import { Link } from "react-router-dom";
import { ApiContext } from "../store/ApiContextProvider";

const HomePage = () => {
  // const { loading, data, error } = useFetch(GetBookData, "/books");
  const { loading, data, error } = useContext(ApiContext);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {data ? (
            <div className=" grid grid-cols-3 items-start justify-center gap-7 py-5">
              {data.map((el, index) => (
                <Link key={index} to={`/detail/${el.slug}`}>
                  <BookListComponent el={el} />
                </Link>
              ))}
            </div>
          ) : (
            <h1>{error}</h1>
          )}{" "}
        </>
      )}
    </>
  );
};

export default HomePage;
