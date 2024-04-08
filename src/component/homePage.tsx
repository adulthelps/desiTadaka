import React, { ChangeEvent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux/reducer/combineReducer";
import "./home.scss";
import { Paginator } from "./pagination";
import {
  decrement,
  filter,
  increment,
  reset,
} from "../Redux/action/actionCreation";
import { useNavigate } from "react-router-dom";
import { IData } from "../Redux/reducer/collectionList";
import { CategoryComp } from "./categoryComp";
import { Spinner } from "./spinner";

interface PaginationOptions {
  pageSize: number;
  currentPage: number;
}

export const HomePage: React.FC = () => {
  let collections = useSelector((state: RootState) => state.reducers);

  let filterDataIs = collections.FilterData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    filterDataIs = collections.FilterData.filter((val) =>
      val.body.name
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
    );
    if (e.target.value !== "") {
      if (filterDataIs.length === 0) {
        alert("not found");
        e.target.value = "";
      } else {
        dispatch(filter(filterDataIs));
        dispatch(reset(1));
      }
    } else if (e.target.value === "") {
      dispatch(filter(collections.CollectionData));
      dispatch(reset(1));
    }
  };

  const handleClickEvent = (val: IData) => {
    let id = val.id;
    navigate(`/details/${id}`);
  };

  const maxPageNumber = Math.ceil(collections.FilterData.length / 10);
  const handleNextEvents = (e: React.MouseEvent) => {
    if (collections.PageNum < maxPageNumber) {
      dispatch(increment(1));
    } else {
      dispatch(reset(1));
      console.log("restart");
    }
  };
  const handlePrevEvents = (e: React.MouseEvent) => {
    if (collections.PageNum >= 2) {
      dispatch(decrement(1));
    } else {
      dispatch(reset(1));
      console.log("reset");
    }

  };

  const paginationOptions: PaginationOptions = {
    pageSize: 16,
    currentPage: collections.PageNum,
  };

  const paginator = new Paginator<IData>(
    collections.FilterData,
    paginationOptions
  );
  const paginatedResult = paginator.paginate();

  useEffect(() => {
    dispatch(filter(collections.CollectionData));
    console.log("rerendering done");
  }, [collections.CollectionData, dispatch]);

  if (collections.FilterData.length === 0) {
    return <Spinner />;
  }
  console.log(collections.PageNum);
  return (
    <div className="home">
      <div className="search">
        <input
          type="search"
          placeholder="Enter Name of Actress"
          onChange={handleInput}
        />
      </div>

      <CategoryComp />
      <div className="announce">
        <h1 id="ann">
            All content I upload is available on the internet. I don't intend
            harm. If you have concerns, contact me, and I'll promptly remove the
            content in question.
          
        </h1>
      </div>
      <div className="container">
        {paginatedResult.data.map((val: IData, ind: number) => {
          return (
            <div key={ind} className="dashboard">
              <img
                className="images"
                src={val.image}
                alt={val.image}
                onClick={() => handleClickEvent(val)}
              />
              <p className="details">{val.body.name}</p>
            </div>
          );
        })}
      </div>
      <div className="pagination">
        <button
          onClick={handlePrevEvents}
          className="button"
          disabled={collections.PageNum === 1}
        >
          <a href="#ann">Prev</a>
        </button>
        <button className="activated">{collections.PageNum}</button>

        <button
          onClick={handleNextEvents}
          className="button"
          disabled={collections.PageNum === maxPageNumber}
        >
         <a href="#ann"> Next</a>
        </button>
      </div>
    </div>
  );
};
