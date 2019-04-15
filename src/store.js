import { createStore } from "redux";

let initialState = {
  recipeName: "",
  recipeCategory: "",
  authorFirstName: "",
  authorLastName: "",
  ingredients: [],
  instructions: [],
  recipes: []
};

export const UPDATE_RECIPE_NAME = "UPDATE_RECIPE_NAME";
export const UPDATE_RECIPE_CATEGORY = "UPDATE_RECIPE_CATEGORY";
export const UPDATE_AUTHOR_FIRST_NAME = "UPDATE_AUTHOR_FIRST_NAME";
export const UPDATE_AUTHOR_LAST_NAME = "UPDATE_AUTHOR_LAST_NAME";
export const UPDATE_INGREDIENTS = "UPDATE_INGREDIENTS";
export const UPDATE_INSTRUCTIONS = "UPDATE_INSTRUCTIONS";
export const UPDATE_RECIPES = "UPDATE_RECIPES";
export const CLEAR_STATE = "CLEAR_STATE";
export const DELETE_RECIPE = "DELETE_RECIPE";

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_RECIPE_NAME:
      return {
        ...state,
        recipeName: action.payload
      };
    case UPDATE_RECIPE_CATEGORY:
      return {
        ...state,
        recipeCategory: action.payload
      };
    case UPDATE_AUTHOR_FIRST_NAME:
      return {
        ...state,
        authorFirstName: action.payload
      };
    case UPDATE_AUTHOR_LAST_NAME:
      return {
        ...state,
        authorLastName: action.payload
      };
    case UPDATE_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    case UPDATE_INSTRUCTIONS:
      return {
        ...state,
        instructions: [...state.instructions, action.payload]
      };
    case UPDATE_RECIPES:
      return {
        ...state,
        recipes: [
          ...state.recipes,
          {
            recipeName: state.recipeName,
            recipeCategory: state.recipeCategory,
            authorFirstName: state.authorFirstName,
            authorLastName: state.authorLastName,
            ingredients: state.ingredients,
            instructions: state.instructions
          }
        ]
      };
    case CLEAR_STATE:
      return {
        recipeName: "",
        recipeCategory: "",
        authorFirstName: "",
        authorLastName: "",
        ingredients: [],
        instructions: [],
        recipes: state.recipes
      };
    case DELETE_RECIPE:
      let newRecipes = [...state.recipes];
      newRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: newRecipes
      };
    default:
      return state;
  }
}

export default createStore(reducer);
