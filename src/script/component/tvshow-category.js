import DataCategories from '../data/data-categories.json';

class TvshowCategory extends HTMLElement {

  connectedCallback() {
    this.innerHTML = `
        <style>
          .custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
            background-color: #FFC300 !important;
            border-color: #FFC300 !important;
          }

          .custom-checkbox
            .custom-control-input:checked:focus
            ~ .custom-control-label::before {
            box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 0, 0, 0.25);
          }
        </style>`;

    let htmlContent = '';

    DataCategories.genres.map((category, id) => {

      htmlContent += '<ul class="navbar-nav mr-auto">';
      htmlContent += `
            <li class="nav-sidebar-item">
              ${category.name}
              <div class="custom-checkbox float-right">
                <input class="custom-control-input" type="checkbox" data-item="${category.name}" id="checkbox-${id}">
                <label class="custom-control-label" for="checkbox-${id}"></label>
              </div>
            </li>`;
      htmlContent += '</ul>';
      
    });

    this.innerHTML += htmlContent;
  }
}

customElements.define("tvshow-category", TvshowCategory);
