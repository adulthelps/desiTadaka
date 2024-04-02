import React, { useState } from "react";
import { categoryFunc } from "./categoryFunc";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/reducer/combineReducer";
import { filter, reset } from "../Redux/action/actionCreation";
import "./category.scss";

export const CategoryComp: React.FC = () => {
  const [act, setAct]=useState("");
  const collection = useSelector(
    (state: RootState) => state.reducers.CollectionData
  );
  const dispatch = useDispatch();
  const handleFilter = (val: string) => {
    setAct(val);
    const data = categoryFunc(collection, val);
    dispatch(filter(data));
    dispatch(reset(1));
  };
  return (
    <div className="filterContainer">
      <button className={act===""?"btn activated":"btn"} onClick={() => handleFilter("")}>
        All
      </button>
      <button className={act==="webSeries"?"btn activated":"btn"} onClick={() => handleFilter("webSeries")}>
        WebSeries
      </button>
      <button className={act==="Hindi Drama"?"btn activated":"btn"} onClick={() => handleFilter("Hindi Drama")}>
        Hindi Drama
      </button>
      <button className={act==="Desi"?"btn activated":"btn"} onClick={() => handleFilter("Desi")}>
        Desi
      </button>
      <button className={act==="Family"?"btn activated":"btn"} onClick={() => handleFilter("Family")}>
        Family
      </button>
    </div>
  );
};
