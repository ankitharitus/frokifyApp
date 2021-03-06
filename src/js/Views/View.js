import icon from 'url:../../img/icons.svg';

export default class View {
  data;
  render(_data) {
    if (!_data || (Array.isArray(_data) && _data.length === 0))
      return this.renderError();
    this.data = _data;

    const markup = this.generateMarkup();

    this.clear();
    this.parent.insertAdjacentHTML('afterbegin', markup);
  }
  update(_data) {
    this.data = _data;
    if (this.data.length < 1) return;

    const newMarkUp = this.generateMarkup();
    const newDOM = document.createRange().createContextualFragment(newMarkUp);
    const currentEl = Array.from(this.parent.querySelectorAll('*'));
    const newEl = Array.from(newDOM.querySelectorAll('*'));

    newEl.forEach((newel, i) => {
      const currel = currentEl[i];

      if (
        !newel.isEqualNode(currel) &&
        newel.firstChild?.nodeValue.trim() !== ''
      )
        currel.textContent = newel.textContent;
      if (!newel.isEqualNode(currel)) {
        Array.from(newel.attributes).forEach(att => {
          currel.setAttribute(att.name, att.value);
        });
      }
    });
  }
  clear() {
    this.parent.innerHTML = '';
  }
  renderSpinner() {
    const markup = `<div class="spinner">
    <svg>
      <use href="${icon}#icon-loader"></use>
    </svg>
  </div>`;
    this.parent.innerHTML = '';
    this.parent.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(mess = this.message) {
    const markup = `<div class='error'>
    <div>
      <svg>
        <use href="${icon}#icon-smile"></use>
      </svg>
    </div>
    <p>${mess}</p>
  </div>`;
    this.clear();
    this.parent.insertAdjacentHTML('afterbegin', markup);
  }

  
  renderError(mes = this.errorMessage) {
    const markup = `<div class="error">
      <div>
        <svg>
          <use href="${icon}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${mes}</p>
    </div>`;
    this.clear();
    this.parent.insertAdjacentHTML('afterbegin', markup);
  }
}
