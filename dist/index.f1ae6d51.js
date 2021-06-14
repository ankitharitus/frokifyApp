!function(){function e(e){return e&&e.__esModule?e.default:e}var n={};var t=function(e){var t=n[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t};(function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)n[t[r]]=e[t[r]]})(JSON.parse('{"6GFSM":"index.f1ae6d51.js","3ZXxf":"icons.c781f215.svg"}'));const r=function(e){return new Promise((function(n,t){setTimeout((function(){t(new Error(`Request took too long! Timeout after ${e} second`))}),1e3*e)}))},i=async function(e){try{const n=await Promise.race([fetch(e),r("10")]),t=await n.json();if(!n.ok)throw new Error(`${t.message}`);return t.data}catch(e){throw new Error(e)}},a={recipe:{},search:{query:"",result:[],page:1,resultPerPage:10},bookmark:[]},s=function(e){return newRecipe={publisher:e.publisher,image:e.image_url,ingredients:e.ingredients,id:e.id,title:e.title,servings:e.servings,cookingTime:e.cooking_time,sourceUrl:e.source_url,...e.key&&{key:e.key}},newRecipe},o=async function(e){try{if(!e)return;const n=await i(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${e}&key=03310ea0-650f-42e1-9a97-b79cb3f0d317`);a.search.result=n.recipes.map((e=>({publisher:e.publisher,image:e.image_url,id:e.id,title:e.title,...e.key&&{key:e.key}})))}catch(e){throw e}},c=function(e=this.state.search.page){this.state.search.page=e;const n=10*(e-1),t=10*e;return this.state.search.result.slice(n,t)},l=function(e){a.bookmark.push(e),a.recipe.bookmarked=!0,u()},u=function(){localStorage.setItem("bookmark",JSON.stringify(a.bookmark))},d=async function(e){try{const n=Object.entries(e).filter((e=>e[0].startsWith("ingredient")&&e[1].length>0)).map((e=>{const n=e[1].split(",").map((e=>e.trim()));if(n.length<3)throw new Error("Wrong ingredients format!");const[t,r,i]=n;return{quantity:t?+t:null,unit:r,description:i}})),t={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:n},i=await async function(e,n){try{const t=fetch(e,{method:"POST",headers:{"Content-Type":"application/JSON"},body:JSON.stringify(n)}),i=await Promise.race([t,r("10")]),a=await i.json();if(!i.ok)throw new Error(`${a.message}`);return a.data}catch(e){throw new Error(e)}}("https://forkify-api.herokuapp.com/api/v2/recipes?key=03310ea0-650f-42e1-9a97-b79cb3f0d317",t);a.recipe=s(i.recipe),l(a.recipe)}catch(e){throw e}};!function(){const e=localStorage.getItem("bookmark");e&&(a.bookmark=JSON.parse(e))}();var p=null;var h,m=function(){return p||(p=function(){try{throw new Error}catch(n){var e=(""+n.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return(""+e[0]).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}()),p},f=t;function g(e){if(""===e)return".";var n="/"===e[e.length-1]?e.slice(0,e.length-1):e,t=n.lastIndexOf("/");return-1===t?".":n.slice(0,t)}function v(e,n){if(e===n)return"";var t=e.split("/");"."===t[0]&&t.shift();var r,i,a=n.split("/");for("."===a[0]&&a.shift(),r=0;(r<a.length||r<t.length)&&null==i;r++)t[r]!==a[r]&&(i=r);var s=[];for(r=0;r<t.length-i;r++)s.push("..");return a.length>i&&s.push.apply(s,a.slice(i)),s.join("/")}(h=function(e,n){return v(g(f(e)),f(n))})._dirname=g,h._relative=v;var b,_,y=e(m()+h("6GFSM","3ZXxf"));Fraction=function(e,n){if(void 0!==e&&n)"number"==typeof e&&"number"==typeof n?(this.numerator=e,this.denominator=n):"string"==typeof e&&"string"==typeof n&&(this.numerator=parseInt(e),this.denominator=parseInt(n));else if(void 0===n)if(num=e,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var t,r,i=num.split(" ");if(i[0]&&(t=i[0]),i[1]&&(r=i[1]),t%1==0&&r&&r.match("/"))return new Fraction(t).add(new Fraction(r));if(!t||r)return;if("string"==typeof t&&t.match("/")){var a=t.split("/");this.numerator=a[0],this.denominator=a[1]}else{if("string"==typeof t&&t.match("."))return new Fraction(parseFloat(t));this.numerator=parseInt(t),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),n=this.numerator%this.denominator,t=this.denominator,r=[];return 0!=e&&r.push(e),0!=n&&r.push((0===e?n:Math.abs(n))+"/"+t),r.length>0?r.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var n=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=n.denominator,n.rescale(e.denominator),e.rescale(td),n.numerator+=e.numerator,n.normalize()},Fraction.prototype.subtract=function(e){var n=this.clone();return e=e instanceof Fraction?e.clone():new Fraction(e),td=n.denominator,n.rescale(e.denominator),e.rescale(td),n.numerator-=e.numerator,n.normalize()},Fraction.prototype.multiply=function(e){var n=this.clone();if(e instanceof Fraction)n.numerator*=e.numerator,n.denominator*=e.denominator;else{if("number"!=typeof e)return n.multiply(new Fraction(e));n.numerator*=e}return n.normalize()},Fraction.prototype.divide=function(e){var n=this.clone();if(e instanceof Fraction)n.numerator*=e.denominator,n.denominator*=e.numerator;else{if("number"!=typeof e)return n.divide(new Fraction(e));n.denominator*=e}return n.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var n=this.clone().normalize();e=e.clone().normalize();return n.numerator===e.numerator&&n.denominator===e.denominator},Fraction.prototype.normalize=(b=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},_=function(e,n){if(n){var t=Math.pow(10,n);return Math.round(e*t)/t}return Math.round(e)},function(){if(b(this.denominator)){var e=_(this.denominator,9),n=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*n),this.numerator*=n}b(this.numerator)&&(e=_(this.numerator,9),n=Math.pow(10,e.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*n),this.denominator*=n);var t=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=t,this.denominator/=t,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,n){var t=[],r=Fraction.primeFactors(e),i=Fraction.primeFactors(n);return r.forEach((function(e){var n=i.indexOf(e);n>=0&&(t.push(e),i.splice(n,1))})),0===t.length?1:function(){var e,n=t[0];for(e=1;e<t.length;e++)n*=t[e];return n}()},Fraction.primeFactors=function(e){for(var n=Math.abs(e),t=[],r=2;r*r<=n;)n%r==0?(t.push(r),n/=r):r++;return 1!=n&&t.push(n),t};var w=Fraction;class k{data;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this.data=e;const n=this.generateMarkup();this.clear(),this.parent.insertAdjacentHTML("afterbegin",n)}update(e){if(this.data=e,this.data.length<1)return;const n=this.generateMarkup(),t=document.createRange().createContextualFragment(n),r=Array.from(this.parent.querySelectorAll("*"));Array.from(t.querySelectorAll("*")).forEach(((e,n)=>{const t=r[n];e.isEqualNode(t)||""===e.firstChild?.nodeValue?.trim?.()||(t.textContent=e.textContent),e.isEqualNode(t)||Array.from(e.attributes).forEach((e=>{t.setAttribute(e.name,e.value)}))}))}clear(){this.parent.innerHTML=""}renderSpinner(){const e=`<div class="spinner">\n    <svg>\n      <use href="${y}#icon-loader"></use>\n    </svg>\n  </div>`;this.parent.innerHTML="",this.parent.insertAdjacentHTML("afterbegin",e)}renderMessage(e=this.message){const n=`<div class='error'>\n    <div>\n      <svg>\n        <use href="${y}#icon-smile"></use>\n      </svg>\n    </div>\n    <p>${e}</p>\n  </div>`;this.clear(),this.parent.insertAdjacentHTML("afterbegin",n)}renderError(e=this.errorMessage){const n=`<div class="error">\n      <div>\n        <svg>\n          <use href="${y}#icon-alert-triangle"></use>\n        </svg>\n      </div>\n      <p>${e}</p>\n    </div>`;this.clear(),this.parent.insertAdjacentHTML("afterbegin",n)}}var $=new class extends k{parent=document.querySelector(".recipe");errorMessage="Could not found this recipe.Please try with another one!";renderHandler(e){window.addEventListener("hashchange",e),window.addEventListener("load",e)}updateServingHandler(e){parent.addEventListener("click",(function(n){const t=n.target.closest(".btn--tiny");t&&+t.dataset.update>0&&e(+t.dataset.update)}))}updateBookmark(e){this.parent.addEventListener("click",(function(n){n.target.closest(".btn--bookmark")&&e()}))}generateMarkup(){const e=this.data;return`<figure class="recipe__fig">\n      <img src="${e.image}" alt="${e.title}" class="recipe__img" />\n      <h1 class="recipe__title">\n        <span>${e.title}</span>\n      </h1>\n    </figure>\n  \n    <div class="recipe__details">\n      <div class="recipe__info">\n        <svg class="recipe__info-icon">\n          <use href=""></use>\n        </svg>\n        <span class="recipe__info-data recipe__info-data--minutes">${e.cookingTime}\n        </span>\n        <span class="recipe__info-text">minutes</span>\n      </div>\n      <div class="recipe__info">\n        <svg class="recipe__info-icon">\n          <use href="${y}#icon-users"></use>\n        </svg>\n        <span class="recipe__info-data recipe__info-data--people">${e.servings}</span>\n        <span class="recipe__info-text">servings</span>\n  \n        <div class="recipe__info-buttons">\n          <button class="btn--tiny btn--increase-servings" data-update=${e.servings-1}>\n            <svg>\n              <use href="${y}#icon-minus-circle"></use>\n            </svg>\n          </button>\n          <button class="btn--tiny btn--increase-servings" data-update=${e.servings+1}>\n            <svg>\n              <use href="${y}#icon-plus-circle"></use>\n            </svg>\n          </button>\n        </div>\n      </div>\n  \n      <div class="recipe__user-generated ${e.key?"":"hidden"}" >\n        <svg>\n          <use href="${y}#icon-user"></use>\n        </svg>\n      </div>\n      <button class="btn--round btn--bookmark">\n        <svg class="">\n          <use href="${y}#icon-bookmark${e.bookmarked?"-fill":""}"></use>\n        </svg>\n      </button>\n    </div>\n  \n    <div class="recipe__ingredients">\n      <h2 class="heading--2">Recipe ingredients</h2>\n      <ul class="recipe__ingredient-list">\n      ${e.ingredients.map((e=>`<li class="recipe__ingredient">\n        <svg class="recipe__icon">\n          <use href="${y}#icon-check"></use>\n        </svg>\n        <div class="recipe__quantity">${e.quantity?new w(e.quantity).toString():""}</div>\n        <div class="recipe__description">\n          <span class="recipe__unit">${e.unit}</span>\n          ${e.description}\n        </div>\n      </li>`)).join("")}\n       \n      </ul>\n    </div>\n  \n    <div class="recipe__directions">\n      <h2 class="heading--2">How to cook it</h2>\n      <p class="recipe__directions-text">\n        This recipe was carefully designed and tested by\n        <span class="recipe__publisher">${e.publisher}</span>. Please check out\n        directions at their website.\n      </p>\n      <a\n        class="btn--small recipe__btn"\n        href="${e.sourceUrl}"\n        target="_blank"\n      >\n        <span>Directions</span>\n        <svg class="search__icon">\n          <use href="${y}#icon-arrow-right"></use>\n        </svg>\n      </a>\n    </div>`}};const F=document.querySelector(".search");var S=new class extends k{query;parent=document.querySelector(".results");errorMessage="Could not found this recipe.Please try with another one!";getQuery(){return this.query=F.querySelector(".search__field").value,this.clearSearchbar(),this.query}clearSearchbar(){F.querySelector(".search__field").value=""}searchHandler(e){F.addEventListener("submit",(function(n){n.preventDefault(),e()}))}generateMarkup(){let e=this.data;const n=window.location.hash.slice(1);return e.map((e=>` <li class="preview">\n        <a class="preview__link ${n===e.id?"preview__link--active":""} " href="#${e.id}">\n          <figure class="preview__fig">\n            <img src="${e.image}" alt="Test" />\n          </figure>\n          <div class="preview__data">\n            <h4 class="preview__title">${e.title}</h4>\n            <p class="preview__publisher">${e.publisher}</p>\n            <div class="preview__user-generated ${e.key?"":"hidden"}">\n              <svg>\n                <use href="${y}#icon-user"></use>\n              </svg>\n            </div>\n          </div>\n        </a>\n      </li>`)).join("")}};var q=new class extends k{parent=document.querySelector(".pagination");clickHandler(e){this.parent.addEventListener("click",(function(n){const t=n.target.closest(".btn--inline");if(!t)return;const r=+t.dataset.offno;e(r)}))}generateMarkup(){const e=Math.ceil(this.data.result.length/this.data.resultPerPage),n=this.data.page;return 1===n&&e>1?`\n    <button data-offNo=${n+1} class="btn--inline pagination__btn--next">\n        <span>Page ${n+1}</span>\n        <svg class="search__icon">\n        <use href="${y}#icon-arrow-right"></use>\n        </svg>\n    </button>`:n===e&&e>1?`\n      <button data-offNo=${n-1} class="btn--inline pagination__btn--prev">\n        <svg class="search__icon">\n          <use href="${y}#icon-arrow-left"></use>\n        </svg>\n        <span>Page ${n-1}</span>\n      </button>`:n<e?` \n      <button data-offNo=${n+1} class="btn--inline pagination__btn--next">\n        <span>Page ${n+1}</span>\n        <svg class="search__icon">\n        <use href="${y}#icon-arrow-right"></use>\n        </svg>\n     </button>\n     <button data-offNo=${n-1} class="btn--inline pagination__btn--prev">\n        <svg class="search__icon">\n          <use href="${y}#icon-arrow-left"></use>\n        </svg>\n        <span>Page ${n-1}</span>\n      </button>`:""}};var M=new class extends k{query;parent=document.querySelector(".bookmarks__list");errorMessage="No bookmark yet !";eventHandler(e){window.addEventListener("load",e)}generateMarkup(){let e=this.data;const n=window.location.hash.slice(1);return e.map((e=>` <li class="preview">\n          <a class="preview__link ${n===e.id?"preview__link--active":""} " href="#${e.id}">\n            <figure class="preview__fig">\n              <img src="${e.image}" alt="Test" />\n            </figure>\n            <div class="preview__data">\n              <h4 class="preview__title">${e.title}</h4>\n              <p class="preview__publisher">${e.publisher}</p>\n              <div class="preview__user-generated ${e.key?"":"hidden"}">\n                <svg>\n                  <use href="${y}#icon-user"></use>\n                </svg>\n              </div>\n            </div>\n          </a>\n        </li>`)).join("")}};var E=new class extends k{parent=document.querySelector(".upload");window=document.querySelector(".add-recipe-window");overlay=document.querySelector(".overlay");recipeBtn=document.querySelector(".nav__btn--add-recipe");closeBtn=document.querySelector(".btn--close-modal");message="Recipe was successfully added ";constructor(){super(),this.showWindow(),this.hideWindow()}showForm(){const e=this.generateMarkup();this.parent.innerHTML="",this.parent.insertAdjacentHTML("afterbegin",e)}toggleWindow(){this.window.classList.toggle("hidden"),this.overlay.classList.toggle("hidden")}showWindow(){const e=this;this.recipeBtn.addEventListener("click",(function(){e.toggleWindow(),console.log("hii"),e.showForm()}))}hideWindow(){this.closeBtn.addEventListener("click",this.toggleWindow.bind(this)),this.overlay.addEventListener("click",this.toggleWindow.bind(this))}uploadRecipe(e){this.parent.addEventListener("submit",(function(n){n.preventDefault();const t=[...new FormData(this)],r=Object.fromEntries(t);e(r)}))}generateMarkup(){return'     <form class="upload">\n      <div class="upload__column">\n        <h3 class="upload__heading">Recipe data</h3>\n        <label>Title</label>\n        <input value="Test123" required name="title" type="text" />\n        <label>URL</label>\n        <input value="Test123" required name="sourceUrl" type="text" />\n        <label>Image URL</label>\n        <input value="Test123" required name="image" type="text" />\n        <label>Publisher</label>\n        <input value="Test123" required name="publisher" type="text" />\n        <label>Prep time</label>\n        <input value="23" required name="cookingTime" type="number" />\n        <label>Servings</label>\n        <input value="23" required name="servings" type="number" />\n      </div>\n\n      <div class="upload__column">\n        <h3 class="upload__heading">Ingredients</h3>\n        <label>Ingredient 1</label>\n        <input\n          value="0.5,kg,Rice"\n          type="text"\n          required\n          name="ingredient-1"\n          placeholder="Format: \'Quantity,Unit,Description\'"\n        />\n        <label>Ingredient 2</label>\n        <input\n          value="1,,Avocado"\n          type="text"\n          name="ingredient-2"\n          placeholder="Format: \'Quantity,Unit,Description\'"\n        />\n        <label>Ingredient 3</label>\n        <input\n          value=",,salt"\n          type="text"\n          name="ingredient-3"\n          placeholder="Format: \'Quantity,Unit,Description\'"\n        />\n        <label>Ingredient 4</label>\n        <input\n          type="text"\n          name="ingredient-4"\n          placeholder="Format: \'Quantity,Unit,Description\'"\n        />\n        <label>Ingredient 5</label>\n        <input\n          type="text"\n          name="ingredient-5"\n          placeholder="Format: \'Quantity,Unit,Description\'"\n        />\n        <label>Ingredient 6</label>\n        <input\n          type="text"\n          name="ingredient-6"\n          placeholder="Format: \'Quantity,Unit,Description\'"\n        />\n      </div>\n\n      <button class="btn upload__btn">\n        <svg>\n          <use href="src/img/icons.svg#icon-upload-cloud"></use>\n        </svg>\n        <span>Upload</span>\n      </button>\n    </form>'}};document.querySelector(".recipe");const x=async function(){try{const e=window.location.hash.slice(1);if(!e)return;$.renderSpinner(),await async function(e){try{if(!e)return;let n=await i(`https://forkify-api.herokuapp.com/api/v2/recipes/${e}?key=03310ea0-650f-42e1-9a97-b79cb3f0d317`);n=n.recipe,a.recipe=s(n),a.bookmark.some((n=>n.id===e))?a.recipe.bookmarked=!0:a.recipe.bookmarked=!1}catch(e){throw e}}(e);const n=a.recipe;await o(e),M.update(a.bookmark),$.render(n)}catch(e){$.renderError(e)}},T=async function(){try{S.renderSpinner();const e=S.getQuery();await o(e);a.search.result;S.render(c()),q.render(a.search)}catch(e){throw e}},H=function(e){S.render(c(e)),q.render(a.search)},L=function(e){var n;n=e,a.recipe.ingredients.forEach((e=>{e.quantity=e.quantity*n/a.recipe.servings})),a.recipe.servings=n,$.update(a.recipe)},P=function(){a.recipe.bookmarked?function(e){const n=a.bookmark.find((n=>n.id===e));a.bookmark.splice(n,1),a.recipe.bookmarked=!1,u()}(a.recipe.id):l(a.recipe),$.update(a.recipe),M.render(a.bookmark)},j=function(){M.render(a.bookmark)},A=async function(e){try{E.renderSpinner(),await d(e),$.render(a.recipe),E.renderMessage(),M.render(a.bookmark),window.history.pushState(null,"",`#${a.recipe.id}`),setTimeout((function(){E.toggleWindow()}),2500)}catch(e){E.renderError(e)}};$.renderHandler(x),S.searchHandler(T),q.clickHandler(H),$.updateServingHandler(L),$.updateBookmark(P),M.eventHandler(j),E.uploadRecipe(A)}();
//# sourceMappingURL=index.f1ae6d51.js.map
