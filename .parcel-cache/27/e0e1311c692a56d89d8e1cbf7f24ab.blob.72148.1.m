var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "state", function () {
  return state;
});
_parcelHelpers.export(exports, "loadRecipe", function () {
  return loadRecipe;
});
_parcelHelpers.export(exports, "loadSearchResult", function () {
  return loadSearchResult;
});
_parcelHelpers.export(exports, "getSearchResult", function () {
  return getSearchResult;
});
_parcelHelpers.export(exports, "updateServing", function () {
  return updateServing;
});
_parcelHelpers.export(exports, "addBookmark", function () {
  return addBookmark;
});
_parcelHelpers.export(exports, "deleteBookmark", function () {
  return deleteBookmark;
});
_parcelHelpers.export(exports, "addLocalstorage", function () {
  return addLocalstorage;
});
_parcelHelpers.export(exports, "uploadNewRecipe", function () {
  return uploadNewRecipe;
});
var _config = require('./config');
var _helper = require('./helper');
const state = {
  recipe: {},
  search: {
    query: '',
    result: [],
    page: 1,
    resultPerPage: 10
  },
  bookmark: []
};
const loadRecipe = async function (id) {
  try {
    if (!id) return;
    let recipe = await _helper.getJson(`${_config.URL_API}/${id}`);
    recipe = recipe.recipe;
    state.recipe = {
      publisher: recipe.publisher,
      image: recipe.image_url,
      ingredients: recipe.ingredients,
      id: recipe.id,
      title: recipe.title,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      sourceUrl: recipe.source_url
    };
    if (state.bookmark.some(book => book.id === id)) {
      state.recipe.bookmarked = true;
    } else {
      state.recipe.bookmarked = false;
    }
  } catch (err) {
    throw err;
  }
};
const loadSearchResult = async function (query) {
  try {
    if (!query) return;
    const data = await _helper.getJson(`${_config.URL_API}?search=${query}`);
    state.search.result = data.recipes.map(rec => {
      return {
        publisher: rec.publisher,
        image: rec.image_url,
        id: rec.id,
        title: rec.title
      };
    });
  } catch (err) {
    throw err;
  }
};
const getSearchResult = function (page = this.state.search.page) {
  this.state.search.page = page;
  // const totalp = Math.ceil(this.state.search.result.length / 10);
  const start = (page - 1) * 10;
  const end = page * 10;
  return this.state.search.result.slice(start, end);
};
const updateServing = function (newserving) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = ing.quantity * newserving / state.recipe.servings;
  });
  state.recipe.servings = newserving;
};
const addBookmark = function (recipe) {
  state.bookmark.push(recipe);
  state.recipe.bookmarked = true;
  addLocalstorage();
};
const deleteBookmark = function (id) {
  const index = state.bookmark.find(book => book.id === id);
  state.bookmark.splice(index, 1);
  state.recipe.bookmarked = false;
  addLocalstorage();
};
const addLocalstorage = function () {
  localStorage.setItem('bookmark', JSON.stringify(state.bookmark));
};
const clearLocalstorage = function () {
  localStorage.clear('bookmark');
};
const uploadNewRecipe = async function (newRecipe) {
  try {
    const indegridents = Object.entries(newRecipe).filter(ent => ent[0].startsWith('ingredient') && ent[1].length > 0).map(ing => {
      const ingArr = ing[1].replaceAll(' ', '').split(',');
      if (ingArr.length < 3) throw new Error('Wrong ingredients format!');
      const [quantity, unit, description] = ingArr;
      return {
        quantity: quantity ? +quantity : null,
        unit,
        description
      };
    });
    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients: indegridents
    };
    console.log(recipe);
    const resp = await _helper.setJson(`${_config.URL_API}?key='03310ea0-650f-42e1-9a97-b79cb3f0d317'`, recipe);
    console.log(resp);
  } catch (err) {
    throw err;
  }
};
const init = function () {
  const data = localStorage.getItem('bookmark');
  console.log(JSON.parse(data));
  if (data) {
    state.bookmark = JSON.parse(data);
    console.log(JSON.parse(data));
  }
};
init();
