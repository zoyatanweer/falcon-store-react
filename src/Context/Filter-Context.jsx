import { createContext, useContext, useReducer } from "react";

const initialData = {
  search: "",
  sortByPrice: "",
  priceRange: 3500,
  categoryName: [],
  ratings: 1,
  includeOutOfStock: true,
  dataToShow: [],
  originalData: [],
};

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [FilterState, FilterDispatch] = useReducer(reducerFunc, initialData);
  return (
    <FilterContext.Provider value={{ FilterState, FilterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        dataToShow: action.payload,
        originalData: action.payload,
      };
    case "CLEAR_ALL":
      return {
        ...state,
        search: state.search,
        sortByPrice: "",
        priceRange: 3500,
        categoryName: [],
        ratings: 1,
        includeOutOfStock: true,
        dataToShow: state.originalData,
        originalData: state.originalData,
      };
    case "SORT_BY_PRICE":
      if (action.payload === "PRICE_LOW_TO_HIGH") {
        return {
          ...state,
          sortByPrice: "PRICE_LOW_TO_HIGH",
          dataToShow: [...state.dataToShow].sort(
            (a, b) => a.discountPrice - b.discountPrice
          ),
        };
      } else if (action.payload === "PRICE_HIGH_TO_LOW") {
        return {
          ...state,
          sortByPrice: "PRICE_HIGH_TO_LOW",
          dataToShow: [...state.dataToShow].sort(
            (a, b) => b.discountPrice - a.discountPrice
          ),
        };
      } else {
        return { ...state };
      }
    case "PRICE_RANGE":
      return {
        ...state,
        priceRange: action.payload,
      };
    case "CATEGORIES":
      return {
        ...state,
        // categoryName: action.payload,
        categoryName: state.categoryName,
      };
    // return {
    //   ...state,
    //   categoryName: state.categoryName.includes(action.payload)
    //     ? state.categoryName.filter((i) => i !== action.payload)
    //     : [...state.categoryName, action.payload],
    // };

    //2 dispatch : add and remove
    //

    case "RATING":
      return {
        ...state,
        ratings: action.payload,
      };
    case "INCLUDE_OUT_OF_STOCK":
      return {
        ...state,
        // includeOutOfStock: action.payload,
        includeOutOfStock: !state.includeOutOfStock,
      };
    case "SEARCH":
      return {
        ...state,
        search: action.payload,
      };

    default:
      return state;
  }
};
