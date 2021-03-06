var _ModelJs = require('./Model.js');
var _ViewsRecipeView = require('./Views/recipeView');
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _ViewsRecipeViewDefault = _parcelHelpers.interopDefault(_ViewsRecipeView);
var _ViewsSearchView = require('./Views/searchView');
var _ViewsSearchViewDefault = _parcelHelpers.interopDefault(_ViewsSearchView);
require('./Views/View.js');
var _ViewsPagingView = require('./Views/pagingView');
var _ViewsPagingViewDefault = _parcelHelpers.interopDefault(_ViewsPagingView);
const recipeContainer = document.querySelector('.recipe');
// https://forkify-api.herokuapp.com/v2
// /////////////////////////////////////
const getRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    _ViewsRecipeViewDefault.default.renderSpinner();
    await _ModelJs.loadRecipe(id);
    const recipe = _ModelJs.state.recipe;
    _ViewsRecipeViewDefault.default.render(recipe);
    updateServing(16);
  } catch (err) {
    _ViewsRecipeViewDefault.default.renderError(err);
  }
};
const searchRecipe = async function () {
  try {
    _ViewsSearchViewDefault.default.renderSpinner();
    const query = _ViewsSearchViewDefault.default.getQuery();
    await _ModelJs.loadSearchResult(query);
    const searchresult = _ModelJs.state.search.result;
    // searchView.render(searchresult);
    _ViewsSearchViewDefault.default.render(_ModelJs.getSearchResult(1));
    _ViewsPagingViewDefault.default.render(_ModelJs.state.search);
  } catch (err) {
    console.log(err);
  }
};
const paginationhandle = function (goto) {
  console.log(goto);
  _ViewsSearchViewDefault.default.render(_ModelJs.getSearchResult(goto));
  _ViewsPagingViewDefault.default.render(_ModelJs.state.search);
};
const controlServing = function (servings) {
  console.log('jk');
  _ModelJs.updateServing(servings);
  // recipeView.render(model.state.recipe);
  _ViewsRecipeViewDefault.default.update(_ModelJs.state.recipe);
};
const init = function () {
  _ViewsRecipeViewDefault.default.renderHandler(getRecipe);
  _ViewsSearchViewDefault.default.searchHandler(searchRecipe);
  _ViewsPagingViewDefault.default.clickHandler(paginationhandle);
  _ViewsRecipeViewDefault.default.updateServingHandler(controlServing);
};
init();
