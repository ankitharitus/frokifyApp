import View from './View';
import icon from 'url:../../img/icons.svg';
const searchForm = document.querySelector('.search');

class SearchView extends View {
  query;
  parent = document.querySelector('.results');
  errorMessage = 'Could not found this recipe.Please try with another one!';
  getQuery() {
    this.query = searchForm.querySelector('.search__field').value;
    this.clearSearchbar();
    return this.query;
  }
  clearSearchbar() {
    searchForm.querySelector('.search__field').value = '';
  }
  searchHandler(fun) {
    searchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      fun();
    });
  }
  generateMarkup() {
    let data = this.data;
    const id = window.location.hash.slice(1);
    return data
      .map(el => {
        return ` <li class="preview">
        <a class="preview__link ${
          id === el.id ? 'preview__link--active' : ''
        } " href="#${el.id}">
          <figure class="preview__fig">
            <img src="${el.image}" alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${el.title}</h4>
            <p class="preview__publisher">${el.publisher}</p>
            <div class="preview__user-generated ${el.key ? '' : 'hidden'}">
              <svg>
                <use href="${icon}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>`;
      })
      .join('');
  }
}

export default new SearchView();
