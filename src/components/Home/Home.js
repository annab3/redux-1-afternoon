import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { DELETE_RECIPE } from "../../store";
import RecipeCard from "./../RecipeCard/RecipeCard";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    const reduxState = store.getState();
    this.state = {
      recipes: reduxState.recipes
    };
  }
  handleDeleteClick(key) {
    let actionDeleteRecipe = {
      type: DELETE_RECIPE,
      payload: key
    };
    store.dispatch(actionDeleteRecipe);
  }

  render() {
    const recipes = this.state.recipes.map((recipe, i) => {
      return (
        <RecipeCard
          index={i}
          key={i}
          name={recipe.recipeName}
          category={recipe.recipeCategory}
          authorFirst={recipe.authorFirstName}
          authorLast={recipe.authorLastName}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          handleDeleteClick={this.handleDeleteClick}
        />
      );
    });
    return (
      <div className="Home">
        <Link to="/add/name">
          <button>Create New Recipe</button>
        </Link>
        <div className="card_container">{recipes}</div>
      </div>
    );
  }
}

export default Home;
