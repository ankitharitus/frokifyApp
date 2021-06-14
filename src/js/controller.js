// #const { error } = require('node:console');
import * as model from './Model.js';
import recipeView from './Views/recipeView';
import searchView from './Views/searchView';
import view from './Views/View.js';
import pagingView from './Views/pagingView';
import bookmarkView from './Views/bookmarkView';
import addrecipeView from './Views/addRecipeView';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const getRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
    await model.loadRecipe(id);
    const recipe = model.state.recipe;

    await model.loadSearchResult(id);
    // console.log(model.getSearchResult());
    //searchView.render(model.getSearchResult());
    bookmarkView.update(model.state.bookmark);
    recipeView.render(recipe);
  } catch (err) {
    recipeView.renderError(err);
  }
};

const searchRecipe = async function () {
  try {
    searchView.renderSpinner();

    const query = searchView.getQuery();

    await model.loadSearchResult(query);

    const searchresult = model.state.search.result;

    // searchView.render(searchresult);

    searchView.render(model.getSearchResult());

    pagingView.render(model.state.search);
  } catch (err) {
    throw err;
  }
};
const paginationhandle = function (goto) {
  searchView.render(model.getSearchResult(goto));
  pagingView.render(model.state.search);
};

const controlServing = function (servings) {
  model.updateServing(servings);
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const bookMark = function () {
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else {
    model.deleteBookmark(model.state.recipe.id);
  }

  recipeView.update(model.state.recipe);

  bookmarkView.render(model.state.bookmark);
};
const controlBookmarks = function () {
  bookmarkView.render(model.state.bookmark);
};

const newRecipe = async function (recipe) {
  try {
    addrecipeView.renderSpinner();

    await model.uploadNewRecipe(recipe);
   
    recipeView.render(model.state.recipe);
    addrecipeView.renderMessage();

    bookmarkView.render(model.state.bookmark);
   
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    setTimeout(function () {
      addrecipeView.toggleWindow();
    }, 2500);
  } catch (err) {
    addrecipeView.renderError(err);
  }
};
const init = function () {
  recipeView.renderHandler(getRecipe);
  searchView.searchHandler(searchRecipe);
  pagingView.clickHandler(paginationhandle);
  recipeView.updateServingHandler(controlServing);
  recipeView.updateBookmark(bookMark);
  bookmarkView.eventHandler(controlBookmarks);
  addrecipeView.uploadRecipe(newRecipe);
};
init();
