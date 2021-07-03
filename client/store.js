import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";

const ADD_GROCERY = "ADD_GROCERY";
const TOGGLE_GROCERY = "TOGGLE_GROCERY";
const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
const SHOW_ALL = "SHOW_ALL";
const SHOW_BOUGHT = "SHOW_BOUGHT";
const SHOW_ACTIVE = "SHOW_ACTIVE";

let nextId = 0;
export const addGrocery = (text) => ({
  type: ADD_GROCERY,
  id: nextId++,
  text,
});

export const toggleGrocery = (id) => ({
  type: TOGGLE_GROCERY,
  id,
});

export const setVisibilityFilter = (visibilityFilter) => ({
  type: SET_VISIBILITY_FILTER,
  visibilityFilter,
});

const initialState = { groceries: [], visibilityFilter: SHOW_ALL };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROCERY:
      const newGrocery = {
        id: action.id,
        text: action.text,
        bought: false,
      };
      return { ...state, groceries: [...state.groceries, newGrocery] };

    case TOGGLE_GROCERY:
      const groceries = state.groceries.map((grocery) => {
        if (grocery.id === action.id) {
          return { ...grocery, bought: !grocery.bought };
        } else {
          return grocery;
        }
      });
      return { ...state, groceries };

    case SET_VISIBILITY_FILTER:
      return { ...state, visibilityFilter: action.visibilityFilter };

    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(logger));

export default store;
