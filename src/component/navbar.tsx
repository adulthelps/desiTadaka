import React, { useEffect, useState } from "react";
import "./nav.scss";
import "./Navlist/categories.scss";
import image1 from "../images/31.jpg";
import { handleClick } from "./share";
import { filter, reset } from "../Redux/action/actionCreation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/reducer/combineReducer";
interface IFilter {
  category: string;
  name: string;
  duration: number;
  language: string;
  storyType: boolean;
  fullVideo: boolean;
}

export const Navbar: React.FC = () => {
  const [visibility, setVisibility] = useState<boolean>(false);
  const [cat, setCat] = useState<boolean>(false);
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
    filterType: keyof IFilter,
    e: React.MouseEvent
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
    e.stopPropagation();
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
    );
    console.log(data);
    dispatch(filter(data));
    dispatch(reset(1));
    setCat(false);
  };
  const handleVisibility = (e: React.MouseEvent) => {
    setVisibility(!visibility);
    e.stopPropagation();
  };
  const handleCat = (e: React.MouseEvent) => {
    setCat(!cat);
    e.stopPropagation();
  };

  useEffect(() => {
    const func = () => {
      setVisibility(false);
      setCat(false);
    };
    document.addEventListener("click", func);
    return () => {
      document.removeEventListener("click", func);
    };
  }, []);

  return (
    <nav id="navbar">
      <a href="/home">
        <div className="logo">
          <img className="logo1" src={image1} alt="images1" />
        </div>
      </a>
      <div className={`lists ${visibility ? "visible" : ""}`}>
        <ul className="list">
          <li className="items">
            <a href="/home">Home</a>
          </li>
          <li className="item cate" onClick={handleCat}>
            Category
          </li>
          <li className="items">
            <a href="/about">About</a>
          </li>
          <li className="item" onClick={handleClick}>
            Share
          </li>
        </ul>
      </div>
      <div className="icons">
        <span className="material-icons icon" onClick={handleVisibility}>
          menu
        </span>
      </div>
      {cat && (
        <div className="category-component">
          <div className="filter-component">
            <div className="filterBy">
              <p className="filterHeading">Filter By Category</p>
              <div className="buttons">
                <button
                  className={`filter-btns ${
                    activeButton.category === "desi" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("desi", "category", e)}
                >
                  Desi
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.category === "hindi drama" ? "active" : ""
                  }`}
                  onClick={(e) =>
                    handleButtonClick("hindi drama", "category", e)
                  }
                >
                  Hindi Drama
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.category === "family" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("family", "category", e)}
                >
                  Family
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.category === "doctor" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("doctor", "category", e)}
                >
                  Doctor
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.category === "yoga" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("yoga", "category", e)}
                >
                  Yoga
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.category === "office" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("office", "category", e)}
                >
                  Office
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.category === "pakistani" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("pakistani", "category", e)}
                >
                  Pakistani
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.category === "threesome" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("threesome", "category", e)}
                >
                  Threesome
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.category === "seduction" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("seduction", "category", e)}
                >
                  Seduction
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.category === "gang bang" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("gang bang", "category", e)}
                >
                  Gang Bang
                </button>
              </div>
            </div>
            <div className="filterBy">
              <p className="filterHeading">Filter By Name</p>
              <div className="buttons">
                <button
                  className={`filter-btns ${
                    activeButton.name === "Blake Blossom actress"
                      ? "active"
                      : ""
                  }`}
                  onClick={(e) => handleButtonClick("Blake Blossom", "name", e)}
                >
                  Blake Blossom
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.name === "Sofie Reyez" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("Sofie Reyez", "name", e)}
                >
                  Sofie Reyez
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.name === "Delilah Stone" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("Delilah Stone", "name", e)}
                >
                  Delilah Stone
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.name === "Viral Video" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("Viral Video", "name", e)}
                >
                  Viral Video
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.name === "Desi Bhabhi" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("Desi Bhabhi", "name", e)}
                >
                  Desi Bhabhi
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.name === "Desi Mms" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("Desi Mms", "name", e)}
                >
                  Desi Mms
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.name === "Maxie Mellow" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("Maxie Mellow", "name", e)}
                >
                  Maxie Mellow
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.name === "Saanvi Bahl" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("Saanvi Bahl", "name", e)}
                >
                  Saanvi Bahl
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.name === "Gia Venetia" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("Gia Venetia", "name", e)}
                >
                  Gia Venetia
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.name === "Sophia" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("Sophia", "name", e)}
                >
                  Sophia
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.name === "Paisley Porter" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("Paisley Porter", "name", e)}
                >
                  Paisley Porter
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.name === "Jennifer Mendez" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("Jennifer Mendez", "name", e)}
                >
                  Jennifer Mendez
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.name === "Penny Barbar" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("Penny Barbar", "name", e)}
                >
                  Penny Barbar
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.name === "Swapping" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("Swapping", "name", e)}
                >
                  Swapping
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.name === "Haley Spades" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("Haley Spades", "name", e)}
                >
                  Haley Spades
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.name === "Other" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("Other", "name", e)}
                >
                  Other
                </button>
              </div>
            </div>
            <div className="filterBy">
              <p className="filterHeading">Filter By language</p>
              <div className="buttons">
                <button
                  className={`filter-btns ${
                    activeButton.language === "hindi" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("hindi", "language", e)}
                >
                  hindi
                </button>
                <button
                  className={`filter-btns ${
                    activeButton.language === "english" ? "active" : ""
                  }`}
                  onClick={(e) => handleButtonClick("english", "language", e)}
                >
                  english
                </button>
              </div>
            </div>
            <div className="search-btn">
              <button className="search" onClick={searchFuc}>
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
