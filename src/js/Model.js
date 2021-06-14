import { URL_API, Key } from './config';
import { getJson, setJson } from './helper';
export const state = {
  recipe: {},
  search: {
    query: '',
    result: [],
    page: 1,
    resultPerPage: 10,
  },

  bookmark: [],
};
export const loadRecipe = async function (id) {
  try {
    if (!id) return;
    let recipe = await getJson(`${URL_API}/${id}?key=${Key}`);
    recipe = recipe.recipe;
    state.recipe = formataData(recipe);
    if (state.bookmark.some(book => book.id === id)) {
      state.recipe.bookmarked = true;
    } else {
      state.recipe.bookmarked = false;
    }
  } catch (err) {
    throw err;
  }
};

const formataData = function (recipe) {
  newRecipe = {
    publisher: recipe.publisher,
    image: recipe.image_url,
    ingredients: recipe.ingredients,
    id: recipe.id,
    title: recipe.title,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    sourceUrl: recipe.source_url,
    ...(recipe.key && { key: recipe.key }),
  };
  return newRecipe;
};
export const loadSearchResult = async function (query) {
  try {
    if (!query) return;
    const data = await getJson(`${URL_API}?search=${query}&key=${Key}`);
    state.search.result = data.recipes.map(rec => {
      return {
        publisher: rec.publisher,
        image: rec.image_url,
        id: rec.id,
        title: rec.title,
        ...(rec.key && { key: rec.key }),
      };
    });
  } catch (err) {
    throw err;
  }
};
export const getSearchResult = function (page = this.state.search.page) {
  this.state.search.page = page;
  //const totalp = Math.ceil(this.state.search.result.length / 10);
  const start = (page - 1) * 10;
  const end = page * 10;

  return this.state.search.result.slice(start, end);
};

export const updateServing = function (newserving) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newserving) / state.recipe.servings;
  });
  state.recipe.servings = newserving;
};

export const addBookmark = function (recipe) {
  state.bookmark.push(recipe);
  state.recipe.bookmarked = true;
  addLocalstorage();
};

export const deleteBookmark = function (id) {
  const index = state.bookmark.find(book => book.id === id);
  state.bookmark.splice(index, 1);
  state.recipe.bookmarked = false;

  addLocalstorage();
};

export const addLocalstorage = function () {
  localStorage.setItem('bookmark', JSON.stringify(state.bookmark));
};

const clearLocalstorage = function () {
  localStorage.clear('bookmark');
};

export const uploadNewRecipe = async function (newRecipe) {
  try {
    const indegridents = Object.entries(newRecipe)
      .filter(ent => ent[0].startsWith('ingredient') && ent[1].length > 0)
      .map(ing => {
        // const ingArr = ing[1].replaceAll(' ', '').split(',');
        const ingArr = ing[1].split(',').map(el => el.trim());
        if (ingArr.length < 3) throw new Error('Wrong ingredients format!');
        const [quantity, unit, description] = ingArr;
        return { quantity: quantity ? +quantity : null, unit, description };
      });
    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients: indegridents,
    };

    const resp = await setJson(`${URL_API}?key=${Key}`, recipe);
    state.recipe = formataData(resp.recipe);
    addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};

const init = function () {
  const data = localStorage.getItem('bookmark');

  if (data) {
    state.bookmark = JSON.parse(data);
  }
};
init();
