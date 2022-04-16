import "../component/detail-breadcrumb.js";
import DataSource from '../data/data-source.js';

class TvshowItem extends HTMLElement {

    set tvshow(item) {
        this._item = item;
        this.render();
    }

    switchPage() {
        $('main').hide();
        $('.details').show();
    }

    render() {
        this.innerHTML = `
        <style>            
            .card {
                font-family: "Open Sans", 'Trebuchet MS';
                cursor: pointer;
                border: 0;
            }

            .card:hover {
                transform: scale(1.03);
            }

            .card img.card-img {
                height: 180px;
                object-fit: cover;
                border-radius: 1.2rem;
            }

            .card .card-body {
                padding: 1.25rem 0 1.25rem 0;
            }

            .card .card-body .card-title {
                font-size: 1rem;
            }

            .card .card-body .card-text {
                font-size: 0.7rem;
            }

        </style>
        <div class="col mb-4">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-anchor=".jumbotron">
                <div class="card card-tvshow" data-id="${this._item.id}">
                    <img src="https://image.tmdb.org/t/p/w500/${this._item.poster_path}" class="card-img card-img-top" alt="${this._item.name}" />
                    <div class="card-body">
                        <h5 class="card-title text-truncate">${this._item.name}</h5>
                        <p class="card-text">
                            <span class="float-left">First Air Date : ${this._item.first_air_date}</span>
                            <span class="float-right">Country : ${this._item.origin_country}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>`;

        // Sequenced Animation
        let delay = 0;
        $('[data-aos]').each(function () {
            if ($(this).is(":visible") == true) {
                delay = delay + 200;
                $(this).attr('data-aos-delay', delay);
            }
        });

        // PreLoader Element
        const loaderElement = document.querySelector("#loader-text");

        // Datasource Infromation Tvshow
        const informationTvshow = async (id) => {
            loaderElement.style.display = 'block';

            try {
                const result = await DataSource.informationTvshow(id);
                renderResult(result);
            } catch (message) {
                fallbackResult(message)
            }
        }

        // Callback Success
        const renderResult = results => {
            loaderElement.style.display = 'none';

            this.switchPage();

            // Breadcrumb
            const breadcrumbElement = document.querySelector("detail-breadcrumb");
            breadcrumbElement.currentPage = results.name;

            // Image
            $('#detailImage').attr("src", "https://image.tmdb.org/t/p/w500/"+results.backdrop_path);

            // Detail Header
            const detailHeaderElement = document.querySelector("detail-header");
            const dataHeader = {
                'name': (results.name ? results.name : 'NaN'),
                'first_air_date': (results.first_air_date ? results.first_air_date : '-'),
                'last_air_date': (results.last_air_date ? results.last_air_date : '-'),
                'vote_average': (results.vote_average ? results.vote_average : '-'),
                'number_of_episodes': (results.number_of_episodes ? results.number_of_episodes : '-'),
                'number_of_seasons': (results.number_of_seasons ? results.number_of_seasons : '-'),
                'origin_country': (results.origin_country ? results.origin_country : '-'),   
                'overview': (results.overview ? results.overview : '-'),
                'backdrop_path': (results.backdrop_path ? results.c : '-')
            }
            detailHeaderElement.update = dataHeader;

            $(window).scrollTop(0);
        };

        // Callback Failed
        const fallbackResult = message => {
            loaderElement.style.display = 'none';
            alert(message);
        };

        // Card Tvshow on Click
        const cardTvshow = this.querySelector(".card-tvshow");
        cardTvshow.addEventListener("click", function () {
            const id = this.getAttribute("data-id");
            informationTvshow(id);
        });
    }
}

customElements.define("tvshow-item", TvshowItem);
