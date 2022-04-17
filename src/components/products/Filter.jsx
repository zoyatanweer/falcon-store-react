import React from "react";
import { useFilter } from "../../Context/Filter-Context";
import { useTheme } from "../../Context/Theme/Theme-Context";

const Filter = () => {
  const { theme } = useTheme();
  const { FilterState, FilterDispatch } = useFilter();

  return (
    <div className={theme === "dark" ? "dark-theme" : "light-theme"}>
      <div className="grid-left-filter">
        <div className="filter-title">
          <h3 className="left-filter-title">FILTER</h3>

          <button
            className="btn right-clear-btn btn-underline"
            onClick={() =>
              FilterDispatch({
                type: "CLEAR_ALL",
                payload: { ...FilterState.originalData },
              })
            }
          >
            CLEAR ALL
          </button>
        </div>
        <ul className="filter-section">
          <div className="filter-divider"></div>
          <li className="filter-section-title">PRICE RANGE</li>
          <div class="slidecontainer">
            <input
              type="range"
              min="1000"
              max="4000"
              step="500"
              value={FilterState.priceRange}
              class="slider"
              id="myRange"
              onChange={(e) =>
                FilterDispatch({
                  type: "PRICE_RANGE",
                  payload: Number(e.target.value),
                })
              }
            />
            <div class="span-text-slider">
              <span>1k</span>
              <span>2k</span>
              <span>3k</span>
              <span>4k</span>
            </div>
          </div>
          <div className="filter-divider"></div>
          <li className="filter-section-title">SORT</li>
          <li className="list-item filter-item">
            <label>
              <input
                className="filter-radio"
                type="radio"
                name="sort"
                checked={FilterState.sortByPrice === "PRICE_LOW_TO_HIGH"}
                value="PRICE_LOW_TO_HIGH"
                onClick={() =>
                  FilterDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "PRICE_LOW_TO_HIGH",
                  })
                }
              />
              Price low to high
            </label>
            <label>
              <input
                className="filter-radio"
                type="radio"
                name="sort"
                checked={FilterState.sortByPrice === "PRICE_HIGH_TO_LOW"}
                value="PRICE_HIGH_TO_LOW"
                onClick={() =>
                  FilterDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "PRICE_HIGH_TO_LOW",
                  })
                }
              />
              Price high to low
            </label>
          </li>

          <div className="filter-divider"></div>

          <li className="filter-section-title">IN STOCK</li>
          <li className="list-item filter-item">
            <label>
              <input
                className="filter-radio"
                type="checkbox"
                name="inStock"
                checked={FilterState.includeOutOfStock}
                value="INCLUDE_OUT_OF_STOCK"
                onClick={() =>
                  FilterDispatch({
                    type: "INCLUDE_OUT_OF_STOCK",
                  })
                }
              />
              Include out of stock
            </label>
          </li>

          <div className="filter-divider"></div>
          <li className="filter-section-title">CATEGORIES</li>
          <li className="list-item filter-item">
            <label>
              <input
                className="filter-checkbox"
                type="radio"
                name="category"
                checked={FilterState.categoryName === "tshirt"}
                value="T-shirt"
                onClick={() =>
                  FilterDispatch({
                    type: "CATEGORIES",
                    payload: "tshirt",
                  })
                }
              />
              T-shirt
            </label>
            <label>
              <input
                className="filter-checkbox"
                type="radio"
                name="category"
                checked={FilterState.categoryName === "full sleeves"}
                value="Full sleeves T-shirt"
                onClick={() =>
                  FilterDispatch({
                    type: "CATEGORIES",
                    payload: "full sleeves",
                  })
                }
              />
              Full sleeves t-shirt
            </label>
            <label>
              <input
                className="filter-checkbox"
                type="radio"
                name="category"
                checked={FilterState.categoryName === "hoodie"}
                value="Hoodies"
                onClick={() =>
                  FilterDispatch({
                    type: "CATEGORIES",
                    payload: "hoodie",
                  })
                }
              />
              Hoodies
            </label>
            <label>
              <input
                className="filter-checkbox"
                type="radio"
                name="category"
                checked={FilterState.categoryName === "keychain"}
                value="Keychain"
                onClick={() =>
                  FilterDispatch({
                    type: "CATEGORIES",
                    payload: "keychain",
                  })
                }
              />
              Keychain
            </label>
            <label>
              <input
                className="filter-checkbox"
                type="radio"
                name="category"
                checked={FilterState.categoryName === "mug"}
                value="Mugs"
                onClick={() =>
                  FilterDispatch({
                    type: "CATEGORIES",
                    payload: "mug",
                  })
                }
              />
              Mugs
            </label>
          </li>
          <div className="filter-divider"></div>
          <li className="filter-section-title">RATING</li>

          <>
            <li className="list-item filter-item">
              <label>
                <input
                  className="filter-radio"
                  type="radio"
                  name="rating"
                  value={FilterState.ratings === "5"}
                  onClick={() =>
                    FilterDispatch({
                      type: "RATING",
                      payload: 5,
                    })
                  }
                />
                5 stars
              </label>
            </li>
            <li className="list-item filter-item">
              <label>
                <input
                  className="filter-radio"
                  type="radio"
                  name="rating"
                  value={FilterState.ratings === "4"}
                  onClick={() =>
                    FilterDispatch({
                      type: "RATING",
                      payload: 4,
                    })
                  }
                />
                4 stars and above
              </label>
            </li>
            <li className="list-item filter-item">
              <label>
                <input
                  className="filter-radio"
                  type="radio"
                  name="rating"
                  value={FilterState.ratings === "3"}
                  onClick={() =>
                    FilterDispatch({
                      type: "RATING",
                      payload: 3,
                    })
                  }
                />
                3 stars and above
              </label>
            </li>
            <li className="list-item filter-item">
              <label>
                <input
                  className="filter-radio"
                  type="radio"
                  name="rating"
                  value={FilterState.ratings === "2"}
                  onClick={() =>
                    FilterDispatch({
                      type: "RATING",
                      payload: 2,
                    })
                  }
                />
                2 stars and above
              </label>
            </li>
            <li className="list-item filter-item">
              <label>
                <input
                  className="filter-radio"
                  type="radio"
                  name="rating"
                  value={FilterState.ratings === "1"}
                  onClick={() =>
                    FilterDispatch({
                      type: "RATING",
                      payload: 1,
                    })
                  }
                />
                1 star and above
              </label>
            </li>
          </>
        </ul>
      </div>
    </div>
  );
};

export { Filter };
