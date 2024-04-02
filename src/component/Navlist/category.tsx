import React, { useState } from "react";
import "./categories.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/reducer/combineReducer";
import { filter, reset } from "../../Redux/action/actionCreation";
interface IFilter {
  category: string;
  name: string;
  duration: number;
  language: string;
  storyType: boolean;
  fullVideo: boolean;
}

export const Category: React.FC = () => {
  const [activeButton, setActiveButton] = useState<IFilter>({
    category: "",
    name: "",
    duration: 10,
    language: "",
    storyType: false,
    fullVideo: false,
  });
  const collection = useSelector((state: RootState) => state.reducers);
  const dispatch = useDispatch();

  const setButton = (
    filter: string | boolean | number,
    filterType: keyof IFilter
  ) => {
    setActiveButton((prevState) => ({
      ...prevState,
      [filterType]: filter,
    }));
  };

  const handleButtonClick = (
    filter: string | boolean | number,
    filterType: keyof IFilter
  ) => {
    if (filterType === "category") {
      setButton(filter, filterType);
    } else if (filterType === "name") {
      setButton(filter, filterType);
    } else if (filterType === "language") {
      setButton(filter, filterType);
    } else if (filterType === "duration") {
      setButton(filter, filterType);
    } else if (filterType === "storyType") {
      setButton(filter, filterType);
    } else if (filterType === "fullVideo") {
      setButton(filter, filterType);
    }
  };
  const searchFuc = () => {
    const data = collection.CollectionData.filter(
      (val) =>
        val.body.category?.toLocaleLowerCase() ===
          activeButton.category.toLocaleLowerCase() ||
        val.body.name?.toLocaleLowerCase() ===
          activeButton.name.toLocaleLowerCase() ||
        val.body.language?.toLocaleLowerCase() ===
          activeButton.language.toLocaleLowerCase()
      // ||
      // (val.body.duration && val.body.duration < activeButton.duration)
      //  ||
      // val.body.storyType === activeButton.storyType ||
      // val.body.fullVideo === activeButton.fullVideo
    );
    console.log(data);

    dispatch(filter(data));
    dispatch(reset(1));
    console.log(collection.FilterData);
  };
  return (
    <div className="category-component">
      <div className="filter-component">
        <div className="filterBy">
          <p className="filterHeading">Filter By Category</p>
          <div className="buttons">
            <button
              className={`filter-btns ${
                activeButton.category === "ULLU" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("ULLU", "category")}
            >
              ULLU
            </button>
            <button
              className={`filter-btns ${
                activeButton.category === "KOOKU" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("KOOKU", "category")}
            >
              KOOKU
            </button>
            <button
              className={`filter-btns ${
                activeButton.category === "NETFLIX" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("NETFLIX", "category")}
            >
              NETFLIX
            </button>
            <button
              className={`filter-btns ${
                activeButton.category === "AMAZON" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("AMAZON", "category")}
            >
              AMAZON
            </button>
          </div>
        </div>
        <div className="filterBy">
          <p className="filterHeading">Filter By Name</p>
          <div className="buttons">
            <button
              className={`filter-btns ${
                activeButton.name === "pakistani actress" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("pakistani actress", "name")}
            >
              pakistani actress
            </button>
            <button
              className={`filter-btns ${
                activeButton.name === "kajal agarawal" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("kajal agarawal", "name")}
            >
              kajal agarawal
            </button>
            <button
              className={`filter-btns ${
                activeButton.name === "sanchita" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("sanchita", "name")}
            >
              sanchita
            </button>
            <button
              className={`filter-btns ${
                activeButton.name === "pooja" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("pooja", "name")}
            >
              pooja
            </button>
            <button
              className={`filter-btns ${
                activeButton.name === "kathrine" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("kathrine", "name")}
            >
              kathrine
            </button>
            <button
              className={`filter-btns ${
                activeButton.name === "keerthy" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("keerthy", "name")}
            >
              keerthy
            </button>
            <button
              className={`filter-btns ${
                activeButton.name === "south actress" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("south actress", "name")}
            >
              south actress
            </button>
            <button
              className={`filter-btns ${
                activeButton.name === "rashmika" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("rashmika", "name")}
            >
              rashmika
            </button>
          </div>
        </div>
        {/* <div className="filterBy">
          <p className="filterHeading">Filter By Duration</p>
          <div className="buttons">
            <button
              className={`filter-btns ${
                activeButton.duration <= 10 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(10, "duration")}
            >
              0 - 10 min
            </button>
            <button
              className={`filter-btns ${
                activeButton.duration > 10 && activeButton.duration <= 20
                  ? "active"
                  : ""
              }`}
              onClick={() => handleButtonClick(20, "duration")}
            >
              10 - 20 min
            </button>
            <button
              className={`filter-btns ${
                activeButton.duration > 20 ? "active" : ""
              }`}
              onClick={() => handleButtonClick(21, "duration")}
            >
              20 min +
            </button>
          </div>
        </div> */}
        <div className="filterBy">
          <p className="filterHeading">Filter By language</p>
          <div className="buttons">
            <button
              className={`filter-btns ${
                activeButton.language === "hindi" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("hindi", "language")}
            >
              hindi
            </button>
            <button
              className={`filter-btns ${
                activeButton.language === "english" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("english", "language")}
            >
              english
            </button>
            <button
              className={`filter-btns ${
                activeButton.language === "urdu" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("urdu", "language")}
            >
              urdu
            </button>
          </div>
        </div>
        {/* <div className="filterBy">
          <p className="filterHeading">Filter By StoryType</p>
          <div className="buttons">
            <button
              className={`filter-btns ${
                activeButton.storyType === true ? "active" : ""
              }`}
              onClick={() =>
                handleButtonClick(!activeButton.storyType, "storyType")
              }
            >
              storyType
            </button>
          </div>
        </div>
        <div className="filterBy">
          <p className="filterHeading">Filter By Full Video</p>
          <div className="buttons">
            <button
              className={`filter-btns ${
                activeButton.fullVideo === true ? "active" : ""
              }`}
              onClick={() =>
                handleButtonClick(!activeButton.fullVideo, "fullVideo")
              }
            >
              fullVideo
            </button>
          </div>
        </div> */}
        <div className="search-btn">
          <button className="search" onClick={searchFuc}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
