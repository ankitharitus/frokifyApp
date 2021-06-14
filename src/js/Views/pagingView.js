import icon from 'url:../../img/icons.svg';
import View from './View';
class PagingView extends View {
  parent = document.querySelector('.pagination');

  clickHandler(fun) {
    this.parent.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goto = +btn.dataset.offno;
      fun(goto);
    });
  }
  generateMarkup() {
    const noPage = Math.ceil(this.data.result.length / this.data.resultPerPage);
    const curPage = this.data.page;

    if (curPage === 1 && noPage > 1)
      return `
    <button data-offNo=${curPage + 1} class="btn--inline pagination__btn--next">
        <span>Page ${curPage + 1}</span>
        <svg class="search__icon">
        <use href="${icon}#icon-arrow-right"></use>
        </svg>
    </button>`;

    if (curPage === noPage && noPage > 1)
      return `
      <button data-offNo=${
        curPage - 1
      } class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icon}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
      </button>`;

    if (curPage < noPage)
      return ` 
      <button data-offNo=${
        curPage + 1
      } class="btn--inline pagination__btn--next">
        <span>Page ${curPage + 1}</span>
        <svg class="search__icon">
        <use href="${icon}#icon-arrow-right"></use>
        </svg>
     </button>
     <button data-offNo=${
       curPage - 1
     } class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
          <use href="${icon}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
      </button>`;
    return '';
  }
}
export default new PagingView();
