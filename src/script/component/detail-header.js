class DetailHeader extends HTMLElement {

  set update(value) {
    this.setAttribute('name', value.name);
    this.setAttribute('first_air_date', value.first_air_date);
    this.setAttribute('last_air_date', value.last_air_date);
    this.setAttribute('vote_average', value.vote_average);
    this.setAttribute('number_of_episodes', value.number_of_episodes);
    this.setAttribute('number_of_seasons', value.number_of_seasons);
    this.setAttribute('origin_country', value.origin_country);
    this.setAttribute('overview', value.overview);
    this.setAttribute('backdrop_path', value.backdrop_path);
    this.render();
  }

  render() {
    this.name = this.getAttribute("name") || null;
    this.first_air_date = this.getAttribute("first_air_date") || null;
    this.last_air_date = this.getAttribute("last_air_date") || null;
    this.vote_average = this.getAttribute("vote_average") || null;
    this.number_of_episodes = this.getAttribute("number_of_episodes") || null;
    this.number_of_seasons = this.getAttribute("number_of_seasons") || null;
    this.origin_country = this.getAttribute("origin_country") || null;
    this.overview = this.getAttribute("overview") || null;
    this.backdrop_path = this.getAttribute("backdrop_path") || null;

    this.innerHTML = `
        <style>
            .breadcrumb {
                font-size: 0.7rem;
                background-color: transparent;
                padding: 0;
            }
            .breadcrumb .breadcrumb-item a {
                color: #FFD32D;
            }
            .breadcrumb .breadcrumb-item.active {
                color: #FFC300;
                font-weight: bold;
            }
        </style>
        
        <h5>${this.name}</h5>
        <div class="row tvshow-details">

          <div class="col-12 col-md-4">
            <span>First Air Date : ${this.first_air_date}</span>
          </div>
          <div class="col-12 col-md-4">
            <span>Last Air Date : ${this.last_air_date}</span>
          </div>
          <div class="col-12 col-md-4">
            <span>Vote Average : ${this.vote_average}</span>
          </div>
          <div class="col-12 col-md-4">
            <span>Total Episodes : ${this.number_of_episodes}</span>
          </div>
          <div class="col-12 col-md-4">
            <span>Total Seasons : ${this.number_of_seasons}</span>
          </div>
          <div class="col-12 col-md-4">
            <span>Original Country : ${this.origin_country}</span>
          </div>
          <div class="col-12 mt-3 text-justify">
            <p>${this.overview}</p>
          </div>

        </div>`;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("detail-header", DetailHeader);
