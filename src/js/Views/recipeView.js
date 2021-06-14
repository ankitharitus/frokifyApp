'use strict';

import icon from 'url:../../img/icons.svg';
import { Fraction } from 'fractional';
import View from './View';

class recipeView extends View {
  parent = document.querySelector('.recipe');
  errorMessage = 'Could not found this recipe.Please try with another one!';

  renderHandler(fun) {
    window.addEventListener('hashchange', fun);
    window.addEventListener('load', fun);
  }
  updateServingHandler(func) {
    parent.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--tiny');
      if (!btn) return;
      if (+btn.dataset.update > 0) func(+btn.dataset.update);
    });
  }

  updateBookmark(func) {
    this.parent.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--bookmark');
      if (!btn) return;
      func();
    });
  }
  generateMarkup() {
    const recipe = this.data;
    return `<figure class="recipe__fig">
      <img src="${recipe.image}" alt="${recipe.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${recipe.title}</span>
      </h1>
    </figure>
  
    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href=""></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${
          recipe.cookingTime
        }
        </span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${icon}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${
          recipe.servings
        }</span>
        <span class="recipe__info-text">servings</span>
  
        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings" data-update=${
            recipe.servings - 1
          }>
            <svg>
              <use href="${icon}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings" data-update=${
            recipe.servings + 1
          }>
            <svg>
              <use href="${icon}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>
  
      <div class="recipe__user-generated ${recipe.key ? '' : 'hidden'}" >
        <svg>
          <use href="${icon}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round btn--bookmark">
        <svg class="">
          <use href="${icon}#icon-bookmark${
      recipe.bookmarked ? '-fill' : ''
    }"></use>
        </svg>
      </button>
    </div>
  
    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
      ${recipe.ingredients
        .map(ing => {
          return `<li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${icon}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${
          ing.quantity ? new Fraction(ing.quantity).toString() : ''
        }</div>
        <div class="recipe__description">
          <span class="recipe__unit">${ing.unit}</span>
          ${ing.description}
        </div>
      </li>`;
        })
        .join('')}
       
      </ul>
    </div>
  
    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${
          recipe.publisher
        }</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${recipe.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${icon}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>`;
  }
}
export default new recipeView();
